import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import "../Styles/Navbar.css";
import { useState } from "react";
import { useEffect } from "react";

const navItems = [
  { Name: "Home", Link: "/" },
  { Name: "About us", Link: "/abou" },
  { Name: "Contact us", Link: "/cont" },
  { Name: "careers", Link: "/career" },
];
export const Navbar = () => {
  const [navbar, setnav] = useState(true);
  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("navbar").style.top = "0";

      setnav(true);
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <div>
      <AppBar
        className="navcontainer"
        id="navbar"
        sx={{
          backgroundColor: "white",
          height: "10vh",
          position: "sticky",
        }}
      >
        <Toolbar
          sx={{
            height: "50vh",
            display: "flex",
          }}
        >
          <IconButton
            disableRipple
            color="black"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none", xs: "5" } }}
          >
            <Menu />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "1", sm: "block", color: "black" },
            }}
          >
            <img
              className="nav-logo"
              src="https://cosecantinc.com/wp-content/uploads/2022/11/Cosecant-1.png "
              alt="nav-logo"
            ></img>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
                color: "black",
                marginRight: "40px",
              },
            }}
          >
            <Button
              disableRipple
              className="stroke"
              sx={{ color: "black", transition: "all .5s" }}
            >
              <nav className="stroke">
                <ul>
                  <li className="nav-items">
                    <a href="/">Home</a>
                  </li>
                  <li className="nav-items">
                    <a href="#abou">About us</a>
                  </li>
                  <li className="nav-items">
                    <div class="dropdown">
                      <a href="/serv1" className="serva">
                        Service
                      </a>
                      <ul class="dropdown-menu">
                        <div className="dropdown2">
                          <li>
                            <a href="#">Consulting</a>
                          </li>

                          <ul class="dropdown-menu2">
                            <li>
                              <a href="/info">Informatica</a>
                              <a href="/salesforce">salesForce</a>
                              <a href="/web">Web development</a>
                              <a href="/red">RedHat Linux</a>
                              <a href="/post"> PostgreSQL/SQL Server/Oracle</a>
                            </li>
                          </ul>
                        </div>
                        <div className="dropdown3">
                          <li>
                            <a href="#">training</a>
                          </li>

                          <ul class="dropdown-menu3">
                            <li>
                              <a href="/online">Online Training</a>
                              <a href="/onsite">Onsite Training</a>
                            </li>
                          </ul>
                        </div>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-items">
                    <a href="care">Careers</a>
                  </li>
                  <li className="nav-items">
                    <a href="cont">Contact us</a>
                  </li>
                </ul>
              </nav>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
