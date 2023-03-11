import { Box, Button, Container, FormControl, OutlinedInput, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Contact = () => {
    const handleSubmit = ( event ) => {
        event.preventDefault();
        const data = new FormData( event.currentTarget );
        console.log( {
            email: data.get( "email" ),
            password: data.get( "password" ),
        } );
    };

    return (
        <Container className="contact">
            <Box className="contact-banner-map">
                <Image src="/map.jpg" alt="contact-map" width={ 1200 } height={ 310 } />
            </Box>
            <Box className="form-contact">
                <Box className="form-contact-title">
                    <Typography variant="h2">Contact With us</Typography>
                    <Stack direction="column" spacing={ 1 } alignItems="start" mt={ 2 }>
                        <Typography variant="lable1">Representatives or Advisors are available:</Typography>
                        <Typography variant="lable1">Mon-Fri: 5:00am to 9:00pm</Typography>
                        <Typography variant="lable1">Sat-Sun: 6:00am to 9:00pm</Typography>
                    </Stack>
                    <Image src="/image/cake-contact.jpg" alt="cake-contact.jpg" width={ 88 } height={ 100 } className="cake-contact" />
                </Box>
                <Box component="form" onSubmit={ handleSubmit } noValidate>
                    <Box className="form-item">
                        <FormControl className="custom-form-validate">
                            <OutlinedInput required={ true } placeholder="First name" type="name" />
                        </FormControl>
                        <FormControl className="custom-form-validate">
                            <OutlinedInput required={ true } placeholder="Email *" type="email" />
                        </FormControl>
                    </Box>
                    <FormControl className="custom-form-message-validate">
                        <OutlinedInput multiline={ true } minRows={ 4 } placeholder="Message" type="message" />
                    </FormControl>
                    <Button variant="btn-shopcart-1" type="submit"><Typography variant="body15">Send us</Typography></Button>
                </Box>
            </Box>
        </Container>
    );
};

Contact.layout = "Front";
export default Contact;