import { Box, Button, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { ColorStyles } from "@theme/Designs";
import { ChevronRight } from "feather-icons-react/build/IconComponents";
import Image from "next/image";
import Link from "next/link";
import BlockTitle from "./BlockTitle";

/**
 * 
 * @param {object} props
 * @returns 
 */
const TitleBannerProduct = ( { props } ) => {
    if ( props.isBannerProduct ) {
        return (
            <Container className="banner-textProduct">
                <Stack direction="column" alightitems="center">
                    <BlockTitle text={ props.title } />
                    <Typography variant="description4">{ props.description }</Typography>
                </Stack>
            </Container>
        );
    }
};
/**
 * 
 * @param {object} props
 * @returns 
 */
const TitleBannerHome = ( { props } ) => {
    if ( props.isbannerHome ) {
        return (
            <Box className="banner-text" sx={ { maxWidth: props.maxWidth } } >
                <Typography variant="h1" >{ props.title }</Typography>
                <Typography variant="description1">{ props.description }</Typography>
                <Link href="/categories">
                    <Button variant="btn_white" endIcon={ <ChevronRight color={ ColorStyles.Foundation.baseColor.black } strokeWidth="1px" /> }>
                        <Typography variant="body5">SHOP NOW</Typography>
                    </Button>
                </Link>
            </Box>
        );
    }
};

const Banner = ( props ) => {
    return (
        <Box className="banner">
            <Image src={ props.image } alt="banner" width={ 1600 } height={ 564 } priority />
            <TitleBannerHome props={ props } />
            <TitleBannerProduct props={ props } />
        </Box>
    );
};

export default Banner;