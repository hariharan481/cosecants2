import React from "react";
import "../Styles/Serv1.css";

import { Home2 } from "./Home2";

import { Servicess } from "./servicess";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Link,
} from "@mui/material";

import "../Styles/Home2.css";
import { ArrowForward } from "@mui/icons-material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import BackupIcon from "@mui/icons-material/Backup";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ManageHistoryOutlinedIcon from "@mui/icons-material/ManageHistoryOutlined";
const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
  width: "600px",
  height: "600px",
};

export const Serv1 = () => {
  return (
    <div>
      <div className="servtop">
        <div className="servtop2">
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
                SERVICES
              </Typography>
            </IconButton>
          </Typography>
        </div>

        <h5>Services</h5>

        <Typography
          variant="body2"
          sx={{
            color: "white",
            textAlign: "left",
          }}
        ></Typography>
      </div>

      <Container
        sx={{
          marginTop: "30px",
        }}
      >
        <Stack
          direction="row"
          gap="30px"
          mt={20}
          justifyContent="center"
          margin="0px"
          className="hovercls"
          marginLeft={5}
        >
          <Box
            className="sidebox"
            sx={{
              height: "600px",
              width: "600px",
              backgroundColor: "white.1000",
              ...commonStyles,
              borderColor: "grey.500",
            }}
          >
            <div className="hover02">
              <img
                src="https://cosecantinc.com/wp-content/uploads/2022/10/service3-672x448.jpg"
                className="boximg"
              ></img>
            </div>
            <div className="kutyBox">
              <IconButton>
                <QueuePlayNextIcon
                  sx={{
                    color: "white",
                    justifyItems: "center",
                    alignItems: "center",
                    fontSize: "70px",
                  }}
                />
              </IconButton>
            </div>

            <Typography
              variant="h6"
              color="black"
              fontWeight={600}
              textAlign={"left"}
              marginLeft={5}
              fontSize={26}
              marginTop={5}
              className="heads1"
            >
              <Link href="/info" underline="none" color={"black"}>
                Informatica
              </Link>

              <Typography variant="body1" color={"grey.500"} marginTop={2}>
                Informatica is one of the most widely used tools for data
              </Typography>
              <Typography
                variant="body2"
                color={"grey.500"}
                marginTop={2}
                className="typw"
                fontWeight={400}
              >
                READ MORE
                <IconButton disableRipple>
                  <ArrowRightAltIcon
                    className="iconhover"
                    sx={{
                      color: "orangered",
                      fontSize: "20px",
                    }}
                  />
                </IconButton>
              </Typography>
            </Typography>
            <Box
              className="sidebox"
              sx={{
                bgcolor: "orangered",
                height: "50px",
                width: "50px",
                marginTop: "-400px",
                display: "flex",
                marginLeft: "50px",
              }}
            ></Box>
          </Box>
          <Box
            className="sidebox"
            sx={{
              height: "640px",
              width: "600px",
              backgroundColor: "red",
              ...commonStyles,
              borderColor: "grey.500",
            }}
          >
            {" "}
            <img
              src="https://cosecantinc.com/wp-content/uploads/2022/10/slide7-672x448.jpg"
              className="boximg"
            ></img>
            <div className="kutyBox">
              <IconButton>
                <CloudUploadOutlinedIcon
                  sx={{
                    color: "white",
                    justifyItems: "center",
                    alignItems: "center",
                    fontSize: "70px",
                  }}
                />
              </IconButton>
            </div>
            <Typography
              variant="h6"
              color="black"
              fontWeight={600}
              textAlign={"left"}
              marginLeft={5}
              fontSize={26}
              marginTop={5}
              className="heads1"
            >
              <Link href="/salesforce" underline="none" color={"black"}>
                Salesforce
              </Link>

              <Typography variant="body1" color={"grey.500"} marginTop={2}>
                Our Salesforce services are all about cost-effectiveness, close
                collaboration, efficiency gains,
              </Typography>
              <Typography
                variant="body2"
                color={"grey.500"}
                marginTop={2}
                className="typw"
                fontWeight={400}
              >
                READ MORE
                <IconButton disableRipple>
                  <ArrowRightAltIcon
                    className="iconhover"
                    sx={{
                      color: "orangered",
                      fontSize: "20px",
                    }}
                  />
                </IconButton>
              </Typography>
            </Typography>
          </Box>
          <Box
            className="sidebox"
            sx={{
              height: "600px",
              width: "600px",
              backgroundColor: "red",
              ...commonStyles,
              borderColor: "grey.500",
            }}
          >
            {" "}
            <img
              src="https://cosecantinc.com/wp-content/uploads/2022/10/bg9-550x550.jpg"
              className="boximg"
            ></img>
            <div className="kutyBox">
              <IconButton>
                <ManageHistoryOutlinedIcon
                  sx={{
                    color: "white",
                    justifyItems: "center",
                    alignItems: "center",
                    fontSize: "70px",
                  }}
                />
              </IconButton>
            </div>
            <Typography
              variant="h6"
              color="black"
              fontWeight={600}
              textAlign={"left"}
              marginLeft={5}
              fontSize={26}
              marginTop={5}
              className="heads1"
            >
              <Link href="/red" underline="none" color={"black"}>
                RedHat Linux
              </Link>

              <Typography variant="body1" color={"grey.500"} marginTop={2}>
                Our team of Linux consultants support Red Hat servers of all
              </Typography>
              <Typography
                variant="body2"
                color={"grey.500"}
                marginTop={2}
                className="typw"
                fontWeight={400}
              >
                READ MORE
                <IconButton disableRipple>
                  <ArrowRightAltIcon
                    className="iconhover"
                    sx={{
                      color: "orangered",
                      fontSize: "20px",
                    }}
                  />
                </IconButton>
              </Typography>
            </Typography>
          </Box>
        </Stack>
      </Container>
      <Container
        sx={{
          marginTop: "30px",
        }}
      >
        <Stack
          direction="row"
          gap="30px"
          mt={20}
          justifyContent="center"
          margin="0px"
          className="hovercls"
          marginLeft={6}
        >
          <Box
            className="sidebox"
            sx={{
              height: "600px",
              width: "600px",
              backgroundColor: "white.1000",
              ...commonStyles,
              borderColor: "grey.500",
            }}
          >
            <div className="hover02">
              <img
                src="https://cosecantinc.com/wp-content/uploads/2022/10/news5-672x448.jpg"
                className="boximg2"
              ></img>
            </div>
            <div className="kutyBox">
              <IconButton>
                <QueuePlayNextIcon
                  sx={{
                    color: "white",
                    justifyItems: "center",
                    alignItems: "center",
                    fontSize: "70px",
                  }}
                />
              </IconButton>
            </div>

            <Typography
              variant="h6"
              color="black"
              fontWeight={600}
              textAlign={"left"}
              marginLeft={5}
              fontSize={26}
              marginTop={5}
              className="heads1"
            >
              <Link href="/post" underline="none" color={"black"}>
                PostgreSQL/SQL Server/Oracle
              </Link>

              <Typography variant="body1" color={"grey.500"} marginTop={2}>
                Database administrators (DBAs) have years of technical expertise
                and experience in all aspects of database.
              </Typography>
              <Typography
                variant="body2"
                color={"grey.500"}
                marginTop={2}
                className="typw"
                fontWeight={400}
              >
                READ MORE
                <IconButton disableRipple>
                  <ArrowRightAltIcon
                    className="iconhover"
                    sx={{
                      color: "orangered",
                      fontSize: "20px",
                    }}
                  />
                </IconButton>
              </Typography>
            </Typography>
            <Box
              className="sidebox"
              sx={{
                bgcolor: "orangered",
                height: "50px",
                width: "50px",
                marginTop: "-400px",
                display: "flex",
                marginLeft: "50px",
              }}
            ></Box>
          </Box>
          <Box
            className="sidebox"
            sx={{
              height: "640px",
              width: "600px",
              backgroundColor: "red",
              ...commonStyles,
              borderColor: "grey.500",
            }}
          >
            {" "}
            <img
              src="https://cosecantinc.com/wp-content/uploads/2022/10/bg9-672x448.jpg"
              className="boximg2"
            ></img>
            <div className="kutyBox">
              <IconButton>
                <CloudUploadOutlinedIcon
                  sx={{
                    color: "white",
                    justifyItems: "center",
                    alignItems: "center",
                    fontSize: "70px",
                  }}
                />
              </IconButton>
            </div>
            <Typography
              variant="h6"
              color="black"
              fontWeight={600}
              textAlign={"left"}
              marginLeft={5}
              fontSize={26}
              marginTop={5}
              className="heads1"
            >
              <Link href="/salesforce" underline="none" color={"black"}>
                Salesforce
              </Link>

              <Typography variant="body1" color={"grey.500"} marginTop={2}>
                Our Salesforce services are all about cost-effectiveness, close
                collaboration, efficiency gains,
              </Typography>
              <Typography
                variant="body2"
                color={"grey.500"}
                marginTop={2}
                className="typw"
                fontWeight={400}
              >
                READ MORE
                <IconButton disableRipple>
                  <ArrowRightAltIcon
                    className="iconhover"
                    sx={{
                      color: "orangered",
                      fontSize: "20px",
                    }}
                  />
                </IconButton>
              </Typography>
            </Typography>
          </Box>
          <Box
            className="sidebox"
            sx={{
              height: "600px",
              width: "600px",
              backgroundColor: "red",
              ...commonStyles,
              borderColor: "grey.500",
            }}
          >
            {" "}
            <img
              src="https://cosecantinc.com/wp-content/uploads/2022/10/news1-672x448.jpg"
              className="boximg2"
            ></img>
            <div className="kutyBox">
              <IconButton>
                <ManageHistoryOutlinedIcon
                  sx={{
                    color: "white",
                    justifyItems: "center",
                    alignItems: "center",
                    fontSize: "70px",
                  }}
                />
              </IconButton>
            </div>
            <Typography
              variant="h6"
              color="black"
              fontWeight={600}
              textAlign={"left"}
              marginLeft={5}
              fontSize={26}
              marginTop={5}
              className="heads1"
            >
              <Link href="/web" underline="none" color={"black"}>
                Web development
              </Link>

              <Typography variant="body1" color={"grey.500"} marginTop={2}>
                Our team of Linux consultants support Red Hat servers of all
              </Typography>
              <Typography
                variant="body2"
                color={"grey.500"}
                marginTop={2}
                className="typw"
                fontWeight={400}
              >
                READ MORE
                <IconButton disableRipple>
                  <ArrowRightAltIcon
                    className="iconhover"
                    sx={{
                      color: "orangered",
                      fontSize: "20px",
                    }}
                  />
                </IconButton>
              </Typography>
            </Typography>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};
