import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import ShopingCartIcon from './ShopingCartIcon';

const Reviews = ( { review } ) => {
    return (
        <Box className="reviews" >
            <Box className="reviews-content">
                <ShopingCartIcon icon={ review.icon } />
                <Typography variant="body3">
                    { review.text }
                </Typography>
                <Box className="reviews-content-boder">
                    <Link href="#"><Typography variant="h6">{ review.name }</Typography></Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Reviews;