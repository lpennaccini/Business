<header <?php if(empty($_GET['context']) || $_GET['context'] !== 'edit') echo get_block_wrapper_attributes( array('class' => "bg-white pb-3 pt-3 sticky-md-top", 'id' => "mainmenu", ) ); else echo 'data-wp-block-props="true"'; ?>>
    <nav class="bg-white navbar navbar-expand-lg navbar-light py-lg-1 text-uppercase"> 
        <div class="container"> 
            <?php echo get_custom_logo() ?> 
            <button class="navbar-toggler rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown-3" aria-controls="navbarNavDropdown-3" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> 
            </button>             
            <div class="collapse navbar-collapse " id="navbarNavDropdown-3"> 
                <?php if ( has_nav_menu( 'primary' ) ) : ?>
                    <?php
                        PG_Smart_Walker_Nav_Menu::init();
                        PG_Smart_Walker_Nav_Menu::$options['template'] = '<li class="nav-item"> <a class="nav-link {CLASSES}" aria-current="page" id="{ID}" {ATTRS}>{TITLE}</a> 
                                                    </li>';
                        PG_Smart_Walker_Nav_Menu::$options['current_class'] = 'active';
                        
                        PG_Smart_Walker_Nav_Menu::$options['template_item_with_sublevel'] = '<li class="nav-item dropdown {CLASSES}" id="{ID}"> <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink8_{ID}" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" {ATTRS}>{TITLE}</a> 
                                                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink8_{ID}">{SUB}</div>                                     
                                                        </li>';
                        PG_Smart_Walker_Nav_Menu::$options['template_sublevel'] = '{SUB}';
                        PG_Smart_Walker_Nav_Menu::$options['template_subitem'] = '<a class="dropdown-item {CLASSES}" id="{ID}" {ATTRS}>{TITLE}</a>';
                        
                        wp_nav_menu( array(
                            'container' => '',
                            'theme_location' => 'primary',
                            'items_wrap' => '<ul class="%2$s mb-2 mb-lg-0 me-auto ms-auto navbar-nav text-capitalize" id="%1$s">%3$s</ul>',
                            'walker' => new PG_Smart_Walker_Nav_Menu()
                    ) ); ?>
                <?php endif; ?> 
                <div class="ms-lg-3">
                    <a class="btn btn-primary pb-2 pe-4 ps-4 pt-2 <?php echo PG_Blocks::getAttribute( $args, 'btnmenuvisible' ) ?>" href="<?php echo (!empty($_GET['context']) && $_GET['context'] === 'edit') ? 'javascript:void()' : PG_Blocks::getLinkUrl( $args, 'btnmenulink' ) ?>"><?php echo PG_Blocks::getAttribute( $args, 'btnmenulabel' ) ?></a>
                </div>                 
            </div>             
        </div>         
    </nav>
</header>