
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
    
    const block = registerBlockType( 'cwb-biz-free/services', {
        apiVersion: 2,
        title: 'Servizi',
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
            testo: {
                type: 'string',
                default: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.`,
            }
        },
        example: { attributes: { titolo: `Column title`, testo: `Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'mb-5 mt-5' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: 'g-4 row' }, {
                allowedBlocks: [ 'cwb-biz-free/service' ],
                template: [
    [ 'cwb-biz-free/service', {} ],
    [ 'cwb-biz-free/service', {} ],
    [ 'cwb-biz-free/service', {} ]
],
            } );
                            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'container' }, [' ', el('div', { className: 'row' }, [' ', el('div', { className: 'col-md-12 text-center' }, [' ', el(RichText, { tagName: 'h2', className: 'fw-normal h1', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el(RichText, { tagName: 'p', className: 'mb-5', value: propOrDefault( props.attributes.testo, 'testo' ), onChange: function(val) { setAttributes( {testo: val }) } }), ' ', ' ']), ' ']), ' ', el('div', { ...innerBlocksProps }), ' ']), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
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
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'mb-5 mt-5' });
            return el('section', { ...blockProps }, [' ', el('div', { className: 'container' }, [' ', el('div', { className: 'row' }, [' ', el('div', { className: 'col-md-12 text-center' }, [' ', el(RichText.Content, { tagName: 'h2', className: 'fw-normal h1', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', ' ', el(RichText.Content, { tagName: 'p', className: 'mb-5', value: propOrDefault( props.attributes.testo, 'testo' ) }), ' ', ' ']), ' ']), ' ', el('div', { className: 'g-4 row' }, el(InnerBlocks.Content, { allowedBlocks: [ 'cwb-biz-free/service' ] })), ' ']), ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
