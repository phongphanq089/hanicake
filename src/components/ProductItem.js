import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import PopupAddCart from './PopupAddCart';
import ProductItemServices from './ProductItemServices';

/**
 * Display Product Item
 * @param {object} product: Product Info Item
 * @param {object} props
 * @returns DOM React JS
 */
const ProductItemInfo = ( { product, ...props } ) => {
    if ( product === undefined ) return '';

    return (
        <Box { ...props }>
            <Link href={ `/products/${ product.title }` }><Typography variant='title3'>{ product.title }</Typography></Link>
            <Typography variant='description3'>{ product.description }</Typography>
            <Typography variant='h3'>{ product.price }</Typography>
        </Box>
    );
};

/**
 * Display button add to cart
 * @param {object} product: Product Info Item
 * @param {object} options: Options for product item 
 * @param {object} props 
 * @returns 
 */
const ProductItemAddToCart = ( { product, options, ...props } ) => {

    if ( options.isButtonAddToCart !== true ) return '';

    return <PopupAddCart { ...props } />;
};

const ProductItem = ( { product, ...props } ) => {
    return (
        <Grid container className='product-item'>
            <Grid className='product-item-image' item xs={ 12 } sm={ 5 }   >
                <Box>
                    {
                        /* Show Discount */
                        product.isDiscount !== true ? '' :
                            <Box className='product-item-discount'>
                                <Typography variant='body6'>{ `${ product.discount }% OFF` }</Typography>
                            </Box>
                    }

                    {
                        /* Show Image */
                        product.image === '' ? '' :
                            <Link href={ `/products/${ product.title }` }><Image src={ product.image } alt={ product.title } width={ 240 } height={ 155 } /></Link>
                    }
                </Box>
            </Grid>
            <Grid className='product-item-infos' item xs={ 12 } sm={ 7 }>
                { /* Product Item Info */ }
                <ProductItemInfo className='product-item-info' product={ product } />
                { /* Product Item Services */ }
                <ProductItemServices className="product-item-services" options={ product.options } />
                { /* Button Add To Cart */ }
                <ProductItemAddToCart variant='btn_black' product={ product } options={ product.options } />
            </Grid>
        </Grid>
    );
};

export default ProductItem;