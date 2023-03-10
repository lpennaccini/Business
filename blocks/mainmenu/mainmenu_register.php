<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/mainmenu',
            'title' => __( 'Menu', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'render_template' => 'blocks/mainmenu/mainmenu.php',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/mainmenu/mainmenu.js',
            'attributes' => array(
                'btnmenulink' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#contact', 'post_type' => '', 'title' => '')
                ),
                'btnmenulabel' => array(
                    'type' => 'string',
                    'default' => 'Contact now'
                ),
                'btnmenuvisible' => array(
                    'type' => 'string',
                    'default' => ''
                )
            ),
            'example' => array(
'btnmenulink' => array('post_id' => 0, 'url' => '#contact', 'post_type' => '', 'title' => ''), 'btnmenulabel' => 'Contact now', 'btnmenuvisible' => ''
            ),
            'dynamic' => true,
            'version' => '1.0'
        ) );
