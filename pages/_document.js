import createEmotionServer from "@emotion/server/create-instance";
import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";
import createEmotionCache from "../src/createEmotionCache";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* PWA primary color */ }
                    <meta name="theme-color" content="Hani cake" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;700&family=Josefin+Sans:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async ( ctx ) => {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer( cache );

    ctx.renderPage = () =>
        originalRenderPage( {
            enhanceApp: ( App ) =>
                function EnhanceApp( props ) {
                    return <App emotionCache={ cache } { ...props } />;
                },
        } );

    const initialProps = await Document.getInitialProps( ctx );
    const emotionStyles = extractCriticalToChunks( initialProps.html );
    const emotionStyleTags = emotionStyles.styles.map( ( style ) => (
        <style
            data-emotion={ `${ style.key } ${ style.ids.join( " " ) }` }
            key={ style.key }
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={ { __html: style.css } }
        />
    ) );

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray( initialProps.styles ),
            ...emotionStyleTags,
        ],
    };
};
