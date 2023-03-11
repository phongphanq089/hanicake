import { Button, MenuItem, MenuList, Typography } from "@mui/material";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Link from "next/link";
import { useRouter } from "next/router";

const HtmlMenuItem = ( { menu, type, router, submenu } ) => {
    return type === 'vertical' && !menu.children ?
        <MenuItem onClick={ () => router.push( menu.href ) }>
            <Typography variant="footer">{ menu.title }</Typography>
        </MenuItem> :
        <MenuItem className="list-menu-navbar-item">
            <Button variant='primary' sx={ { whiteSpace: 'nowrap', padding: "0px" } }  >
                { submenu ?
                    <>
                        { menu.title }
                        < FeatherIcon icon='chevron-down' width='20' height='20' />
                    </>
                    :
                    <Link href={ menu.href } >{ menu.title }</Link>
                }
            </Button>
        </MenuItem>;
};

const SubMenus = ( { menu } ) => {
    return menu.children !== undefined && menu.children.length > 0 ? (
        <MenuList className="sub-menu-item">
            {
                menu.children.map( ( menuChild, indexChild ) => (
                    <CustomMenuItem key={ `sub-menu-item-${ indexChild }` } menu={ menuChild } type="vertical" />
                ) )
            }
        </MenuList>
    ) : "";
};

export const CustomMenuItem = ( { menu, type = 'horizontal', attributes = {} } ) => {
    const router = useRouter();

    if ( menu.children !== undefined && menu.children.length > 0 ) {
        return <>
            <HtmlMenuItem menu={ menu } type={ type } router={ router } submenu={ <SubMenus menu={ menu } /> } />
        </>;
    }
    return <HtmlMenuItem menu={ menu } type={ type } router={ router } />;
};