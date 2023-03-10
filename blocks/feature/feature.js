
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
    
    const block = registerBlockType( 'cwb-biz-free/feature', {
        apiVersion: 2,
        title: 'Feature',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: false,align: false,},
        attributes: {
            icon: {
                type: 'string',
                default: `<svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" fill="currentColor" class="bi bi-code-slash mb-3 text-primary" viewBox="0 0 16 16">
                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                                </svg>`,
            },
            titolo: {
                type: 'string',
                default: `Card title`,
            },
            testo: {
                type: 'string',
                default: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
            }
        },
        example: { attributes: { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" fill="currentColor" class="bi bi-code-slash mb-3 text-primary" viewBox="0 0 16 16">
                                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                                </svg>`, titolo: `Card title`, testo: `Some quick example text to build on the card title and make up the bulk of the card's content.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'col-md' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('div', { ...blockProps }, [' ', el('div', { className: 'border-0 card item-box p-3' }, [' ', el(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.icon, 'icon' ), { className: 'bi bi-code-slash mb-3 text-primary' })), ' ', el('div', { className: 'card-body p-0' }, [' ', el(RichText, { tagName: 'h5', className: 'card-title', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el(RichText, { tagName: 'p', className: 'card-text', value: propOrDefault( props.attributes.testo, 'testo' ), onChange: function(val) { setAttributes( {testo: val }) } }), ' ']), ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextareaControl, {
                                        value: props.attributes.icon,
                                        help: __( '' ),
                                        label: __( 'Icona' ),
                                        onChange: function(val) { setAttributes({icon: val}) },
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
            const blockProps = useBlockProps.save({ className: 'col-md' });
            return el('div', { ...blockProps }, [' ', el('div', { className: 'border-0 card item-box p-3' }, [' ', el(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.icon, 'icon' ), { className: 'bi bi-code-slash mb-3 text-primary' })), ' ', el('div', { className: 'card-body p-0' }, [' ', el(RichText.Content, { tagName: 'h5', className: 'card-title', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', el(RichText.Content, { tagName: 'p', className: 'card-text', value: propOrDefault( props.attributes.testo, 'testo' ) }), ' ']), ' ']), ' ', ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
