import SlickDots from "@components/CustomSlickSlider/SlickDots";
import SliderArrows from "@components/CustomSlickSlider/SliderArows";
import Reviews from "@components/Reviews";
import { Box } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SlickReviews = ( { review } ) => {
    const slider = useRef( null );
    const settings = {
        className: "slick-reviews-item",
        centerMode: true,
        infinite: true,
        arrows: false,
        dots: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        appendDots: dots => <SlickDots dots={ dots } position="relative" />,
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
        <Box className="slick-reviews">
            <Slider ref={ slider } { ...settings }>
                { review.map( ( item, index ) => <Reviews review={ item } key={ `reviews-${ index }` } /> ) }
            </Slider>
            <Box className="arows-items-white padding-top">
                <Box onClick={ () => slider?.current?.slickPrev() }><SliderArrows type={ 3 } arrows="left" /></Box>
                <Box onClick={ () => slider?.current?.slickNext() }><SliderArrows type={ 3 } arrows="right" /></Box>
            </Box>
        </Box>
    );
};

export default SlickReviews;