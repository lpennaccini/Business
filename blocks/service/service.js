
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
    
    const block = registerBlockType( 'cwb-biz-free/service', {
        apiVersion: 2,
        title: 'Service',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: false,align: false,},
        attributes: {
            image: {
                type: 'object',
                default: {id: 0, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzfHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=500&fit=crop', size: '', svg: '', alt: null},
            },
            titolo: {
                type: 'string',
                default: `Card title`,
            },
            testo: {
                type: 'string',
                default: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            },
            btnlink: {
                type: 'object',
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            lblbtn: {
                type: 'string',
                default: `Card link`,
            }
        },
        example: { attributes: { image: {id: 0, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEzfHxidXNpbmVzc3xlbnwwfHx8fDE2NjM0OTI0MTU&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=500&h=500&fit=crop', size: '', svg: '', alt: null}, titolo: `Card title`, testo: `Some quick example text to build on the card title and make up the bulk of the card's content.`, btnlink: {post_id: 0, url: '#', title: '', 'post_type': null}, lblbtn: `Card link` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'col-md text-center' });
            const setAttributes = props.setAttributes; 
            
            props.image = useSelect(function( select ) {
                return {
                    image: props.attributes.image.id ? select('core').getMedia(props.attributes.image.id) : undefined
                };
            }, [props.attributes.image] ).image;
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el('div', { className: 'border-0 card item-box p-3' }, [' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'img-fluid' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'img-fluid ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ) }), ' ', el('div', { className: 'card-body p-0' }, [' ', el(RichText, { tagName: 'h5', className: 'card-title fw-bold mt-3', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'card-text', value: propOrDefault( props.attributes.testo, 'testo' ), onChange: function(val) { setAttributes( {testo: val }) } }), ' ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.btnlink.url, 'btnlink', 'url' ), className: 'btn btn-primary card-link', onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.lblbtn, 'lblbtn' ), onChange: function(val) { setAttributes( {lblbtn: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ', ' ']),                        
                
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
            const blockProps = useBlockProps.save({ className: 'col-md text-center' });
            return el('div', { ...blockProps }, [' ', el('div', { className: 'border-0 card item-box p-3' }, [' ', props.attributes.image && props.attributes.image.svg && pgCreateSVG(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image.svg, 'image', 'svg' ), { className: 'img-fluid' })), props.attributes.image && !props.attributes.image.svg && propOrDefault( props.attributes.image.url, 'image', 'url' ) && el('img', { src: propOrDefault( props.attributes.image.url, 'image', 'url' ), className: 'img-fluid ' + (props.attributes.image.id ? ('wp-image-' + props.attributes.image.id) : ''), alt: propOrDefault( props.attributes.image?.alt, 'image', 'alt' ) }), ' ', el('div', { className: 'card-body p-0' }, [' ', el(RichText.Content, { tagName: 'h5', className: 'card-title fw-bold mt-3', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', el(RichText.Content, { tagName: 'p', className: 'card-text', value: propOrDefault( props.attributes.testo, 'testo' ) }), ' ', el(RichText.Content, { tagName: 'a', href: propOrDefault( props.attributes.btnlink.url, 'btnlink', 'url' ), className: 'btn btn-primary card-link', value: propOrDefault( props.attributes.lblbtn, 'lblbtn' ) }), ' ']), ' ']), ' ', ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
