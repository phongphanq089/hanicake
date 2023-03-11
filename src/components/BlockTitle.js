import { Box, Typography } from "@mui/material";

const BlockTitle = ( { text, ...props } ) => {
    props = {
        className: 'block-title',
        ...props
    };
    return (
        <Box { ...props }>
            <Typography variant="h2">{ text }</Typography>
        </Box>
    );
};

export default BlockTitle;