import { Box } from "@mui/material";

const SlickDots = ( { dots, ...props } ) => {
    props = {
        className: "slick-dots",
        ...props,
    }
    
    return <Box { ...props }>{ dots }</Box>;
};

export default SlickDots;