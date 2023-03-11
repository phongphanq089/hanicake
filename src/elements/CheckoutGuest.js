import CheckCodeVerify from '@components/CheckCodeVerify';
import Login from '@components/Login';
import SiginUp from '@components/SiginUp';
import { Box, Drawer } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { X } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';

const CheckoutGuest = ( { open, toggleDrawer } ) => {
    const [ ckNotLogin, setCkNotLogin ] = useState( 'login' );

    const handelClose = () => {
        if ( open === true ) {
            setCkNotLogin( 'login' );
            toggleDrawer();
        }
    };
    return (
        <Drawer anchor="right" open={ open } onClose={ handelClose } className='drawer-slide-hiden'>
            <Box className='close-box-drawer' onClick={ handelClose }><X size={ '32px' } color={ ColorStyles.Foundation.baseColor.black } /></Box>
            {
                ckNotLogin === 'login' ?
                    <Login setPage={ setCkNotLogin } /> :
                    ( ckNotLogin === 'signup' ) ? <SiginUp setPage={ setCkNotLogin } /> :
                        ( ckNotLogin === 'verify' ) ? <CheckCodeVerify setPage={ setCkNotLogin } /> : ""

            }
        </Drawer>
    );
};

export default CheckoutGuest;