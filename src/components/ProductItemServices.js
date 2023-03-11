import { Box, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import ShopingCartIcon from "./ShopingCartIcon";

/**
 * Display services for product item
 * @param {object} options: Options for product item 
 * @param {object} props 
 * @returns DOM React JS
 */
const ProductItemServices = ( { options, color, disabled = "disabled", ...props } ) => {

    /* Set color for icon */
    const colorDelivery = options.isDelivery === false ? ColorStyles.Foundation.Neutral[ 500 ] : ColorStyles.Foundation.Success[ 500 ];
    const colorisTakeAWay = options.isTakeAWay === false ? ColorStyles.Foundation.Neutral[ 500 ] : ColorStyles.Foundation.Success[ 500 ];
    const colorisDining = options.isDining === false ? ColorStyles.Foundation.Neutral[ 500 ] : ColorStyles.Foundation.Success[ 500 ];

    return (
        <Box { ...props }>
            <Stack direction="row" alignItems="center" spacing={ 2 }>
                <Box><ShopingCartIcon icon="delivery" color={ colorDelivery } /></Box>
                <Typography variant="bodySuccsess" color={ colorDelivery }>{ "Home Delivery" }</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={ 2 }>
                <Box><ShopingCartIcon icon="take-a-way" color={ colorisTakeAWay } /></Box>
                <Typography variant="bodySuccsess" color={ colorisTakeAWay }>{ "Take a way" }</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={ 2 }>
                <Box ><ShopingCartIcon icon="dining" color={ colorisDining } /></Box>
                <Typography variant="bodySuccsess" color={ colorisDining }>{ "Dining" }</Typography>
            </Stack>
        </Box>
    );
};
export default ProductItemServices;