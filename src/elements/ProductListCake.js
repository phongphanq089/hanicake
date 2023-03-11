
import ProductFilter from '@components/ProductFilter';
import ProductItem from '@components/ProductItem';
import { Box, Button, Grid } from '@mui/material';

const ProductListCake = ( { productList, isMobile } ) => {
    return (
        <Box className='product-list-cake'>
            <ProductFilter />
            <Grid container spacing={ 3 }>
                {
                    productList.map( ( item, index ) => {
                        return (
                            <Grid item xs={ 12 } sm={ 6 } key={ `product-list-cake-${ index }` }><ProductItem product={ item } /></Grid>
                        );
                    } )
                }
            </Grid>
            <Box className='load-more'>
                <Button variant='btn-loadmore-style2' >SEE MORE</Button>
            </Box>
        </Box>
    );
};

export default ProductListCake;