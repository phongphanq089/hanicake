import { CarInput } from "@components/CartInput/CartInput";
import useForm from "@hooks/useForm";
import { Box, Button, Container, Fab, FormControl, OutlinedInput, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const ForgotPassword = () => {

    const router = useRouter();

    const { formRef, form, handleChange, hanldeBlur } = useForm(
        {
            email: "",
        },
        {
            email: true,
        }
    );
    return (
        <Container className="forgot-reset-password">
            <Box className="forgot-reset-password-content">
                <Stack direction="column" spacing={ 1 }>
                    <Typography variant="heading2">Forgot your password?</Typography>
                    <Typography variant="heading">Please enter the account that you want to reset the password.</Typography>
                </Stack>
                <Box component="form" ref={ formRef } noValidate>
                    <FormControl fullWidth required={ true } className="formcontrol">
                        <Typography variant="lable9">Email</Typography>
                        <CarInput
                            placeholder="Enter your phone or your email"
                            name="email"
                            rules={ {
                                email: "Your email not valid.",
                            } }
                            value={ form.email }
                            onChange={ handleChange }
                            onBlur={ hanldeBlur }
                        />
                    </FormControl>
                    <FormControl fullWidth required={ true }>
                        <Typography variant="lable9">6 Digits</Typography>
                        <OutlinedInput required={ true }
                            placeholder="6 digits"
                            type="number"
                            endAdornment={ <Fab className="action-click"><Typography variant="lable10">Send</Typography></Fab> } />
                    </FormControl>
                    <Link href="/reset-password"><Button variant="btn-shopcart-1" >
                        <Typography variant="body15">Verify code</Typography>
                    </Button></Link>
                </Box>
                <Fab className="action-click" onClick={ () => router.back() }>
                    <Typography variant="lable10">Go back</Typography>
                </Fab>
            </Box>
        </Container>
    );
};

ForgotPassword.layout = "Front";
export default ForgotPassword;