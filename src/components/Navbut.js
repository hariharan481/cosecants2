import React from "react";
import { useSwiper } from "swiper/react";

export const Navbut = () => {
  const swiper = useSwiper;
  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slideprev()}>Prev</button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
