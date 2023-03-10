<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/socialicon',
            'title' => __( 'Icone social', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => false,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/socialicon/socialicon.js',
            'attributes' => array(
                'lnksocial' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'icon' => array(
                    'type' => 'string',
                    'default' => '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="text-light"> 
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/> 
                                </svg>'
                )
            ),
            'example' => array(
'lnksocial' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'icon' => '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="text-light"> 
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/> 
                                </svg>'
            ),
            'dynamic' => false,
            'version' => '1.0'
        ) );
