import BlockTitle from "@components/BlockTitle";
import CartShopingItem from "@components/CartShopingItem";
import { cartShoppingItem } from "@data/pageCategories";
import CheckoutGuest from "@elements/CheckoutGuest";
import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { ChevronLeft } from "feather-icons-react/build/IconComponents";
import Link from "next/link";
import { useState } from "react";

const Cart = () => {

    const [ open, setOpen ] = useState( false );
    const toggleDrawer = event => {
        setOpen( !open );
    };
    return (
        <Box>
            <Container className='muiContainer-page'>
                <Box className='block-item'><BlockTitle text="MY SHOPPING CART" /></Box>
                <Grid container spacing={ 4 } className="cart-shopping" bp={ 4 } >
                    <Grid item xs={ 12 } sm={ 7 } md={ 8 }  >
                        { cartShoppingItem.map( ( item, index ) => <CartShopingItem cartShoppingItem={ item } key={ `cart-shoping-${ index }` } /> ) }
                    </Grid>
                    <Grid item xs={ 12 } sm={ 5 } md={ 4 }>
                        <Stack direction="column" spacing={ 4 } alignItems="center" >
                            <Box className="checkout">
                                <Typography variant='title2'> PAYMENT SUMMARY</Typography>
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
                                <Button fullWidth variant='btn-shopcart-1' onClick={ toggleDrawer }>PROCEED TO CHECKOUT</Button>
                            </Box>
                            <Box className="enter-code">
                                <Typography variant='title2'>APPLY DISCOUNT CODE</Typography>
                                <TextField fullWidth focused variant="standard" placeholder="Enter coupon" className="enter-code-form"
                                    InputProps={ {
                                        endAdornment: ( <Button variant='btn-input'>Apply</Button>)
                                    } } />
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
                <Link href="/categories" className='continue-shoping'>
                    <Stack direction="row" spacing={ 0.5 } alignItems="center" justifyContent="center">
                        <ChevronLeft color={ ColorStyles.Foundation.YellowBrown[ 500 ] } />
                        <Typography variant='continue'>CONTINUE SHOPPING</Typography>
                    </Stack>
                </Link>
            </Container>
            <CheckoutGuest open={ open } toggleDrawer={ toggleDrawer } />
        </Box>
    );
};

Cart.layout = "Front";
export default Cart;