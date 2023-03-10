<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/googlemap',
            'title' => __( 'Google Map', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/googlemap/googlemap.js',
            'attributes' => array(
                'map' => array(
                    'type' => 'string',
                    'default' => ''
                )
            ),
            'example' => array(
'map' => ''
            ),
            'dynamic' => false,
            'version' => '1.0'
        ) );
