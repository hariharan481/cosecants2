import { Button } from "@mui/material";
import React from "react";
import { useSwiper } from "swiper/react";

export const Buton = () => {
  const swiper = useSwiper();
  return (
    <div>
      <Button onClick={() => swiper.slideNext}>next</Button>
      <Buton onClick={() => swiper.slidePrev}>prev</Buton>
    </div>
  );
};
