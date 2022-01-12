import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ThemeProvider } from "@material-ui/core";
import { MuiThemeProvider as ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "./Theme";

const theme = Theme();

render(
  <ThemeProvider theme={theme}>
    <CssBaseline enableColorScheme />
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
