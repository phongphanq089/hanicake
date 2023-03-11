import CakeItem from '@components/CakeItem';
import SliderSlick from '@components/SlickSlider';
import { Box, Grid } from '@mui/material';

const Html_desktop = ( { keepBrowsing } ) => {
    return (
        <Grid container className='keep-browsing' spacing={ 4 }>
            {
                keepBrowsing.map( ( item, index ) => {
                    return (
                        <Grid item xs={ 12 } sm={ 4 } className='keep-browsing-item' key={ `keep-browsing-${ index }` } >
                            <CakeItem src={ item.image } className="cake-item" textCake={ item } />
                        </Grid>
                    );
                } )
            }
        </Grid>
    );
};

const KeepBrowsing = ( { keepBrowsing, isMobile } ) => {
    const settings = {
        className: "slick-keep-browsing",
    };
    const html_mobile = keepBrowsing.map( ( item, index ) => {
        return (
            <Box className='keep-browsing' key={ `keep-browsing-${ index }` }  >
                <Box className='keep-browsing-item' >
                    <CakeItem src={ item.image } className="cake-item" textCake={ item } />
                </Box>
            </Box>
        );
    } );
    if ( isMobile === true ) return <SliderSlick settings={ settings } className="arows-items-white" type={ 3 }>{ html_mobile }</SliderSlick>;
    return (
        <Html_desktop keepBrowsing={ keepBrowsing } />
    );
};

export default KeepBrowsing;