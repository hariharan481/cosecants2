import React from "react";
import "../Styles/Serv1.css";
import { Box, Button, IconButton, Typography, Link } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export const Redhat = () => {
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
            <IconButton>
              <ArrowForward
                sx={{
                  color: "white",
                  fontSize: "15px",
                }}
              ></ArrowForward>
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
                REDHAT LINUX
              </Typography>
            </IconButton>
          </Typography>
        </div>

        <h5>Redhat Linux</h5>
      </div>
      <Box
        sx={{
          height: "300px",
          width: "1000px",
          marginTop: "130px",
          justifyContent: "center",
          marginLeft: "150px",
          lineHeight: "50px",
        }}
      >
        <img
          src="https://cosecantinc.com/wp-content/uploads/2022/11/RedHat-Linux-e1669983303881.png"
          className="redhatpng"
        ></img>
        <Typography
          variant="h5"
          color={"black"}
          fontWeight={800}
          position={"relative"}
          marginTop={-8}
          marginLeft={10}
        >
          RedHat Linux
        </Typography>
        <Typography
          variant="body2"
          color={"grey"}
          lineHeight={"30px"}
          marginLeft={"80px"}
        >
          Informatica is one of the most widely used tools for data
          transformation and migration. Cosecant has experience in building data
          warehouses for a variety of environments and implementing ETL
          processes throughout complex
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
