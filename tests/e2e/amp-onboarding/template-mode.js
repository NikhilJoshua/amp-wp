/* eslint-disable jest/no-export */
/* eslint-disable jest/require-top-level-describe */

/**
 * Internal dependencies
 */
import { moveToTemplateModeScreen, clickMode, testNextButton, testPreviousButton } from './utils';

export const templateMode = () => {
	beforeEach( async () => {
		await moveToTemplateModeScreen( { technical: true } );
	} );

	test( 'should show main page elements with nothing selected', async () => {
		await page.waitForSelector( 'input[type="radio"]' );

		await expect( 'input[type="radio"]' ).countToBe( 3 );

		expect( page ).not.toMatchElement( 'input[type="radio"]:checked' );

		testNextButton( { text: 'Next', disabled: true } );
		testPreviousButton( { text: 'Previous' } );
	} );

	test( 'should allow options to be selected', async () => {
		await clickMode( 'standard' );
		expect( page ).toMatchElement( '.selectable--selected h2', { text: 'Standard' } );

		await clickMode( 'transitional' );
		expect( page ).toMatchElement( '.selectable--selected h2', { text: 'Transitional' } );

		await clickMode( 'reader' );
		expect( page ).toMatchElement( '.selectable--selected h2', { text: 'Reader' } );

		testNextButton( { text: 'Next' } );
	} );
};

export const templateModeRecommendations = () => {
	test( 'makes correct recommendations when user is technical', async () => {
		await moveToTemplateModeScreen( { technical: true } );

		await expect( '.amp-notice--info' ).countToBe( 3 );
	} );

	test( 'makes correct recommendations when user is not techncial', async () => {
		await moveToTemplateModeScreen( { technical: false } );

		await expect( '.amp-notice--info' ).countToBe( 2 );

		await expect( '.amp-notice--success' ).countToBe( 1 );
	} );
};

/* eslint-enable jest/require-top-level-describe */
/* eslint-enable jest/no-export */
