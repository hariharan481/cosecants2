import React from "react";
import { Box, Button, IconButton, Typography, Link } from "@mui/material";
import "../Styles/Home2.css";
import { ArrowForward } from "@mui/icons-material";

export const Onsite = () => {
  return (
    <div>
      <Typography variant="body2" color={"white"}>
        Home
      </Typography>
      <div className="servtop">
        <div className="servtop5">
          {" "}
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
                Onsite Training
              </Typography>
            </IconButton>
          </Typography>
        </div>

        <h5>OnSite Training</h5>
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
          variant="h5"
          color={"black"}
          fontWeight={800}
          position={"relative"}
          marginTop={-4}
          marginLeft={8}
        >
          Onsite Training
        </Typography>
        <Typography
          variant="body2"
          color={"grey"}
          lineHeight={"30px"}
          marginLeft={"60px"}
          marginTop={5}
        >
          Grow your employees understanding of how software functions with
          onsite training in Salesforce and data warehouse technologies. Our
          consultants have dealt with multiple industries and know which
          information suits each situation the best. Our courses are tailored to
          your individual organization’s needs so you get the most out of your
          training experience
          <Button
            variant="contained"
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
