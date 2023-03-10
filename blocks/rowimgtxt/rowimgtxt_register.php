<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/rowimgtxt',
            'title' => __( 'Riga immagine testo', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/rowimgtxt/rowimgtxt.js',
            'attributes' => array(
                'titolo' => array(
                    'type' => 'string',
                    'default' => 'Seasonal sale with 70% off'
                ),
                'testo' => array(
                    'type' => 'string',
                    'default' => 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
                ),
                'btnlink' => array(
                    'type' => 'object',
                    'default' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => '')
                ),
                'lblbtn' => array(
                    'type' => 'string',
                    'default' => 'See the Collection'
                ),
                'image' => array(
                    'type' => 'object',
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE3fHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => '...')
                )
            ),
            'example' => array(
'titolo' => 'Seasonal sale with 70% off', 'testo' => 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.', 'btnlink' => array('post_id' => 0, 'url' => '#', 'post_type' => '', 'title' => ''), 'lblbtn' => 'See the Collection', 'image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE3fHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => '...')
            ),
            'dynamic' => false,
            'version' => '1.0'
        ) );
