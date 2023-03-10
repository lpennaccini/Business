
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
    
    const block = registerBlockType( 'cwb-biz-free/hero', {
        apiVersion: 2,
        title: 'Hero',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
            image: {
                type: 'object',
                default: {id: 0, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzMHx8YnVzaW5lc3N8ZW58MHx8fHwxNjY5MTM4OTIw&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1920&h=800&fit=crop', size: '', svg: '', alt: null},
            },
            overlay: {
                type: 'string',
                default: '',
            },
            titolo: {
                type: 'string',
                default: `Responsive left-aligned hero with image`,
            },
            testo: {
                type: 'string',
                default: `Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.`,
            },
            btn1link: {
                type: 'object',
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            btn1txt: {
                type: 'string',
                default: '',
            },
            btn1visible: {
                type: 'string',
                default: '',
            },
            btn2link: {
                type: 'object',
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            btn2txt: {
                type: 'string',
                default: `Default`,
            },
            btn2visible: {
                type: 'string',
                default: '',
            }
        },
        example: { attributes: { image: {id: 0, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzMHx8YnVzaW5lc3N8ZW58MHx8fHwxNjY5MTM4OTIw&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1920&h=800&fit=crop', size: '', svg: '', alt: null}, overlay: '', titolo: `Responsive left-aligned hero with image`, testo: `Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.`, btn1link: {post_id: 0, url: '#', title: '', 'post_type': null}, btn1txt: '', btn1visible: '', btn2link: {post_id: 0, url: '#', title: '', 'post_type': null}, btn2txt: `Default`, btn2visible: '' } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'align-items-center d-flex hero position-relative', style: { backgroundImage: propOrDefault( props.attributes.image.url, 'image', 'url' ) ? ('url(' + propOrDefault( props.attributes.image.url, 'image', 'url' ) + ')') : null } });
            const setAttributes = props.setAttributes; 
            
            props.image = useSelect(function( select ) {
                return {
                    image: props.attributes.image.id ? select('core').getMedia(props.attributes.image.id) : undefined
                };
            }, [props.attributes.image] ).image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'bg-overlay ' + propOrDefault( props.attributes.overlay, 'overlay' ) }), ' ', el('div', { className: 'col-xxl-8 container px-4 py-5' }, [' ', el('div', { className: 'align-items-center row' }, [' ', el('div', { style: { zIndex: '10' }, className: 'col-md-8' }, [' ', el(RichText, { tagName: 'h1', className: 'display-5 fw-bold lh-1 mb-3 text-white', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'lead text-white', value: propOrDefault( props.attributes.testo, 'testo' ), onChange: function(val) { setAttributes( {testo: val }) } }), ' ', el('div', { className: 'd-grid gap-2 d-md-flex justify-content-md-start' }, [el('a', { href: propOrDefault( props.attributes.btn1link.url, 'btn1link', 'url' ), className: 'btn btn-primary me-md-2 px-4 ' + propOrDefault( props.attributes.btn1visible, 'btn1visible' ), onClick: function(e) { e.preventDefault(); } }, 'Primary'), el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.btn2link.url, 'btn2link', 'url' ), className: 'btn btn-outline-light px-4 ' + propOrDefault( props.attributes.btn2visible, 'btn2visible' ), onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.btn2txt, 'btn2txt' ), onChange: function(val) { setAttributes( {btn2txt: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ']), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('image', setAttributes, props, 'full', false, 'Immagine di sfondo', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(ToggleControl, {
                                        checked: props.attributes.overlay === 'd-none',
                                        label: __( 'Nascondi Overlay' ),
                                        onChange: function(val) { setAttributes({overlay: val ? 'd-none' : null}) },
                                        help: __( '' ),
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.titolo,
                                        help: __( '' ),
                                        label: __( 'Titolo' ),
                                        onChange: function(val) { setAttributes({titolo: val}) },
                                        type: 'text'
                                    }),
                                    el(BaseControl, {
                                        help: __( '' ),
                                        label: __( 'Testo' ),
                                    }, [
                                        el(RichText, {
                                            value: props.attributes.testo,
                                            style: {
                                                    border: '1px solid black',
                                                    padding: '6px 8px',
                                                    minHeight: '80px',
                                                    border: '1px solid rgb(117, 117, 117)',
                                                    fontSize: '13px',
                                                    lineHeight: 'normal'
                                                },
                                            onChange: function(val) { setAttributes({testo: val}) },
                                        })
                                    ]),
                                    pgUrlControl('btn1link', setAttributes, props, 'Link pulsante 1', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.btn1txt,
                                        help: __( '' ),
                                        label: __( 'Etichetta pulsante 1' ),
                                        onChange: function(val) { setAttributes({btn1txt: val}) },
                                        type: 'text'
                                    }),
                                    el(ToggleControl, {
                                        checked: props.attributes.btn1visible === 'd-none',
                                        label: __( 'Nascondi pulsante 1' ),
                                        onChange: function(val) { setAttributes({btn1visible: val ? 'd-none' : null}) },
                                        help: __( '' ),
                                    }),
                                    pgUrlControl('btn2link', setAttributes, props, 'Link pulsante 2', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.btn2txt,
                                        help: __( '' ),
                                        label: __( 'Etichetta pulsante 2' ),
                                        onChange: function(val) { setAttributes({btn2txt: val}) },
                                        type: 'text'
                                    }),
                                    el(ToggleControl, {
                                        checked: props.attributes.btn2visible === 'd-none',
                                        label: __( 'Nascondi pulsante 2' ),
                                        onChange: function(val) { setAttributes({btn2visible: val ? 'd-none' : null}) },
                                        help: __( '' ),
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'align-items-center d-flex hero position-relative', style: { backgroundImage: propOrDefault( props.attributes.image.url, 'image', 'url' ) ? ('url(' + propOrDefault( props.attributes.image.url, 'image', 'url' ) + ')') : null } });
            return el('section', { ...blockProps }, [' ', el('div', { className: 'bg-overlay ' + propOrDefault( props.attributes.overlay, 'overlay' ) }), ' ', el('div', { className: 'col-xxl-8 container px-4 py-5' }, [' ', el('div', { className: 'align-items-center row' }, [' ', el('div', { style: { zIndex: '10' }, className: 'col-md-8' }, [' ', el(RichText.Content, { tagName: 'h1', className: 'display-5 fw-bold lh-1 mb-3 text-white', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', el(RichText.Content, { tagName: 'p', className: 'lead text-white', value: propOrDefault( props.attributes.testo, 'testo' ) }), ' ', el('div', { className: 'd-grid gap-2 d-md-flex justify-content-md-start' }, [el('a', { href: propOrDefault( props.attributes.btn1link.url, 'btn1link', 'url' ), className: 'btn btn-primary me-md-2 px-4 ' + propOrDefault( props.attributes.btn1visible, 'btn1visible' ) }, 'Primary'), el(RichText.Content, { tagName: 'a', href: propOrDefault( props.attributes.btn2link.url, 'btn2link', 'url' ), className: 'btn btn-outline-light px-4 ' + propOrDefault( props.attributes.btn2visible, 'btn2visible' ), value: propOrDefault( props.attributes.btn2txt, 'btn2txt' ) }), ' ']), ' ']), ' ']), ' ']), ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
