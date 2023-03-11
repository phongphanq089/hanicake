import useForm from '@hooks/useForm';
import { Box, Button, FormControl, Typography } from '@mui/material';
import { ColorStyles } from '@theme/Designs';
import { Lock, Mail } from 'feather-icons-react/build/IconComponents';
import Link from 'next/link';
import { CarInput } from './CartInput/CartInput';

const Login = ( { setPage } ) => {
    const { formRef, form, handleChange, hanldeBlur } = useForm(
        {
            email: "",
            password: "",
        },
        {
            email: true,
            password: true,
        }
    );
    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const data = new FormData( event.currentTarget );
    };

    return (
        <Box component="form" noValidate ref={ formRef } onSubmit={ handleSubmit } className='form-login'>
            <Typography variant='h3'>LOGIN</Typography>
            <Typography variant='description7'>Login your accounts </Typography>
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    placeholder="Enter your email"
                    name="email"
                    rules={ {
                        empty: "Your email not empty.",
                        email: "Your email not valid.",
                    } }
                    value={ form.email }
                    onChange={ handleChange }
                    onBlur={ hanldeBlur }
                    startAdornment={ <Mail color={ ColorStyles.Foundation.Neutral[ 700 ] } /> }
                />
            </FormControl>
            <FormControl fullWidth required={ true } className="custom-form-checkout-aguest">
                <CarInput
                    type="password"
                    placeholder="Create a password"
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
                    startAdornment={ <Lock color={ ColorStyles.Foundation.Neutral[ 700 ] } /> }
                />
            </FormControl>
            <Link href="/forgot-password" className='text-forgot-password'>
                <Typography variant="lable1">
                    Forgot Your Password?
                </Typography>
            </Link>
            <Box className='btn-login'>
                <Button variant='btn-shopcart-1' type="submit">LOGIN</Button>
            </Box>
            <Box className='btn-checkout-sign-up'>
                <Typography variant='lable1'>{ "Don't have an account yet?" }</Typography>
                <Button variant='btn-shop-2' onClick={ () => setPage( 'signup' ) } >SIGN UP</Button>
            </Box>
            <Box className='checkout-guest'>
                <Box>
                    <Typography variant='h3'>CHECKOUT AS A GUEST</Typography>
                    <Typography variant='description7'>Process your order by filling your shipping information.</Typography>
                </Box>
                <Button variant='btn-shopcart-1'>ORDER</Button>
            </Box>
        </Box>
    );
};

export default Login;