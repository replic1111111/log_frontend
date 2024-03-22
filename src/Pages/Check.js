import { useCallback } from "react";

const MacBookPro1440 = () => {
  const onTabsContainer1Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 9" to the project
  }, []);

  const onTabsContainer2Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 10" to the project
  }, []);

  const onTabsContainer4Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 13" to the project
  }, []);

  const onTabsContainer5Click = useCallback(() => {
    // Please sync "MacBook Pro 14" - 12" to the project
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#181818",
        width: "100%",
        height: "1092px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "16px",
        color: "#fff",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          backgroundColor: "#282828",
          width: "235px",
          height: "1092px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "18px 19px",
          boxSizing: "border-box",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "180px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "2px 0px",
            boxSizing: "border-box",
            textAlign: "center",
            fontSize: "24px",
            color: "#4B6CC2",
            fontFamily: "'Odibee Sans'",
          }}
        >
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "180px",
              height: "35px",
              flexShrink: "0",
            }}
          >
            <span style={{ lineBreak: "anywhere", width: "100%" }}>
              <span>{`LUCKY `}</span>
              <span style={{ color: "#fff" }}>{`OR `}</span>
              <span>GENIUS</span>
            </span>
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            cursor: "pointer",
          }}
          onClick={onTabsContainer1Click}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotonepeople.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Leaderboards
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            cursor: "pointer",
          }}
          onClick={onTabsContainer2Click}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotonefirstline.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Summaries
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
          }}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxboldarrow3.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Predictions
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            cursor: "pointer",
          }}
          onClick={onTabsContainer4Click}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotoneactivity.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Markets
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            cursor: "pointer",
          }}
          onClick={onTabsContainer5Click}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotoneprofile.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Profiles
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#4B6CC2",
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
            color: "#282828",
          }}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotonenotificationcircle.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            My Channels
          </div>
        </div>
        <div
          style={{ position: "relative", width: "206px", height: "505px" }}
        />
        <div
          style={{
            width: "235px",
            height: "46px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px 0px",
            boxSizing: "border-box",
            gap: "18px",
          }}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/vuesaxtwotonesetting2.svg"
          />
          <div
            style={{
              position: "relative",
              letterSpacing: "0.3px",
              lineHeight: "150%",
              display: "flex",
              alignItems: "center",
              width: "133px",
              flexShrink: "0",
            }}
          >
            Settings
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "237px",
          backgroundColor: "#282828",
          width: "1275px",
          height: "74px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "10px 22px",
          boxSizing: "border-box",
          gap: "40px",
          fontSize: "24px",
        }}
      >
        <b
          style={{
            position: "relative",
            lineHeight: "80px",
            display: "flex",
            alignItems: "center",
            width: "472px",
            height: "43px",
            flexShrink: "0",
          }}
        >
          My Channels
        </b>
        <div
          style={{
            borderRadius: "25px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            width: "444px",
            height: "42px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "3px 20px",
            gap: "12px",
            fontSize: "16px",
            color: "#a9a9b7",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "370px",
              height: "18px",
              flexShrink: "0",
            }}
          >{`Search `}</div>
          <img
            style={{
              position: "relative",
              width: "18.85px",
              height: "18.85px",
            }}
            alt=""
            src="/vector.svg"
          />
        </div>
        <div
          style={{
            width: "219px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "16px",
            textAlign: "right",
            fontSize: "20px",
          }}
        >
          <img
            style={{ position: "relative", width: "24px", height: "24px" }}
            alt=""
            src="/iconlyboldnotification.svg"
          />
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "101px",
              height: "24px",
              flexShrink: "0",
            }}
          >
            Pat
          </div>
          <img
            style={{
              position: "relative",
              borderRadius: "25px",
              width: "50px",
              height: "50px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/frame-1000001069.svg"
          />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "76px",
          left: "237px",
          backgroundColor: "#6b7465",
          height: "1016px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "2px",
        }}
      >
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "103px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "7px 22px",
            boxSizing: "border-box",
            gap: "26px",
            fontSize: "20px",
          }}
        >
          <div
            style={{
              width: "354px",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "20px",
                flexShrink: "0",
              }}
            >
              Add Channel
            </div>
          </div>
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "#181818",
              backdropFilter: "blur(40px)",
              border: "1px solid rgba(174, 174, 174, 0.5)",
              boxSizing: "border-box",
              width: "834px",
              height: "60px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "2px 7px 2px 20px",
              gap: "32px",
              fontFamily: "Lato",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "40px",
                display: "flex",
                alignItems: "center",
                width: "607px",
                height: "38px",
                flexShrink: "0",
                opacity: "0.5",
              }}
            >
              Enter channel URL
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#282828",
                width: "170px",
                height: "50px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "28px 25px",
                boxSizing: "border-box",
                position: "relative",
                textAlign: "center",
                color: "#4B6CC2",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  margin: "0",
                  height: "42%",
                  width: "47.06%",
                  top: "29%",
                  left: "26.47%",
                  lineHeight: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: "0",
                }}
              >
                ADD
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            color: "#4B6CC2",
          }}
        >
          <div
            style={{
              backgroundColor: "#282828",
              width: "1275px",
              height: "54px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "7px 22px",
              boxSizing: "border-box",
              gap: "26px",
            }}
          >
            <div
              style={{
                width: "354px",
                height: "40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                Channel Name
              </div>
            </div>
            <div
              style={{
                width: "200px",
                height: "40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  width: "200px",
                  height: "39px",
                  flexShrink: "0",
                }}
              >
                Summaries
              </div>
            </div>
            <div
              style={{
                width: "201px",
                height: "40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  width: "117px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                Predictions
              </div>
            </div>
            <div
              style={{
                width: "212px",
                height: "40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  width: "212px",
                  height: "20px",
                  flexShrink: "0",
                }}
              >
                Prediction Accuracy
              </div>
            </div>
            <div
              style={{
                width: "152px",
                height: "40px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "125px",
                  height: "39px",
                  flexShrink: "0",
                }}
              >
                View More
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "71px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "7px 22px",
            boxSizing: "border-box",
            gap: "26px",
          }}
        >
          <div
            style={{
              width: "354px",
              height: "54px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              fontSize: "20px",
              color: "#4B6CC2",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                objectFit: "cover",
              }}
              alt=""
              src="/ellipse-369@2x.png"
            />
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "290px",
                height: "27px",
                flexShrink: "0",
              }}
            >
              All In Podcast
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              45
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              190
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              53
            </div>
          </div>
          <div
            style={{
              width: "152px",
              height: "58px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "21px 1px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{ position: "relative", width: "21.5px", height: "1.5px" }}
              alt=""
              src="/vector-1433.svg"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "482px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "7px 22px",
            boxSizing: "border-box",
            gap: "17px",
            fontSize: "24px",
            color: "#4B6CC2",
          }}
        >
          <div
            style={{
              width: "1215px",
              height: "170px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              fontSize: "16px",
            }}
          >
            <div
              style={{
                position: "relative",
                fontSize: "24px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "290px",
                height: "68px",
                flexShrink: "0",
              }}
            >
              People
            </div>
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #4B6CC2",
                boxSizing: "border-box",
                width: "247px",
                height: "68px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px",
                gap: "17px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  objectFit: "cover",
                }}
                alt=""
                src="/ellipse-368@2x.png"
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "160px",
                  height: "28px",
                  flexShrink: "0",
                }}
              >
                Chamath Palihapitiya
              </div>
            </div>
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #4B6CC2",
                boxSizing: "border-box",
                width: "218px",
                height: "68px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px",
                gap: "17px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  objectFit: "cover",
                }}
                alt=""
                src="/ellipse-3681@2x.png"
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "133px",
                  height: "28px",
                  flexShrink: "0",
                }}
              >
                Jason Calacanis
              </div>
            </div>
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #4B6CC2",
                boxSizing: "border-box",
                width: "186px",
                height: "68px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px",
                gap: "17px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  objectFit: "cover",
                }}
                alt=""
                src="/ellipse-3682@2x.png"
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "102px",
                  height: "28px",
                  flexShrink: "0",
                }}
              >
                David Sacks
              </div>
            </div>
            <div
              style={{ borderRadius: "10px", width: "290px", height: "68px" }}
            />
            <div
              style={{
                borderRadius: "10px",
                border: "1px solid #4B6CC2",
                boxSizing: "border-box",
                width: "213px",
                height: "68px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "10px",
                gap: "17px",
              }}
            >
              <img
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  objectFit: "cover",
                }}
                alt=""
                src="/ellipse-3683@2x.png"
              />
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "127px",
                  height: "28px",
                  flexShrink: "0",
                }}
              >
                David Friedberg
              </div>
            </div>
          </div>
          <div
            style={{
              width: "880px",
              height: "56px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "290px",
                height: "28px",
                flexShrink: "0",
              }}
            >
              Topics
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "20px",
                color: "#aeaeae",
                display: "flex",
                alignItems: "center",
                width: "305px",
                height: "28px",
                flexShrink: "0",
              }}
            >
              Economics, Tech, Poker, Politics
            </div>
          </div>
          <div
            style={{
              width: "1215px",
              height: "72px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <div
              style={{
                borderRadius: "10px",
                width: "290px",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  width: "235px",
                  height: "28px",
                  flexShrink: "0",
                }}
              >
                Pending Predictions
              </div>
            </div>
            <div
              style={{
                borderRadius: "10px",
                width: "242px",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                color: "#fff",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  width: "235px",
                  height: "28px",
                  flexShrink: "0",
                }}
              >
                43
              </div>
            </div>
          </div>
          <div
            style={{
              width: "1215px",
              height: "72px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <div
              style={{
                borderRadius: "10px",
                width: "290px",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  width: "160px",
                  height: "28px",
                  flexShrink: "0",
                }}
              >
                Platforms
              </div>
            </div>
            <div
              style={{
                borderRadius: "10px",
                width: "720px",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "25px",
              }}
            >
              <img
                style={{ position: "relative", width: "32px", height: "32px" }}
                alt=""
                src="/icons-here.svg"
              />
              <img
                style={{ position: "relative", width: "36px", height: "36px" }}
                alt=""
                src="/vuesaxboldapple.svg"
              />
              <img
                style={{
                  position: "relative",
                  width: "32px",
                  height: "32px",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/icons-here1.svg"
              />
              <img
                style={{
                  position: "relative",
                  width: "25.07px",
                  height: "23.5px",
                }}
                alt=""
                src="/vector-1470.svg"
              />
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#2d2d2d",
                border: "1px solid #e72e2e",
                boxSizing: "border-box",
                width: "172px",
                height: "50px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px",
                fontSize: "16px",
                color: "#e72e2e",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  width: "131px",
                  height: "28px",
                  flexShrink: "0",
                }}
              >
                Remove Channel
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "71px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "7px 22px",
            boxSizing: "border-box",
            gap: "26px",
          }}
        >
          <div
            style={{
              width: "354px",
              height: "51px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              fontSize: "20px",
              color: "#4B6CC2",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                objectFit: "cover",
              }}
              alt=""
              src="/ellipse-370@2x.png"
            />
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "290px",
                height: "27px",
                flexShrink: "0",
              }}
            >
              Arch Invest
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              21
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              72
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              55
            </div>
          </div>
          <div
            style={{
              width: "152px",
              height: "58px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "21px 1px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-277.svg"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "71px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "7px 22px",
            boxSizing: "border-box",
            gap: "26px",
          }}
        >
          <div
            style={{
              width: "354px",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              fontSize: "20px",
              color: "#4B6CC2",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                objectFit: "cover",
              }}
              alt=""
              src="/ellipse-371@2x.png"
            />
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "290px",
                height: "27px",
                flexShrink: "0",
              }}
            >
              Epsilon Theory
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              88
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              291
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              57
            </div>
          </div>
          <div
            style={{
              width: "152px",
              height: "58px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "21px 1px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-2771.svg"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "71px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "7px 22px",
            boxSizing: "border-box",
            gap: "26px",
          }}
        >
          <div
            style={{
              width: "354px",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              fontSize: "20px",
              color: "#4B6CC2",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                objectFit: "cover",
              }}
              alt=""
              src="/ellipse-372@2x.png"
            />
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "290px",
                height: "27px",
                flexShrink: "0",
              }}
            >
              Full Send Podcast
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              93
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              314
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              42
            </div>
          </div>
          <div
            style={{
              width: "152px",
              height: "58px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "21px 1px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-2772.svg"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#282828",
            width: "1275px",
            height: "71px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "7px 22px",
            boxSizing: "border-box",
            gap: "26px",
          }}
        >
          <div
            style={{
              width: "354px",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
              fontSize: "20px",
              color: "#4B6CC2",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                objectFit: "cover",
              }}
              alt=""
              src="/ellipse-373@2x.png"
            />
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "290px",
                height: "27px",
                flexShrink: "0",
              }}
            >
              Joe Rogan Experience
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              1
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              8
            </div>
          </div>
          <div
            style={{
              width: "200px",
              height: "68px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                width: "200px",
                height: "39px",
                flexShrink: "0",
              }}
            >
              63
            </div>
          </div>
          <div
            style={{
              width: "152px",
              height: "58px",
              overflow: "hidden",
              flexShrink: "0",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "21px 1px",
              boxSizing: "border-box",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-2773.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro1440;
