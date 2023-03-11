import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ( { blogItem, ...props } ) => {
    return (
        <Box className="blog-item" >
            <Link href="#"><Image src={ blogItem.image } alt={ blogItem.title } width={ 583 } height={ 380 } className="blog-item-image" /></Link>
            <Stack spacing={ 2 } className="blog-item-content">
                <Link href="#">
                    <Typography variant="blog-title">
                        { blogItem.title }
                    </Typography>
                </Link>
                <Typography variant="blog-date">
                    { blogItem.date }
                </Typography>
            </Stack>
        </Box>

    );
};

export default BlogItem;