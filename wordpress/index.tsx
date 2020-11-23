import * as React from 'react'
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { Application } from "../src/Application";
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
	edit: () => (<Application />),
	save: () => null,
} );