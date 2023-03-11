
import LogoIcon from '@components/LogoIcon';
import { SearchInputHeader } from '@components/SearchHeader';
import ShopingCartIcon from '@components/ShopingCartIcon';
import { Badge, Box, Divider, Fab, Grid, Stack, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import Link from 'next/link';
import { useState } from 'react';
import MainMenu from './MainMenu';
import MiniCartPopup from './MiniCartPopup';

const Header = ( { maxWidth, isMobile } ) => {

    const [ openMiniCart, setOpenMiniCart ] = useState( false );

    const [ openLogin, setOpenLogin ] = useState( false );

    const toggleMinicart = event => {
        setOpenMiniCart( !openMiniCart );
    };

    const toggleLogin = event => {

        setOpenLogin( !openLogin );
    };

    return (
        <Box id="header">
            <Box className="page-title"><Typography variant="heading">OUR STORES WILL BE CLOSED ON JANUARY 1st 2022.</Typography></Box>
            <Box className='content-header' sx={ { maxWidth: maxWidth } }>
                <Grid container spacing={ 0 } >
                    <Grid item xs={ 12 } lg={ 12 }>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" py={ 2.5 }>
                            { isMobile === true ?
                                <MainMenu isMobile={ isMobile } />
                                :
                                <>
                                    <Stack direction="row" alignItems="center" spacing={ 1 }>
                                        <ShopingCartIcon icon="delivery" strokeWidth="1px" />
                                        <Typography variant="description"> Online Delivery</Typography>
                                    </Stack>
                                </>
                            }
                            <Box px={ 3 }><LogoIcon /></Box>
                            <Stack direction="row" spacing={ 1 } alignItems="center" pr={ 2 } >
                                { !isMobile &&
                                    <Fab className='social-action'>
                                        <ShopingCartIcon icon="search" strokeWidth="0px" color={ ColorStyles.Foundation.baseColor.black } />
                                    </Fab> }
                                <Fab className='social-action'>
                                    <ShopingCartIcon icon="account" strokeWidth="0px" />
                                </Fab>
                                <Fab className='social-action' onClick={ toggleMinicart }>
                                    <Badge badgeContent={ 4 } color="secondary" ><ShopingCartIcon icon="cart" strokeWidth="0px" /></Badge>
                                </Fab>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box className='menu-navbar'>
                {/* ==== LIST MENU HEADER ======= */ }
                { !isMobile && <Box className='list-menu-navbar' sx={ { maxWidth: maxWidth } } ><MainMenu isMobile={ isMobile } /></Box> }
                { isMobile && <SearchInputHeader /> }
            </Box>
            <Box className="header-bottom">
                <Box className="list-header-bottom">
                    <Link href="#"><Typography variant="body1" >Seasonal Products</Typography></Link>
                    <Divider variant='body1' orientation="vertical" flexItem />
                    <Link href="#"><Typography variant="body1" >Store Form 10 Am to 8 Pm</Typography></Link>
                    <Divider orientation="vertical" flexItem />
                    <Link href="#"><Typography variant="body1">Delivery & Shipping Policy</Typography></Link>
                    <Divider orientation="vertical" flexItem />
                    <Link href="/faq"><Typography variant="body1">FAQ</Typography></Link>
                </Box>
            </Box>
            {/* minni-cart-popup */ }
            <MiniCartPopup openMiniCart={ openMiniCart } toggleMinicart={ toggleMinicart } openLogin={ openLogin } toggleLogin={ toggleLogin } />
        </Box>
    );
};
export default Header;
