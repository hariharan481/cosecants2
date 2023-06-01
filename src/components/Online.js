import React from "react";
import { Box, Button, IconButton, Typography, Link } from "@mui/material";
import "../Styles/Home2.css";
import { ArrowForward } from "@mui/icons-material";

export const Online = () => {
  return (
    <div>
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
                Home
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
                  Online Training
                </Typography>
              </IconButton>
            </Typography>
          </div>

          <h5>Online Training</h5>
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
            marginTop={-8}
            marginLeft={8}
            className="heads1"
          >
            Online Training
          </Typography>
          <Typography
            variant="body2"
            color={"grey"}
            lineHeight={"30px"}
            marginLeft={"60px"}
            marginTop={5}
          >
            Comprehensive training is available whenever and wherever you need
            it. Through a hassle-free online platform, our training sessions,
            training videos, and knowledgeable in-house consultants will guide
            you through the core elements of your software system.
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
    </div>
  );
};
