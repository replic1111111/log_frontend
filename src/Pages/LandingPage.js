import { Button } from "@mui/material";
import logo from "../assests/logo1.png";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "../styles/carousel.css";
import landing from "../assests/landing2.svg";
import { getEmail } from "../services/LandingPage.service";
import landingPageSVG from "../assests/landing_page.svg"; // Adjust the path if necessary

const LandingPage = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [dropdown, setDropDown] = useState(false);
  const [email, setEmail] = useState("");

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleEmailSubmit = () => {
    console.log("email::::::", email);
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      alert("Invalid Email");
      return;
    }
    getEmail(email)
      .then((res) => {
        console.log("res email::::::", res.data);
        alert(`${res.data.message}`);
        setEmail("");
      })
      .catch((err) => {
        console.log("err::::::", err);
      });
  };

  return (
    <div
      style={{
        width: "100%" /* Use viewport width to cover the full width */,
        height: "100%" /* Use viewport height to cover the full height */,
        backgroundColor: "#181818",
        backgroundImage: `url(${landingPageSVG})`,
        // backgroundRepeat: 'no-repeat',
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#181818",
          width: "1550px",
          height: "5318px",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "48px",
          color: "#fff",
          fontFamily: "Inter",
          // backgroundImage: `url(${landingPageSVG}) no-repeat center center fixed`,

          // background: `url("data:image/svg+xml,${encodeURIComponent(landing)}")`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "3069px",
            left: "262px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(186, 255, 42, 0.1), rgba(186, 255, 42, 0))",
            width: "1356px",
            height: "1362px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "3174px",
            left: "495px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
            width: "1493px",
            backgroundImage: `url(${landingPageSVG}) no-repeat center center fixed`,

            height: "1473px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "3103px",
            left: "-179px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
            width: "1493px",
            height: "1473px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "4431px",
            left: "0px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(186, 255, 42, 0.2), rgba(186, 255, 42, 0))",
            width: "1512px",
            height: "1516px",
          }}
        />
        {/* Landing Flex Starts */}
        <div
          style={{
            position: "absolute",
            top: "375px",
            left: "0px",
            width: "85%",
            height: "85%",
            fontSize: "16px",
            color: "#181818",
            backdropFilter: "blur(40px)",
          }}
        >
          <iframe
            style={{
              // backgroundImage: `url(${landingflex})`,
              position: "absolute",
              borderRadius: "10px",
              // top: "445px",
              left: "290px",
              width: "1066px",
              height: "600px",
              fontSize: "16px",
              // color: "#181818",
              // backdropFilter: "blur(40px)",
              // boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
            }}
            width="560"
            height="315px"
            src="https://www.youtube.com/embed/LfdW_I4gJA4?autoplay=1&loop=1&playlist=LfdW_I4gJA4&controls=0&showinfo=0&mute=1&vq=highres"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "150px",
              // background:
              //   "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.4) 45.63%, rgba(0, 0, 0, 0))",
              boxShadow: "0px 0px 0px #000",
              width: "100%",
              height: "600px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px 18px",
              boxSizing: "border-box",
              fontSize: "32px",
              color: "#fff",
              // backgroundColor: "red",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.3px",
                lineHeight: "150%",
                textTransform: "uppercase",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "290px",
              }}
            >
              {/* Skip the intro */}
            </div>
            {/* <div
            style={{
              position: "relative",
              letterSpacing: "3.8px",
              lineHeight: "150%",
              textTransform: "uppercase",
              fontWeight: "600",
              color: "#baff2a",
              display: "flex",
              alignItems: "center",
              width: "290px",
            }}
          >{`Get the info `}</div> */}
          </div>
          <div
            style={{
              position: "absolute",
              top: "575px",
              left: "10%",
              width: "100%",
              height: "160px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "21px 38px",
              boxSizing: "border-box",
              fontSize: "20px",
            }}
          >
            <Button
              style={{
                borderRadius: "8px",
                backgroundColor: "#baff2a",
                width: "211px",
                height: "46px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px 0px",
                boxSizing: "border-box",
                color: "#181818",
                fontWeight: "400",
                fontSize: "18px",
              }}
              // onClick={() => navigate("/Login")}
              onClick={() => {
                var scrollElement =
                  document.getElementById("emaildiv").offsetTop;
                window.scrollTo({ top: scrollElement, behavior: "smooth" });
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
        {/* Landing Flex Ends */}
        <div
          style={{
            position: "absolute",
            top: "-268px",
            left: "823px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(186, 255, 42, 0.1), rgba(186, 255, 42, 0))",
            width: "1332px",
            height: "1308px",
          }}
        />
        {/* <img
        style={{
          position: "absolute",
          top: "4748.13px",
          left: "0px",
          borderRadius: "0px",
          width: "1200px",
          height: "671px",
        }}
        alt=""
        src="/vector-1479.svg"
      /> */}
        <div
          style={{
            position: "absolute",
            top: "-696px",
            left: "-666px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(186, 255, 42, 0.1), rgba(186, 255, 42, 0))",
            width: "1332px",
            height: "1391px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "1617px",
            left: "672px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2), rgba(186, 255, 42, 0))",
            width: "1679px",
            height: "1694px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "1040px",
            left: "-666px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(186, 255, 42, 0.2), rgba(186, 255, 42, 0))",
            width: "1332px",
            height: "1308px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "1100px",
            left: "4px",
            width: "1511px",
            height: "321px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            color: "#baff2a",
          }}
        >
          <div
            style={{
              width: "1512px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 365px",
              boxSizing: "border-box",
              gap: "32px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.3px",
                lineHeight: "150%",
                fontWeight: "400",
                color: "#baff2a",
              }}
            >
              Analyzing content across these major platforms
            </div>
            <div
              style={{
                width: "753px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "25px 29px",
                boxSizing: "border-box",
                gap: "37px",
              }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  width: "90px",
                  height: "90px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "33px 31px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "31.07px",
                    height: "29.5px",
                  }}
                  alt=""
                  src="/x.svg"
                />
              </div>
              <div
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  // border: "1px solid #baff2a",
                  boxSizing: "border-box",
                  width: "90px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "29px 32px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "32px",
                    height: "32px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/youtubedark.svg"
                />
              </div>
              <div
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  // border: "1px solid #baff2a",
                  boxSizing: "border-box",
                  width: "90px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "29px 32px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "32px",
                    height: "32px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/spotify.svg"
                />
              </div>
              <div
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  // border: "1px solid #baff2a",
                  boxSizing: "border-box",
                  width: "90px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "29px 32px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "32px",
                    height: "32px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/v.svg"
                />
              </div>
              <div
                style={{
                  borderRadius: "20px",
                  backgroundColor: "white",
                  // border: "1px solid #baff2a",
                  boxSizing: "border-box",
                  width: "90px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "29px 32px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "32px",
                    height: "32px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/rumble.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "1635px",
            left: "313px",
            letterSpacing: "0.3px",
            lineHeight: "150%",
          }}
        >
          <span style={{ fontWeight: "500" }}>What can</span>
          <span style={{ color: "#baff2a" }}>
            <span style={{ fontFamily: "Inter" }}>{` `}</span>
            <span style={{ fontWeight: "600" }}>Lucky or Genius</span>
            <span style={{ fontFamily: "Inter" }}>{` `}</span>
          </span>
          <span style={{ fontWeight: "500" }}>do for you?</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: "1635px",
            left: "313px",
            letterSpacing: "0.3px",
            lineHeight: "150%",
          }}
        >
          <span style={{ fontWeight: "500" }}>What can</span>
          <span style={{ color: "#baff2a" }}>
            <span style={{ fontFamily: "Inter" }}>{` `}</span>
            <span style={{ fontWeight: "600" }}>Lucky or Genius</span>
            <span style={{ fontFamily: "Inter" }}>{` `}</span>
          </span>
          <span style={{ fontWeight: "500" }}>do for you?</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: "2805px",
            left: "434px",
            letterSpacing: "0.3px",
            lineHeight: "150%",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            width: "643px",
            height: "77px",
            color: "#baff2a",
          }}
        >
          <span style={{ lineBreak: "anywhere", width: "100%" }}>
            <span>Lucky or Genius</span>
            <span style={{ color: "#fff" }}> Use-Case</span>
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            top: "2944px",
            left: "0px",
            // borderRadius: "8px",
            width: "100%",
            // height: "417px",
            // overflow: "scroll",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              // flexDirection: "row", // Ensures the children are in a row
              justifyContent: "space-around", // Adjust the alignment as needed
              width: "100%", // Adjust the width if necessary
              gap: "20px", // Spacing between child divs
              // backgroundColor: "pink",
            }}
          >
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              style={{
                width: "100%",
                // backgroundColor: "yellow",
                height: "400px",
              }}
            >
              <Carousel.Item>
                <div
                  style={{
                    // backgroundColor: "lightgreen",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/aperture.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Instantly see the whole spectrum of opinions & forecasts on any topic`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/edgecluster.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Track content across many platforms in one place`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/view.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Compare creators historical accuracy at a glance`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/statistic-1.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Find the exact segment with just a couple clicks`}</div>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div
                  style={{
                    // backgroundColor: "lightgreen",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/compass.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Find the exact segment with just a couple clicks`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/human.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Evaluate creator profiles for areas of expertise`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/bell.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Receive alerts only when chosen topics are discussed`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/flash.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Consume hours of content in minutes`}</div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    // backgroundColor: "lightgreen",
                    height: "350px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/task.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Quickly see in which time-frames forecasters are most & least accurate`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/leaf.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Discover new sources based on accuracy not popularity`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/floppy.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`See the summaries even if original video gets removed`}</div>
                  </div>
                  <div
                    style={{
                      borderRadius: "20px",
                      width: "300px",
                      background:
                        "linear-gradient(180deg, #282828, rgba(98, 116, 61, 0.53))",
                      border: "2px solid #536000",
                      boxSizing: "border-box",
                      height: "308px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "20px 24px",
                      gap: "30px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#282828",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "25px",
                      }}
                    >
                      <img
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          overflow: "hidden",
                          flexShrink: "0",
                        }}
                        alt=""
                        src="/microscope.svg"
                      />
                    </div>
                    <div
                      style={{
                        position: "relative",
                        letterSpacing: "0.3px",
                        lineHeight: "150%",
                        display: "inline-block",
                        width: "273px",
                        height: "120px",
                        flexShrink: "0",
                      }}
                    >{`Track & improve your own forecasting skills`}</div>
                  </div>
                </div>
              </Carousel.Item>

              {/* Add more Carousel.Item components for additional items */}
            </Carousel>
          </div>
        </div>
        <div
          id="emaildiv"
          style={{
            position: "absolute",
            top: "4192px",
            left: "0px",
            width: "1511px",
            height: "438px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "110px 216px",
            boxSizing: "border-box",
            gap: "28px",
            textAlign: "center",
            fontSize: "40px",
            color: "#baff2a",
          }}
        >
          <div
            style={{
              position: "relative",
              lineHeight: "80px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "1201px",
              height: "140px",
              flexShrink: "0",
            }}
          >
            Sign up to our waitlist to be the first to get access.
          </div>
          <input
            placeholder="Enter your email"
            style={{
              position: "relative",
              borderRadius: "10px",
              backdropFilter: "blur(40px)",
              border: "1px solid #fff",
              boxSizing: "border-box",
              width: "461px",
              height: "66px",
              textAlign: "left",
              fontSize: "20px",
              color: "#fff",
              fontFamily: "Lato",
              zIndex: 999,
              paddingLeft: "10px",
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(186, 255, 42, 0.10) 0%, rgba(186, 255, 42, 0.00) 100%)",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            style={{
              position: "absolute",
              height: "9.5%",
              width: "8.45%",
              top: "64.3%",
              left: "56.57%",
              lineHeight: "40px",
              color: "#baff2a",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#282828",
              zIndex: 1000,
            }}
            onClick={handleEmailSubmit}
          >
            Submit
          </Button>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1512px",
            height: "82px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "10px 38px",
            boxSizing: "border-box",
            gap: "374px",
            textAlign: "center",
            fontSize: "22px",
            fontFamily: "Qebram",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              width: "223px",
              height: "57px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "2px 0px",
              boxSizing: "border-box",
              gap: "5px",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.3px",
                lineHeight: "150%",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
                textShadow: "0px 0px 100px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img className="fixed-image" alt="" src={logo} />
            </div>
          </div>
          <div
            style={{
              width: "823px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "50px",
              textAlign: "right",
              fontSize: "20px",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                position: "relative",
                color: "#baff2a",
                display: "flex",
                alignItems: "center",
                width: "58px",
                height: "24px",
                flexShrink: "0",
              }}
            >
              Home
            </div>
            <div
              style={{
                position: "relative",
                width: "100px",
                height: "33px",
                overflow: "hidden",
                flexShrink: "0",
              }}
              onClick={() => setDropDown((prev) => !prev)}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  display: "flex",
                  alignItems: "center",
                  width: "57px",
                  height: "33px",
                }}
              >
                About
              </div>
              <img
                style={{
                  position: "absolute",
                  top: "11.25px",
                  left: "76.25px",
                  width: "17.5px",
                  height: "9.81px",
                }}
                alt=""
                src="/vector-1480.svg"
              />
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "107px",
                height: "24px",
                flexShrink: "0",
              }}
            >
              Contact Us
            </div>
            <Button
              style={{
                borderRadius: "8px",
                backgroundColor: "#baff2a",
                width: "138px",
                height: "46px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px 0px",
                boxSizing: "border-box",
                textAlign: "left",
                fontSize: "16px",
                color: "#181818",
                fontWeight: "600",
              }}
              onClick={() => navigate("/Login")}
            >
              DEMO
            </Button>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "160px",
            left: "91px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            width: "1372px",
            height: "218px",
            color: "#baff2a",
            fontSize: "35px",
          }}
        >
          <span style={{ lineBreak: "anywhere", width: "100%" }}>
            <p>
              <span style={{ lineHeight: "0px" }}>
                <span style={{ fontWeight: "600" }}>
                  Track, Verify, Score – The Future of Prediction Accountability
                  Across Platforms.
                </span>
              </span>
            </p>
            <p style={{ fontSize: "32px", color: "#fff" }}>
              <span style={{ fontWeight: "500" }}>
                <span>{` `}</span>
                <span
                  style={{
                    lineHeight: "50px",
                    fontSize: "25px",
                    paddingLeft: "60px",
                  }}
                >{`Track Predictions Across Platforms, Summarize Insights, Assign Credibility Scores.`}</span>
              </span>
            </p>
            <p>
              <span style={{ fontWeight: "500" }}>
                <span style={{ color: "#fff", fontSize: "32px" }}></span>
              </span>
            </p>
          </span>
        </div>
        {dropdown ? (
          <div
            style={{
              position: "absolute",
              top: "82px",
              left: "1011px",
              borderRadius: "8px",
              backgroundColor: "#282828",
              width: "203px",
              height: "155px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "14px",
              boxSizing: "border-box",
              gap: "23px",
              fontSize: "20px",
              color: "#aeaeae",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "168px",
                height: "24px",
                flexShrink: "0",
              }}
            >
              Company
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "168px",
                height: "24px",
                flexShrink: "0",
              }}
            >
              Documentation
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                width: "168px",
                height: "24px",
                flexShrink: "0",
              }}
            >
              Product
            </div>
          </div>
        ) : null}
        <div
          style={{
            position: "absolute",
            top: "1847px",
            left: "-5px",
            width: "1517px",
            height: "812px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "10px",
            textAlign: "center",
            fontSize: "20px",
            color: "#baff2a",
          }}
        >
          <div
            style={{
              width: "464px",
              height: "740px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0px 100px",
              boxSizing: "border-box",
              gap: "31px",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                width: "387px",
                height: "300px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "32px",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "386px",
                }}
              >
                24/7 Tracking
              </div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  color: "#fff",
                  display: "inline-block",
                  width: "387px",
                  height: "200px",
                  flexShrink: "0",
                }}
              >
                We monitor and process new content across major platforms 24/7,
                extracting transcripts and assigning speaker to text within
                minutes of upload.
              </div>
              <div
                style={{
                  position: "relative",
                  textDecoration: "underline",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "386px",
                }}
              >
                Read more
              </div>
            </div>
            <img
              style={{
                position: "relative",
                borderRadius: "14px",
                width: "387px",
                height: "387px",
                objectFit: "cover",
              }}
              alt=""
              src="/mic.svg"
            />
          </div>
          <div
            style={{
              width: "464px",
              height: "740px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0px 100px",
              boxSizing: "border-box",
              gap: "31px",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                width: "387px",
                height: "300px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "32px",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "386px",
                }}
              >{`Summarize & Tag`}</div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  color: "#fff",
                  display: "inline-block",
                  width: "387px",
                  height: "200px",
                  flexShrink: "0",
                }}
              >{`All talking points & predictions are extracted, summed up and labelled by topic, type & status for ease of search. All original segments are perfectly clipped and replayable in our app.`}</div>
              <div
                style={{
                  position: "relative",
                  textDecoration: "underline",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "386px",
                }}
              >
                Read more
              </div>
            </div>
            <img
              style={{
                position: "relative",
                borderRadius: "14px",
                width: "387px",
                height: "387px",
                objectFit: "cover",
              }}
              alt=""
              src="/robot.svg"
            />
          </div>
          <div
            style={{
              width: "464px",
              height: "740px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0px 100px",
              boxSizing: "border-box",
              gap: "31px",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                width: "387px",
                height: "300px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "32px",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "386px",
                }}
              >
                Accuracy Scoring
              </div>
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  color: "#fff",
                  display: "inline-block",
                  width: "387px",
                  height: "200px",
                  flexShrink: "0",
                }}
              >{`We compare elapsed forecasts to real-world outcomes and then issue a series of accuracy scores to the speakers & authors of the predictions.`}</div>
              <div
                style={{
                  position: "relative",
                  textDecoration: "underline",
                  letterSpacing: "0.3px",
                  lineHeight: "150%",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "386px",
                }}
              >
                Read more
              </div>
            </div>
            <img
              style={{
                position: "relative",
                borderRadius: "14px",
                width: "387px",
                height: "387px",
                objectFit: "cover",
              }}
              alt=""
              src="/weight.svg"
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "5040px",
            left: "0px",
            width: "100%",
            height: "278px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0px 26px 26px 0px",
            boxSizing: "border-box",
            gap: "9px",
            textAlign: "center",
            fontSize: "22px",
            fontFamily: "Qebram",
            fill: "rgba(0, 0, 0, 0.80)",
            backgroundImage: `url("data:image/svg+xml",
            ${landing}
          )`,
          }}
        >
          <div
            style={{
              width: "329px",
              height: "92px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "2px 0px",
              boxSizing: "border-box",
              gap: "5px",
            }}
          >
            <div
              style={{
                width: "225px",
                height: "35px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px 0px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "188px",
                  height: "46px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "2px 0px",
                  boxSizing: "border-box",
                  gap: "5px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.3px",
                    lineHeight: "150%",
                    display: "flex",
                    alignItems: "center",
                    width: "200px",
                    height: "38px",
                    flexShrink: "0",
                    // backgroundColor: "red",
                  }}
                >
                  <img className="fixed-image" alt="" src={logo} />
                </div>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "14px",
                lineHeight: "100%",
                fontWeight: "300",
                fontFamily: "Inter",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "353px",
                height: "35px",
                flexShrink: "0",
              }}
            >
              Where forecasting meets accountability
            </div>
          </div>
          <div
            style={{
              position: "relative",
              fontSize: "16px",
              lineHeight: "26px",
              fontFamily: "Inter",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              width: "337px",
              height: "19px",
              flexShrink: "0",
            }}
          >
            ©2023 Lucky or Genius. All rights reserved.
          </div>
          <div
            style={{
              width: "257px",
              height: "50px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "18px",
              fontSize: "24px",
              fontFamily: "'Font Awesome 5 Brands'",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "50px",
                backgroundColor: "rgba(255, 0, 0, 0)",
                width: "50px",
                height: "50px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "17.5px",
                  left: "19px",
                  lineHeight: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "10.2px",
                  height: "16px",
                }}
              >
                <img alt="" src="/fb.svg" />
              </div>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "50px",
                backgroundColor: "rgba(255, 0, 0, 0)",
                width: "50px",
                height: "50px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16.5px",
                  left: "18px",
                  lineHeight: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "14.2px",
                  height: "16px",
                }}
              >
                <img alt="" src="/insta.svg" />
              </div>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "50px",
                backgroundColor: "rgba(255, 0, 0, 0)",
                width: "50px",
                height: "50px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16.5px",
                  left: "17px",
                  lineHeight: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "16.2px",
                  height: "16px",
                }}
              >
                <img alt="" src="/twitternew.svg" />
              </div>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: "50px",
                backgroundColor: "rgba(255, 0, 0, 0)",
                width: "50px",
                height: "50px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "16.5px",
                  left: "16px",
                  lineHeight: "38px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "19px",
                  height: "16px",
                }}
              >
                <img alt="" src="/youtube.svg" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "3612px",
            left: "-500px",
            borderRadius: "50%",
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(186, 255, 42, 0.1), rgba(186, 255, 42, 0))",
            width: "1356px",
            height: "1362px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "3482px",
            left: "0px",
            borderRadius: "10px",
            backdropFilter: "blur(90px)",
            width: "1511px",
            height: "710px",
            overflow: "hidden",
            fontSize: "16px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "27.5px",
              left: "102px",
              fontSize: "48px",
              lineHeight: "80px",
              fontWeight: "600",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "1307px",
              height: "72px",
            }}
          >
            Our Pricing
          </div>
          <div
            style={{
              position: "absolute",
              top: "129.5px",
              left: "239.5px",
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              filter: "blur(30px)",
              border: "4px solid rgba(83, 96, 0, 0.1)",
              boxSizing: "border-box",
              width: "324px",
              height: "553px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 20px",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "282px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  borderRadius: "8px",
                  width: "282px",
                  height: "77px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "16px 0px",
                  boxSizing: "border-box",
                  gap: "3px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.2px",
                    lineHeight: "28px",
                    display: "inline-block",
                    width: "282px",
                    height: "50px",
                    flexShrink: "0",
                  }}
                >
                  <p style={{ margin: "" }}>{`Current Plan `}</p>
                  <p
                    style={{ margin: "", fontSize: "24px", fontWeight: "600" }}
                  >
                    Free
                  </p>
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "14px",
                    letterSpacing: "0.2px",
                    display: "inline-block",
                    width: "324px",
                    height: "19px",
                    flexShrink: "0",
                  }}
                >
                  10 Posts/ month
                </div>
              </div>
            </div>
            <div
              style={{
                width: "282px",
                height: "338px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "282px",
                  height: "20px",
                  fontSize: "18px",
                  fontFamily: "Manrope",
                }}
              >
                <b
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    lineHeight: "20px",
                    display: "inline-block",
                    width: "282px",
                  }}
                >
                  What’s included
                </b>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr2.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4.5px",
                    left: "28.5px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Track any 1 YouTube channel
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr21.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Facebook Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr22.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Instagram Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr23.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "236px",
                    height: "21px",
                  }}
                >{`LinkedIn Integration `}</div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr24.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "188px",
                    height: "21px",
                  }}
                >
                  Pinterest Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr25.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Youtube Channel
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr26.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "149px",
                    height: "21px",
                  }}
                >
                  Twitter Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr27.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "165px",
                    height: "21px",
                  }}
                >
                  Promotion
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#baff2a",
                width: "282px",
                height: "54px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "17px 67px",
                boxSizing: "border-box",
                fontSize: "20px",
                color: "#0b0514",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                Free Demo
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "129.5px",
              left: "593.5px",
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              filter: "blur(30px)",
              border: "4px solid rgba(83, 96, 0, 0.1)",
              boxSizing: "border-box",
              width: "324px",
              height: "553px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 20px",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "282px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  borderRadius: "8px",
                  width: "282px",
                  height: "77px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "16px 0px",
                  boxSizing: "border-box",
                  gap: "3px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.2px",
                    lineHeight: "28px",
                    display: "inline-block",
                    width: "282px",
                    height: "50px",
                    flexShrink: "0",
                  }}
                >
                  <p style={{ margin: "" }}>{`Current Plan `}</p>
                  <p
                    style={{ margin: "", fontSize: "24px", fontWeight: "600" }}
                  >
                    Free
                  </p>
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "14px",
                    letterSpacing: "0.2px",
                    display: "inline-block",
                    width: "324px",
                    height: "19px",
                    flexShrink: "0",
                  }}
                >
                  10 Posts/ month
                </div>
              </div>
            </div>
            <div
              style={{
                width: "282px",
                height: "338px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "282px",
                  height: "20px",
                  fontSize: "18px",
                  fontFamily: "Manrope",
                }}
              >
                <b
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    lineHeight: "20px",
                    display: "inline-block",
                    width: "282px",
                  }}
                >
                  What’s included
                </b>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr28.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4.5px",
                    left: "28.5px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Track any 1 YouTube channel
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr29.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Facebook Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr210.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Instagram Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr211.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "236px",
                    height: "21px",
                  }}
                >{`LinkedIn Integration `}</div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr212.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "188px",
                    height: "21px",
                  }}
                >
                  Pinterest Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr213.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Youtube Channel
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr214.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "149px",
                    height: "21px",
                  }}
                >
                  Twitter Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr215.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "165px",
                    height: "21px",
                  }}
                >
                  Promotion
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#baff2a",
                width: "282px",
                height: "54px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "17px 67px",
                boxSizing: "border-box",
                fontSize: "20px",
                color: "#0b0514",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                Free Demo
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "129.5px",
              left: "947.5px",
              borderRadius: "10px",
              backgroundColor: "rgba(248, 248, 248, 0.3)",
              filter: "blur(30px)",
              border: "4px solid rgba(83, 96, 0, 0.1)",
              boxSizing: "border-box",
              width: "324px",
              height: "553px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 20px",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "282px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  borderRadius: "8px",
                  width: "282px",
                  height: "77px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  padding: "16px 0px",
                  boxSizing: "border-box",
                  gap: "3px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    letterSpacing: "0.2px",
                    lineHeight: "28px",
                    display: "inline-block",
                    width: "282px",
                    height: "50px",
                    flexShrink: "0",
                  }}
                >
                  <p style={{ margin: "" }}>{`Current Plan `}</p>
                  <p
                    style={{ margin: "", fontSize: "24px", fontWeight: "600" }}
                  >
                    Free
                  </p>
                </div>
                <div
                  style={{
                    position: "relative",
                    fontSize: "14px",
                    letterSpacing: "0.2px",
                    display: "inline-block",
                    width: "324px",
                    height: "19px",
                    flexShrink: "0",
                  }}
                >
                  10 Posts/ month
                </div>
              </div>
            </div>
            <div
              style={{
                width: "282px",
                height: "338px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "282px",
                  height: "20px",
                  fontSize: "18px",
                  fontFamily: "Manrope",
                }}
              >
                <b
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    lineHeight: "20px",
                    display: "inline-block",
                    width: "282px",
                  }}
                >
                  What’s included
                </b>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr216.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4.5px",
                    left: "28.5px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Track any 1 YouTube channel
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr217.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Facebook Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr218.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Instagram Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr219.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "236px",
                    height: "21px",
                  }}
                >{`LinkedIn Integration `}</div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr220.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "188px",
                    height: "21px",
                  }}
                >
                  Pinterest Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr221.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "254px",
                    height: "21px",
                  }}
                >
                  Youtube Channel
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr222.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "149px",
                    height: "21px",
                  }}
                >
                  Twitter Integration
                </div>
              </div>
              <div
                style={{ position: "relative", width: "282px", height: "30px" }}
              >
                <img
                  style={{
                    position: "absolute",
                    top: "calc(50% - 10px)",
                    left: "0px",
                    width: "20px",
                    height: "20px",
                    overflow: "hidden",
                  }}
                  alt=""
                  src="/svgmr223.svg"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "4px",
                    left: "28px",
                    lineHeight: "30px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    width: "165px",
                    height: "21px",
                  }}
                >
                  Promotion
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#baff2a",
                width: "282px",
                height: "54px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "17px 67px",
                boxSizing: "border-box",
                fontSize: "20px",
                color: "#0b0514",
              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "30px",
                  fontWeight: "600",
                }}
              >
                Free Demo
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "342px",
              left: "383px",
              fontSize: "48px",
              lineHeight: "80px",
              fontWeight: "600",
              color: "#baff2a",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "744px",
              height: "72px",
            }}
          >{`Coming Soon `}</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
