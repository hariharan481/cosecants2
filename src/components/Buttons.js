import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, IconButton } from "@mui/material";
import React from "react";
import { useSwiper } from "swiper/react";

export const Buttons = () => {
  const swiper = useSwiper();
  return (
    <div>
      <Button
        variant="contained"
        className="hoverbut"
        sx={{
          height: "60px",
          width: "60px",
          borderRadius: "60px",
          background: "white",
          marginLeft: "-30px",
          marginTop: "-250px",
        }}
        onClick={() => swiper.slidePrev()}
      >
        <IconButton>
          <ArrowBack
            sx={{
              color: "red",
            }}
          />
        </IconButton>
      </Button>
      <Button
        className="hoverbut"
        variant="contained"
        sx={{
          height: "60px",
          width: "60px",
          borderRadius: "60px",
          background: "white",
          marginLeft: "550px",
          marginTop: "-250px",
        }}
        onClick={() => swiper.slideNext()}
      >
        <ArrowForward
          className="arrw"
          sx={{
            color: "red",
          }}
        />
      </Button>
    </div>
  );
};
