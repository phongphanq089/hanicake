import Banner from "@components/Banner";
import SliderSlick from "@components/SlickSlider";
import { Box, Container, Stack, Typography } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import Image from "next/image";

const AboutUs = () => {
    const maxWidth = breakpoints.values.lg;
    const settings = {
        className: "slick-about-us",
        dots: false,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: breakpoints.values.md,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: breakpoints.values.sm,
                settings: { slidesToShow: 1 }
            },
        ]
    };
    return (
        <Box>
            <Banner
                image="/banner-about-us.jpg"
                title="ABOUT US"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                isBannerProduct
                maxWidth={ maxWidth }
            />
            <Container className='muiContainer-page about-us'>
                <Box className='block-item'>
                    <Stack direction="column" alignItems="center" spacing={ 4 } className="about-us-vision">
                        <Box className="about-us-vision-item">
                            <Typography variant="heading2">Our Vision</Typography>
                            <Typography variant="description5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                            </Typography>
                        </Box>
                        <Box className="about-us-vision-item">
                            <Typography variant="heading2">Our Vision</Typography>
                            <Typography variant="description5">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
                <Box className="about-us-image">
                    <SliderSlick settings={ settings } className="arows-items-white arows-items-gap">
                        <Image src="/image/about-us-image1.jpg" alt="about-us-image1.jpg" width={ 379 } height={ 295 } />
                        <Image src="/image/about-us-image-2.jpg" alt="about-us-image2.jpg" width={ 379 } height={ 295 } />
                        <Image src="/image/about-us-image-3.jpg" alt="about-us-image3.jpg" width={ 379 } height={ 295 } />
                        <Image src="/image/about-us-image1.jpg" alt="about-us-image1.jpg" width={ 379 } height={ 295 } />
                        <Image src="/image/about-us-image-2.jpg" alt="about-us-image2.jpg" width={ 379 } height={ 295 } />
                        <Image src="/image/about-us-image-3.jpg" alt="about-us-image3.jpg" width={ 379 } height={ 295 } />
                    </SliderSlick>
                </Box>
            </Container>
        </Box>
    );
};
AboutUs.layout = "Front";
export default AboutUs;