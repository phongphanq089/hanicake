import ExtralSpeacial from "@components/ExtralSpeacial";
import { Box, Button, Drawer, Fab, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { Trash2, X } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import CheckoutGuest from "./CheckoutGuest";

const MiniCartPopup = ( { openMiniCart, toggleMinicart, toggleLogin, openLogin } ) => {

    const isExtraSpecial = true;

    const router = useRouter();

    return (
        <Drawer
            anchor="right"
            open={ openMiniCart }
            onClose={ toggleMinicart }
            className='drawer-slide-mini-cart'
        >
            <Box className="content-mini-cart">
                <Box className="Notification-header">
                    <Typography variant="title5">{ "Shopping Cart (2)" }</Typography>
                    <X color={ ColorStyles.Foundation.baseColor.white } size={ 48 } strokeWidth="2px" onClick={ toggleMinicart } />
                </Box>
                <Box className="mini-cart-list">
                    <Box className="mini-cart-list-item">
                        <Stack direction="row" alignItems="center" spacing={ 2.5 }>
                            <Box className="image-cart">
                                <Image src="/image/product1.jpg" alt="product1.jpg" width={ 138 } height={ 100 } />
                            </Box>
                            <Box className="cart-detail">
                                <Box className="cart-detail-text">
                                    <Typography variant='title4'>Mango Coconut Entremet Cake</Typography>
                                    <Typography variant='blog-date'>{ "Weight: 500g, Color: Red, Stock: instock." }</Typography>
                                </Box>
                                <Box className="cart-detail-total">
                                    <Typography variant='h5' className="price-cart">$20</Typography>
                                    <Fab className='social-action'>
                                        <Trash2 color={ ColorStyles.Foundation.baseColor.black } size={ 20 } />
                                    </Fab>
                                </Box>
                            </Box>
                        </Stack>
                        { isExtraSpecial === true && <ExtralSpeacial /> }
                    </Box>
                    <Box className="mini-cart-list-item">
                        <Stack direction="row" alignItems="center" spacing={ 2.5 }>
                            <Box className="image-cart">
                                <Image src="/image/product1.jpg" alt="product1.jpg" width={ 138 } height={ 100 } />
                            </Box>
                            <Box className="cart-detail">
                                <Box className="cart-detail-text">
                                    <Typography variant='title4'>Mango Coconut Entremet Cake</Typography>
                                    <Typography variant='blog-date'>{ "Weight: 500g, Color: Red, Stock: instock." }</Typography>
                                </Box>
                                <Box className="cart-detail-total">
                                    <Typography variant='h5' className="price-cart">$20</Typography>
                                    <Fab className='social-action'>
                                        <Trash2 color={ ColorStyles.Foundation.baseColor.black } size={ 20 } />
                                    </Fab>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
                <Box className="checkout">
                    <Box className='total-price'>
                        <Box className='total-price-item'>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant='body10'>Total:</Typography>
                                <Typography variant='body11'>$40</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant='body12'>Delivery Charge: </Typography>
                                <Typography variant='body11'>$10</Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant='body13'>Delivery Charge: </Typography>
                                <Typography variant='h5'>$50</Typography>
                            </Stack>
                        </Box>
                    </Box>
                    <Stack direction="column" gap={ 2 } alignItems="center">
                        <Link href="/checkout"><Button variant='btn-shopcart-1'>PROCEED TO CHECKOUT</Button></Link>
                        <Link href="/cart">
                            <Button variant='btn-shop-2'><Typography variant='title-button'>VIEW CART</Typography></Button>
                        </Link>
                    </Stack>
                </Box>
            </Box>
            <CheckoutGuest open={ openLogin } toggleDrawer={ toggleLogin } />
        </Drawer>

    );
};

export default MiniCartPopup;