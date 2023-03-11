import SliderArrows from "@components/CustomSlickSlider/SliderArows";
import ProductItem from "@components/ProductItem";
import { Box } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import { useRef } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SlickProductsFavourites = ( { product } ) => {
    const slider = useRef( null );
    const settings = {
        className: "slick-product-item",
        dots: false,
        centerMode: true,
        infinite: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "0px",
        speed: 500,
        responsive: [
            {
                breakpoint: breakpoints.values.md,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: breakpoints.values.sm,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <Box className="slick-product" >
            <Slider ref={ slider } { ...settings }>
                { product.map( ( item, index ) => <ProductItem product={ item } key={ `slick-product-${ index }` } /> ) }
            </Slider>
            <Box className="arows-items-default">
                <Box onClick={ () => slider?.current?.slickPrev() }><SliderArrows arrows="left" /></Box>
                <Box onClick={ () => slider?.current?.slickNext() }><SliderArrows arrows="right" /></Box>
            </Box>
        </Box>
    );
};

export default SlickProductsFavourites;