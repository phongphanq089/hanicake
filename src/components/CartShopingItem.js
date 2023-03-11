import { Box, Grid, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { Trash2 } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import AddcountCart from "./AddcountCart";
import ExtralSpeacial from "./ExtralSpeacial";
import ShopingCartIcon from "./ShopingCartIcon";

const ItemCartInfo = ( { cartShoppingItem, ...props } ) => {
    if ( cartShoppingItem === undefined ) return '';

    return (
        <Box { ...props }>
            <Box className="cart-shopping-info-item">
                <Typography variant='title4'>{ cartShoppingItem.title }</Typography>
                <Typography variant='h5' className="price-cart">{ cartShoppingItem.price }</Typography>
            </Box>
            <Typography variant='blog-date'>{ cartShoppingItem.description }</Typography>
        </Box>
    );
};

const CartItemService = ( { options, ...props } ) => {

    return (
        <Box { ...props }>
            {
                options.isDate === false ? "" :
                    <Stack direction="row" alignItems="center" spacing={ 2 } py={ 2 } className="border-cart-service-bottom">
                        <Box><ShopingCartIcon icon="calendar" color={ ColorStyles.Foundation.Success[ 500 ] } /></Box>
                        <Typography variant="service" color={ ColorStyles.Foundation.Success[ 500 ] }>{ "20/01/2023" }</Typography>
                    </Stack>
            }
            {
                options.isTime === false ? "" :
                    <Stack direction="row" alignItems="center" spacing={ 2 } py={ 2 }>
                        <Box><ShopingCartIcon icon="clock" color={ ColorStyles.Foundation.Success[ 500 ] } /></Box>
                        <Typography variant="service" color={ ColorStyles.Foundation.Success[ 500 ] }>{ "09AM - 1PM" }</Typography>
                    </Stack>
            }
            {
                options.isGreettingCard === false ? "" :
                    <Stack direction="row" alignItems="center" spacing={ 2 } py={ 2 } className="border-cart-service-top">
                        <Box ><ShopingCartIcon icon="letter" color={ ColorStyles.Foundation.Success[ 500 ] } /></Box>
                        <Typography variant="service" color={ ColorStyles.Foundation.Success[ 500 ] }>{ "happy birthday John" }</Typography>
                    </Stack>
            }
        </Box>
    );
};

const CountItem = ( { options, ...props } ) => {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" { ...props } >

            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={ 2 } className="setting-count-shopping-extra">
                {
                    options.isExtraSpecial !== true ? "" : <ExtralSpeacial />
                }
                <AddcountCart className="count-item-cart" />
            </Stack>
            <Box className="delete-item">
                <Trash2 color={ ColorStyles.Foundation.baseColor.black } size={ 20 } />
            </Box>
        </Stack>
    );
};

const CartShopingItem = ( { cartShoppingItem } ) => {

    return (
        <Grid container className="cart-item">
            <Grid item xs={ 12 } md={ 5 } className="cart-item-image">
                {
                    cartShoppingItem.image === "" ? "" :
                        <Image src={ cartShoppingItem.image } alt={ cartShoppingItem.title } width={ 244 } height={ 284 } />
                }
            </Grid>
            <Grid item xs={ 12 } md={ 7 }>
                <ItemCartInfo cartShoppingItem={ cartShoppingItem } className="cart-shopping-info" />
                <CartItemService options={ cartShoppingItem.options } className="cart-service" />
                <CountItem options={ cartShoppingItem.options } className="setting-count-shopping" />
            </Grid>
        </Grid>
    );
};

export default CartShopingItem;