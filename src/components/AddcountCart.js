import { Button, Stack, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { Minus, Plus } from 'feather-icons-react/build/IconComponents';
import { useState } from 'react';

const AddcountCart = ( props ) => {
    const [ count, setCount ] = useState( 1 );
    return (
        <Stack direction="row" alignItems="center" spacing={ 1 } justifyContent="space-between" { ...props }>
            <Button variant="default"
                onClick={ () => {
                    setCount( Math.max( count - 1, 1 ) );
                } }
            >
                <Minus color={ ColorStyles.Foundation.baseColor.black } />
            </Button>
            <Typography variant="body3">{ count }</Typography>
            <Button variant="default"
                onClick={ () => {
                    setCount( count + 1 );
                } }
            >
                <Plus color={ ColorStyles.Foundation.baseColor.black } />
            </Button>
        </Stack>
    );
};

export default AddcountCart;