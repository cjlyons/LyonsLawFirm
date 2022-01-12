import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Logo from "./logo.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Theme from "../../Theme";
import { DesktopNavBar, MobileNavBar } from "./NavBar";

const theme = Theme();
const useStyles = makeStyles({
  appbar: {
    background: theme.palette.background.header,
    color: theme.palette.text.header,
    fontFamily: theme.typography.header.fontFamily,
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <Box sx={{ paddingBottom: 2 }}>
      <AppBar
        className={classes.appbar}
        position="static"
        sx={{ borderBottom: 2 }}
      >
        <Toolbar>
          <Box
            component="img"
            alt="Lyons Law Firm Logo - Dara Celtic Knot"
            src={Logo}
            sx={{ paddingRight: 4, paddingBottom: 1, paddingTop: 1 }}
          />
          <Typography className={classes.appbar} variant="h4" component="div">
            Lyons Law Firm
          </Typography>
          <DesktopNavBar />
          <MobileNavBar />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
