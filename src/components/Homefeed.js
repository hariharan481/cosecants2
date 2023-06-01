import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import "../Styles/Homefeed.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Service from "./Services/Service";
import Services from "./Services/Services";

export const Homefeed = (props) => {
  const { title, feedback } = props;
  return (
    <div className="containerfeed">
      <div className="feedcont">
        <Typography
          variant="h6"
          color="orangered"
          fontSize="15px"
          fontWeight={700}
          ml={50}
          mt={50}
        >
          OUR FEEDBAKCS _____
          <Typography
            variant="h3"
            color="black"
            fontWeight={700}
            fontFamily={"sans-serif"}
          >
            What They’re Talking About Company
          </Typography>
        </Typography>
      </div>
      <Services />
    </div>
  );
};
