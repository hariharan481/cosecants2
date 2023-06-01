import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import "../components/Footer.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <div>
      <div className="footercontainer">
        <div className="opacitywrap">
          <Stack direction={"row"} gap={3} mt={8}>
            <div className="wrap1">
              <Typography variant="h6" color={"white"}>
                About Cosecant
              </Typography>
              <hr />
              <Typography
                variant="body1"
                color={"white"}
                textAlign={"left"}
                sx={{
                  wordSpacing: "10px",
                  lineHeight: "40px",
                }}
              >
                At Cosecant Inc, we believe that the right understanding and
                technological edge can lead companies towards a successful
                future.{" "}
              </Typography>
            </div>

            <div className="wrap2">
              <Typography variant="h6" color={"white"}>
                Services
              </Typography>
              <hr />
              <Typography
                variant="body2"
                color={"white"}
                textAlign={"left"}
                sx={{
                  wordSpacing: "220px",
                  lineHeight: "50px",
                }}
              >
                Informatica WebDevelopment RedHatLinux
                PostgreSQL/SQLServer/Oracle Salesforce
              </Typography>
            </div>
            <div className="wrap2">
              <Typography variant="h6" color={"white"}>
                {" "}
                Contact
              </Typography>

              <hr></hr>
              <Typography
                variant="body2"
                color={"white"}
                textAlign={"left"}
                sx={{
                  lineHeight: "40px",
                }}
              >
                0015 Old Columbia Road Ste B-215Columbia, MD – 21046
                <Typography
                  sx={{
                    lineHeight: "50px",
                  }}
                >
                  Monday – Friday: 9AM – 5PM
                  <IconButton disableRipple>
                    <Mail
                      sx={{
                        color: "orangered",
                      }}
                    />
                    <Typography
                      variant="body2"
                      color={"white"}
                      textAlign={"left"}
                      sx={{
                        lineHeight: "50px",
                        ml: "10px",
                      }}
                    >
                      {" "}
                      info@cosecantinc.com{" "}
                    </Typography>
                  </IconButton>
                  <br />
                  <IconButton
                    disableRipple
                    sx={{
                      mt: "-40px",
                    }}
                  >
                    <PhoneEnabledIcon
                      sx={{
                        color: "orangered",
                      }}
                    />
                    <Typography
                      variant="body2"
                      color={"white"}
                      textAlign={"left"}
                      sx={{
                        lineHeight: "50px",
                        ml: "10px",
                      }}
                    >
                      {" "}
                      info@cosecantinc.com{" "}
                    </Typography>
                  </IconButton>
                </Typography>
              </Typography>
              <div className="botomfooter">
                <Typography
                  variant="h6"
                  color={"white"}
                  textAlign={"center"}
                  justifyContent={"center"}
                >
                  © Copyright 2023 by Cosecant Inc
                </Typography>
              </div>
            </div>

            <div className="wrap2">
              <Typography variant="h6" color={"white"}>
                Follow us
              </Typography>
              <hr />

              <Stack direction={"row"} mt={3} gap={"10px"}>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "40px",
                    backgroundColor: "grey",
                  }}
                >
                  <IconButton
                    className="icon1"
                    sx={{
                      fontSize: "80px",
                      color: "white",
                      gap: "20px",
                    }}
                  >
                    <Twitter />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "40px",
                    backgroundColor: "gray",
                  }}
                >
                  <IconButton
                    className="icon1"
                    sx={{
                      fontSize: "80px",
                      color: "white",
                      gap: "20px",
                    }}
                  >
                    <Facebook />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "40px",
                    backgroundColor: "gray",
                  }}
                >
                  <IconButton
                    className="icon1"
                    sx={{
                      fontSize: "80px",
                      color: "white",
                      gap: "20px",
                    }}
                  >
                    <Instagram />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "40px",
                    backgroundColor: "gray",
                  }}
                >
                  <IconButton
                    className="icon1"
                    sx={{
                      fontSize: "80px",
                      color: "white",
                      gap: "20px",
                    }}
                  >
                    <WhatsApp />
                  </IconButton>
                </Box>
              </Stack>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};
