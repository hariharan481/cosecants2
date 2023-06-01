import React, { useState } from "react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  A11y,
} from "swiper/core";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import useFetch from "../hooks/useFetch";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Service from "./Service";
import { Navbut } from "../Navbut";
import { Button } from "../Button";
import { Buton } from "../Buton";
import { Buttons } from "../Buttons";
import { Container, Stack } from "@mui/material";

SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);
const Services = (props) => {
  const [data] = useFetch("services");
  const [slide, setSlide] = useState(0);

  return (
    <section className="sectionwarp">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        className="swiper-slide"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={true}
        slidesPerView={2}
        speed={400}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((service) => (
          <SwiperSlide key={service.id} className="swipergap">
            <Service {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
