import React, { useEffect } from "react";
import { makeStyles, IconButton, Link, MenuItem } from "@material-ui/core";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Pages from "../Pages";
import Theme from "../../Theme";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@mui/material/Tooltip";

const theme = Theme();
const useStyles = makeStyles({
  tabs: {
    color: theme.palette.text.header,
    "& .Mui-selected": {
      color: theme.palette.text.header,
    },
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
    <Box sx={{ width: "50%", display: { xs: "none", md: "block" } }}>
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
  );
}

export function MobileNavBar() {
  const pages = Pages();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Box
      sx={{ flexGrow: 0, paddingLeft: 8, display: { xs: "block", md: "none" } }}
    >
      <Tooltip title="Open navigation menu">
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ p: 0 }}
        >
          <MenuIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={() => {
          setAnchorElNav(null);
        }}
        sx={{ mt: "45px" }}
      >
        <MenuItem
          key="/"
          onClick={() => {
            navigate("/");
            setAnchorElNav(null);
          }}
        >
          <Typography>Home</Typography>
        </MenuItem>
        {pages.map((page) => (
          <MenuItem
            key={page.id}
            onClick={() => {
              navigate(page.path);
              setAnchorElNav(null);
            }}
          >
            <Typography>{page.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
