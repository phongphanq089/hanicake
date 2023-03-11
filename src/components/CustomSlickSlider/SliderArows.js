const { Button } = require( "@mui/material" );
const { ChevronLeft, ChevronRight } = require( "feather-icons-react/build/IconComponents" );

const SliderArrows = ( { arrows, type = 1, ...props } ) => {
    /* Not arrow ? */
    if ( arrows === undefined || arrows === '' ) return '';

    props = {
        variant: `btn-slick-style${ type }`,
        ...props
    };

    if ( arrows === "left" ) return <Button { ...props } ><ChevronLeft /></Button>;
    if ( arrows === "right" ) return <Button { ...props } ><ChevronRight /></Button>;
};
export default SliderArrows;