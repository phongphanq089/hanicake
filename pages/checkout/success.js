import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { CheckCircle } from "feather-icons-react/build/IconComponents";

const CheckoutSuccess = () => {

    return (
        <Container className="myshipment">
            <Box className="myshipment-container">
                <Box className="myshipment-confirmation" >
                    <CheckCircle color={ ColorStyles.Foundation.Success[ 500 ] } size={ 40 } />
                    <Typography variant="body8">Confirmation #DQFDHG5E0</Typography>
                    <Typography variant="body">Thank you Hana Nguyen</Typography>
                </Box>
                <Box className="myshipment-confirmed">
                    <Typography variant="h4">Your Order Is Confirmed</Typography>
                    <Typography variant="heading" >
                        { "We've Accepted Your Order, And We're Getting It Ready, Please Check Your Email To See The Message,.Come Back To This Page For Updates On Your Shipment Status." }
                    </Typography>
                    <Button variant="btn-shop-2">Track order with Shop</Button>
                </Box>
                <Box className="myshipment-customer-information">
                    <Box className="customer-information-header">
                        <Typography variant="title4">Customer Information</Typography>
                    </Box>
                    <Box className="myshipment-customer-information-visa">
                        <Box className="myshipment-customer-information-visa-item">
                            <Stack spacing={ 1 } direction="column" alignItems="start" maxWidth={ 150 }>
                                <Typography variant="body16">Contact information</Typography>
                                <Typography variant="blog-date" textAlign='center'>Hana@gmail.com</Typography>
                            </Stack>
                            <Stack spacing={ 1 }>
                                <Typography variant="body16">Payment Method</Typography>
                                <Stack direction="row" spacing={ 2 }>
                                    <Typography variant="blog-date" className="visa">VISA</Typography>
                                    <Typography variant="blog-date" whiteSpace="nowrap">Ending With 4242</Typography>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box className="myshipment-customer-information-visa-item">
                            <Stack spacing={ 1 } maxWidth={ 150 }>
                                <Typography variant="body16">Shipping address</Typography>
                                <Typography variant="blog-date">{ "151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada" }</Typography>
                            </Stack>
                            <Stack spacing={ 1 }>
                                <Typography variant="body16">Delivery Method</Typography>
                                <Typography variant="blog-date">Home Delivery</Typography>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
                <Button variant='btn_black'>
                    <Typography variant='lable4'>CONTINUE SHOPPING</Typography>
                </Button>
            </Box>
        </Container>
    );
};

CheckoutSuccess.layout = "Front";
export default CheckoutSuccess;