import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import ShopingCartIcon from './ShopingCartIcon';

const BoxIcon = ( { boxIcon, ...props } ) => {
    props = {
        className: 'box-icon-item',
        ...props
    };
    return (
        <>
            {
                boxIcon.map( ( item, index ) => <Box { ...props } key={ `box-icon-${ index }` }>
                    <Link href="#">
                        <Stack direction="column" spacing={ 4 } alignItems="center" py="64px"  >
                            <ShopingCartIcon icon={ item.icon } width={ 70 } height={ 70 } />
                            <Typography variant="body" textTransform="uppercase" >{ item.text }</Typography>
                        </Stack>
                    </Link>
                </Box> )
            }
        </>
    );
};
export default BoxIcon;