import { CustomMenuItem } from "@components/CustomMenuItem";
import { menus } from "@configs/footerMenu";
import { Grid, MenuList, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const FooterMenu = () => {
    const [ OpenMenu, setOpenMenu ] = useState( null );
    const [ anchorEl, setAnchorEl ] = useState( null );

    const handleClose = () => {
        setAnchorEl( null );
        setOpenMenu( null );
    };

    return menus.map( ( menu, index ) => {
        return menu.children !== undefined && menu.children.length > 0 ? (
            <Grid item xs={ 12 } md={ 6 } lg={ 3 } key={ `footer-menu-${ index }` } pt={ 2 }  >
                <Link href={ menu.href } >
                    <Typography variant="blog-title">{ menu.title }</Typography>
                </Link>
                <MenuList className="list-menu-footer">
                    {
                        menu.children.map( ( menuChild, indexChild ) => (
                            <CustomMenuItem key={ `footer-submenu-${ indexChild }` } menu={ menuChild } type="vertical" />
                        ) )
                    }
                </MenuList>
            </Grid>
        ) : "";
    } );
};

export default FooterMenu;