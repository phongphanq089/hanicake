import { MainWrapper, PageWrapper } from "@components/Layouts";
import {
  Box, Container, useMediaQuery
} from "@mui/material";
import { selectorCustomizer } from "@slices/customizer";
import React from "react";
import { useSelector } from "react-redux";

export const FullLayout = ( { children } ) => {
  const [ isSidebarOpen, setSidebarOpen ] = React.useState( true );
  const [ isMobileSidebarOpen, setMobileSidebarOpen ] = React.useState( false );
  const customizer = useSelector( selectorCustomizer );
  const lgUp = useMediaQuery( ( theme ) => theme.breakpoints.up( "lg" ) );
  return (
    <MainWrapper display="flex">      
      <PageWrapper>
        <Container
          maxWidth={ false }
          sx={ {
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : "",
          } }
        >
          <Box sx={ { minHeight: "calc(100vh - 170px)" } }>{ children }</Box>
          {/* <Customizer /> */ }
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};
