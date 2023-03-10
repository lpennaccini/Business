<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/hero',
            'title' => __( 'Hero', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/hero/hero.js',
            'attributes' => array(
                'image' => array(
                    'type' => 'object',
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzMHx8YnVzaW5lc3N8ZW58MHx8fHwxNjY5MTM4OTIw&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1920&h=800&fit=crop', 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'overlay' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'titolo' => array(
                    'type' => 'string',
                    'default' => 'Responsive left-aligned hero with image'
                ),
                'testo' => array(
                    'type' => 'string',
                    'default' => 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.'
                ),
                'btn1link' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'btn1txt' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'btn1visible' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'btn2link' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'btn2txt' => array(
                    'type' => 'string',
                    'default' => 'Default'
                ),
                'btn2visible' => array(
                    'type' => 'string',
                    'default' => ''
                )
            ),
            'example' => array(
'image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzMHx8YnVzaW5lc3N8ZW58MHx8fHwxNjY5MTM4OTIw&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1920&h=800&fit=crop', 'size' => '', 'svg' => '', 'alt' => null), 'overlay' => '', 'titolo' => 'Responsive left-aligned hero with image', 'testo' => 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.', 'btn1link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'btn1txt' => '', 'btn1visible' => '', 'btn2link' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'btn2txt' => 'Default', 'btn2visible' => ''
            ),
            'dynamic' => false,
            'version' => '1.0'
        ) );
