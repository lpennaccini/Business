
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
    
    const block = registerBlockType( 'cwb-biz-free/rowimgtxt', {
        apiVersion: 2,
        title: 'Riga immagine testo',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
            titolo: {
                type: 'string',
                default: `Seasonal sale with 70% off`,
            },
            testo: {
                type: 'string',
                default: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.`,
            },
            btnlink: {
                type: 'object',
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            lblbtn: {
                type: 'string',
                default: `See the Collection`,
            },
            image: {
                type: 'object',
                default: {id: 0, url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE3fHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1&q=80&w=1080', size: '', svg: '', alt: '...'},
            }
        },
        example: { attributes: { titolo: `Seasonal sale with 70% off`, testo: `Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.`, btnlink: {post_id: 0, url: '#', title: '', 'post_type': null}, lblbtn: `See the Collection`, image: {id: 0, url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE3fHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1&q=80&w=1080', size: '', svg: '', alt: '...'} } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'bg-dark mt-5 text-center text-md-start text-white' });
            const setAttributes = props.setAttributes; 
            
            props.image = useSelect(function( select ) {
                return {
                    image: props.attributes.image.id ? select('core').getMedia(props.attributes.image.id) : undefined
                };
            }, [props.attributes.image] ).image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container-fluid' }, [' ', ' ', el('div', { className: 'align-items-center row' }, [' ', ' ', el('div', { className: 'col-md-6 col-xl-6 mt-md-0 order-md-2 pb-5 pb-md-0 pe-md-5 ps-md-5 pt-5 pt-md-0' }, [' ', ' ', el(RichText, { tagName: 'h3', className: 'h2 mb-4 text-white', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', value: propOrDefault( props.attributes.testo, 'testo' ), onChange: function(val) { setAttributes( {testo: val }) } }), ' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.btnlink.url, 'btnlink', 'url' ), className: 'btn btn-outline-light', onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.lblbtn, 'lblbtn' ), onChange: function(val) { setAttributes( {lblbtn: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), ' ', ' ', el('div', { className: 'col-md-6 col-xl-6 order-md-1 p-0' }, [' ', ' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'd-block img-fluid w-100' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'd-block img-fluid w-100 ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ), width: '1080', height: '720' }), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
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
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'bg-dark mt-5 text-center text-md-start text-white' });
            return el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container-fluid' }, [' ', ' ', el('div', { className: 'align-items-center row' }, [' ', ' ', el('div', { className: 'col-md-6 col-xl-6 mt-md-0 order-md-2 pb-5 pb-md-0 pe-md-5 ps-md-5 pt-5 pt-md-0' }, [' ', ' ', el(RichText.Content, { tagName: 'h3', className: 'h2 mb-4 text-white', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', el(RichText.Content, { tagName: 'p', value: propOrDefault( props.attributes.testo, 'testo' ) }), ' ', el(RichText.Content, { tagName: 'a', href: propOrDefault( props.attributes.btnlink.url, 'btnlink', 'url' ), className: 'btn btn-outline-light', value: propOrDefault( props.attributes.lblbtn, 'lblbtn' ) }), ' ', ' ']), ' ', ' ', el('div', { className: 'col-md-6 col-xl-6 order-md-1 p-0' }, [' ', ' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'd-block img-fluid w-100' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'd-block img-fluid w-100 ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ), width: '1080', height: '720' }), ' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
