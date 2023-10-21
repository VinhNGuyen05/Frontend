import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../../styles/HeaderStyles.css";
import CartPopup from "../Popover/CartPopup";
import { useCart } from "../../Config/CartConText";
const Header = () => {
  const { cart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);

  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const handleCartClick = (event) => {
    setCartAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setCartAnchorEl(null);
  };
  const cartOpen = Boolean(cartAnchorEl);
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Shop</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box sx={{ display: "flex-grow", justifyContent: "space-between" }}>
        <AppBar component={"nav"} sx={{ bgcolor: "#EBFFD7" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={"goldenrod"} variant="h6" component="div">
              <img src={Logo} alt="logo" height={"40"} width="170" />
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexGrow: 15,
                justifyContent: "center",
              }}
            >
              <ul
                className="navigation-menu"
                style={{ listStyle: "none", padding: 0 }}
              >
                <li>
                  <NavLink
                    activeClassName="active"
                    to={"/"}
                    style={{ color: "black" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"} style={{ color: "black" }}>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/about"} style={{ color: "black" }}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"} style={{ color: "black" }}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </Box>
            <Box
              sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
            >
              <IconButton onClick={handleCartClick} style={{ color: "black" }}>
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <CartPopup
                open={cartOpen}
                anchorEl={cartAnchorEl}
                handleClose={handleCartClose}
              />
              <IconButton style={{ color: "black" }}>
                <SearchIcon />
              </IconButton>
              <NavLink to={"/login"}>
                <IconButton style={{ color: "black" }}>
                  <AccountCircleOutlinedIcon />
                </IconButton>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
