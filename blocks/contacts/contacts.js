
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
    
    const block = registerBlockType( 'cwb-biz-free/contacts', {
        apiVersion: 2,
        title: 'Contatti',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: true,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
            titolo: {
                type: 'string',
                default: `Column title`,
            }
        },
        example: { attributes: { titolo: `Column title` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'mt-5 pb-5 pt-5' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: 'row' }, {
                allowedBlocks: [ 'cwb-biz-free/contact' ],
                template: [
    [ 'cwb-biz-free/contact', {} ],
    [ 'cwb-biz-free/contact', {} ],
    [ 'cwb-biz-free/contact', {} ]
],
            } );
                            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container' }, [' ', ' ', el('div', { className: 'row' }, [' ', el('div', { className: 'col-md-12 text-center' }, [' ', el(RichText, { tagName: 'h2', className: 'fw-normal', value: propOrDefault( props.attributes.titolo, 'titolo' ), onChange: function(val) { setAttributes( {titolo: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ']), ' ']), ' ', el('div', { ...innerBlocksProps }), ' ', ' ']), ' ', ' ']),                        
                
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
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'mt-5 pb-5 pt-5' });
            return el('section', { ...blockProps }, [' ', ' ', el('div', { className: 'container' }, [' ', ' ', el('div', { className: 'row' }, [' ', el('div', { className: 'col-md-12 text-center' }, [' ', el(RichText.Content, { tagName: 'h2', className: 'fw-normal', value: propOrDefault( props.attributes.titolo, 'titolo' ) }), ' ', ' ']), ' ']), ' ', el('div', { className: 'row' }, el(InnerBlocks.Content, { allowedBlocks: [ 'cwb-biz-free/contact' ] })), ' ', ' ']), ' ', ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
