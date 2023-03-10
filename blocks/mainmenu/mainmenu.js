
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
    
    const block = registerBlockType( 'cwb-biz-free/mainmenu', {
        apiVersion: 2,
        title: 'Menu',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
            btnmenulink: {
                type: 'object',
                default: {post_id: 0, url: '#contact', title: '', 'post_type': null},
            },
            btnmenulabel: {
                type: 'string',
                default: `Contact now`,
            },
            btnmenuvisible: {
                type: 'string',
                default: '',
            }
        },
        example: { attributes: { btnmenulink: {post_id: 0, url: '#contact', title: '', 'post_type': null}, btnmenulabel: `Contact now`, btnmenuvisible: '' } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'bg-white pb-3 pt-3 sticky-md-top', id: 'mainmenu' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                
                        el( ServerSideRender, {
                            block: 'cwb-biz-free/mainmenu',
                            httpMethod: 'POST',
                            attributes: props.attributes,
                            innerBlocksProps: innerBlocksProps,
                            blockProps: blockProps
                        } ),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    pgUrlControl('btnmenulink', setAttributes, props, 'Link pulsante', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.btnmenulabel,
                                        help: __( '' ),
                                        label: __( 'Etichetta pulsante' ),
                                        onChange: function(val) { setAttributes({btnmenulabel: val}) },
                                        type: 'text'
                                    }),
                                    el(SelectControl, {
                                        value: props.attributes.btnmenuvisible,
                                        label: __( 'Nascondi pulsante' ),
                                        onChange: function(val) { setAttributes({btnmenuvisible: val}) },
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
            return null;
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
