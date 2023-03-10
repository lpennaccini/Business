
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
    
    const block = registerBlockType( 'cwb-biz-free/features', {
        apiVersion: 2,
        title: 'Features',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: true,text: false,gradients: false,link: false,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
        },
        example: { attributes: {  } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'mb-5 mt-5 pt-4' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: 'g-4 row' }, {
                allowedBlocks: [ 'cwb-biz-free/feature' ],
                template: [
    [ 'cwb-biz-free/feature', {} ],
    [ 'cwb-biz-free/feature', {} ],
    [ 'cwb-biz-free/feature', {} ],
    [ 'cwb-biz-free/feature', {} ]
],
            } );
                            
            
            return el(Fragment, {}, [
                el('section', { ...blockProps }, [' ', el('div', { className: 'container' }, [' ', el('div', { ...innerBlocksProps }), ' ']), ' ']),                        
                
            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'mb-5 mt-5 pt-4' });
            return el('section', { ...blockProps }, [' ', el('div', { className: 'container' }, [' ', el('div', { className: 'g-4 row' }, el(InnerBlocks.Content, { allowedBlocks: [ 'cwb-biz-free/feature' ] })), ' ']), ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
