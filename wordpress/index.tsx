import * as React from "react"
import { registerBlockType } from "@wordpress/blocks"
import { __ } from "@wordpress/i18n"
/**
 * Internal dependencies
 */
// import edit from './edit';
// import save from './save';

registerBlockType("themeisle/logo-maker", {
    title: __("Logo Maker"),
    description: __("Put the logo maker on the site."),
    category: "widgets",
    icon: "smiley",
    attributes: {},
    edit: () => (
        <p>
            Logo Maker Placeholder. Please make this page empty or the site might not desplay
            correctly.
        </p>
    ),
    save: () => <div id="themeisle-logo-maker-root" />,
})
