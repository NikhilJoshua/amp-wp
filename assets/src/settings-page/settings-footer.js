/**
 * WordPress dependencies
 */
import { Button } from '@wordpress/components';
import { useContext, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Options } from '../components/options-context-provider';
import { ReaderThemes } from '../components/reader-themes-context-provider';

/**
 * The bottom section of the settings page.
 */
export function SettingsFooter() {
	const { didSaveOptions, editedOptions, saveOptions, savingOptions } = useContext( Options );
	const { downloadingTheme } = useContext( ReaderThemes );

	const { reader_theme: readerTheme, theme_support: themeSupport } = editedOptions;

	/**
	 * Submits the PHP-generated form on the page after options have saved via REST.
	 * @todo Eliminate this once the Plugin Suppression logic is moved to use the REST API.
	 */
	useEffect( () => {
		if ( true === didSaveOptions && ! downloadingTheme ) {
			document.querySelector( 'form#amp-settings' ).submit();
		}
	}, [ didSaveOptions, downloadingTheme ] );

	const disabled = ! themeSupport ||
		savingOptions ||
		didSaveOptions ||
		downloadingTheme ||
		( 'reader' === themeSupport && ! readerTheme );

	return (
		<section className="settings-footer">
			<Button isPrimary onClick={ saveOptions } disabled={ disabled }>
				{ __( 'Save changes', 'amp' ) }
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
					<path d="M43.16 10.18c-0.881-0.881-2.322-0.881-3.203 0s-0.881 2.322 0 3.203l16.335 16.335h-54.051c-1.281 0-2.242 1.041-2.242 2.242 0 1.281 0.961 2.322 2.242 2.322h54.051l-16.415 16.335c-0.881 0.881-0.881 2.322 0 3.203s2.322 0.881 3.203 0l20.259-20.259c0.881-0.881 0.881-2.322 0-3.203l-20.179-20.179z" />
				</svg>
			</Button>
		</section>
	);
}
