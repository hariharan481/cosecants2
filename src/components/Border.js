import { IconButton, Stack, Typography } from "@mui/material";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import "../components/Boreder.css";
import React from "react";
import {
  GroupAddOutlined,
  InstallDesktopTwoTone,
  PeopleAltOutlined,
  RocketOutlined,
} from "@mui/icons-material";

export const Border = () => {
  return (
    <div className="Bordercontainer">
      <Stack direction={"row"} gap={"20px"} mt={10}>
        <div className="Box1">
          <div className="TopBox1">
            <IconButton disableRipple size="500px">
              <RocketOutlined
                className="icon3"
                fontSize="50px"
                sx={{
                  color: "red",
                  fontSize: "35px",
                }}
              />
            </IconButton>
          </div>
          <Typography variant="h2" align="center" fontWeight={700}>
            100
          </Typography>
          <div className="projects2">
            <Typography
              variant="h6"
              fontSize={"14px"}
              textAlign={"center"}
              color={"white"}
              fontWeight={600}
            >
              PROJECTS
            </Typography>
          </div>
        </div>
        <div className="Box2">
          <div className="TopBox2">
            <IconButton disableRipple>
              <PermIdentityOutlinedIcon
                className="icon3"
                fontSize="100px"
                sx={{
                  color: "red",
                  fontSize: "35px",
                }}
              />
            </IconButton>
          </div>
          <Typography variant="h2" align="center" fontWeight={700}>
            99
          </Typography>
          <div className="projects2">
            <Typography variant="h6" fontWeight={600} fontSize={"14px"}>
              IT SPECIALIST
            </Typography>
          </div>
        </div>
        <div className="Box3">
          <div className="TopBox3">
            <IconButton size="100px" disableRipple>
              <AddTaskOutlinedIcon
                className="icon3"
                sx={{
                  color: "red",
                  fontSize: "35px",
                }}
              />
            </IconButton>
          </div>
          <Typography variant="h2" align="center" fontWeight={700}>
            18
          </Typography>
          <div className="projects3">
            <Typography variant="h6" fontWeight={600} fontSize={"14px"}>
              SATISFIED CLIENTS
            </Typography>
          </div>
        </div>
        <div className="Box4">
          <div className="TopBox4">
            <IconButton disableRipple>
              <Diversity1OutlinedIcon
                className="icon3"
                sx={{
                  color: "red",
                  fontSize: "35px",
                }}
              />
            </IconButton>
          </div>
          <Typography variant="h2" align="center" fontWeight={700}>
            369
          </Typography>
          <div className="projects4">
            <Typography
              variant="h6"
              fontWeight={600}
              textAlign={"center"}
              fontSize={"14px"}
            >
              SMART SOLUTIONS
            </Typography>
          </div>
        </div>
      </Stack>
    </div>
  );
};
