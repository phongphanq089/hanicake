import KeepInTouch from "@components/KeepInTouch";
import SocialItem from "@components/SocialItem";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import FooterMenu from "./FooterMenu";

const Footer = ( { maxWidth } ) => {
    const handleSubmit = async ( event ) => {
        event.preventDefault();
        const data = new FormData( event.currentTarget );
        console.log( {
            email: data.get( "email" ),
        } );
    };
    return (
        <Box id="footer">
            <Box className="footer-header">
                <Grid container sx={ { mx: "auto", maxWidth: maxWidth } }>
                    <Grid item xs={ 12 } md={ 6 } lg={ 6 }>

                        <Typography variant="h2">Keep in touch</Typography>
                        <KeepInTouch handleSubmit={ handleSubmit } />

                        <Typography variant="h3" >Follow Us</Typography>
                        <Stack direction="row" alignItems="center" spacing={ 2 } mt={ 2 }>
                            <SocialItem icon="facebook" url="/" color={ ColorStyles.Foundation.baseColor.black } />
                            <SocialItem icon="twitter" url="/" color={ ColorStyles.Foundation.baseColor.black } />
                            <SocialItem icon="instagram" url="/" color={ ColorStyles.Foundation.YellowBrown[ 100 ] } />
                        </Stack>
                    </Grid>
                    <FooterMenu />
                </Grid>
            </Box>
            <Box className="footer-bottom">
                <Typography variant="body2" >
                    { "© Copyright Hanh's cake. 2022" }
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
