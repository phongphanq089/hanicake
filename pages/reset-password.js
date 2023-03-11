import { CarInput } from "@components/CartInput/CartInput";
import useForm from "@hooks/useForm";
import { Box, Button, Container, Fab, FormControl, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

const ResetPassword = () => {
    const router = useRouter();

    const { formRef, form, handleChange, hanldeBlur } = useForm(
        { email: "" },
        { email: "", }
    );
    return (
        <Container className="forgot-reset-password">
            <Box className="forgot-reset-password-content">
                <Stack direction="column" spacing={ 1 }>
                    <Typography variant="heading2">Reset your password</Typography>
                    <Typography variant="heading">Please enter your new password below.</Typography>
                </Stack>
                <Box component="form" ref={ formRef } noValidate>
                    <FormControl fullWidth required={ true } className="formcontrol">
                        <Typography variant="lable9">New password*</Typography>
                        <CarInput
                            type="password"
                            label="Password"
                            placeholder="Minimum 8 characters with a number and a letter"
                            name="password"
                            rules={ {
                                empty: "Your password not empty.",
                                minLength: {
                                    value: 8,
                                    msg: "Must be at least 8 characters.",
                                },
                            } }
                            value={ form.password }
                            onChange={ handleChange }
                            onBlur={ hanldeBlur }
                        />
                    </FormControl>
                    <FormControl fullWidth required={ true }>
                        <Typography variant="lable9">Retype password*</Typography>
                        <CarInput
                            type="password"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            name="confirm_password"
                            rules={ {
                                empty: "Your confirm password not empty.",
                                compare: {
                                    value: form.password,
                                    msg: "Your confirm password not same password.",
                                },
                            } }
                            value={ form.confirm_password }
                            onChange={ handleChange }
                            onBlur={ hanldeBlur }
                            endAdornment={ <Fab className="action-click"><Typography variant="lable10">Send</Typography></Fab> }
                        />
                    </FormControl>
                    <Button variant="btn-shopcart-1" >
                        <Typography variant="body15">SUBMIT</Typography>
                    </Button>
                </Box>
                <Fab className="action-click" onClick={ () => router.back() }>
                    <Typography variant="lable10">Go back</Typography>
                </Fab>
            </Box>
        </Container>
    );
};

ResetPassword.layout = "Front";
export default ResetPassword;