import { CarInput } from "@components/CartInput/CartInput";
import { CarInputMask } from "@components/CartInput/CartInputMask";
import useForm from "@hooks/useForm";
import { Box, Button, FormControl, Grid, Stack, Typography } from "@mui/material";

const FormTakeAway = ( { handleNext } ) => {
    const { formRef, form, handleChange, hanldeBlur } = useForm(
        {
            name: "",
            email: "",
            phone: "",
        },
        {
            name: true,
            email: true,
            phone: true,
        }
    );
    return (
        <Box component="form" noValidate ref={ formRef }>
            <Stack direction="column" alignItems="start" mb={ 2 }>
                <Typography variant="title2">take a way</Typography>
                <Typography variant="blog-date">you come to pick it up at the store</Typography>
            </Stack>
            <Grid container spacing={ 3 } alignItems="center">
                <Grid item xs={ 12 }>
                    <FormControl fullWidth required={ true } className="custom-form-validate">
                        <CarInput
                            placeholder="Full name"
                            name="name"
                            label="Full name"
                            important="*"
                            value={ form.name }
                            onChange={ handleChange }
                            onBlur={ hanldeBlur }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={ 12 }>
                    <FormControl fullWidth required={ true } className="custom-form-message-validate">
                        <CarInput
                            placeholder="Your Message"
                            name="name"
                            label="Your Message"
                            important="*"
                            minRows={ 5 }
                            multiline={ true }
                            value={ form.name }
                            onChange={ handleChange }
                            onBlur={ hanldeBlur }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <FormControl fullWidth required={ true } className="custom-form-validate">
                        <CarInputMask
                            label="Phone"
                            name="phone"
                            important="*"
                            placeholder="+91 9645 123456"
                            mask="999-999-9999"
                            maskChar="_"
                            rules={ {
                                empty: "Your phone not empty.",
                                phone: "Your phone not valid.",
                            } }
                            onChange={ handleChange }
                            onBlur={ hanldeBlur }
                            value={ form.phone }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <FormControl fullWidth required={ true } className="custom-form-validate">
                        <CarInput
                            label="Email"
                            important="*"
                            placeholder="hana@gmail.com"
                            name="email"
                            rules={ {
                                empty: "Your email not empty.",
                                email: "Your email not valid.",
                            } }
                            value={ form.email }
                            onChange={ handleChange }
                            onBlur={ hanldeBlur }
                        />
                    </FormControl>
                </Grid>
            </Grid>
            <Button onClick={ handleNext } variant="btn-shop-2" sx={ { mt: "32px", width: "100%", height: "56px" } }>
                <Typography variant="button1">Save infor</Typography>
            </Button>
        </Box>
    );
};

export default FormTakeAway;