import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
// import edit from './edit';
// import save from './save';

registerBlockType( 'mkaz/tsblock', {
	title: __( 'Tsblock', 'tsblock' ),
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
	edit: () => null,
	save: () => null,
} );