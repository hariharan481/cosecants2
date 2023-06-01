import React from "react";
import "../Styles/Serv1.css";
import "../Styles/Contact.css";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import {
  ArrowForward,
  Mail,
  NetworkCell,
  NetworkCellRounded,
  NetworkCheckOutlined,
  Phone,
} from "@mui/icons-material";

export const Contactus = () => {
  return (
    <div>
      <div className="servtop">
        <div className="servtop2">
          <Typography
            className="servtyp"
            variant="body2"
            margin={"5px"}
            ml={"40px"}
            fontWeight={700}
          >
            <Link
              href="/"
              sx={{
                textDecoration: "none",
                color: "white",
              }}
            >
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
                CONTACTUS
              </Typography>
            </IconButton>
          </Typography>
        </div>

        <h5>Contactus</h5>
      </div>
      <Container>
        <Stack direction={"row"} marginTop={"70px"}>
          <div className="contact">
            <Typography variant="h4" color={"black"} fontWeight={700}>
              Contact us
              <Typography
                variant="body2"
                color="gray"
                mt={"20px"}
                sx={{
                  lineHeight: "30px",
                }}
              >
                To learn more about our service offerings and industry expertise
                or to inquire about the service. Please fill out the form below.
              </Typography>
              <Box
                sx={{
                  mt: "20px",
                }}
              >
                <Box
                  className="conatctbox"
                  sx={{
                    height: "150px",
                    width: "400px",

                    backgroundColor: "white",
                  }}
                >
                  <IconButton disableRipple className="langicon">
                    <LanguageIcon
                      sx={{
                        fontSize: "60px",
                        marginTop: "10px",
                        color: "orangered",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="h5"
                    color={"black"}
                    mt="-60px"
                    marginLeft={"90px"}
                    fontWeight={600}
                  >
                    Our Address
                    <Typography variant="body1" color={"gray"} display={"flex"}>
                      10015 Old Columbia Road Ste B-215, Columbia, MD – 21046
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: "20px",
                }}
              >
                <Box
                  className="conatctbox"
                  sx={{
                    height: "150px",
                    width: "400px",

                    backgroundColor: "white",
                  }}
                >
                  <IconButton disableRipple className="langicon">
                    <Mail
                      sx={{
                        fontSize: "60px",
                        marginTop: "10px",
                        color: "orangered",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="h5"
                    color={"black"}
                    mt="-60px"
                    marginLeft={"90px"}
                    fontWeight={600}
                  >
                    Email
                    <Typography variant="body1" color={"gray"} display={"flex"}>
                      info@cosecantinc.com
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: "20px",
                }}
              >
                <Box
                  className="conatctbox"
                  sx={{
                    height: "150px",
                    width: "400px",

                    backgroundColor: "white",
                  }}
                >
                  <IconButton disableRipple className="langicon">
                    <Phone
                      sx={{
                        fontSize: "60px",
                        marginTop: "10px",
                        color: "orangered",
                      }}
                    />
                  </IconButton>
                  <Typography
                    variant="h5"
                    color={"black"}
                    mt="-60px"
                    marginLeft={"90px"}
                    fontWeight={600}
                  >
                    Contact
                    <Typography variant="body1" color={"gray"} display={"flex"}>
                      +1 (410) 312-5586
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Typography>
          </div>
          <div className="experts">
            <Container
              sx={{
                margin: "40px",
              }}
            >
              <Typography
                variant="h4"
                color={"black"}
                fontWeight={600}
                sx={{
                  lineHeight: "80px",
                }}
              >
                Let's talk about your next big project
                <Typography variant="body1" color={"grey"}>
                  If you have a question or want to know more, get in touch.
                </Typography>
              </Typography>
              <Box justifyContent={"space-between"}>
                <TextField
                  error
                  variant="outlined"
                  placeholder="Your name"
                  sx={{
                    margin: "10px",
                    background: "white",
                    borderStyle: "20px solid  red",
                  }}
                ></TextField>
                <TextField
                  placeholder="Your counry"
                  variant="outlined"
                  error
                  sx={{ margin: "10px", background: "white" }}
                ></TextField>
                <TextField
                  error
                  placeholder="Enter Email"
                  variant="outlined"
                  sx={{ margin: "10px", background: "white" }}
                ></TextField>
                <TextField
                  error
                  placeholder="Your Phone"
                  variant="outlined"
                  sx={{ margin: "10px", background: "white" }}
                ></TextField>
                <TextField
                  error
                  placeholder="Your Company"
                  variant="outlined"
                  sx={{ margin: "10px", background: "white" }}
                ></TextField>
                <TextField
                  error
                  placeholder="Your job Title"
                  variant="outlined"
                  sx={{ margin: "10px", background: "white" }}
                ></TextField>
                <form>
                  <input type="text" className="mesagebox"></input>
                </form>
                <Button
                  className="sendme"
                  variant="contained"
                  sx={{
                    background: "red",
                    height: "60px",
                    width: "240px",
                    margin: "10px",
                  }}
                >
                  {" "}
                  Send Message
                </Button>
              </Box>
            </Container>
          </div>
        </Stack>
      </Container>
    </div>
  );
};
