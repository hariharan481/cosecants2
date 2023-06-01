import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "../Styles/Home.css";
import { hover } from "@testing-library/user-event/dist/hover";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DeveloperBoardOutlinedIcon from "@mui/icons-material/DeveloperBoardOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import { PeopleAltOutlined } from "@mui/icons-material";
import { Rightside } from "./rightside";
import { Home2 } from "./Home2";
import { Home4 } from "./Home4";
import { Homefeed } from "./Homefeed";
import { Icons } from "./Icons";
import { Border } from "./Border";
import { Footer } from "./Fooeter";
export const Home = () => {
  return (
    <Box>
      <Box>
        <div className="homeimg">
          <Typography
            className="types5"
            variant=" h1"
            color="white"
            fontWeight="700"
            fontSize="80px"
            align="center"
            sx={{
              justifyContent: "center",
              marginLeft: "500px",
              marginTop: "100px",
            }}
          >
            {" "}
            IT SOLUTIONS &
            <Typography
              className="types6"
              variant="h1"
              color="white"
              fontWeight="700"
              fontSize={"80px"}
              sx={{
                ml: "30px",
              }}
            >
              TECHNOLOGY
            </Typography>
            <div>
              <Typography
                className="types7"
                variant="body1"
                color="white"
                fontWeight="600"
                mt="5px"
              >
                Accelarte Straegy Execeution and Consistency in Revenue Growth !
              </Typography>

              <Typography
                className="types7"
                variant="body1"
                color="white"
                fontWeight="600"
                mt="5px"
              >
                We are committed to providing our clients tha best strategic
              </Typography>
              <Typography
                className="types7"
                variant="body1"
                color="white"
                fontWeight="600"
                mt="5px"
              >
                guidence available
              </Typography>
            </div>
            <Button
              className="muibutt"
              size="50px"
              variant="contained"
              sx={{
                width: "200px",
                height: "60px",
                color: "white",
                fontWeight: "600",
                backgroundColor: "red",
                textDecoration: "none",
              }}
              href=""
            >
              discover more
            </Button>
          </Typography>

          <Box
            className="subbox"
            sx={{
              backgroundColor: "white",
              height: "130px",
              width: "400px",
              marginTop: "710px",
              marginRight: "-900px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "orangered",
                height: "60px",
                width: "70px",
                mt: "20px",
                ml: "20px",
                justifyContent: "center",
              }}
            >
              <IconButton size="500px" disableRipple>
                <RocketLaunchIcon
                  className="icu"
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    alignItems: "center",
                  }}
                />
                <Typography
                  className="icu"
                  color="black"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    ml: "60px",
                  }}
                >
                  Deliver
                </Typography>
              </IconButton>
            </Box>
          </Box>

          <Box
            className="subbox"
            sx={{
              backgroundColor: "white",
              height: "130px",
              width: "400px",
              marginTop: "710px",
              marginRight: "-900px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "orangered",
                height: "60px",
                width: "70px",
                mt: "20px",
                ml: "20px",
                justifyContent: "center",
              }}
            >
              <IconButton size="500px" className="icu" disableRipple>
                <DeveloperBoardOutlinedIcon
                  className="icu"
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    alignItems: "center",
                  }}
                />
                <Typography
                  className="icu"
                  color="black"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    ml: "60px",
                  }}
                >
                  Develop
                </Typography>
              </IconButton>
            </Box>
          </Box>

          <Box
            className="subbox"
            sx={{
              backgroundColor: "white",
              height: "130px",
              width: "400px",
              marginTop: "710px",
              marginRight: "130px",
            }}
          >
            <Box
              sx={{
                backgroundColor: "orangered",
                height: "60px",
                width: "70px",
                mt: "20px",
                ml: "20px",
                justifyContent: "center",
              }}
            >
              <IconButton size="500px" className="icu" disableRipple>
                <TipsAndUpdatesOutlinedIcon
                  className="icu"
                  sx={{
                    color: "black",
                    fontWeight: 500,
                    alignItems: "center",
                  }}
                />
                <Typography
                  className="icu"
                  color="black"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    ml: "60px",
                  }}
                >
                  Define
                </Typography>
              </IconButton>
            </Box>
          </Box>
        </div>
      </Box>
      <Box>
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
              with a groundbreaking idea designed to contribute towards a better
              tomorrow. We provide smart solutions for companies of all sizes
              and pride ourselves on our unparalleled, dedicated service. At
              Cosecant Inc, we believe that the right understanding and
              technological edge can lead companies towards a successful future.
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
                href=""
              >
                discover more
              </Button>
            </div>
          </div>
        </Typography>
      </Box>
      <Rightside />
      <Home2 />
      <Home4 />
      <Homefeed />

      <Border />
    </Box>
  );
};
