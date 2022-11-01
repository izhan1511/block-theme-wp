<?php
/**
 * Plugin Name: Gutenberg Examples Inner Blocks ESNext
 * Plugin URI: https://github.com/WordPress/custom-blocks
 * Description: This is a plugin demonstrating how to use nested and inner blocks in the Gutenberg editor.
 * Version: 1.1.0
 * Author: the Gutenberg Team
 *
 * @package custom-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 */
function custom_blocks_gallery_block_register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	// Register the block by passing the location of block.json to register_block_type.
	register_block_type( __DIR__ );
}
add_action( 'init', 'custom_blocks_gallery_block_register_block' );
