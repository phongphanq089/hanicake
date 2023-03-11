import { Box, Button, Modal } from "@mui/material";
import { ChevronLeft, ChevronRight } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import { useState } from "react";
import SliderSlick from "../SlickSlider";

const ProductImageDetail = ( { productDetail, isMobile } ) => {
    const [ open, setOpen ] = useState( false );

    const handleOpen = () => setOpen( true );

    const handleClose = () => setOpen( false );

    const [ model, setModel ] = useState( false );

    const [ TempImg, setTempImg ] = useState( "/image/productDetail.jpg" );

    const getImage = ( src ) => {
        setTempImg( src );
        setModel( true );
    };

    const [ selected, setSelected ] = useState( 0 );

    const Tlenght = productDetail.gellery.length;

    const settings = {
        className: "slick-detail",
        dots: false,
    };


    const html_renderMobile = productDetail.gellery.map( ( item, index ) => {
        return (
            <Box className="product-detail-slick" key={ `product-detail-image-${ index }` }>
                <Image src={ item.image } alt="product-image" width={ 600 } height={ 400 } />
            </Box>
        );
    } );
    const html_product_image = productDetail.gellery.map( ( item, index ) => {
        return (
            <Box className="product-detail-image" key={ `product-detail-image-${ index }` } onClick={ () => getImage( item.image ) }>
                <Image src={ item.image } alt="product-image" width={ 600 } height={ 400 } />
            </Box>
        );
    } );
    return (
        <>
            {
                isMobile === true ? <SliderSlick settings={ settings } className="arows-items-white arows-items-gap" type={ 3 }>{ html_renderMobile }</SliderSlick>
                    :
                    <>
                        <Box className="product-detail-image" onClick={ handleOpen }>
                            <Image src={ TempImg } alt="product-image" width={ 584 } height={ 400 } />
                        </Box>
                        <SliderSlick
                            settings={ { className: "slick-image-item", dots: false, focusOnSelect: true, slidesToShow: 3, speed: 0 } }
                            className="arows-items-white" type={ 3 } slickSlider="slider-slick">

                            { html_product_image }
                        </SliderSlick>
                    </>
            }
            <Modal
                open={ open }
                onClose={ handleClose }
            >
                <Box className="Popup-item-image-detail">
                    <Box className="popup-content">
                        <Image src={ productDetail.gellery[ selected ].image } alt="" width={ 300 } height={ 300 } />
                        <Button
                            className="popup-content-btn-prev"
                            variant="default"
                            onClick={ () => selected === 0 ? setSelected( Tlenght - 1 ) : setSelected( prev => prev - 1 ) }
                        >
                            <ChevronLeft />
                        </Button>
                        <Button
                            className="popup-content-btn-next"
                            variant="default"
                            onClick={ () => selected === Tlenght - 1 ? setSelected( 0 ) : setSelected( prev => prev + 1 ) }
                        >
                            <ChevronRight />
                        </Button>
                    </Box>

                </Box>
            </Modal>
        </>
    );
};

export default ProductImageDetail;