import { Box, Button, Popper, Stack, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { ChevronDown, ChevronUp } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';
import ShopingCartIcon from './ShopingCartIcon';

const ProductFilter = () => {
    const [ filter, setFilter ] = useState( null );

    const [ sort, setSort ] = useState( null );

    const handleClickFilter = ( e ) => {
        setFilter( filter ? null : e.currentTarget );
    };

    const handleClickSort = ( e ) => {
        setSort( sort ? null : e.currentTarget );
    };

    const openfilter = Boolean( filter );

    const opensort = Boolean( sort );

    const id = open ? 'simple-popper' : undefined;
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" className='product-filter' >
            <Box>
                <Button variant='btn-filter-style1' startIcon={ <ShopingCartIcon icon="filter" strokeWidth="1px" /> } onClick={ handleClickFilter }>
                    <Typography variant='body3'>FILTER BY</Typography>
                </Button>
                <Popper
                    id={ id }
                    open={ openfilter }
                    anchorEl={ filter }
                >
                    <Box sx={ { border: 1, p: 1, bgcolor: 'background.paper' } }>
                        <Stack direction="column" spacing={ 1 } alignItems="center">
                            <Typography variant='body5'>isDiscount</Typography>
                            <Typography variant='body5'>isDelivery</Typography>
                            <Typography variant='body5'>All</Typography>
                        </Stack>
                    </Box>
                </Popper>
            </Box>
            <Box>
                <Button onClick={ handleClickSort }
                    endIcon={ opensort ? <ChevronUp color={ ColorStyles.Foundation.baseColor.black } />
                        : <ChevronDown color={ ColorStyles.Foundation.baseColor.black } /> }>
                    <Typography variant='body3'>SORT BY</Typography>
                </Button>
                <Popper
                    id={ id }
                    open={ opensort }
                    anchorEl={ sort }
                >
                    <Box sx={ { border: 1, p: 1, bgcolor: 'background.paper' } }>
                        <Stack direction="column" spacing={ 1 } alignItems="center">
                            <Typography variant='body5'>price from low to high</Typography>
                            <Typography variant='body5'>price from high to low</Typography>
                        </Stack>
                    </Box>
                </Popper>
            </Box>
        </Stack>
    );
};

export default ProductFilter;