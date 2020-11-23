<?php

/**
 * Plugin Name: Logo Maker WordPress Plugin
 * Plugin URI: https://github.com/WordPress/gutenberg-examples
 * Description: Logo Maker as a plugin for WordPress
 * Author: Soare Robert Daniel
 *
 * @package gutenberg-examples
 */

defined('ABSPATH') || exit;

function logo_maker_init()
{
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/plugin_build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "plugins/qr-code-generator-block" block first.'
		);
	}
	$index_js     = 'plugin_build/index.js';
	$script_asset = require($script_asset_path);
	wp_register_script(
		'logo-maker-editor-script',
		plugins_url($index_js, __FILE__),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	register_block_type('themesisle/logo-maker-plugin', array(
		'editor_script' => 'logo-maker-editor-script',
	));
}
add_action('init', 'logo_maker_init');
