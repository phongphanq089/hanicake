import { AppBar, experimentalStyled, Toolbar } from '@mui/material';

export const MainWrapper = ( { children, ...props } ) => {
    const Main = experimentalStyled( 'div' )( ( { theme } ) => ( {
        minHeight: '100vh',
        overflow: 'hidden',
        width: '100%',
        margin: 'auto',
        ...props
    } ) );
    return <Main>{ children }</Main>;
};

export const PageWrapper = ( { children, ...props } ) => {
    const MainPage = experimentalStyled( 'div' )( ( { theme } ) => ( {
        flex: '1 1 auto',
        overflow: 'hidden',
        height: 'fit-content',
        backgroundColor: theme.palette.background.default,
        [ theme.breakpoints.up( 'lg' ) ]: {
            width: '100%'
        },
        [ theme.breakpoints.down( 'lg' ) ]: {
            width: "100%"
        },
        ...props
    } ) );
    return <MainPage id="content">{ children }</MainPage>;
};

export const BlockMenuTop = ( { children, ...props } ) => {
    const BlockMenu = experimentalStyled( "div" )( ( { theme } ) => ( {
        ...props
    } ) );
    return <BlockMenu>{ children }</BlockMenu>;
};


export const BlockAppBar = ( { children, ...props } ) => {
    return <AppBar elevation={ 0 } { ...props }>
        <Toolbar className='main-menu-toolbar'>
            { children }
        </Toolbar>
    </AppBar>;
};