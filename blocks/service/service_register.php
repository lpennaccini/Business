<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/service',
            'title' => __( 'Service', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => false,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/service/service.js',
            'attributes' => array(
                'image' => array(
                    'type' => 'object',
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzfHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=500&fit=crop', 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'titolo' => array(
                    'type' => 'string',
                    'default' => 'Card title'
                ),
                'testo' => array(
                    'type' => 'string',
                    'default' => 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                ),
                'btnlink' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'lblbtn' => array(
                    'type' => 'string',
                    'default' => 'Card link'
                )
            ),
            'example' => array(
'image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzfHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=500&fit=crop', 'size' => '', 'svg' => '', 'alt' => null), 'titolo' => 'Card title', 'testo' => 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', 'btnlink' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'lblbtn' => 'Card link'
            ),
            'dynamic' => false,
            'version' => '1.0'
        ) );
