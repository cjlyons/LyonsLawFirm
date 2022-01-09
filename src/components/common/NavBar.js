import React, { useState, useEffect } from "react";
import {
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Pages from "../Pages";
import Theme from "../../Theme";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink, useLocation } from "react-router-dom";

const theme = Theme();
const useStyles = makeStyles({
  tabs: {
    color: theme.palette.text.header,
    "& .Mui-selected": {
      color: theme.palette.text.header,
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
});

export function DesktopNavBar() {
  const location = useLocation();
  const pages = Pages();
  const navigate = useNavigate();
  const [value, setValue] = React.useState("/");
  useEffect(() => {
    console.log(location.pathname);
    setValue(location.pathname);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  const classes = useStyles();

  return (
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
  );
}

export function MobileNavBar() {
  const [state, setState] = useState({
    drawerOpen: false,
  });
  const { drawerOpen } = state;
  const pages = Pages();
  const classes = useStyles();
  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));
  return (
    <Toolbar className={classes.toolbar}>
      <IconButton
        {...{
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleDrawerOpen,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
        <div className={classes.drawerContainer}>
          <Link component={RouterLink} to="/" key="Home">
            <MenuItem>Home</MenuItem>
          </Link>
          {pages.map((page) => (
            <Link component={RouterLink} to={page.path} key={page.name}>
              <MenuItem>{page.name}</MenuItem>
            </Link>
          ))}
        </div>
      </Drawer>
    </Toolbar>
  );
}
