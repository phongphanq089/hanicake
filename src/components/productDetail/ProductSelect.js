import { Autocomplete, Stack, TextField, Typography } from "@mui/material";

const ProductSelect = ( { productDetail } ) => {
    return (
        <Stack direction="row" spacing={ 4 } py={ 4 } className="product-select">
            <Stack direction="column" spacing={ 1 } alignItems="start" className="product-select-item">
                <Typography variant="body9">{ productDetail.attributes.weight }</Typography>
                <Autocomplete
                    value={ productDetail.attributes.settingWeight[ 0 ] }
                    options={ productDetail.attributes.settingWeight }
                    disableCloseOnSelect
                    renderOption={ ( props, option ) => (
                        <Typography { ...props } variant="body5">
                            { option.label }
                        </Typography>
                    ) }
                    sx={ { width: 197 } }
                    renderInput={ ( params ) => <TextField { ...params } /> }
                />
            </Stack>
            <Stack direction="column" spacing={ 1 } alignItems="start" className="product-select-item">
                <Typography variant="body9">{ productDetail.attributes.color }</Typography>
                <Autocomplete
                    value={ productDetail.attributes.settingColor[ 0 ] }
                    options={ productDetail.attributes.settingColor }
                    renderOption={ ( props, option ) => (
                        <Typography { ...props } variant="body5">
                            { option.label }
                        </Typography>
                    ) }
                    sx={ { width: 197 } }
                    renderInput={ ( params ) => <TextField { ...params } /> }
                />
            </Stack>
        </Stack>
    );
};
export default ProductSelect; 