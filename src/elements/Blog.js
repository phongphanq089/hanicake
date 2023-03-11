import BlogItem from '@components/BlogItem';
import SlickDots from '@components/CustomSlickSlider/SlickDots';
import SliderArrows from '@components/CustomSlickSlider/SliderArows';
import { Box } from "@mui/material";
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SlickBlogItem = ( { blogItem } ) => {
    const slider = useRef( null );
    const settings = {
        className: "slick-blog-item",
        centerMode: true,
        infinite: true,
        arrows: false,
        dots: true,
        centerPadding: "0px",
        slidesToShow: 1,
        speed: 500,
        appendDots: dots => <SlickDots dots={ dots } />
    };

    return (
        <Box className='slick-blog'>
            <Slider ref={ slider } { ...settings }>
                { blogItem.map( ( item, index ) => <BlogItem blogItem={ item } key={ `blog-item-${ index }` } /> ) }
            </Slider>
            <Box className="arows-items-white">
                <Box onClick={ () => slider?.current?.slickPrev() }><SliderArrows type={ 3 } arrows="left" /></Box>
                <Box onClick={ () => slider?.current?.slickNext() }><SliderArrows type={ 3 } arrows="right" /></Box>
            </Box>
        </Box>
    );
};

const Blog = ( { blogItem, isMobile } ) => {
    if ( isMobile === true ) return <SlickBlogItem blogItem={ blogItem } />;
    return (
        <Box className="Blog">
            { blogItem.map( ( item, index ) => <BlogItem blogItem={ item } key={ `blog-${ index }` } /> ) }
        </Box>
    );
};

export default Blog;