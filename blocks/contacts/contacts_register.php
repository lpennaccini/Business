<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/contacts',
            'title' => __( 'Contatti', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => true,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/contacts/contacts.js',
            'attributes' => array(
                'titolo' => array(
                    'type' => 'string',
                    'default' => 'Column title'
                )
            ),
            'example' => array(
'titolo' => 'Column title'
            ),
            'dynamic' => false,
            'has_inner_blocks' => true,
            'version' => '1.0'
        ) );
