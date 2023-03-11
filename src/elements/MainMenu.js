import { CustomMenuItem } from "@components/CustomMenuItem";
import { BlockAppBar } from "@components/Layouts";
import { menus } from "@configs/menuItems";
import { Box, Button, Menu, MenuList } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { AlignJustify, X } from "feather-icons-react/build/IconComponents";
import { useState } from "react";

const MainMenu = ( { isMobile, ...props } ) => {
    const [ OpenMenu, setOpenMenu ] = useState( null );
    const [ anchorEl, setAnchorEl ] = useState( null );
    const open = Boolean( anchorEl );

    const handleClick = ( event ) => {
        setAnchorEl( event.currentTarget );
        setOpenMenu( event.currentTarget );
    };
    const handleClose = () => {
        setAnchorEl( null );
        setOpenMenu( null );
    };

    if ( isMobile === true ) {
        return <>
            <Box>
                <Button aria-controls={ open ? 'basic-menu' : undefined } aria-haspopup="true" aria-expanded={ open ? 'true' : undefined } onClick={ handleClick }>
                    { OpenMenu ? <X size={ 35 } color={ ColorStyles.Foundation.Black[ 700 ] } />
                        :
                        <AlignJustify size={ 35 } color={ ColorStyles.Foundation.Black[ 900 ] } /> }
                </Button>
            </Box>

            <Menu anchorEl={ anchorEl } open={ open } onClose={ handleClose } className="list-menu-navbar" >
                { menus.map( ( menu, index ) => <CustomMenuItem key={ `mainmenu-${ index }` } menu={ menu } /> ) }
            </Menu>
        </>;
    }

    return <BlockAppBar className="main-menu" elevation={ 0 } >
        <MenuList className="main-menu-item">
            { menus.map( ( menu, index ) => <CustomMenuItem key={ `mainmenu-${ index }` } menu={ menu } /> ) }
        </MenuList>
    </BlockAppBar>;
};
export default MainMenu;