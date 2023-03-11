import AddcountCart from "@components/AddcountCart";
import PopupAddCart from "@components/PopupAddCart";
import PopupMessege from "@components/productDetail/PopupMessege";
import PopupTime from "@components/productDetail/PopupTime";
import ProductImageDetail from "@components/productDetail/ProductImageDetail";
import ProductSelect from "@components/productDetail/ProductSelect";
import ReviewInfo from "@components/productDetail/ReviewInfo";
import ProductItemServices from "@components/ProductItemServices";
import ShopingCartIcon from "@components/ShopingCartIcon";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import Link from "next/link";
import { useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ProductDetail = ( { productDetail, isMobile, isMobilePopup } ) => {

    const [ openTime, setOpenTime ] = useState( false );
    const [ openMessage, setOpenMessage ] = useState( false );
    const handleOpenTime = () => {
        setOpenTime( true );
    };
    const handleOpenMessage = () => {
        setOpenMessage( true );
    };
    const handleCloseTime = ( event, reason ) => {
        if ( reason !== 'backdropClick' ) {
            setOpenTime( false );
        }
    };
    const handleCloseMessage = ( event, reason ) => {
        if ( reason !== 'backdropClick' ) {
            setOpenMessage( false );
        }
    };
    return (
        <Grid container spacing={ 4 } className="product-detail">
            <Grid item xs={ 12 } sm={ 6 }>
                {/* ====Product image detail ====== */ }
                <ProductImageDetail productDetail={ productDetail } isMobile={ isMobile } />

                <Stack direction="row" alignItems="center" spacing={ 1.6 } className="social-item-link" >
                    <Link href="#"><Typography variant="body3">Share</Typography></Link>
                    <Link href="#"><ShopingCartIcon icon="facebook" /></Link>
                    <Link href="#"><ShopingCartIcon icon="twitter" /></Link>
                </Stack >

                {/* ====if isMobile = false => return ====== */ }
                { isMobile !== true && <ProductItemServices options={ productDetail.options } className="list-item-service-detail" /> }
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
                <Typography variant="h2">{ productDetail.title }</Typography>
                <Typography variant="description2">{ productDetail.description }</Typography>
                <Stack direction="row" alignItems="center" spacing={ 2 } py={ 4 }>
                    <Box className="rating-points">
                        <Typography variant="body5">{ productDetail.ratingPoints }</Typography>
                        <ShopingCartIcon icon="start" width="16px" height="16px" />
                    </Box>
                    <Typography variant="body8">{ productDetail.rating }</Typography>
                </Stack>
                <Box className="price">
                    <Typography variant="price-detail">{ productDetail.price }</Typography>
                </Box>

                {/* ====ProductSelect ====== */ }
                <ProductSelect productDetail={ productDetail } />

                {/* ====Modal ====== */ }
                <Stack direction="column" alignItems="start" className="modal" >
                    <PopupTime open={ openTime } handleClose={ handleCloseTime } handleOpen={ handleOpenTime } isMobilePopup={ isMobilePopup } />
                    <PopupMessege open={ openMessage } handleClose={ handleCloseMessage } handleOpen={ handleOpenMessage } />
                    <Stack direction="row" alignItems="center" spacing={ 2 } className="modal-calendar" onClick={ handleOpenTime }>
                        <ShopingCartIcon icon="calendar" color={ ColorStyles.Foundation.Success[ 500 ] } />
                        <Typography variant="style-popup">Select Delivery date and Time</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={ 2 } className="modal-letter" onClick={ handleOpenMessage }>
                        <ShopingCartIcon icon="letter" color={ ColorStyles.Foundation.Success[ 500 ] } />
                        <Typography variant="style-popup" >Card message</Typography>
                    </Stack>
                </Stack>

                {/* ====Add To Cart ====== */ }
                <Stack direction="row" alignItems="center" spacing={ 3 } py={ 4 } className="add-to-cart">
                    <AddcountCart className="count-item-cart count-item-cart-detail" />
                    <PopupAddCart variant="btn-shopcart-1" />
                </Stack>

                {/* ====if isMobile => return ====== */ }
                { isMobile === true && <Box pb={ 4 }><ProductItemServices options={ productDetail.options } className="list-item-service-detail" /> </Box> }

                {/* ====Review info ====== */ }
                <ReviewInfo productDetail={ productDetail } />
            </Grid>
        </Grid>
    );
};
export default ProductDetail;