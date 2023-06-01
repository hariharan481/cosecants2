import React from "react";
import { Box, Button, IconButton, Typography, Link } from "@mui/material";
import "../Styles/Serv1.css";
import { ArrowForward } from "@mui/icons-material";

export const Webdeveloment = () => {
  return (
    <div>
      <div className="servtop">
        <div className="servtop5">
          <Typography
            className="servtyp"
            variant="body2"
            margin={"5px"}
            ml={"40px"}
            fontWeight={700}
          >
            <Link
              href="/"
              sx={{
                color: "white",
                textDecoration: "none",
              }}
            >
              HOME
            </Link>
            <IconButton disableRipple>
              <ArrowForward
                sx={{
                  fontSize: "15px",
                  color: "white",
                }}
              />
              <Typography
                variant="body2"
                color={"white"}
                ml={"10px"}
                fontWeight={700}
              >
                <Link
                  href="/serv1"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  SERVICE
                </Link>
              </Typography>
              <ArrowForward
                sx={{
                  fontSize: "15px",
                  color: "white",
                  ml: "10px",
                }}
              />
              <Typography
                variant="body2"
                color={"white"}
                fontWeight={700}
                ml={"10px"}
              >
                Web Development
              </Typography>
            </IconButton>
          </Typography>
        </div>

        <h5>Web Development</h5>
      </div>
      <Box
        sx={{
          height: "300px",
          width: "1000px",
          marginTop: "130px",
          justifyContent: "center",
          marginLeft: "90px",
          lineHeight: "50px",
        }}
      >
        <Typography
          variant="h6"
          color={"black"}
          fontWeight={600}
          position={"relative"}
          marginTop={-8}
          marginLeft={7}
          fontSize={"35px"}
        >
          Web Development Services
        </Typography>
        <Typography
          variant="body2"
          color={"grey"}
          lineHeight={"30px"}
          marginLeft={"60px"}
        >
          Our skilled web developers implement the most recent innovation
          strategies to build unique web applications that suit your business
          needs. If you aspire to develop successful business website solutions
          with brand presence and high-quality lead generation techniques,
          Cosecant provides affordable, quality websites and related services
          for businesses.
          <Button
            variant="contained"
            className="muibutt"
            href="/cont"
            sx={{
              background: "black",
              justifyContent: "center",
              marginLeft: "400px",
              marginTop: "20px",
              height: "50px",
              width: "300px",
            }}
          >
            {" "}
            Contact us
          </Button>
        </Typography>
      </Box>
    </div>
  );
};
