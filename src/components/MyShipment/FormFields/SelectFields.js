import { FormControl, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import { useState } from 'react';

const SelectFields = ( props ) => {
    const { data, lable, name } = props;

    const [ personName, setPersonName ] = useState( [] );

    const handleChange = ( event ) => {
        const { target: { value } } = event;
        setPersonName( value );
    };

    return (
        <FormControl className="custome-select-input-data">
            <Typography variant="heading" mb="6px">{ lable }</Typography>
            <Select
                displayEmpty
                value={ personName }
                onChange={ handleChange }
                className="select-input-data"
                input={ <OutlinedInput /> }
            >
                <MenuItem disabled value="">
                    <Typography variant="body5">{ name !== undefined ? name : "" }</Typography>
                </MenuItem>
                { data.map( ( name, index ) => (
                    <MenuItem
                        key={ index }
                        value={ name.label }
                        className="list-item-select"
                    >
                        <Typography variant="body5">{ name.label }</Typography>
                    </MenuItem>
                ) ) }
            </Select>
        </FormControl>
    );
};


export default SelectFields;