import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

import "../Styles/Home.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DeveloperBoardOutlinedIcon from "@mui/icons-material/DeveloperBoardOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

import { Rightside } from "./rightside";

export const Left = () => {
  return (
    <div className="scrol" id="abou">
      <>
        <Box
          sx={{
            marginTop: "-80px",
          }}
        >
          <Typography
            className="homehead"
            variant="h6"
            color="orangered"
            sx={{
              textAlign: "center",
              marginLeft: "300px",
              mt: "200px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            {" "}
            About Our Company ____
            <Typography
              variant="h3"
              color="black"
              sx={{
                fontWeight: 600,
                mt: "20px",
                marginLeft: "300px",
              }}
            >
              Our Succes formula is D3
            </Typography>
            <div className="typsp">
              <Typography
                variant="body1"
                sx={{
                  color: "GrayText",
                }}
              >
                We’re a young and talented group of entrepreneurs and engineers
                with a groundbreaking idea designed to contribute towards a
                better tomorrow. We provide smart solutions for companies of all
                sizes and pride ourselves on our unparalleled, dedicated
                service. At Cosecant Inc, we believe that the right
                understanding and technological edge can lead companies towards
                a successful future.
                <div className="img">
                  <img
                    className="imgfil"
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR8D7qXeRSJEotmp5QhMudqkBPI8UPcl4nq9QheyCXX04TIa7_6"
                  ></img>
                  <Typography
                    sx={{
                      colorAdjust: "economy",
                      wordSpacing: "10px",
                      fontWeight: 600,
                      marginTop: "-50px",
                      marginLeft: "90px",
                    }}
                  >
                    Great results, can be achieved with small forces
                    <Divider
                      sx={{
                        mt: "70px",
                      }}
                    />
                  </Typography>
                </div>
                <div className="leftbox">
                  <Typography
                    variant="h6"
                    color="black"
                    fontWeight="500px"
                    marginTop="40px"
                    lineHeight="30px"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    High Quality IT Solutions for Startup
                    <Typography
                      className="typs6"
                      sx={{
                        mt: "30px",
                        color: "gray",
                      }}
                    >
                      CONTACT US
                    </Typography>
                  </Typography>
                </div>
              </Typography>

              <div className="iconcontainer">
                <div className="iconwrp"></div>
                <Typography
                  variant="body2"
                  sx={{
                    color: "black",
                    marginLeft: "80px",
                  }}
                ></Typography>

                <Button
                  className="muibutt"
                  size="50px"
                  variant="contained"
                  sx={{
                    width: "200px",
                    height: "50px",
                    color: "white",
                    fontWeight: "600",
                    backgroundColor: "red",
                    textDecoration: "none",
                    marginLeft: "90px",
                    marginTop: "-190px",
                    border: "orangered",
                  }}
                  href="/cont"
                >
                  discover more
                </Button>
              </div>
            </div>
          </Typography>
        </Box>
        <Rightside />
      </>
    </div>
  );
};
