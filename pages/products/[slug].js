import BlockTitle from "@components/BlockTitle";
import { product } from "@data/homePage";
import { keepBrowsing, productDetail } from "@data/pageCategories";
import KeepBrowsing from "@elements/KeepBrowsing";
import ProductDetail from "@elements/ProductDetail";
import SlickProductsFavourites from "@elements/SlickProductFavourites";
import { Box, Container, useMediaQuery } from "@mui/material";

const Category = () => {
    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'sm' ) );
    const isMobilePopup = useMediaQuery( ( theme ) => theme.breakpoints.down( 'md' ) );
    return (
        <Box>
            <Container className='muiContainer-page'>
                <Box className='block-item'>
                    <ProductDetail productDetail={ productDetail } isMobile={ isMobile } isMobilePopup={ isMobilePopup } />
                </Box>
            </Container>
            <Container className='muiContainer-page'>
                <Box className='block-item'>
                    <BlockTitle text="YOU MAY ALSO LIKE" className="title-customer" />
                    <SlickProductsFavourites product={ product } />
                </Box>
            </Container>
            <Container className='muiContainer-page'>
                <Box className='block-item'>
                    <BlockTitle text="KEEP BROWSING" />
                    <KeepBrowsing keepBrowsing={ keepBrowsing } isMobile={ isMobile } />
                </Box>
            </Container>
        </Box>
    );
};
Category.layout = "Front";
export default Category;