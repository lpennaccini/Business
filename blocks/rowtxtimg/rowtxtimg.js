
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
    
    const block = registerBlockType( 'cwb-biz-free/rowtxtimg', {
        apiVersion: 2,
        title: 'Riga testo immagine',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: true,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
            inverse: {
                type: 'string',
                default: '',
            },
            titolo: {
                type: 'string',
                default: `Seasonal sale with 70% off`,
            },
            testo: {
                type: 'string',
                default: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
            },
            btnlink: {
                type: 'object',
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            lblbtn: {
                type: 'string',
                default: `See the Collection`,
            },
            btnvisibile: {
                type: 'string',
                default: '',
            },
            image: {
                type: 'object',
                default: {id: 0, url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDZ8fGJ1c2luZXNzfGVufDB8fHx8MTY2MzQ5MjQxNQ&ixlib=rb-1.2.1&q=80&w=400', size: '', svg: '', alt: null},
            }
        },
        example: { attributes: { inverse: '', titolo: `Seasonal sale with 70% off`, testo: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, btnlink: {post_id: 0, url: '#', title: '', 'post_type': null}, lblbtn: `See the Collection`, btnvisibile: '', image: {id: 0, url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDZ8fGJ1c2luZXNzfGVufDB8fHx8MTY2MzQ5MjQxNQ&ixlib=rb-1.2.1&q=80&w=400', size: '', svg: '', alt: null} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({});
            const setAttributes = props.setAttributes; 
            
            props.image = useSelect(function( select ) {
                return {
                    image: props.attributes.image.id ? select('core').getMedia(props.attributes.image.id) : undefined
                };
            }, [props.attributes.image] ).image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container rounded rounded-2' }, [' ', ' ', el('div', { className: 'align-items-center p-4 row' }, [' ', ' ', el('div', { className: 'col-lg-7 col-md-7 order-1 ' + propOrDefault( props.attributes.inverse, 'inverse' ) }, [' ', ' ', el(RichText, { tagName: 'h2', className: 'fw-normal h1 mt-4', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', value: propOrDefault( props.attributes.testo, 'testo' ), onChange: function(val) { setAttributes( {testo: val }) } }), ' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.btnlink.url, 'btnlink', 'url' ), className: 'btn btn-primary ' + propOrDefault( props.attributes.btnvisibile, 'btnvisibile' ), onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.lblbtn, 'lblbtn' ), onChange: function(val) { setAttributes( {lblbtn: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), ' ', el('div', { className: 'col-lg-5' }, [' ', ' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'img-fluid shadow' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'img-fluid shadow ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ) }), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                        pgMediaImageControl('image', setAttributes, props, 'full', false, 'Immagine', '' ),
                                        
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(ToggleControl, {
                                        checked: props.attributes.inverse === 'order-md-0',
                                        label: __( 'Inverti colonne' ),
                                        onChange: function(val) { setAttributes({inverse: val ? 'order-md-0' : null}) },
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
                                    pgUrlControl('btnlink', setAttributes, props, 'Link pulsante', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.lblbtn,
                                        help: __( '' ),
                                        label: __( 'Etichetta pulsante ' ),
                                        onChange: function(val) { setAttributes({lblbtn: val}) },
                                        type: 'text'
                                    }),
                                    el(SelectControl, {
                                        value: props.attributes.btnvisibile,
                                        label: __( 'Nascondi pulsante' ),
                                        onChange: function(val) { setAttributes({btnvisibile: val}) },
                                        options: [
                                            { value: '', label: '-' },
                                            { value: 'd-none', label: 'Nascondi' }
                                        ]
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({});
            return el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container rounded rounded-2' }, [' ', ' ', el('div', { className: 'align-items-center p-4 row' }, [' ', ' ', el('div', { className: 'col-lg-7 col-md-7 order-1 ' + propOrDefault( props.attributes.inverse, 'inverse' ) }, [' ', ' ', el(RichText.Content, { tagName: 'h2', className: 'fw-normal h1 mt-4', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', el(RichText.Content, { tagName: 'p', value: propOrDefault( props.attributes.testo, 'testo' ) }), ' ', el(RichText.Content, { tagName: 'a', href: propOrDefault( props.attributes.btnlink.url, 'btnlink', 'url' ), className: 'btn btn-primary ' + propOrDefault( props.attributes.btnvisibile, 'btnvisibile' ), value: propOrDefault( props.attributes.lblbtn, 'lblbtn' ) }), ' ', ' ']), ' ', el('div', { className: 'col-lg-5' }, [' ', ' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'img-fluid shadow' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'img-fluid shadow ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ) }), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
