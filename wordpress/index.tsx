import * as React from 'react'
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
/**
 * Internal dependencies
 */
// import edit from './edit';
// import save from './save';

registerBlockType( 'themeisle/logo-maker', {
	title: __( 'Logo Maker' ),
	description: __(
		'An example typescript block.',
		'tsblock'
	),
	category: 'widgets',
	icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {},
	edit: () => (<p>Logo Maker Placeholder. Please make this page an empty or the site might not desplay correctly.</p>),
	save: () => (<div id="themeisle-logo-maker-root" />),
} );