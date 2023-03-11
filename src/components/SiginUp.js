import useForm from "@hooks/useForm";
import { Box, Button, Checkbox, FormControl, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { Calendar } from "feather-icons-react/build/IconComponents";
import { CarInput } from "./CartInput/CartInput";

const SiginUp = ( { setPage } ) => {
    const { formRef, form, handleChange, hanldeBlur } = useForm(
        {
            name: "",
            email: "",
            phone: "",
            password: "",
        },
        {
            name: "",
            email: "",
            phone: "",
            password: "",
        }
    );
    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const data = new FormData( event.currentTarget );
    };

    return (
        <Box component="form" noValidate ref={ formRef } onSubmit={ handleSubmit } className='form-sigin-in'>
            <Typography variant='h3'>CREATE A NEW ACCOUNT</Typography>
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    placeholder="Full name *"
                    name="name"
                    rules={ {
                        empty: "Your name not empty.",
                    } }
                    value={ form.name }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                />
            </FormControl>
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    placeholder="Email Address *"
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
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    placeholder="Phone *"
                    className="form-checkin"
                    name="phone"
                    rules={ {
                        empty: "Your phone not empty.",
                    } }
                    value={ form.phone }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                />
            </FormControl>
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    placeholder="Password *"
                    className="form-checkin"
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
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    placeholder="Date of birth *"
                    className="form-checkin"
                    name=""
                    rules={ {
                        empty: "Your Date of birth not empty.",
                    } }
                    value={ form.date }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                    endAdornment={ <Calendar color={ ColorStyles.Foundation.Neutral[ 700 ] } /> }
                />
            </FormControl>
            <Box className="check-conditions">
                <Stack direction="row" alignItems="center" spacing={ 1 } className="check-conditions-item">
                    <Checkbox />
                    <Typography variant="lable2">Join our mailing list </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={ 1 } className="check-conditions-item">
                    <Checkbox />
                    <Typography variant="lable2">I have read { "&" } agreed <span>Terms { "&" } Conditions *</span></Typography>
                </Stack>
            </Box>
            <Box className="btn-create-acount">
                <Button
                    variant="btn-shopcart-1"
                    type="submit"
                    onClick={ () => setPage( "verify" ) }
                >CREATE A ACCOUNT</Button>
            </Box>
            <Box className="btn-checkout-login">
                <Typography variant="lable1">{ "Don't have an account yet?" }</Typography>
                <Button variant="btn-shop-2" onClick={ () => setPage( "login" ) } >LOGIN</Button>
            </Box>
        </Box>
    );
};

export default SiginUp;