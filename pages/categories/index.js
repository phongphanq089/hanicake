import Banner from "@components/Banner";
import BlockTitle from "@components/BlockTitle";
import { keepBrowsing, productList } from "@data/pageCategories";
import KeepBrowsing from "@elements/KeepBrowsing";
import ProductListCake from "@elements/ProductListCake";
import { Box, Container, useMediaQuery } from "@mui/material";
import breakpoints from "@theme/Breakpoints";

export async function getServerSideProps() {
    const categories = productList;
    const cakeItem = keepBrowsing;

    return {
        props: { categories, cakeItem }
    };
}

const Categories = ( { categories, cakeItem } ) => {
    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'sm' ) );
    const maxWidth = breakpoints.values.lg;
    return (
        <Box>
            <Banner
                image="/banner-product.jpg"
                title="CAKES"
                description="From Chocolate Cakes, to Fruity Cakes, to cheesecakes  and so many more, there is a cake for any celebration and occassion. Why not personalise a special birthday message on your chosen cake to make the celebration extra special."
                isBannerProduct
                maxWidth={ maxWidth }
            />
            <Container className='muiContainer-page'>
                <Box className='block-item'>
                    <ProductListCake productList={ categories } />
                </Box>
            </Container>
            <Container className='muiContainer-page'>
                <Box className='block-item'>
                    <BlockTitle text="KEEP BROWSING" />
                    <KeepBrowsing keepBrowsing={ cakeItem } isMobile={ isMobile } />
                </Box>
            </Container>
        </Box>
    );
};
Categories.layout = "Front";
export default Categories;