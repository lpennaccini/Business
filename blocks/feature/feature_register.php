<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/feature',
            'title' => __( 'Feature', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => false,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => false,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/feature/feature.js',
            'attributes' => array(
                'icon' => array(
                    'type' => 'string',
                    'default' => '<svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" fill="currentColor" class="bi bi-code-slash mb-3 text-primary" viewBox="0 0 16 16">
                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                                </svg>'
                ),
                'titolo' => array(
                    'type' => 'string',
                    'default' => 'Card title'
                ),
                'testo' => array(
                    'type' => 'string',
                    'default' => 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
                )
            ),
            'example' => array(
'icon' => '<svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" fill="currentColor" class="bi bi-code-slash mb-3 text-primary" viewBox="0 0 16 16">
                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                                </svg>', 'titolo' => 'Card title', 'testo' => 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
            ),
            'dynamic' => false,
            'version' => '1.0'
        ) );
