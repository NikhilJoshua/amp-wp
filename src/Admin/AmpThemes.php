<?php
/**
 * Add new tab (AMP) in theme install screen in WordPress admin.
 *
 * @package Ampproject\Ampwp
 */

namespace AmpProject\AmpWP\Admin;

use AmpProject\AmpWP\Infrastructure\Conditional;
use AmpProject\AmpWP\Infrastructure\Delayed;
use AmpProject\AmpWP\Infrastructure\Registerable;
use AmpProject\AmpWP\Infrastructure\Service;
use WP_Screen;
use stdClass;

/**
 * Add new tab (AMP) in theme install screen in WordPress admin.
 *
 * @since 2.2
 * @internal
 */
class AmpThemes implements Service, Registerable, Conditional, Delayed {

	/**
	 * Slug for amp-compatible.
	 *
	 * @var string
	 */
	const AMP_COMPATIBLE = 'amp-compatible';

	/**
	 * Assets handle.
	 *
	 * @var string
	 */
	const ASSET_HANDLE = 'amp-theme-install';

	/**
	 * List of AMP themes.
	 *
	 * @var array
	 */
	protected $themes = [];

	/**
	 * Get the action to use for registering the service.
	 *
	 * @return string Registration action to use.
	 */
	public static function get_registration_action() {

		return 'admin_init';
	}

	/**
	 * Check whether the conditional object is currently needed.
	 *
	 * @return bool Whether the conditional object is needed.
	 */
	public static function is_needed() {

		/**
		 * Filters whether to show AMP compatible ecosystem in the admin.
		 *
		 * @since 2.2
		 *
		 * @param bool   $shown Whether to show AMP-compatible themes and plugins in the admin.
		 * @param string $type  The type of ecosystem component being shown. May be either 'themes' or 'plugins'.
		 */
		return is_admin() && apply_filters( 'amp_compatible_ecosystem_shown', true, 'themes' );
	}

	/**
	 * Get list of AMP themes.
	 *
	 * @return array List of AMP themes.
	 */
	public function get_themes() {

		if ( count( $this->themes ) === 0 ) {
			$this->themes = array_map(
				static function ( $theme ) {
					return self::normalize_theme_data( $theme );
				},
				require __DIR__ . '/../../includes/ecosystem-data/themes.php'
			);

			usort(
				$this->themes,
				static function ( $a, $b ) {
					return strcasecmp( $a['name'], $b['name'] );
				}
			);
		}

		return $this->themes;
	}

	/**
	 * Normalize theme data.
	 *
	 * @param array $theme Theme data.
	 *
	 * @return array Normalized theme data.
	 */
	public static function normalize_theme_data( $theme = [] ) {

		$default = [
			'name'           => '',
			'slug'           => '',
			'version'        => '',
			'preview_url'    => '',
			'author'         => [
				'user_nicename' => '',
				'profile'       => '',
				'avatar'        => '',
				'display_name'  => '',
				'author'        => '',
				'author_url'    => '',
			],
			'screenshot_url' => '',
			'rating'         => 0,
			'num_ratings'    => 0,
			'homepage'       => '',
			'description'    => '',
			'requires'       => '',
			'requires_php'   => '',
		];

		$theme['author'] = ( ! empty( $theme['author'] ) && is_array( $theme['author'] ) ) ? $theme['author'] : [];
		$theme['author'] = wp_parse_args( $theme['author'], $default['author'] );

		return wp_parse_args( $theme, $default );
	}

	/**
	 * Adds hooks.
	 *
	 * @return void
	 */
	public function register() {

		add_filter( 'themes_api', [ $this, 'filter_themes_api' ], 10, 3 );
		add_action( 'current_screen', [ $this, 'register_hooks' ] );
	}

	/**
	 * Register all hooks.
	 *
	 * @return void
	 */
	public function register_hooks() {

		$screen = get_current_screen();
		if ( $screen instanceof WP_Screen && in_array( $screen->id, [ 'themes', 'theme-install' ], true ) ) {
			add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		}
	}

	/**
	 * Enqueue scripts and style for install theme screen.
	 *
	 * @return void
	 */
	public function enqueue_scripts() {

		$asset_file   = AMP__DIR__ . '/assets/js/' . self::ASSET_HANDLE . '.asset.php';
		$asset        = require $asset_file;
		$dependencies = $asset['dependencies'];
		$version      = $asset['version'];

		wp_enqueue_script(
			self::ASSET_HANDLE,
			amp_get_asset_url( 'js/' . self::ASSET_HANDLE . '.js' ),
			$dependencies,
			$version,
			true
		);

		wp_enqueue_style(
			'amp-admin',
			amp_get_asset_url( 'css/amp-admin.css' ),
			[],
			AMP__VERSION
		);

		$none_wporg = [];

		$slugs = [];
		foreach ( $this->get_themes() as $theme ) {
			$slugs[] = $theme['slug'];
			if ( ! isset( $theme['wporg'] ) || true !== $theme['wporg'] ) {
				$none_wporg[] = $theme['slug'];
			}
		}

		$js_data = [
			'AMP_COMPATIBLE'    => self::AMP_COMPATIBLE,
			'AMP_THEMES'        => $slugs,
			'NONE_WPORG_THEMES' => $none_wporg,
		];

		wp_add_inline_script(
			self::ASSET_HANDLE,
			sprintf(
				'var ampThemes = %s;',
				wp_json_encode( $js_data )
			),
			'before'
		);
	}

	/**
	 * Filter the response of API call to wordpress.org for theme data.
	 *
	 * @param false|object|array $override Whether to override the WordPress.org Themes API. Default false.
	 * @param string             $action   API Action.
	 * @param array              $args     Args for themes list.
	 *
	 * @return object List of AMP compatible themes.
	 */
	public function filter_themes_api( $override, $action, $args ) {

		$args = (array) $args;
		if ( ! isset( $args['browse'] ) || self::AMP_COMPATIBLE !== $args['browse'] ) {
			return $override;
		}

		$response         = new stdClass();
		$response->themes = [];

		$args['per_page'] = ( ! empty( $args['per_page'] ) ) ? $args['per_page'] : 36;

		$themes       = $this->get_themes();
		$page         = ( ! empty( $args['page'] ) && 0 < (int) $args['page'] ) ? (int) $args['page'] : 1;
		$theme_chunks = array_chunk( $themes, $args['per_page'] );
		$themes       = ( ! empty( $theme_chunks[ $page - 1 ] ) && is_array( $theme_chunks[ $page - 1 ] ) ) ? $theme_chunks[ $page - 1 ] : [];

		if ( 'query_themes' === $action ) {
			foreach ( $themes as $i => $theme ) {
				$response->themes[ $i ] = (object) $theme;
			}
		} else {
			$response->themes = $themes;
		}

		$response->info = [
			'page'    => $page,
			'pages'   => count( $theme_chunks ),
			'results' => count( $themes ),
		];

		return $response;
	}
}
