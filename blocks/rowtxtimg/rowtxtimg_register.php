<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/rowtxtimg',
            'title' => __( 'Riga testo immagine', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => true,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/rowtxtimg/rowtxtimg.js',
            'attributes' => array(
                'inverse' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'titolo' => array(
                    'type' => 'string',
                    'default' => 'Seasonal sale with 70% off'
                ),
                'testo' => array(
                    'type' => 'string',
                    'default' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                ),
                'btnlink' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'lblbtn' => array(
                    'type' => 'string',
                    'default' => 'See the Collection'
                ),
                'btnvisibile' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'image' => array(
                    'type' => 'object',
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDZ8fGJ1c2luZXNzfGVufDB8fHx8MTY2MzQ5MjQxNQ&ixlib=rb-1.2.1&q=80&w=400', 'size' => '', 'svg' => '', 'alt' => null)
                )
            ),
            'example' => array(
'inverse' => '', 'titolo' => 'Seasonal sale with 70% off', 'testo' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'btnlink' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'lblbtn' => 'See the Collection', 'btnvisibile' => '', 'image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDZ8fGJ1c2luZXNzfGVufDB8fHx8MTY2MzQ5MjQxNQ&ixlib=rb-1.2.1&q=80&w=400', 'size' => '', 'svg' => '', 'alt' => null)
            ),
            'dynamic' => false,
            'version' => '1.0'
        ) );
