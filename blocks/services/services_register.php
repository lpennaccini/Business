<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/services',
            'title' => __( 'Servizi', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => true,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/services/services.js',
            'attributes' => array(
                'titolo' => array(
                    'type' => 'string',
                    'default' => 'Column title'
                ),
                'testo' => array(
                    'type' => 'string',
                    'default' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
                )
            ),
            'example' => array(
'titolo' => 'Column title', 'testo' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            ),
            'dynamic' => false,
            'has_inner_blocks' => true,
            'version' => '1.0'
        ) );
