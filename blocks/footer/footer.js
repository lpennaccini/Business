
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
    
    const block = registerBlockType( 'cwb-biz-free/footer', {
        apiVersion: 2,
        title: 'Footer',
        description: '',
        icon: 'block-default',
        category: 'cwb_biz_free',
        keywords: [],
        supports: {color: {background: true,text: true,gradients: false,link: true,},typography: {fontSize: false,},anchor: true,align: false,},
        attributes: {
            brand: {
                type: 'string',
                default: `Company`,
            },
            testo: {
                type: 'string',
                default: `Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.`,
            },
            contact: {
                type: 'string',
                default: `Get Social`,
            },
            credit: {
                type: 'string',
                default: `&copy; 2022. All Rights Reserved - Luigi Pennaccini`,
            },
            lnkprivacy: {
                type: 'object',
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            lblprivacy: {
                type: 'string',
                default: `Privacy Policy`,
            },
            lnkcookie: {
                type: 'object',
                default: {post_id: 0, url: '#', title: '', 'post_type': null},
            },
            lblcookie: {
                type: 'string',
                default: `Cookie policy`,
            }
        },
        example: { attributes: { brand: `Company`, testo: `Duis pharetra venenatis felis, ut tincidunt ipsum consequat nec. Fusce et porttitor libero, eu aliquam nisi. Nam finibus ullamcorper semper.`, contact: `Get Social`, credit: `&copy; 2022. All Rights Reserved - Luigi Pennaccini`, lnkprivacy: {post_id: 0, url: '#', title: '', 'post_type': null}, lblprivacy: `Privacy Policy`, lnkcookie: {post_id: 0, url: '#', title: '', 'post_type': null}, lblcookie: `Cookie policy` } },
        edit: function ( props ) {
            const blockProps = useBlockProps({ className: 'pt-5' });
            const setAttributes = props.setAttributes; 
            
            
            const innerBlocksProps = useInnerBlocksProps({ className: 'd-inline-flex flex-wrap' }, {
                allowedBlocks: [ 'cwb-biz-free/socialicon' ],
                template: [
    [ 'cwb-biz-free/socialicon', {} ],
    [ 'cwb-biz-free/socialicon', {} ],
    [ 'cwb-biz-free/socialicon', {} ],
    [ 'cwb-biz-free/socialicon', {} ]
],
            } );
                            
            
            return el(Fragment, {}, [
                el('footer', { ...blockProps }, [' ', ' ', el('div', { className: 'container-xxl' }, [' ', ' ', el('div', { className: 'row' }, [' ', ' ', el('div', { className: 'col-md-6 py-3' }, [' ', ' ', el(RichText, { tagName: 'p', href: '#', className: 'fw-bold h5 mb-3 text-uppercase', value: propOrDefault( props.attributes.brand, 'brand' ), onChange: function(val) { setAttributes( {brand: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', ' ', el(RichText, { tagName: 'p', className: 'mb-3', value: propOrDefault( props.attributes.testo, 'testo' ), onChange: function(val) { setAttributes( {testo: val }) } }), ' ', ' ', el('div', { className: 'mb-4' }, [' ', ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'col-md-6 py-3' }, [' ', ' ', el(RichText, { tagName: 'h2', className: 'fw-bold h5 mb-3 text-uppercase', value: propOrDefault( props.attributes.contact, 'contact' ), onChange: function(val) { setAttributes( {contact: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ', el('div', { ...innerBlocksProps }), ' ', ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'pb-3 pt-3 small' }, [' ', ' ', el('hr', { className: 'mt-0 ' }), ' ', ' ', el('div', { className: 'align-items-center row' }, [' ', el('div', { className: 'col-md pb-2 pt-2' }, [' ', el(RichText, { tagName: 'p', className: 'mb-0', value: propOrDefault( props.attributes.credit, 'credit' ), onChange: function(val) { setAttributes( {credit: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ', el('div', { className: 'col-md-auto pb-2 pt-2' }, [el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.lnkprivacy.url, 'lnkprivacy', 'url' ), onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.lblprivacy, 'lblprivacy' ), onChange: function(val) { setAttributes( {lblprivacy: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' | ', el(RichText, { tagName: 'a', href: propOrDefault( props.attributes.lnkcookie.url, 'lnkcookie', 'url' ), onClick: function(e) { e.preventDefault(); }, value: propOrDefault( props.attributes.lblcookie, 'lblcookie' ), onChange: function(val) { setAttributes( {lblcookie: val }) }, withoutInteractiveFormatting: true, allowedFormats: [] }), ' ']), ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']),                        
                
                    el( InspectorControls, {},
                        [
                            
                            el(Panel, {},
                                el(PanelBody, {
                                    title: __('Block properties')
                                }, [
                                    
                                    el(TextControl, {
                                        value: props.attributes.brand,
                                        help: __( '' ),
                                        label: __( 'Nome sito' ),
                                        onChange: function(val) { setAttributes({brand: val}) },
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
                                    el(TextControl, {
                                        value: props.attributes.contact,
                                        help: __( '' ),
                                        label: __( 'Titolo Social' ),
                                        onChange: function(val) { setAttributes({contact: val}) },
                                        type: 'text'
                                    }),
                                    el(TextControl, {
                                        value: props.attributes.credit,
                                        help: __( '' ),
                                        label: __( 'Credit' ),
                                        onChange: function(val) { setAttributes({credit: val}) },
                                        type: 'text'
                                    }),
                                    pgUrlControl('lnkprivacy', setAttributes, props, 'Link privacy', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.lblprivacy,
                                        help: __( '' ),
                                        label: __( 'Titolo privacy' ),
                                        onChange: function(val) { setAttributes({lblprivacy: val}) },
                                        type: 'text'
                                    }),
                                    pgUrlControl('lnkcookie', setAttributes, props, 'Link cookie', '', null ),
                                    el(TextControl, {
                                        value: props.attributes.lblcookie,
                                        help: __( '' ),
                                        label: __( 'Titolo cookie' ),
                                        onChange: function(val) { setAttributes({lblcookie: val}) },
                                        type: 'text'
                                    }),    
                                ])
                            )
                        ]
                    )                            

            ]);
        },

        save: function(props) {
            const blockProps = useBlockProps.save({ className: 'pt-5' });
            return el('footer', { ...blockProps }, [' ', ' ', el('div', { className: 'container-xxl' }, [' ', ' ', el('div', { className: 'row' }, [' ', ' ', el('div', { className: 'col-md-6 py-3' }, [' ', ' ', el(RichText.Content, { tagName: 'p', href: '#', className: 'fw-bold h5 mb-3 text-uppercase', value: propOrDefault( props.attributes.brand, 'brand' ) }), ' ', ' ', el(RichText.Content, { tagName: 'p', className: 'mb-3', value: propOrDefault( props.attributes.testo, 'testo' ) }), ' ', ' ', el('div', { className: 'mb-4' }, [' ', ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'col-md-6 py-3' }, [' ', ' ', el(RichText.Content, { tagName: 'h2', className: 'fw-bold h5 mb-3 text-uppercase', value: propOrDefault( props.attributes.contact, 'contact' ) }), ' ', el('div', { className: 'd-inline-flex flex-wrap' }, el(InnerBlocks.Content, { allowedBlocks: [ 'cwb-biz-free/socialicon' ] })), ' ', ' ']), ' ', ' ']), ' ', ' ', el('div', { className: 'pb-3 pt-3 small' }, [' ', ' ', el('hr', { className: 'mt-0 ' }), ' ', ' ', el('div', { className: 'align-items-center row' }, [' ', el('div', { className: 'col-md pb-2 pt-2' }, [' ', el(RichText.Content, { tagName: 'p', className: 'mb-0', value: propOrDefault( props.attributes.credit, 'credit' ) }), ' ']), ' ', el('div', { className: 'col-md-auto pb-2 pt-2' }, [el(RichText.Content, { tagName: 'a', href: propOrDefault( props.attributes.lnkprivacy.url, 'lnkprivacy', 'url' ), value: propOrDefault( props.attributes.lblprivacy, 'lblprivacy' ) }), ' | ', el(RichText.Content, { tagName: 'a', href: propOrDefault( props.attributes.lnkcookie.url, 'lnkcookie', 'url' ), value: propOrDefault( props.attributes.lblcookie, 'lblcookie' ) }), ' ']), ' ']), ' ', ' ']), ' ', ' ']), ' ', ' ']);
        }                        

    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor
);                        
