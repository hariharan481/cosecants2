import React from "react";
import "../Styles/Serv1.css";
import { Box, Button, Typography, IconButton, Link } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export const Postersql = () => {
  return (
    <div>
      <div className="servtop3">
        <div className="servtop4">
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
                PostgreSQL/SQL Server/Oracle
              </Typography>
            </IconButton>
          </Typography>
        </div>

        <h5>PostgreSQL/SQL Server/Oracle</h5>
      </div>
      <Box
        sx={{
          height: "400px",
          width: "1000px",
          marginTop: "130px",
          justifyContent: "center",
          marginLeft: "90px",
          lineHeight: "50px",
        }}
      >
        <img src="https://cosecantinc.com/wp-content/uploads/2022/12/PostgreSQL-Logo-300x188.jpg"></img>
        <Typography
          variant="h5"
          color={"black"}
          fontWeight={800}
          position={"relative"}
          marginTop={-8}
          marginLeft={10}
        ></Typography>
        <Typography
          variant="body2"
          color={"grey"}
          lineHeight={"30px"}
          marginLeft={"60px"}
        >
          Database administrators (DBAs) have years of technical expertise and
          experience in all aspects of database. Along with core database
          administration, our teams have extensive knowledge in all aspects of
          monitoring, replication, tuning, upgrading, migrating, auditing,
          reporting, cloud, and high-availability solutions. Our service ensures
          speed, security, and provides a road map of your systems and data.
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
