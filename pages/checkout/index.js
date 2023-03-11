import BlockTitle from '@components/BlockTitle';
import ShopingCartIcon from '@components/ShopingCartIcon';
import FormDelivery from '@elements/FormStepsCheckout/FormDelivery';
import FormDining from '@elements/FormStepsCheckout/FormDining';
import FormTakeAway from '@elements/FormStepsCheckout/FormTakeAway';
import Payment from '@elements/FormStepsCheckout/Payment';
import { Box, Button, Container, Fab, Grid, Stack, Step, StepLabel, Stepper, Typography, styled } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { ChevronRight, Trash2 } from 'feather-icons-react/build/IconComponents';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ColorlibStepIconRoot = styled( 'div' )( ( { ownerState } ) => ( {
    backgroundColor: ColorStyles.Foundation.baseColor.white,
    zIndex: 1,
    color: ColorStyles.Foundation.baseColor.white,
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    ...( ownerState.active && {
        backgroundColor: ColorStyles.Foundation.Neutral[ 500 ],
    } ),
    ...( ownerState.completed && {
        backgroundColor: ColorStyles.Foundation.baseColor.white,

    } ),
} ) );

function ColorlibStepIcon( props ) {
    const { active, completed, className } = props;

    const icons = {
        1: <ShopingCartIcon icon="delivery" color={ ColorStyles.Foundation.Success[ 500 ] } />,
        2: <ShopingCartIcon icon="take-a-way" color={ ColorStyles.Foundation.Success[ 500 ] } />,
        3: <ShopingCartIcon icon="dining" color={ ColorStyles.Foundation.Success[ 500 ] } />,
    };

    return (
        <ColorlibStepIconRoot ownerState={ { completed, active } } className={ className }>
            { icons[ String( props.icon ) ] }
        </ColorlibStepIconRoot>
    );
}

// Step titles
const steps = [ "Home Delivery", "Dining", "Take A Way" ];


const MyShipment = () => {

    const [ activeStep, setActiveStep ] = useState( 0 );

    const handleNext = () => {
        setActiveStep( ( prevActiveStep ) => prevActiveStep + 1 );
    };


    const getStepContent = ( step ) => {
        switch ( step ) {
            case 0:
                return <FormDelivery handleNext={ handleNext } />;
            case 1:
                return < FormDining handleNext={ handleNext } />;
            case 2:
                return <FormTakeAway handleNext={ handleNext } />;
            case 3:
                return <Payment />;
            default:
                return "Unknown step";
        }
    };

    return (
        <Container className="muiContainer-page my-shipment">
            <Box className="block-item" >
                <BlockTitle text="MY SHIPMENT" />
                <Box className='breadcrumbs-my-shipment'>
                    <Stack direction="row" alignItems="center" spacing={ 1 }>
                        <Link href="#"><Typography color={ ColorStyles.Foundation.brown[ 500 ] } variant="description5">Cart</Typography></Link>
                        <ChevronRight size={ 25 } color={ ColorStyles.Foundation.brown[ 500 ] } />
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={ 1 }>
                        <Link href="#"><Typography color={ ColorStyles.Foundation.baseColor.black } variant="description5">Infomation</Typography></Link>
                        <ChevronRight size={ 25 } color={ ColorStyles.Foundation.baseColor.black } />
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={ 1 }>
                        <Link href="#"> <Typography color={ ColorStyles.Foundation.Neutral[ 700 ] } variant="description5">Payment</Typography></Link>
                    </Stack>
                </Box>
                <Grid container spacing={ 4 }>
                    <Grid item xs={ 12 } md={ 6 } lg={ 7 } xl={ 8 }>
                        <Box className="contact-information">
                            <Typography variant="h5">Contact information</Typography>
                            <Typography variant="description5">{ "Hana Nguyen (Hanna@gmail.com)" }</Typography>
                            <Typography variant="description5">{ "+91 9645 123456" }</Typography>
                        </Box>
                        <Box className="delivery-method">
                            <Typography variant="title2">Delivery method</Typography>
                            <Typography variant="blog-date">All transactions are secure and encrypted.</Typography>
                        </Box>
                        <Box className="Shipping-address">
                            <Box className="Shipping-address-form">
                                <Stepper activeStep={ activeStep } alternativeLabel >
                                    { steps.map( ( label, index ) => (
                                        <Step key={ label }>
                                            <StepLabel StepIconComponent={ ColorlibStepIcon }>{ label }</StepLabel>
                                        </Step>
                                    ) ) }
                                </Stepper>
                                { getStepContent( activeStep ) }
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={ 12 } md={ 6 } lg={ 5 } xl={ 4 }>
                        <Box className="payment-sumary">
                            <Box className="cart-list">
                                <Box className="mini-cart-list-item">
                                    <Stack direction="row" alignItems="center" spacing={ 2.5 }>
                                        <Box className="image-cart">
                                            <Box className='quantity-cart'>1</Box>
                                            <Image src="/image/product1.jpg" alt="product1.jpg" width={ 138 } height={ 100 } />
                                        </Box>
                                        <Box className="cart-detail">
                                            <Box className="cart-detail-text">
                                                <Typography variant='title4'>Mango Coconut Entremet Cake</Typography>
                                                <Typography variant='blog-date'>{ "Weight: 500g, Color: Red, Stock: instock." }</Typography>
                                            </Box>
                                            <Box className="cart-detail-total">
                                                <Typography variant='h5' className="price-cart">$20</Typography>
                                                <Fab className='social-action'>
                                                    <Trash2 color={ ColorStyles.Foundation.baseColor.black } size={ 20 } />
                                                </Fab>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Box>
                                <Box className="mini-cart-list-item">
                                    <Stack direction="row" alignItems="center" spacing={ 2.5 }>
                                        <Box className="image-cart">
                                            <Box className='quantity-cart'>1</Box>
                                            <Image src="/image/product1.jpg" alt="product1.jpg" width={ 138 } height={ 100 } />
                                        </Box>
                                        <Box className="cart-detail">
                                            <Box className="cart-detail-text">
                                                <Typography variant='title4'>Mango Coconut Entremet Cake</Typography>
                                                <Typography variant='blog-date'>{ "Weight: 500g, Color: Red, Stock: instock." }</Typography>
                                            </Box>
                                            <Box className="cart-detail-total">
                                                <Typography variant='h5' className="price-cart">$20</Typography>
                                                <Fab className='social-action'>
                                                    <Trash2 color={ ColorStyles.Foundation.baseColor.black } size={ 20 } />
                                                </Fab>
                                            </Box>
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                            <Box className="checkout">
                                <Typography variant='title2'> PAYMENT SUMMARY</Typography>
                                <Box className='total-price'>
                                    <Box className='total-price-item'>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Typography variant='body10'>Total:</Typography>
                                            <Typography variant='body11'>$40</Typography>
                                        </Stack>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Typography variant='body12'>Delivery Charge: </Typography>
                                            <Typography variant='body11'>$10</Typography>
                                        </Stack>
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Typography variant='body13'>Delivery Charge: </Typography>
                                            <Typography variant='h5'>$50</Typography>
                                        </Stack>
                                    </Box>
                                </Box>
                                <Button variant='btn-shopcart-1' >PLACE ORDER</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    );
};

MyShipment.layout = "Front";
export default MyShipment;