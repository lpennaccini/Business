<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/footer',
            'title' => __( 'Footer', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => true,'text' => true,'gradients' => false,'link' => true,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/footer/footer.js',
            'attributes' => array(
                'brand' => array(
                    'type' => 'string',
                    'default' => 'Company'
                ),
                'testo' => array(
                    'type' => 'string',
                    'default' => 'Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.'
                ),
                'contact' => array(
                    'type' => 'string',
                    'default' => 'Get Social'
                ),
                'credit' => array(
                    'type' => 'string',
                    'default' => '&copy; 2022. All Rights Reserved - Luigi Pennaccini'
                ),
                'lnkprivacy' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'lblprivacy' => array(
                    'type' => 'string',
                    'default' => 'Privacy Policy'
                ),
                'lnkcookie' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'lblcookie' => array(
                    'type' => 'string',
                    'default' => 'Cookie policy'
                )
            ),
            'example' => array(
'brand' => 'Company', 'testo' => 'Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.', 'contact' => 'Get Social', 'credit' => '&copy; 2022. All Rights Reserved - Luigi Pennaccini', 'lnkprivacy' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'lblprivacy' => 'Privacy Policy', 'lnkcookie' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'lblcookie' => 'Cookie policy'
            ),
            'dynamic' => false,
            'has_inner_blocks' => true,
            'version' => '1.0'
        ) );
