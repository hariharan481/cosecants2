import { Box, Button, Typography, IconButton, Link } from "@mui/material";
import React from "react";
import { Buton } from "./Buton";
import { ArrowForward } from "@mui/icons-material";

export const Salesforce = () => {
  return (
    <div>
      <div className="servtop">
        <div className="servtop6">
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
                textDecoration: "none",
                color: "white",
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
                    textDecoration: "none",
                    color: "white",
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
                SALESFORCE
              </Typography>
            </IconButton>
          </Typography>
        </div>

        <h5>SalesForce</h5>
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
        <img src="https://cosecantinc.com/wp-content/uploads/elementor/thumbs/Salesforce.com_logo-e1669983014343-pykj8pptdlfmfml8j9dl82qxteslksf084wetxks1s.png"></img>
        <Typography
          variant="h5"
          color={"black"}
          fontWeight={800}
          position={"relative"}
          marginTop={-8}
          marginLeft={14}
        >
          SalesForce{" "}
        </Typography>
        <Typography
          variant="body2"
          color={"grey"}
          lineHeight={"30px"}
          marginLeft={"60px"}
        >
          Our Salesforce services are all about cost-effectiveness, close
          collaboration, efficiency gains, and process improvements! We will
          deep dive into your existing processes, practices & systems,
          understand your pain points, strategist, consult, recommend routes for
          efficiency gains, take alignments and then build your salesforce
          eco-system that complements your business.
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
