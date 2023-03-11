import Banner from "@components/Banner";
import { workshop } from "@data/Workshop";
import { Box, Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import breakpoints from "@theme/Breakpoints";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function usePagination( data, itemsPerPage ) {
    const [ currentPage, setCurrentPage ] = useState( 1 );
    const maxPage = Math.ceil( data.length / itemsPerPage );

    function currentData() {
        const begin = ( currentPage - 1 ) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice( begin, end );
    }

    function next() {
        setCurrentPage( currentPage => Math.min( currentPage + 1, maxPage ) );
    }

    function prev() {
        setCurrentPage( currentPage => Math.max( currentPage - 1, 1 ) );
    }

    function jump( page ) {
        const pageNumber = Math.max( 1, page );
        setCurrentPage( currentPage => Math.min( pageNumber, maxPage ) );
    }

    return { next, prev, jump, currentData, currentPage, maxPage };
}

const WorkShop = () => {
    const maxWidth = breakpoints.values.lg;

    let [ page, setPage ] = useState( 1 );
    const PER_PAGE = 8;

    const count = Math.ceil( workshop.length / PER_PAGE );
    const _workshop = usePagination( workshop, PER_PAGE );

    const handleChange = ( e, p ) => {
        setPage( p );
        _workshop.jump( p );
    };

    return (
        <Box>
            <Banner
                image="/banner-workshop.jpg"
                title="WORKSHOP"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit."
                isBannerProduct
                maxWidth={ maxWidth }
            />
            <Container className='muiContainer-page page-work-shop'>
                <Box className='block-item page-work-shop-news'>
                    <Grid container spacing={ 4 }>
                        {
                            _workshop.currentData().map( ( item, index ) => {
                                return (
                                    <Grid item xs={ 12 } sm={ 4 } md={ 3 } key={ `work-shop-${ index }` }>
                                        <Box className="page-work-shop-item">
                                            <Box className="page-work-shop-item-image">
                                                <Link href={ `/workshop/${ item.description }` }><Image src={ item.image } alt={ item.title } width={ 276 } height={ 246 } /></Link>
                                            </Box>
                                            <Stack direction="column" alignItems="start" spacing={ 1 }>
                                                <Typography variant="body8">{ item.title }</Typography>
                                                <Link href={ `/workshop/${ item.description }` }><Typography variant="title1">{ item.description }</Typography></Link>
                                            </Stack>
                                        </Box>
                                    </Grid>
                                );
                            } )
                        }
                    </Grid>
                </Box>
                <Box className="panigation">
                    <Pagination variant="outlined" shape="rounded" count={ count } size="large" page={ page } onChange={ handleChange } />
                </Box>
            </Container>
        </Box>
    );
};

WorkShop.layout = "Front";
export default WorkShop;