import SliderArrows from "@components/CustomSlickSlider/SliderArows";
import SliderItem from "@components/SliderItem";
import { Box } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SlickProductCake = ( { productCake } ) => {
    const slider = useRef( null );
    const settings = {
        className: "slick-product-cake-item",
        dots: false,
        centerMode: true,
        infinite: true,
        arrows: false,
        centerPadding: "0",
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: breakpoints.values.md,
                settings: {
                    slidesToShow: 2,
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
        <Box className="slick-product-cake">
            <Slider ref={ slider } { ...settings }>
                { productCake.map( ( item, index ) => <SliderItem productCake={ item } key={ `product-cake-${ index }` } /> ) }
            </Slider>
            <Box className="arows-items-default padding-top">
                <Box onClick={ () => slider?.current?.slickPrev() }><SliderArrows arrows="left" /></Box>
                <Box onClick={ () => slider?.current?.slickNext() }><SliderArrows arrows="right" /></Box>
            </Box>
        </Box>
    );
};

export default SlickProductCake;