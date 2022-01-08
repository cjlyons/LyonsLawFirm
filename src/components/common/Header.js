import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Logo from "./logo.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Pages from "../Pages";
import Theme from "../../Theme";

const theme = Theme();
const useStyles = makeStyles({
  appbar: {
    background: theme.palette.background.header,
    color: theme.palette.text.header,
  },
  tabs: {
    color: theme.palette.text.header,
    "& .Mui-selected": {
      color: theme.palette.text.header,
    },
  },
});

export default function Header() {
  const pages = Pages();
  const navigate = useNavigate();
  const [value, setValue] = React.useState("/");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

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
            alt="Your logo."
            src={Logo}
            sx={{ paddingRight: 4, paddingBottom: 1, paddingTop: 1 }}
          />
          <Typography variant="h4" component="div">
            Lyons Law Firm
          </Typography>
          <Box sx={{ width: "50%" }}>
            <Tabs
              TabIndicatorProps={{
                style: { backgroundColor: theme.palette.background.paper },
              }}
              className={classes.tabs}
              value={value}
              onChange={handleChange}
              centered
            >
              <Tab
                className={classes.tabs}
                key="/"
                label="Home"
                value="/"
                component={Link}
              />
              {pages.map((page) => (
                <Tab
                  className={classes.tabs}
                  key={page.name}
                  label={page.name}
                  value={page.path}
                  component={Link}
                />
              ))}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
