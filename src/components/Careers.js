import { ArrowForward } from "@mui/icons-material";
import { Box, Typography, IconButton, Link } from "@mui/material";
import React from "react";

export const Careers = () => {
  return (
    <>
      {" "}
      <div className="servtop">
        <div className="servtop2">
          <Typography
            className="servtyp"
            variant="body2"
            margin={"5px"}
            ml={"40px"}
            fontWeight={700}
          >
            <Link href="/" sx={{ color: "white", textDecoration: "none" }}>
              HOME
            </Link>
            <IconButton disableRipple>
              <ArrowForward
                sx={{
                  fontSize: "15px",
                  color: "white",
                }}
              />
              <Typography
                variant="body2"
                color={"white"}
                ml={"10px"}
                fontWeight={700}
              >
                CAREERS
              </Typography>
            </IconButton>
          </Typography>
        </div>

        <h5>careers</h5>
      </div>
      <Box
        sx={{
          height: "300px",
          width: "500px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" mt={5}>
          No openings right now. Stay tuned
        </Typography>
      </Box>
    </>
  );
};
