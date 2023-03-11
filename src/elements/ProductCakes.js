import CakeItem from "@components/CakeItem";
import SliderSlick from "@components/SlickSlider";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "next/link";

const SlickProductCakes = ( { specialItem } ) => {
    return (
        <Box className="slick-products-cake" >
            <SliderSlick className="arows-items-white" type={ 3 }>
                {
                    specialItem.map( ( item, index ) => {
                        return (
                            <Box className="slick-products-cake-item" key={ `slick-products-cake-item-${ index }` }>
                                <CakeItem src={ item.image } textCake={ item } height={ 639 } className="cake-item" />
                            </Box>
                        );
                    } )
                }
            </SliderSlick>
        </Box >
    );
};

const ProductCakes = ( { specialItem, isMobile } ) => {
    if ( isMobile === true ) return <SlickProductCakes specialItem={ specialItem } />;
    return (
        <Grid container className="product-cake" spacing={ 4 } >
            <Grid item xs={ 12 } md={ 8 } className="product-cake-item">
                <CakeItem src={ specialItem[ 0 ].image } height={ 639 } className="cake-item" />
                <Link href="/categories" className="title-cake-item"><Typography variant="blog-title">{ specialItem[ 0 ].text }</Typography></Link>
                <Link href="/categories"><Button variant="ButtonShop_1"><Typography variant="button">SHOP NOW</Typography></Button></Link>
            </Grid>
            <Grid item xs={ 12 } md={ 4 }>
                <Stack direction="column" alignItems="center" spacing={ 4.4 } >
                    {
                        specialItem.map( ( item, index ) => {
                            if ( index === 0 ) return "";
                            return (
                                <Box className="product-cake-item" key={ `spcial-item-${ index }` }>
                                    <CakeItem src={ item.image } textCake={ item } height={ 255 } className="cake-item" />
                                </Box>
                            );
                        } )
                    }
                </Stack>
            </Grid>
        </Grid>
    );
};

export default ProductCakes;