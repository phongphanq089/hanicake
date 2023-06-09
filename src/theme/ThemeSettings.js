import { selectorCustomizer } from "@slices/customizer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BuildTheme } from "./Theme";

const ThemeSettings = () => {
  const customizer = useSelector( selectorCustomizer );
  const theme = BuildTheme( {
    direction: customizer.activeDir,
    theme: customizer.activeTheme,
  } );
  useEffect( () => {
    document.dir = customizer.activeDir;
  }, [ customizer ] );

  return theme;
};
export default ThemeSettings;
