import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';
import React from 'react';

const NavbarDesktop = ( { menu, menuItems, logined } ) => {
    const [ anchorEl4, setAnchorEl4 ] = React.useState( null );

    const handleClick4 = ( event ) => {
        setAnchorEl4( event.currentTarget );
    };

    const handleClose4 = () => {
        setAnchorEl4( null );
    };
    return (
        <>
            <Button
                aria-label='menu'
                aria-controls='main-menu'
                aria-haspopup='true'
                variant='primary'
                sx={ { whiteSpace: 'nowrap' } }
            >
                <Box display='flex' alignItems='center' onClick={ handleClick4 }>
                    <Typography variant='description' sx={ { ml: 1 } }>
                        { menu.title }
                    </Typography>
                    <FeatherIcon icon='chevron-down' width='20' height='20' />
                </Box>
            </Button>
            <Menu
                id='main-menu'
                anchorEl={ anchorEl4 }
                keepMounted
                open={ Boolean( anchorEl4 ) }
                onClose={ handleClose4 }
                sx={ {
                    '& .MuiMenu-paper': {
                        width: '200px',
                        right: '0rem !important ',
                        top: '264px !important',
                    },
                    '& .MuiList-padding': {
                        p: '0px',
                    },
                } }
            >
                <Box>
                    <Box>
                        { menuItems &&
                            menuItems.length > 0 &&
                            menuItems.map( ( item ) => {
                                const marginLeft = item.icon !== undefined ? 2 : 0;
                                const minWidth = item.icon === undefined ? 0 : '35px';

                                return (
                                    <MenuItem key={ item.title } sx={ { py: 1.5, px: 2 } }>
                                        <Box display='flex' alignItems='center'>
                                            <Button
                                                sx={ {
                                                    color: ( theme ) => theme.palette.primary.main,
                                                    justifyContent: 'start',
                                                    boxShadow: 'none',
                                                    minWidth: minWidth,
                                                } }
                                            >
                                                { item.icon !== undefined ? (
                                                    <FeatherIcon
                                                        icon={ item.icon }
                                                        width='18'
                                                        height='18'
                                                    />
                                                ) : (
                                                    ''
                                                ) }
                                            </Button>
                                            <Box sx={ { ml: marginLeft } }>
                                                <Link href={ item.href } passHref>
                                                    <Typography variant='description'>
                                                        { item.title }
                                                    </Typography>
                                                </Link>
                                            </Box>
                                        </Box>
                                    </MenuItem>
                                );
                            } ) }
                    </Box>
                </Box>
            </Menu>
        </>
    );
};

export default NavbarDesktop;
