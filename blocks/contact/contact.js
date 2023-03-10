
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
    
    const block = registerBlockType( 'cwb-biz-free/contact', {
        apiVersion: 2,
        title: 'Contatto',
        description: '',
        icon: 'block-default',
        category: 'text',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: false,align: false,},
        attributes: {
            image: {
                type: 'string',
                default: `<svg viewBox="0 0 24 24" fill="currentColor" height="30" width="30" class="mb-4 text-primary"> 
                                    <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"></path>                                     
                                </svg>`,
            },
            titolo: {
                type: 'string',
                default: `Phone`,
            },
            testo: {
                type: 'string',
                default: `+0 123-456-789`,
            }
        },
        example: { attributes: { image: `<svg viewBox="0 0 24 24" fill="currentColor" height="30" width="30" class="mb-4 text-primary"> 
                                    <path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"></path>                                     
                                </svg>`, titolo: `Phone`, testo: `+0 123-456-789` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'col-md-4 py-3 text-center' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', ' ', el('div', { className: 'ps-lg-4 pe-lg-4' }, [' ', ' ', el(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image, 'image' ), { className: 'mb-4 text-primary' })), ' ', ' ', el(RichText, { tagName: 'h2', className: 'fw-bold h5 mb-2 text-uppercase', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el('ul', { className: 'list-unstyled' }, [' ', ' ', el('li', {}, [' ', ' ', el(RichText, { tagName: 'p', href: 'tel:+0 123-456-789', className: 'text-secondary', value: propOrDefault( props.attributes.testo, 'testo' ), onChange: function(val) { setAttributes( {testo: val }) } }), ' ', ' ']), ' ', ' ', el('li', {}, [' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextareaControl, {
                                        value: props.attributes.image,
                                        help: __( '' ),
                                        label: __( 'Icona' ),
                                        onChange: function(val) { setAttributes({image: val}) },
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
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'col-md-4 py-3 text-center' });
            return el('div', { ...blockProps }, [' ', ' ', el('div', { className: 'ps-lg-4 pe-lg-4' }, [' ', ' ', el(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.image, 'image' ), { className: 'mb-4 text-primary' })), ' ', ' ', el(RichText.Content, { tagName: 'h2', className: 'fw-bold h5 mb-2 text-uppercase', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', ' ', el('ul', { className: 'list-unstyled' }, [' ', ' ', el('li', {}, [' ', ' ', el(RichText.Content, { tagName: 'p', href: 'tel:+0 123-456-789', className: 'text-secondary', value: propOrDefault( props.attributes.testo, 'testo' ) }), ' ', ' ']), ' ', ' ', el('li', {}, [' ', ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
