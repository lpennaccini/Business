<?php
if ( ! function_exists( 'cwb_biz_free_setup' ) ) :

function cwb_biz_free_setup() {

    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    /* Pinegrow generated Load Text Domain Begin */
    load_theme_textdomain( 'cwb_biz_free', get_template_directory() . '/languages' );
    /* Pinegrow generated Load Text Domain End */

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     */
    add_theme_support( 'title-tag' );
    
    /*
     * Enable support for Post Thumbnails on posts and pages.
     */
    add_theme_support( 'post-thumbnails' );
    //Support custom logo
    add_theme_support( 'custom-logo' );

    // Add menus.
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'cwb_biz_free' ),
        'social'  => __( 'Social Links Menu', 'cwb_biz_free' ),
    ) );

/*
     * Register custom menu locations
     */
    /* Pinegrow generated Register Menus Begin */

    /* Pinegrow generated Register Menus End */
    
/*
    * Set image sizes
     */
    /* Pinegrow generated Image sizes Begin */

    /* Pinegrow generated Image sizes End */
    
    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );

    /*
     * Enable support for Post Formats.
     */
    add_theme_support( 'post-formats', array(
        'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
    ) );

    /*
     * Enable support for Page excerpts.
     */
     add_post_type_support( 'page', 'excerpt' );
}
endif; // cwb_biz_free_setup

add_action( 'after_setup_theme', 'cwb_biz_free_setup' );


if ( ! function_exists( 'cwb_biz_free_init' ) ) :

function cwb_biz_free_init() {

    
    // Use categories and tags with attachments
    register_taxonomy_for_object_type( 'category', 'attachment' );
    register_taxonomy_for_object_type( 'post_tag', 'attachment' );

    /*
     * Register custom post types. You can also move this code to a plugin.
     */
    /* Pinegrow generated Custom Post Types Begin */

    /* Pinegrow generated Custom Post Types End */
    
    /*
     * Register custom taxonomies. You can also move this code to a plugin.
     */
    /* Pinegrow generated Taxonomies Begin */

    /* Pinegrow generated Taxonomies End */

}
endif; // cwb_biz_free_setup

add_action( 'init', 'cwb_biz_free_init' );


if ( ! function_exists( 'cwb_biz_free_custom_image_sizes_names' ) ) :

function cwb_biz_free_custom_image_sizes_names( $sizes ) {

    /*
     * Add names of custom image sizes.
     */
    /* Pinegrow generated Image Sizes Names Begin*/
    /* This code will be replaced by returning names of custom image sizes. */
    /* Pinegrow generated Image Sizes Names End */
    return $sizes;
}
add_action( 'image_size_names_choose', 'cwb_biz_free_custom_image_sizes_names' );
endif;// cwb_biz_free_custom_image_sizes_names



if ( ! function_exists( 'cwb_biz_free_widgets_init' ) ) :

function cwb_biz_free_widgets_init() {

    /*
     * Register widget areas.
     */
    /* Pinegrow generated Register Sidebars Begin */

    /* Pinegrow generated Register Sidebars End */
}
add_action( 'widgets_init', 'cwb_biz_free_widgets_init' );
endif;// cwb_biz_free_widgets_init



if ( ! function_exists( 'cwb_biz_free_customize_register' ) ) :

function cwb_biz_free_customize_register( $wp_customize ) {
    // Do stuff with $wp_customize, the WP_Customize_Manager object.

    /* Pinegrow generated Customizer Controls Begin */

    /* Pinegrow generated Customizer Controls End */

}
add_action( 'customize_register', 'cwb_biz_free_customize_register' );
endif;// cwb_biz_free_customize_register


if ( ! function_exists( 'cwb_biz_free_enqueue_scripts' ) ) :
    function cwb_biz_free_enqueue_scripts() {

        /* Pinegrow generated Enqueue Scripts Begin */

    wp_deregister_script( 'cwb_biz_free-popper' );
    wp_enqueue_script( 'cwb_biz_free-popper', get_template_directory_uri() . '/assets/js/popper.min.js', [], '1.0', true);

    wp_deregister_script( 'cwb_biz_free-bootstrap' );
    wp_enqueue_script( 'cwb_biz_free-bootstrap', get_template_directory_uri() . '/bootstrap/js/bootstrap.min.js', [], '1.0', true);

    /* Pinegrow generated Enqueue Scripts End */

        /* Pinegrow generated Enqueue Styles Begin */

    wp_deregister_style( 'cwb_biz_free-bootstrap' );
    wp_enqueue_style( 'cwb_biz_free-bootstrap', get_template_directory_uri() . '/bootstrap_theme/bootstrap.css', [], '1.0', 'all');

    wp_deregister_style( 'cwb_biz_free-style' );
    wp_enqueue_style( 'cwb_biz_free-style', get_template_directory_uri() . '/assets/css/style.css', [], '1.0', 'all');

    wp_deregister_style( 'cwb_biz_free-style-1' );
    wp_enqueue_style( 'cwb_biz_free-style-1', get_bloginfo('stylesheet_url'), [], '1.0', 'all');

    /* Pinegrow generated Enqueue Styles End */

    }
    add_action( 'wp_enqueue_scripts', 'cwb_biz_free_enqueue_scripts' );
endif;

function pgwp_sanitize_placeholder($input) { return $input; }
/*
 * Resource files included by Pinegrow.
 */
/* Pinegrow generated Include Resources Begin */
require_once "inc/custom.php";
if( !class_exists( 'PG_Helper_v2' ) ) { require_once "inc/wp_pg_helpers.php"; }
if( !class_exists( 'PG_Blocks' ) ) { require_once "inc/wp_pg_blocks_helpers.php"; }
if( !class_exists( 'PG_Smart_Walker_Nav_Menu' ) ) { require_once "inc/wp_smart_navwalker.php"; }

    /* Pinegrow generated Include Resources End */

/* Setting up theme supports options */

function cwb_biz_free_setup_theme_supports() {
    // Don't edit anything between the following comments.
    /* Pinegrow generated Theme Supports Begin */
    
//Tell WP to scope loaded editor styles to the block editor                    
add_theme_support( 'editor-styles' );
    /* Pinegrow generated Theme Supports End */
}
add_action('after_setup_theme', 'cwb_biz_free_setup_theme_supports');

/* End of setting up theme supports options */


/* Loading editor styles for blocks */

function cwb_biz_free_add_blocks_editor_styles() {
    // Add blocks editor styles. Don't edit anything between the following comments.
    /* Pinegrow generated Load Blocks Editor Styles Begin */
    add_editor_style( 'bootstrap_theme/bootstrap.css' );
    add_editor_style( 'bootstrap_theme/editor.css' );

    /* Pinegrow generated Load Blocks Editor Styles End */
}
add_action('admin_init', 'cwb_biz_free_add_blocks_editor_styles');

/* End of loading editor styles for blocks */


/* Creating Editor Blocks with Pinegrow */

function cwb_biz_free_blocks_init() {
    // Register blocks. Don't edit anything between the following comments.
    /* Pinegrow generated Register Pinegrow Blocks Begin */
    require_once 'blocks/mainmenu/mainmenu_register.php';
    require_once 'blocks/hero/hero_register.php';
    require_once 'blocks/feature/feature_register.php';
    require_once 'blocks/features/features_register.php';
    require_once 'blocks/about/about_register.php';
    require_once 'blocks/rowtxtimg/rowtxtimg_register.php';
    require_once 'blocks/rowimgtxt/rowimgtxt_register.php';
    require_once 'blocks/service/service_register.php';
    require_once 'blocks/services/services_register.php';
    require_once 'blocks/contact/contact_register.php';
    require_once 'blocks/contacts/contacts_register.php';
    require_once 'blocks/googlemap/googlemap_register.php';
    require_once 'blocks/socialicon/socialicon_register.php';
    require_once 'blocks/footer/footer_register.php';

    /* Pinegrow generated Register Pinegrow Blocks End */
}
add_action('init', 'cwb_biz_free_blocks_init');

/* End of creating Editor Blocks with Pinegrow */


/* Register Blocks Categories */

function cwb_biz_free_register_blocks_categories( $categories ) {

    // Don't edit anything between the following comments.
    /* Pinegrow generated Register Blocks Category Begin */

$categories = array_merge( $categories, array( array(
        'slug' => 'cwb_biz_free',
        'title' => __( 'CWN Biz free', 'cwb_biz_free' )
    ) ) );

    /* Pinegrow generated Register Blocks Category End */
    
    return $categories;
}
add_action( version_compare('5.8', get_bloginfo('version'), '<=' ) ? 'block_categories_all' : 'block_categories', 'cwb_biz_free_register_blocks_categories');


?>