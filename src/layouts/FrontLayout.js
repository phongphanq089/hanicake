import { MainWrapper, PageWrapper } from '@components/Layouts';
import axiosClient from '@configs/axios';
import Footer from '@elements/Footer';
import Header from '@elements/Header';
import Loading from '@elements/Loading';
import { useSetting } from '@hooks/setting';
import { Container, useMediaQuery } from '@mui/material';
import { setOptions } from '@slices/setting';
import breakpoints from '@theme/Breakpoints';
import { ColorStyles } from '@theme/Designs';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const FrontLayout = ( { children } ) => {
    const isMobile = useMediaQuery( ( theme ) => theme.breakpoints.down( 'lg' ) );
    const [ favicon, getSetting, setSetting ] = useSetting(
        'themeOption.favicon',
        '/favicon.svg',
        'url'
    );

    const loadingSite = getSetting( 'loading' );
    const dispatch = useDispatch();
    useEffect( () => {
        const settings = async () => {
            await axiosClient.get( '@/settings' ).then( ( res ) => {
                dispatch( setOptions( res.data ) );
            } );
        };
        if ( !loadingSite ) settings();
    }, [ dispatch, loadingSite ] );
    if ( !loadingSite ) return <Loading loadSite={ true } />;

    return (
        <MainWrapper>
            <Header
                isMobile={ isMobile }
                maxWidth={ breakpoints.values.lg }
            />
            <PageWrapper display='flex'>
                <Container
                    maxWidth={ false }
                    sx={ {
                        px: '0!important',
                        backgroundColor: ColorStyles.Foundation.baseColor.white,
                        width: '100%',
                    } }>
                    { children }
                </Container>
            </PageWrapper>
            <Footer maxWidth={ breakpoints.values.lg } />
        </MainWrapper>
    );
};
