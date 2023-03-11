import { product } from "@data/homePage";
import Popup from "@elements/Popup";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import { ColorStyles } from "@theme/Designs";
import { ShoppingCart } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import { useState } from "react";
import ShopingCartIcon from "./ShopingCartIcon";
import SliderSlick from "./SlickSlider";

const html_render = product.map( ( item, index ) => {
    return (
        <Box className="add-cart-item" key={ `add-cart-popup-${ index }` }>
            <Box py={ 3 } px={ 2 }>
                <Box className="add-cart-image">
                    <Typography variant='body6' className="count">{ `${ item.discount }% OFF` }</Typography>
                    <Image src={ item.image } alt={ item.title } width={ 288 } height={ 162 } />
                </Box>
                <Stack direction="column" spacing={ 1 }>
                    <Typography variant="title3">{ item.title }</Typography>
                    <Typography variant="description3">{ item.description }</Typography>
                    <Typography variant="h3">{ item.price }</Typography>
                </Stack>
            </Box>
        </Box>
    );
} );

const PopupAddCart = ( { ...props } ) => {
    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );

    const [ openAddCart, setOpenAddCart ] = useState( false );

    const handleOpenAddCart = () => {
        setOpenAddCart( true );
    };

    const handleCloseAddCart = ( event, reason ) => {
        if ( reason !== 'backdropClick' ) {
            setOpenAddCart( false );
        }
    };

    const settings = {
        className: "slick-add-cart-popup",
        dots: true,
        slidesToShow: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: breakpoints.values.md,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: breakpoints.values.sm,
                settings: { slidesToShow: 1 }
            },
        ]
    };

    return (
        <>
            <Button { ...props }
                startIcon={ <ShoppingCart color={ ColorStyles.Foundation.baseColor.white } /> }
                onClick={ handleOpenAddCart }>ADD TO CART</Button>
            <Popup open={ openAddCart } handleClose={ handleCloseAddCart } className="Dialog-popup-addCart-succsess" >
                <Box className="popup-add-cart">
                    <Box className="add-cart-succsess">
                        <Stack direction="row" spacing={ 2 } alignItems="center">
                            <ShopingCartIcon icon="check-icon" />
                            <Typography variant="lable8">Add to cart successfully</Typography>
                        </Stack>
                    </Box>
                    <Box py={ 4 }>
                        <Typography variant="blog-title">JUST FOR YOU</Typography>
                        { isMobile !== true ? <Stack direction="row" alignItems="center" spacing={ 4 }> { html_render }</Stack> :
                            <SliderSlick settings={ settings } className="arows-items-white" type={ 3 }>
                                { html_render }
                            </SliderSlick>
                        }
                    </Box>
                    <Button variant="btn-shopcart-1">
                        <Typography variant="lable4">COUNTINUE SHOPPING</Typography>
                    </Button>
                </Box>
            </Popup>
        </>
    );
};

export default PopupAddCart;