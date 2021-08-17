<?php
/**
 * Class AMP_Script_Sanitizer
 *
 * @since 1.0
 * @package AMP
 */

use AmpProject\Attribute;
use AmpProject\DevMode;
use AmpProject\Tag;
use AmpProject\Dom\Element;

/**
 * Class AMP_Script_Sanitizer
 *
 * @since 1.0
 * @internal
 */
class AMP_Script_Sanitizer extends AMP_Base_Sanitizer {

	/**
	 * Error code for custom inline JS script tag.
	 *
	 * @var string
	 */
	const CUSTOM_INLINE_SCRIPT = 'CUSTOM_INLINE_SCRIPT';

	/**
	 * Error code for custom inline JSON script tag.
	 *
	 * @var string
	 */
	const CUSTOM_JSON_SCRIPT = 'CUSTOM_JSON_SCRIPT';

	/**
	 * Error code for custom external JS script tag.
	 *
	 * @var string
	 */
	const CUSTOM_EXTERNAL_SCRIPT = 'CUSTOM_EXTERNAL_SCRIPT';

	/**
	 * Error code for JS event handler attribute.
	 *
	 * @var string
	 */
	const CUSTOM_EVENT_HANDLER_ATTR = 'CUSTOM_EVENT_HANDLER_ATTR';

	/**
	 * Attribute which if present on a `noscript` element will prevent it from being unwrapped.
	 *
	 * @var string
	 */
	const NO_UNWRAP_ATTR = 'data-amp-no-unwrap';

	/**
	 * Default args.
	 *
	 * @var array
	 */
	protected $DEFAULT_ARGS = [
		'unwrap_noscripts'    => true,
		'sanitize_js_scripts' => false,
	];

	/**
	 * Array of flags used to control sanitization.
	 *
	 * @var array {
	 *      @type bool $sanitize_js_scripts Whether to sanitize JS scripts (and not defer for final sanitizer).
	 *      @type bool $unwrap_noscripts    Whether to unwrap noscript elements.
	 * }
	 */
	protected $args;

	/**
	 * Number of scripts which were kept.
	 *
	 * This is used to determine whether noscript elements should be unwrapped.
	 *
	 * @var int
	 */
	protected $kept_script_count = 0;

	/**
	 * Sanitize script and noscript elements.
	 *
	 * Eventually this should also handle script elements, if there is a known AMP equivalent.
	 * If nothing is done with script elements, the validating sanitizer will deal with them ultimately.
	 *
	 * @todo Eventually this try to automatically convert script tags to AMP when they are recognized. See <https://github.com/ampproject/amp-wp/issues/1032>.
	 * @todo When a script has an adjacent noscript, consider removing the script here to prevent validation error later. See <https://github.com/ampproject/amp-wp/issues/1213>.
	 *
	 * @since 1.0
	 */
	public function sanitize() {
		if ( ! empty( $this->args['sanitize_js_scripts'] ) ) {
			$this->sanitize_js_script_elements();
		}

		// If custom scripts were kept (after sanitize_js_script_elements ran) it's important that noscripts not be
		// unwrapped or else this could result in the JS and no-JS fallback experiences both being present on the page.
		// So unwrapping is only done no custom scripts were retained (and the sanitizer arg opts-in to unwrap).
		if ( 0 === $this->kept_script_count && ! empty( $this->args['unwrap_noscripts'] ) ) {
			$this->unwrap_noscript_elements();
		}
	}

	/**
	 * Unwrap noscript elements so their contents become the AMP version by default.
	 */
	protected function unwrap_noscript_elements() {
		$noscripts = $this->dom->getElementsByTagName( Tag::NOSCRIPT );

		for ( $i = $noscripts->length - 1; $i >= 0; $i-- ) {
			/** @var Element $noscript */
			$noscript = $noscripts->item( $i );

			// Skip AMP boilerplate.
			if ( $noscript->firstChild instanceof Element && $noscript->firstChild->hasAttribute( Attribute::AMP_BOILERPLATE ) ) {
				continue;
			}

			// Skip unwrapping <noscript> elements that have an opt-out data attribute present.
			if ( $noscript->hasAttribute( self::NO_UNWRAP_ATTR ) ) {
				continue;
			}

			/*
			 * Skip noscript elements inside of amp-img or other AMP components for fallbacks.
			 * See \AMP_Img_Sanitizer::adjust_and_replace_node(). Also skip if the element has dev mode.
			 */
			if ( 'amp-' === substr( $noscript->parentNode->nodeName, 0, 4 ) || DevMode::hasExemptionForNode( $noscript ) ) {
				continue;
			}

			$is_inside_head_el = ( $noscript->parentNode && Tag::HEAD === $noscript->parentNode->nodeName );
			$must_move_to_body = false;

			$fragment = $this->dom->createDocumentFragment();
			$fragment->appendChild( $this->dom->createComment( 'noscript' ) );
			while ( $noscript->firstChild ) {
				if ( $is_inside_head_el && ! $must_move_to_body ) {
					$must_move_to_body = ! $this->dom->isValidHeadNode( $noscript->firstChild );
				}
				$fragment->appendChild( $noscript->firstChild );
			}
			$fragment->appendChild( $this->dom->createComment( '/noscript' ) );

			if ( $must_move_to_body ) {
				$this->dom->body->insertBefore( $fragment, $this->dom->body->firstChild );
				$noscript->parentNode->removeChild( $noscript );
			} else {
				$noscript->parentNode->replaceChild( $fragment, $noscript );
			}

			$this->did_convert_elements = true;
		}
	}

	/**
	 * Sanitize JavaScript script elements.
	 *
	 * This runs explicitly in the script sanitizer before the final validating sanitizer (tag-and-attribute) so that
	 * the style sanitizer will be able to know whether there are custom scripts in the page, and thus whether tree
	 * shaking can be performed.
	 */
	protected function sanitize_js_script_elements() {
		$scripts = $this->dom->xpath->query( '//script[ not( @type ) or @type != "application/ld+json" ]' );

		/** @var Element $script */
		foreach ( $scripts as $script ) {
			if ( DevMode::hasExemptionForNode( $script ) ) {
				continue;
			}

			if ( $script->hasAttribute( Attribute::SRC ) ) {
				// Skip external AMP CDN scripts.
				if ( 0 === strpos( $script->getAttribute( Attribute::SRC ), 'https://cdn.ampproject.org/' ) ) {
					continue;
				}

				$removed = $this->remove_invalid_child(
					$script,
					[ 'code' => self::CUSTOM_EXTERNAL_SCRIPT ]
				);
				if ( ! $removed ) {
					$script->setAttribute( DevMode::DEV_MODE_ATTRIBUTE, '' );
					$this->dom->documentElement->setAttribute( DevMode::DEV_MODE_ATTRIBUTE, '' );
					$this->kept_script_count++;
				}
			} else {
				// Skip inline scripts used by AMP.
				if ( $script->hasAttribute( Attribute::AMP_ONERROR ) ) {
					continue;
				}

				if ( $script->hasAttribute( Attribute::TYPE ) && false !== strpos( $script->getAttribute( Attribute::TYPE ), 'json' ) ) {
					$code = self::CUSTOM_JSON_SCRIPT;
				} else {
					$code = self::CUSTOM_INLINE_SCRIPT;
				}

				$removed = $this->remove_invalid_child(
					$script,
					[ 'code' => $code ]
				);
				if ( ! $removed ) {
					$script->setAttribute( DevMode::DEV_MODE_ATTRIBUTE, '' );
					$this->dom->documentElement->setAttribute( DevMode::DEV_MODE_ATTRIBUTE, '' );
					$this->kept_script_count++;
				}
			}
		}

		// @todo Also need to check for inline script attributes.
	}
}
