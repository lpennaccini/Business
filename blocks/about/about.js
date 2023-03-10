
( function ( blocks, element, blockEditor ) {
    const el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = PgServerSideRender,
        InspectorControls = blockEditor.InspectorControls,
        useBlockProps = blockEditor.useBlockProps;
        
    const {__} = wp.i18n;
    const {ColorPicker, TextControl, ToggleControl, SelectControl, Panel, PanelBody, Disabled, TextareaControl, BaseControl} = wp.components;
    const {useSelect} = wp.data;
    const {RawHTML, Fragment} = element;
   
    const {InnerBlocks, URLInputButton, RichText} = wp.blockEditor;
    const useInnerBlocksProps = blockEditor.useInnerBlocksProps || blockEditor.__experimentalUseInnerBlocksProps;
    
    const propOrDefault = function(val, prop, field) {
        if(block.attributes[prop] && (val === null || val === '')) {
            return field ? block.attributes[prop].default[field] : block.attributes[prop].default;
        }
        return val;
    }
    
    const block = registerBlockType( 'cwb-biz-free/about', {
        apiVersion: 2,
        title: 'About',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: true,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
            titolo: {
                type: 'string',
                default: `Column title`,
            },
            introduzione: {
                type: 'string',
                default: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
            },
            inverse: {
                type: 'string',
                default: '',
            },
            image: {
                type: 'object',
                default: {id: 0, url: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE0fHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1&q=80&w=1080', size: '', svg: '', alt: null},
            },
            titolotab: {
                type: 'string',
                default: `We Work Together To Play, Have Fun, Design And Create`,
            },
            lbltab1: {
                type: 'string',
                default: `Home`,
            },
            lbltab2: {
                type: 'string',
                default: `Profile`,
            },
            lbltab3: {
                type: 'string',
                default: `Contact`,
            },
            txttab1: {
                type: 'string',
                default: `Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.`,
            },
            txttab2: {
                type: 'string',
                default: `Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.`,
            },
            txttab3: {
                type: 'string',
                default: `Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.`,
            }
        },
        example: { attributes: { titolo: `Column title`, introduzione: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.`, inverse: '', image: {id: 0, url: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE0fHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1&q=80&w=1080', size: '', svg: '', alt: null}, titolotab: `We Work Together To Play, Have Fun, Design And Create`, lbltab1: `Home`, lbltab2: `Profile`, lbltab3: `Contact`, txttab1: `Consequat occaecat ullamco amet non eiusmod nostrud dolore irure incididunt est duis anim sunt officia. Fugiat velit proident aliquip nisi incididunt nostrud exercitation proident est nisi. Irure magna elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure Lorem incididunt nostrud.`, txttab2: `Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.`, txttab3: `Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'pt-5' });
            const setAttributes = props.setAttributes; 
            
            props.image = useSelect(function( select ) {
                return {
                    image: props.attributes.image.id ? select('core').getMedia(props.attributes.image.id) : undefined
                };
            }, [props.attributes.image] ).image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container pb-4 pt-4' }, [' ', ' ', el('div', { className: 'row' }, [' ', el('div', { className: 'col-md-12 text-center' }, [' ', el(RichText, { tagName: 'h2', className: 'fw-normal h1', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el(RichText, { tagName: 'p', className: 'mb-5', value: propOrDefault( props.attributes.introduzione, 'introduzione' ), onChange: function(val) { setAttributes( {introduzione: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), ' ']), ' ', el('div', { className: 'row' }, [' ', ' ', el('div', { className: 'col-lg-6 py-3 ' + propOrDefault( props.attributes.inverse, 'inverse' ) }, [' ', ' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'img-fluid shadow' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'img-fluid shadow ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ) }), ' ', ' ']), ' ', el('div', { className: 'col-lg-6 py-3' }, [' ', ' ', el(RichText, { tagName: 'h3', className: 'fw-light h4 mb-1', value: propOrDefault( props.attributes.titolotab, 'titolotab' ), onChange: function(val) { setAttributes( {titolotab: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', {}, [' ', el('ul', { className: 'mb-3 nav nav-fill nav-justified nav-tabs', id: 'pills-tab', role: 'tablist' }, [' ', el('li', { className: 'nav-item', role: 'presentation' }, [' ', el(RichText, { tagName: 'a', className: 'active nav-link', id: 'pills-home-tab', 'data-bs-toggle': 'pill', href: '#pills-home', role: 'tab', 'aria-controls': 'pills-home', 'aria-selected': 'true', value: propOrDefault( props.attributes.lbltab1, 'lbltab1' ), onChange: function(val) { setAttributes( {lbltab1: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('li', { className: 'nav-item', role: 'presentation' }, [' ', el(RichText, { tagName: 'a', className: 'nav-link', id: 'pills-profile-tab', 'data-bs-toggle': 'pill', href: '#pills-profile', role: 'tab', 'aria-controls': 'pills-profile', 'aria-selected': 'false', value: propOrDefault( props.attributes.lbltab2, 'lbltab2' ), onChange: function(val) { setAttributes( {lbltab2: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('li', { className: 'nav-item', role: 'presentation' }, [' ', el(RichText, { tagName: 'a', className: 'nav-link', id: 'pills-contact-tab', 'data-bs-toggle': 'pill', href: '#pills-contact', role: 'tab', 'aria-controls': 'pills-contact', 'aria-selected': 'false', value: propOrDefault( props.attributes.lbltab3, 'lbltab3' ), onChange: function(val) { setAttributes( {lbltab3: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ', el('div', { className: 'tab-content', id: 'pills-tabContent' }, [' ', el('div', { className: 'tab-pane fade show active', id: 'pills-home', role: 'tabpanel', 'aria-labelledby': 'pills-home-tab' }, [' ', el(RichText, { tagName: 'p', value: propOrDefault( props.attributes.txttab1, 'txttab1' ), onChange: function(val) { setAttributes( {txttab1: val }) } }), ' ']), ' ', el('div', { className: 'tab-pane fade', id: 'pills-profile', role: 'tabpanel', 'aria-labelledby': 'pills-profile-tab' }, [' ', el(RichText, { tagName: 'p', value: propOrDefault( props.attributes.txttab2, 'txttab2' ), onChange: function(val) { setAttributes( {txttab2: val }) } }), ' ']), ' ', el('div', { className: 'tab-pane fade', id: 'pills-contact', role: 'tabpanel', 'aria-labelledby': 'pills-contact-tab' }, [' ', el(RichText, { tagName: 'p', value: propOrDefault( props.attributes.txttab3, 'txttab3' ), onChange: function(val) { setAttributes( {txttab3: val }) } }), ' ']), ' ']), ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('image', setAttributes, props, 'full', false, 'Immagine', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.titolo,
                                        help: __( '' ),
                                        label: __( 'Titolo' ),
                                        onChange: function(val) { setAttributes({titolo: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.introduzione,
                                        help: __( '' ),
                                        label: __( 'Introduzione' ),
                                        onChange: function(val) { setAttributes({introduzione: val}) },
                                        type: 'text'
                                    }),
                                    el(ToggleControl, {
                                        checked: props.attributes.inverse === 'order-md-1',
                                        label: __( 'Inverti colonne' ),
                                        onChange: function(val) { setAttributes({inverse: val ? 'order-md-1' : null}) },
                                        help: __( '' ),
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.titolotab,
                                        help: __( '' ),
                                        label: __( 'Titolo schede' ),
                                        onChange: function(val) { setAttributes({titolotab: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.lbltab1,
                                        help: __( '' ),
                                        label: __( 'Etichetta tab 1' ),
                                        onChange: function(val) { setAttributes({lbltab1: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.lbltab2,
                                        help: __( '' ),
                                        label: __( 'Etichetta tab 2' ),
                                        onChange: function(val) { setAttributes({lbltab2: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.lbltab3,
                                        help: __( '' ),
                                        label: __( 'Etichetta tab 3' ),
                                        onChange: function(val) { setAttributes({lbltab3: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Testo scheda 1' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.txttab1,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({txttab1: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Testo scheda 2' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.txttab2,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({txttab2: val}) },
                                        })
                                    ]),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Testo scheda 3' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.txttab3,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({txttab3: val}) },
                                        })
                                    ]),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'pt-5' });
            return el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container pb-4 pt-4' }, [' ', ' ', el('div', { className: 'row' }, [' ', el('div', { className: 'col-md-12 text-center' }, [' ', el(RichText.Content, { tagName: 'h2', className: 'fw-normal h1', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', ' ', el(RichText.Content, { tagName: 'p', className: 'mb-5', value: propOrDefault( props.attributes.introduzione, 'introduzione' ) }), ' ', ' ']), ' ']), ' ', el('div', { className: 'row' }, [' ', ' ', el('div', { className: 'col-lg-6 py-3 ' + propOrDefault( props.attributes.inverse, 'inverse' ) }, [' ', ' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'img-fluid shadow' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'img-fluid shadow ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ) }), ' ', ' ']), ' ', el('div', { className: 'col-lg-6 py-3' }, [' ', ' ', el(RichText.Content, { tagName: 'h3', className: 'fw-light h4 mb-1', value: propOrDefault( props.attributes.titolotab, 'titolotab' ) }), ' ', el('div', {}, [' ', el('ul', { className: 'mb-3 nav nav-fill nav-justified nav-tabs', id: 'pills-tab', role: 'tablist' }, [' ', el('li', { className: 'nav-item', role: 'presentation' }, [' ', el(RichText.Content, { tagName: 'a', className: 'active nav-link', id: 'pills-home-tab', 'data-bs-toggle': 'pill', href: '#pills-home', role: 'tab', 'aria-controls': 'pills-home', 'aria-selected': 'true', value: propOrDefault( props.attributes.lbltab1, 'lbltab1' ) }), ' ']), ' ', el('li', { className: 'nav-item', role: 'presentation' }, [' ', el(RichText.Content, { tagName: 'a', className: 'nav-link', id: 'pills-profile-tab', 'data-bs-toggle': 'pill', href: '#pills-profile', role: 'tab', 'aria-controls': 'pills-profile', 'aria-selected': 'false', value: propOrDefault( props.attributes.lbltab2, 'lbltab2' ) }), ' ']), ' ', el('li', { className: 'nav-item', role: 'presentation' }, [' ', el(RichText.Content, { tagName: 'a', className: 'nav-link', id: 'pills-contact-tab', 'data-bs-toggle': 'pill', href: '#pills-contact', role: 'tab', 'aria-controls': 'pills-contact', 'aria-selected': 'false', value: propOrDefault( props.attributes.lbltab3, 'lbltab3' ) }), ' ']), ' ']), ' ', el('div', { className: 'tab-content', id: 'pills-tabContent' }, [' ', el('div', { className: 'tab-pane fade show active', id: 'pills-home', role: 'tabpanel', 'aria-labelledby': 'pills-home-tab' }, [' ', el(RichText.Content, { tagName: 'p', value: propOrDefault( props.attributes.txttab1, 'txttab1' ) }), ' ']), ' ', el('div', { className: 'tab-pane fade', id: 'pills-profile', role: 'tabpanel', 'aria-labelledby': 'pills-profile-tab' }, [' ', el(RichText.Content, { tagName: 'p', value: propOrDefault( props.attributes.txttab2, 'txttab2' ) }), ' ']), ' ', el('div', { className: 'tab-pane fade', id: 'pills-contact', role: 'tabpanel', 'aria-labelledby': 'pills-contact-tab' }, [' ', el(RichText.Content, { tagName: 'p', value: propOrDefault( props.attributes.txttab3, 'txttab3' ) }), ' ']), ' ']), ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
