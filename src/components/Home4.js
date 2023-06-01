import React from "react";
import "../Styles/Home3.css";
import { Box, Button, Typography } from "@mui/material";

export const Home4 = () => {
  return (
    <>
      {" "}
      <div className="centerbody">
        <img
          src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg"
          className="centerimg"
        />
        <Box
          className="divider"
          sx={{
            height: "450px",
            width: "1400px",
            marginLeft: "-1560px",
            marginTop: "30px",
          }}
        >
          <img
            src="https://cosecantinc.com/wp-content/uploads/2022/10/icon.png"
            className="rotate"
            style={{
              marginLeft: "600px",
              marginTop: "40px",
            }}
          ></img>
        </Box>
      </div>
      <div className="types">
        <Typography
          variant="h3"
          color="white"
          mt={-50}
          ml={0}
          fontWeight={700}
          textAlign={"center"}
        >
          IT Solutions &
          <Typography variant="h3" color="white" fontWeight={700} mt={3}>
            Services at your Fingertips
          </Typography>
        </Typography>
        <Button
          className="muibutt2"
          size="50px"
          variant="contained"
          sx={{
            width: "200px",
            height: "60px",
            color: "white",
            fontWeight: "600",
            backgroundColor: "orangered",
            textDecoration: "none",
            marginLeft: "700px",
            marginTop: "40px",
          }}
          href=""
        >
          discover more
        </Button>
      </div>
    </>
  );
};
