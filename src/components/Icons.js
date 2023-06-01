import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import "../Styles/Icons.css";

export const Icons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "500px",
        width: "1590px",
        backgroundColor: "white",
      }}
    >
      <Stack
        direction={"row"}
        gap={"30px"}
        mt={"180px"}
        justifyContent={"center"}
        ml={"170px"}
      >
        <Box
          classname="projects"
          sx={{
            display: "flex",
            height: "220px",
            width: "300px",
          }}
        >
          <Box
            classname="topbox"
            sx={{
              bgcolor: "grey.300",
              height: "110px",
              width: "110px",
              mt: "-60px",
              ml: "80px",
              alignItems: "center",
              display: "block",
            }}
          >
            <IconButton disableRipple>
              <RocketLaunchOutlinedIcon
                className="iconsrocket"
                fontSize="100px"
              />
            </IconButton>
            <Typography
              variant="h3"
              color={"black"}
              mt={7}
              fontWeight={700}
              ml={2}
            >
              100
            </Typography>
            <Box
              height={"40px"}
              display={"flex"}
              alignItems={"center"}
              bgcolor={"orangered"}
              width={"200px"}
              ml={"-30px"}
              mt={"10px"}
              color={"white"}
              fontWeight={800}
            >
              <Typography variant="h6" ml={"50px"} fontSize={"14px"}>
                PROJECTS
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            height: "220px",
            width: "300px",
          }}
        >
          <Box
            classname="topbox"
            sx={{
              bgcolor: "grey.300",
              height: "110px",
              width: "110px",
              mt: "-60px",
              ml: "80px",
              alignItems: "center",
              display: "block",
            }}
          >
            <IconButton disableRipple sx={{}}>
              <PermIdentityOutlinedIcon
                className="iconsrocket"
                fontSize="100px"
              />
            </IconButton>
            <Typography
              variant="h3"
              color={"black"}
              mt={7}
              fontWeight={700}
              ml={2}
            >
              18
            </Typography>
            <Box
              height={"40px"}
              display={"flex"}
              alignItems={"center"}
              bgcolor={"orangered"}
              width={"200px"}
              ml={"-30px"}
              mt={"10px"}
              color={"white"}
            >
              <Typography variant="h6" ml={"50px"} fontSize={"14px"}>
                IT SPECIALIST
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            height: "220px",
            width: "300px",
          }}
        >
          <Box
            classname="topbox"
            sx={{
              bgcolor: "grey.300",
              height: "110px",
              width: "110px",
              mt: "-60px",
              ml: "80px",
              alignItems: "center",
              display: "block",
            }}
          >
            <IconButton disableRipple>
              <Diversity1OutlinedIcon
                className="iconsrocket"
                fontSize="100px"
              />
            </IconButton>
            <Typography
              variant="h3"
              color={"black"}
              mt={7}
              fontWeight={700}
              ml={2}
            >
              99
            </Typography>
            <Box
              height={"40px"}
              display={"flex"}
              alignItems={"center"}
              bgcolor={"orangered"}
              width={"200px"}
              ml={"-30px"}
              mt={"10px"}
              color={"white"}
            >
              <Typography variant="h6" ml={"30px"} fontSize={"14px"}>
                SATISFIED CLIENTS
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            height: "220px",
            width: "300px",
          }}
        >
          <Box
            classname="topbox"
            sx={{
              bgcolor: "grey.300",
              height: "110px",
              width: "110px",
              mt: "-60px",
              ml: "80px",
              alignItems: "center",
              display: "block",
            }}
          >
            <IconButton disableRipple sx={{}}>
              <AddTaskOutlinedIcon fontSize="100px" className="iconsrocket" />
            </IconButton>
            <Typography
              variant="h3"
              color={"black"}
              mt={7}
              fontWeight={700}
              ml={2}
            >
              369
            </Typography>
            <Box
              height={"40px"}
              display={"flex"}
              alignItems={"center"}
              bgcolor={"orangered"}
              width={"200px"}
              ml={"-30px"}
              mt={"10px"}
              color={"white"}
            >
              <Typography variant="h6" ml={"30px"} fontSize={"14px"}>
                SMART SOLUTIONS
              </Typography>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
