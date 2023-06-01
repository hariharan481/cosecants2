import React from "react";
import "../Styles/Rightside.css";
import { Typography } from "@mui/material";

export const Rightside = () => {
  return (
    <div className="rightcontainer" id="abou">
      <div className="hover14">
        <figure>
          <img
            src="https://www.betterteam.com/images/client-services-manager-job-description-4000x2667-20201118.jpeg?crop=21:16,smart&width=420&dpr=2"
            className="rightwrap"
          ></img>

          <img
            src="https://cosecantinc.com/wp-content/uploads/2022/10/slide7-550x550.jpg"
            className="sndwrap"
          ></img>
        </figure>
      </div>

      <div className="mot-align"></div>

      <div className="endswrap">
        <img
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5xQLUu8MeOcYR7f8Z_7-wcsZcSMls_rbyeQNrzhv9jdU_CR2g"
          className="smalimg"
        ></img>

        <Typography
          variant="h5"
          color="orangered"
          sx={{
            alignItems: "center",
            marginLeft: "100px",
            marginTop: "-70px",
          }}
          fontWeight={800}
        >
          99 +
          <Typography className="smaltext" variant="body1" fontWeight={600}>
            Satisfied Client
          </Typography>
        </Typography>
      </div>
    </div>
  );
};
