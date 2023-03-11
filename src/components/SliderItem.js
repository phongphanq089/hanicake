import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const SliderItem = ( { productCake, ...props } ) => {
    return (
        <Box className='slider-item' >
            <Link href="#"><Image src={ productCake.image } alt={ productCake.title } width={ 380 } height={ 300 } /></Link>
            <Stack direction="column" spacing={ 2.5 } alignItems="center">
                <Link href="#"><Typography variant="h3" > { productCake.title } </Typography></Link>
                <Typography variant="description" > { productCake.description } </Typography>
                <Link href="/categories"><Button variant="ButtonShop">SHOP NOW</Button></Link>
            </Stack>
        </Box>
    );
};

export default SliderItem;