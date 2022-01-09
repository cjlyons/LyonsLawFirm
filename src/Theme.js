import { createTheme } from "@material-ui/core";
/*
Use https://bareynol.github.io/mui-theme-creator to help create themes
Use https://www.sessions.edu/color-calculator/ to help define a color pallette

Color     Hex     RGB       RGBA          CMYK
green   #4d7d57 77,125,87   77,125,87,1   38,0,30,51
red     #7d4f4d 125,79,77   125,79,77,1   0,37,38,51
brown   #7d674d 125,103,77  125,103,77,1  0,18,38,51
purple  #524d7d 82,77,125   82,77,125,1   34,38,0,51
gray    #383a35 56,58,53    56,58,53,1     3,0,9,77
*/
export default function Theme() {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#4d7d57",
      },
      secondary: {
        main: "#7d674d",
      },
      text: {
        primary: "#383a35",
        secondary: "#524d7d",
        header: "#FFFFFF",
        footer: "#383a35",
      },
      background: {
        default: "#FFFFFF",
        paper: "#FFFFFF",
        header: "#4d7d57",
        footer: "#EEEEEE",
        pagination: "#4d7d57",
      },
    },
    typography: {
      header: {
        fontFamily: "Roboto, Helvetica, Arial, sans-serif;",
      },
      fontFamily: "Oswald",
      fontSize: 18,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
    },
  });
  return theme;
}
