<?php

        PG_Blocks::register_block_type( array(
            'name' => 'cwb-biz-free/about',
            'title' => __( 'About', 'cwb_biz_free' ),
            'category' => 'cwb_biz_free',
            'supports' => array('color' => array('background' => true,'text' => false,'gradients' => false,'link' => false,),'typography' => array('fontSize' => false,),'anchor' => true,'align' => false,),
            'base_url' => get_template_directory_uri(),
            'base_path' => get_template_directory(),
            'js_file' => 'blocks/about/about.js',
            'attributes' => array(
                'titolo' => array(
                    'type' => 'string',
                    'default' => 'Column title'
                ),
                'introduzione' => array(
                    'type' => 'string',
                    'default' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
                ),
                'inverse' => array(
                    'type' => 'string',
                    'default' => ''
                ),
                'image' => array(
                    'type' => 'object',
                    'default' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE0fHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => null)
                ),
                'titolotab' => array(
                    'type' => 'string',
                    'default' => 'We Work Together To Play, Have Fun, Design And Create'
                ),
                'lbltab1' => array(
                    'type' => 'string',
                    'default' => 'Home'
                ),
                'lbltab2' => array(
                    'type' => 'string',
                    'default' => 'Profile'
                ),
                'lbltab3' => array(
                    'type' => 'string',
                    'default' => 'Contact'
                ),
                'txttab1' => array(
                    'type' => 'string',
                    'default' => 'Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.'
                ),
                'txttab2' => array(
                    'type' => 'string',
                    'default' => 'Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.'
                ),
                'txttab3' => array(
                    'type' => 'string',
                    'default' => 'Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.'
                )
            ),
            'example' => array(
'titolo' => 'Column title', 'introduzione' => 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.', 'inverse' => '', 'image' => array('id' => 0, 'url' => 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE0fHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1&q=80&w=1080', 'size' => '', 'svg' => '', 'alt' => null), 'titolotab' => 'We Work Together To Play, Have Fun, Design And Create', 'lbltab1' => 'Home', 'lbltab2' => 'Profile', 'lbltab3' => 'Contact', 'txttab1' => 'Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.', 'txttab2' => 'Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.', 'txttab3' => 'Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.'
            ),
            'dynamic' => false,
            'version' => '1.0'
        ) );
