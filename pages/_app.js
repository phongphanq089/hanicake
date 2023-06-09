import { wrapper } from "@configs/store";
import { CacheProvider } from "@emotion/react";
import { BlankLayout } from "@layouts/BlankLayout";
import { FrontLayout } from "@layouts/FrontLayout";
import { FullLayout } from "@layouts/FullLayout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { selectorCustomizer } from "@slices/customizer";
import RTL from "@theme/RTL";
import ThemeSettings from "@theme/ThemeSettings";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import createEmotionCache from "../src/createEmotionCache";
import "../styles/style.scss";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const layouts = {
  Blank: BlankLayout,
  Front: FrontLayout
};

function MyApp( props ) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Gettheme = ThemeSettings();
  const customizer = useSelector( selectorCustomizer );
  const Layout = layouts[ Component.layout ] || FullLayout;
  useEffect( () => {
    document.body.className = pageProps.bodyClass ? pageProps.bodyClass : "";
  } );
  return (
    <CacheProvider value={ emotionCache }>
      <Head>
        <title>{ pageProps.titlePage ? pageProps.titlePage : "Hani Cake" }</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </Head>
      <ThemeProvider theme={ Gettheme }>
        <RTL direction={ customizer.activeDir }>
          <CssBaseline />
          <SessionProvider session={ pageProps.session }>
            <Layout>
              <Component { ...pageProps } />
            </Layout>
          </SessionProvider>
        </RTL>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux( MyApp );
