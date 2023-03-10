
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
    
    const block = registerBlockType( 'cwb-biz-free/googlemap', {
        apiVersion: 2,
        title: 'Google Map',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
            map: {
                type: 'string',
                default: ``,
            }
        },
        example: { attributes: { map: `` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'bg-light position-relative', style: { height: '450px' }, id: 'google-maps' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', ' ', el(RichText, { tagName: 'div', className: 'google-maps', value: propOrDefault( props.attributes.map, 'map' ), onChange: function(val) { setAttributes( {map: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextareaControl, {
                                        value: props.attributes.map,
                                        help: __( '' ),
                                        label: __( 'Google map' ),
                                        onChange: function(val) { setAttributes({map: val}) },
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'bg-light position-relative', style: { height: '450px' }, id: 'google-maps' });
            return el('section', { ...blockProps }, [' ', ' ', el(RichText.Content, { tagName: 'div', className: 'google-maps', value: propOrDefault( props.attributes.map, 'map' ) }), ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
