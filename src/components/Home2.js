import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
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

export const Home2 = () => {
  return (
    <div className="hometype">
      <Typography variant="subtitle1" color="orangered" fontWeight={600}>
        SEVICES WE'RE OFFERING _____
      </Typography>
      <Typography variant="h3" color="black" marginTop="20px" fontWeight={700}>
        High quality products and services
        <Typography
          variant="h3"
          color="black"
          marginTop="20px"
          fontWeight={700}
          sx={{
            fontFamily: "revert",
          }}
        >
          {" "}
          that we stand behind
        </Typography>
      </Typography>

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
                src="https://cosecantinc.com/wp-content/uploads/2022/10/service3-550x550.jpg"
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
              src="https://cosecantinc.com/wp-content/uploads/2022/10/slide7-550x550.jpg"
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
      <Typography
        color="orangered"
        fontWeight={900}
        sx={{
          mt: "40px",
          fontSize: "15px",
          letterSpacing: "1px",
          fontWeight: "80px",
        }}
      >
        FEATURE CLIENTS _____
      </Typography>

      <Stack
        direction="row"
        mt={40}
        margin="0px"
        marginLeft={10}
        sx={{
          cursor: "pointer",
          gap: "100px",
        }}
      >
        <img
          src="https://cosecantinc.com/wp-content/uploads/2023/01/md-think-584.jpg"
          className="img1"
        ></img>

        <img
          src="https://cosecantinc.com/wp-content/uploads/2023/01/MST_Logo.png"
          className="img2"
        ></img>

        <img
          src="	https://cosecantinc.com/wp-content/uploads/2023/01/Centene_Corporation_Logo.svg_.png"
          className="img3"
        ></img>

        <img
          src="https://cosecantinc.com/wp-content/uploads/2023/01/reynolds-american-logo.png"
          className="img4"
        ></img>
      </Stack>
    </div>
  );
};
