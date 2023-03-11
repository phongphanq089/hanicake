import { listFAQ } from "@data/FAQ";
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography } from "@mui/material";
import { ColorStyles } from "@theme/Designs";
import { MinusCircle, PlusCircle } from "feather-icons-react/build/IconComponents";
import { useRouter } from "next/router";
import { useState } from "react";

const FAQ = () => {
    const router = useRouter();

    const [ expanded, setExpanded ] = useState( 0 );

    const handleChange = ( panel ) => ( event, newExpanded ) => {
        setExpanded( newExpanded ? panel : false );
    };
    return (
        <Container className="faq">
            <Box className="faq-content" alignItems='center'>
                <Box className="faq-title">
                    <Typography variant="h2">Frequently asked questions</Typography>
                    <Typography variant="description10">Everything You Need To Know About The Product And Billing.</Typography>
                </Box>
                <Box className="faq-content-questions">
                    {
                        listFAQ.map( ( item, index ) => {
                            return (
                                <Accordion expanded={ expanded === index } onChange={ handleChange( index ) } key={ `workshop-properties-${ index }` }>
                                    <AccordionSummary
                                        expandIcon={ expanded === index ?
                                            <MinusCircle color={ ColorStyles.Foundation.YellowBrown[ 500 ] } />
                                            :
                                            <PlusCircle color={ ColorStyles.Foundation.YellowBrown[ 500 ] } /> }
                                    >
                                        <Typography variant="h5">{ item.title }</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="description5">
                                            { item.description }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            );
                        } )
                    }
                </Box>
            </Box>
            <Box className="faq-content-botom">
                <Typography variant="title2">Still Have Questions?</Typography>
                <Typography variant="lable1">{ "Can't Find The Answer You're Looking For? Please Chat To Our Friendly Team." }</Typography>
                <Button variant="btn-shopcart-1" onClick={ () => router.push( "/contact" ) }><Typography variant="body15">Get In Touch</Typography></Button>
            </Box>
        </Container>
    );
};
FAQ.layout = "Front";
export default FAQ;