import { CarInput } from "@components/CartInput/CartInput";
import { CarInputMask } from "@components/CartInput/CartInputMask";
import SelectFields from "@components/MyShipment/FormFields/SelectFields";
import { state, states } from "@components/MyShipment/dateSelect";
import useForm from "@hooks/useForm";
import { Box, Button, FormControl, Grid, Stack, Typography } from "@mui/material";


const FormDelivery = ( { handleNext } ) => {
    console.log( handleNext );
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
        <>
            <Box component="form" noValidate ref={ formRef }>
                <Stack direction="column" alignItems="start" mb={ 2 }>
                    <Typography variant="title2">Shipping Address</Typography>
                    <Typography variant="blog-date">All transactions are secure and encrypted.</Typography>
                </Stack>
                <Grid container spacing={ 3 } alignItems="center">
                    <Grid item xs={ 12 }>
                        <SelectFields lable="Country/Region" name="United States" data={ states } />
                    </Grid>
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
                        <FormControl fullWidth required={ true } className="custom-form-validate">
                            <CarInput
                                placeholder="Your Address"
                                label="Address"
                                important="*"
                                name="name"
                                value={ form.name }
                                onChange={ handleChange }
                                onBlur={ hanldeBlur }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <FormControl fullWidth required={ true } className="custom-form-validate">
                            <CarInput
                                placeholder="City *"
                                name="name"
                                label="City"
                                important="*"
                                value={ form.name }
                                onChange={ handleChange }
                                onBlur={ hanldeBlur }
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <SelectFields lable="State *" name="State" data={ state } />
                    </Grid>
                    <Grid item xs={ 12 } md={ 4 }>
                        <FormControl fullWidth required={ true } className="custom-form-validate">
                            <CarInput
                                placeholder="Postal code"
                                label="Postal code"
                                important="*"
                                name="name"
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
        </>

    );
};

export default FormDelivery;