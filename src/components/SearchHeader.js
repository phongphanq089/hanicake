import { Box, InputAdornment, TextField } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import ShopingCartIcon from "./ShopingCartIcon";

export const SearchInputHeader = () => {
    return (
        <Box className="search-header">
            <TextField
                fullWidth
                focused
                InputProps={ {
                    endAdornment: (
                        <InputAdornment
                            position="end"
                        >
                            <ShopingCartIcon icon="search" strokeWidth="0px" color={ ColorStyles.Foundation.baseColor.white } />
                        </InputAdornment>
                    )
                } }
            />

        </Box>
    );
};