import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SlickDots from '../components/CustomSlickSlider/SlickDots';
import SliderArrows from '../components/CustomSlickSlider/SliderArows';

const OninstagramSlick = ( { onInstagram } ) => {
    const slider = useRef( null );
    const settings = {
        infinite: true,
        arrows: false,
        dots: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        appendDots: dots => <SlickDots dots={ dots } />
    };

    return (
        <Box className='slick-on-instagram'>
            <Slider ref={ slider } { ...settings }>
                {
                    onInstagram.map( ( item, index ) =>
                        <Box className="slick-on-instagram-item" key={ `on-instagram-${ index }` }>
                            <Link href="#"> <Image src={ item.image } alt={ `instagram-${ index }` } width={ 538 } height={ 380 } /></Link>
                        </Box> )
                }
            </Slider>
            <Box className="arows-items-white">
                <Box onClick={ () => slider?.current?.slickPrev() }><SliderArrows type={ 3 } arrows="left" /></Box>
                <Box onClick={ () => slider?.current?.slickNext() }><SliderArrows type={ 3 } arrows="right" /></Box>
            </Box>
        </Box>
    );
};

const Oninstagram = ( { onInstagram, isMobile } ) => {

    if ( isMobile === true ) return <OninstagramSlick onInstagram={ onInstagram } />;

    return (
        <Box className='on-instagram'>
            <Box className='on-instagram-image'>
                {
                    onInstagram.map( ( item, index ) =>
                        <Box className="on-instagram-item" key={ `on-instagram-${ index }` }>
                            <Link href="#"><Image src={ item.image } alt={ `instagram-${ index }` } width={ 538 } height={ 380 } /></Link>
                        </Box> )
                }
            </Box>
        </Box>
    );
};

export default Oninstagram;