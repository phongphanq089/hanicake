import { BLACK_THEME, BLUE_THEME, CARHARA_THEME, GREEN_THEME, INDIGO_THEME, ORANGE_THEME, PURPLE_THEME, RED_THEME } from "@configs/constants";
import { createTheme } from "@mui/material/styles";
import { selectorCustomizer } from "@slices/customizer";
import _ from "lodash";
import { useSelector } from "react-redux";
import breakpoints from "./Breakpoints";
import components from "./ComponentOverRide";
import shadows from "./Shadows";
import typography from "./Typoraphy";

// Create a theme instance.
const baseTheme = {
  palette: {
    primary: {
      main: '#03c9d7',
      light: '#e5fafb',
      dark: '#05b2bd',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fb9678',
      light: '#fcf1ed',
      dark: '#e67e5f',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00c292',
      light: '#ebfaf2',
      dark: '#00964b',
      contrastText: '#ffffff',
    },
    danger: {
      main: '#e46a76',
      light: '#fdf3f5',
    },
    info: {
      main: '#0bb2fb',
      light: '#a7e3f4',
    },
    error: {
      main: '#e46a76',
      light: '#fdf3f5',
      dark: '#e45a68',
    },
    warning: {
      main: '#fec90f',
      light: '#fff4e5',
      dark: '#dcb014',
      contrastText: '#ffffff',
    },
    text: {
      secondary: '#777e89',
      danger: '#fc4b6c',
    },
    grey: {
      A100: '#ecf0f2',
      A200: '#99abb4',
      A400: '#767e89',
      A700: '#e6f4ff',
    },
    action: {
      disabledBackground: 'rgba(73,82,88,0.12)',
      hoverOpacity: 0.02,
      hover: 'rgba(0, 0, 0, 0.03)',
    },
    background: {
      default: '#ffffff',
    },
  },
  mixins: {
    toolbar: {
      color: '#949db2',
      '@media(min-width:1280px)': {
        minHeight: '64px',
        padding: '0 30px',
      },
      '@media(max-width:1280px)': {
        minHeight: '64px',
      },
    },
  },
  components,
  shadows,
  typography,
  breakpoints,
};

const themesOptions = [
  {
    name: CARHARA_THEME,
    palette: {
      primary: {
        main: '#08492D',
        light: '#099250',
        dark: '#08492D',
      },
      secondary: {
        main: '#16B364',
        light: '#73E2A3',
        dark: '#16B364',
      },
    },
  },
  {
    name: BLUE_THEME,
    palette: {
      primary: {
        main: '#1a97f5',
        light: '#e6f4ff',
        dark: '#1682d4',
      },
      secondary: {
        main: '#1e4db7',
        light: '#ddebff',
        dark: '#173f98',
      },
    },
  },
  {
    name: GREEN_THEME,
    palette: {
      primary: {
        main: '#00cec3',
        light: '#d7f8f6',
        dark: '#02b3a9',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#066a73',
      },
    },
  },
  {
    name: PURPLE_THEME,
    palette: {
      primary: {
        main: '#7352ff',
        light: '#e5e0fa',
        dark: '#5739d6',
      },
      secondary: {
        main: '#402e8d',
      },
    },
  },
  {
    name: INDIGO_THEME,
    palette: {
      primary: {
        main: '#1e4db7',
        light: '#e6f4ff',
        dark: '#0c399e',
      },
      secondary: {
        main: '#11397b',
      },
    },
  },
  {
    name: ORANGE_THEME,
    palette: {
      primary: {
        main: '#03c9d7',
        light: '#e5fafb',
        dark: '#05b2bd',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#fb9678',
        light: '#fcf1ed',
        dark: '#e67e5f',
        contrastText: '#ffffff',
      },
    },
  },
  {
    name: RED_THEME,
    palette: {
      primary: {
        main: '#ff5c8e',
        light: '#fce6ed',
        dark: '#d43653',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#5e244d',
      },
    },
  },
  {
    name: BLACK_THEME,
    palette: {
      primary: {
        main: '#1c2025',
      },
    },
  },
];

export const BuildTheme = ( config = {} ) => {
  let themeOptions = themesOptions.find( ( theme ) => theme.name === config.theme );
  const customizer = useSelector( selectorCustomizer );

  const baseMode = {
    palette: {
      mode: customizer.activeMode,
      background: {
        default: customizer.activeMode === "dark" ? "#20232a" : "#ffffff",
        dark: customizer.activeMode === "dark" ? "#1c2025" : "#ffffff",
        paper: customizer.activeMode === "dark" ? "#282C34" : "#ffffff",
      },
      text: {
        primary:
          customizer.activeMode === "dark" ? "#e6e5e8" : "rgba(0, 0, 0, 0.87)",
        secondary: customizer.activeMode === "dark" ? "#adb0bb" : "#777e89",
      },
    },
  };
  if ( !themeOptions ) {
    console.warn( new Error( `The theme ${ config.theme } is not valid` ) );
    [ themeOptions ] = themesOptions;
  }

  const theme = createTheme(
    _.merge( {}, baseTheme, baseMode, themeOptions, {
      direction: config.direction,
    } )
  );
  return theme;
};
