import Banner from '@components/Banner';
import BlockTitle from '@components/BlockTitle';
import BoxIcon from '@components/BoxIcon';
import { blogItem, boxIcon, onInstagram, product, productCake, review, specialItem } from '@data/homePage';
import Blog from '@elements/Blog';
import Oninstagram from '@elements/Oninstagram';
import ProductCakes from '@elements/ProductCakes';
import SlickProductCake from '@elements/SlickProductCake';
import SlickProductsFavourites from '@elements/SlickProductFavourites';
import SlickReviews from '@elements/SlickReviews';
import { Box, Container, useMediaQuery } from "@mui/material";
import breakpoints from '@theme/Breakpoints';
import { ColorStyles } from '@theme/Designs';

export default function Index() {
    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'sm' ) );
    const maxWidth = breakpoints.values.lg;
    return (
        <Box>
            <Banner title="Happy New Year" image="/banner.jpg" description="Discover Our Festive  Range" isbannerHome maxWidth={ maxWidth } />

            <Container className='muiContainer-page'>
                <ProductCakes isMobile={ isMobile } specialItem={ specialItem } />
            </Container>

            <Container className='muiContainer-page'>
                <Box className='block-item'>
                    <BlockTitle text="OUR CUSTOMERS FAVOURITE" className="title-customer" />
                    <SlickProductsFavourites product={ product } />
                </Box>
            </Container>

            <Box backgroundColor={ ColorStyles.Foundation.brown[ 100 ] }>
                <Container className='muiContainer-page'>
                    <Box className='block-item'>
                        <BlockTitle text="MORE WAYS TO ENJOY" />
                        <SlickProductCake productCake={ productCake } />
                    </Box>
                </Container>
            </Box>

            <Box className='muiContainer-page'>
                <Box className='block-item'>
                    <BlockTitle text="SWEET TALK" />
                    <SlickReviews review={ review } />
                </Box>
            </Box>

            <Container className='muiContainer-page'>
                <Box className='block-item'>
                    <BlockTitle text="BLOG" />
                    <Blog blogItem={ blogItem } isMobile={ isMobile } />
                </Box>
            </Container>

            <Container className='muiContainer-page'>
                <Box className='block-item'>
                    <BlockTitle text="OUR BEST SELLERS" />
                    <SlickProductsFavourites product={ product } />
                </Box>
            </Container>

            <Box className='muiContainer-page'>
                <Box className='block-item'>
                    <BlockTitle text="FIND US ON INSTAGAM" />
                    <Oninstagram onInstagram={ onInstagram } isMobile={ isMobile } />
                </Box>
            </Box>
            <Container>
                <Box className='box-icon'>
                    <BoxIcon boxIcon={ boxIcon } />
                </Box>
            </Container>
        </Box>
    );
}

Index.layout = "Front";