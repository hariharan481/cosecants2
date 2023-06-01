import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";
import { Buttons } from "../Buttons";

const Service = (props) => {
  const { title, feedback } = props;

  return (
    <Stack direction="row" ml={10} mt={24}>
      <Box
        className="homefed"
        height="80%"
        width="80%"
        bgcolor="white"
        mt={10}
        border={"1px solid grey"}
      >
        <Box
          height={60}
          width={60}
          bgcolor={"orangered"}
          sx={{
            borderRadius: "60px",
            marginTop: "-30px",
            marginLeft: "40px",
          }}
        >
          <IconButton>
            <FormatQuoteIcon
              className="iconrotae"
              sx={{
                color: "white",
                rotate: "180deg",
                fontSize: "35px",
              }}
            />
          </IconButton>
        </Box>
        <Typography
          variant="body1"
          color="grey"
          alignItems={"center"}
          justifyContent={"center"}
          textAlign="left"
          mt={5}
          marginLeft={5}
          lineHeight={2}
        >
          {feedback}
          <Typography variant="h6" color="black" mt={3}>
            {title}
          </Typography>

          <Rating
            name="read-only"
            value={3}
            sx={{
              color: "red",
              border: "red",
            }}
          />
        </Typography>{" "}
        <Buttons />
      </Box>
    </Stack>
  );
};

export default Service;
