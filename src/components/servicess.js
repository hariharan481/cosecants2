import React from "react";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";

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

export const Servicess = () => {
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
                src="https://lh3.googleusercontent.com/EbCEulL7XG3pdb-HaWwRtRG7ZBzhgwm7YSex-wAaBtGdILNAV2m5hAAH7RJwLUHYb7VBrhJkJM_mP0GrSXwo_ef8vBFw6Inpq4Wf0cI3"
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
              Informatica
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
              src="https://lh3.googleusercontent.com/T41_2NESxtpQAoOQ9B6NILLSGmhyqBsOiLHX3P9tYBSYWVlN9PXe4A3JPW1zhiWg7OUZ943LcMMOSH9UHQdaK-SHLymZE2nJISjXUKCXtA"
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
              Salesforce
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
              src="https://lh3.googleusercontent.com/WemdDGoSedp88yQQcCrbzr_UKy2fUxqsYFLZuiIgPQxWBHX12qubtMTqVi8OcWnIk7AWU8ht4Y-_JLKwgBt1oq-CZtX_ASUr3wZ0y7inhg"
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
              RedHat Linux
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
