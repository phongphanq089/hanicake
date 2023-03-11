
import SlickDots from '@components/CustomSlickSlider/SlickDots';
import { Box } from '@mui/material';
import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderArrows from "./CustomSlickSlider/SliderArows";

const SliderSlick = ( { children, ...props } ) => {
    const slider = useRef( null );
    const settings = Object.assign( {
        centerMode: true,
        infinite: true,
        arrows: false,
        dots: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        appendDots: dots => <SlickDots dots={ dots } />
    }, props.settings );

    return (
        <Box className={ props.slickSlider }>
            <Slider ref={ slider } { ...settings }>
                { children }
            </Slider>
            <Box className={ props.className }>
                <Box className='arrow-left' onClick={ () => slider?.current?.slickPrev() }><SliderArrows type={ props.type } arrows="left" /></Box>
                <Box className='arrow-right' onClick={ () => slider?.current?.slickNext() }><SliderArrows type={ props.type } arrows="right" /></Box>
            </Box>
        </Box>
    );
};
export default SliderSlick;
