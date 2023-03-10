
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
    
    const block = registerBlockType( 'cwb-biz-free/socialicon', {
        apiVersion: 2,
        title: 'Icone social',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: false,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: false,align: false,},
        attributes: {
            lnksocial: {
                type: 'object',
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            icon: {
                type: 'string',
                default: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="text-light"> 
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/> 
                                </svg>`,
            }
        },
        example: { attributes: { lnksocial: {post_id: 0, url: '#', title: '', 'post_type': null}, icon: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" class="text-light"> 
                                    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/> 
                                </svg>` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ href: propOrDefault( props.attributes.lnksocial.url, 'lnksocial', 'url' ), className: 'bg-secondary icon-round me-2 p-1 text-secondary', 'aria-label': 'facebook', onClick: function(e) { e.preventDefault(); } });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = null;
            
            
            return el(Fragment, {}, [
                el('a', { ...blockProps }, [' ', el(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.icon, 'icon' ), { className: 'text-light' })), ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    pgUrlControl('lnksocial', setAttributes, props, 'Link social', '', null ),
                                    el(TextareaControl, {
                                        value: props.attributes.icon,
                                        help: __( '' ),
                                        label: __( 'Icona social' ),
                                        onChange: function(val) { setAttributes({icon: val}) },
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ href: propOrDefault( props.attributes.lnksocial.url, 'lnksocial', 'url' ), className: 'bg-secondary icon-round me-2 p-1 text-secondary', 'aria-label': 'facebook', onClick: function(e) { e.preventDefault(); } });
            return el('a', { ...blockProps }, [' ', el(RawHTML, {}, pgMergeInlineSVGAttributes(propOrDefault( props.attributes.icon, 'icon' ), { className: 'text-light' })), ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
