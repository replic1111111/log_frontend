import React, { useState, useEffect } from "react";
import {
  getPredictions,
  getPredictionSingle,
} from "../services/Predictions.service";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Predictions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const a = location?.state?.id;

  console.log("arr:::", a);
  const [data, setData] = useState([]);
  const [userid, setUserId] = useState(location?.state?.id);
  useEffect(() => {
    console.log("userId::::::::", userid);
    console.log("userId::::::::", typeof userid);
    console.log("userId::::::::", userid);
    if (userid == undefined) {
      getPredictions()
        .then((res) => {
          console.log("res:::00000::::::", res.data);
          setData([...res.data]);
          setData(
            [...res.data].map((obj) => ({
              ...obj,
              predictionActive: false,
            }))
          );
        })
        .catch((err) => {
          console.log("err::::::", err);
        });
    } else {
      getPredictionSingle(location?.state?.id)
        .then((res) => {
          console.log("res:::123456::::::", res.data);
          setData([...res.data]);
          setData(
            [...res.data].map((obj) => ({
              ...obj,
              predictionActive: false,
            }))
          );
        })
        .catch((err) => {
          console.log("err::::::", err);
        });
    }
  }, []);

  const onClickDescription = (index) => {
    const arr = [...data];
    arr[index].predictionActive = !arr[index].predictionActive;
    setData([...arr]);
  };
  return (
    <div
      style={{
        position: "fixed",
        top: "76px",
        left: "237px",
        height: "90vh",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2px",
        fontSize: "20px",
        color: "#4B6CC2",
        minWidth: "calc(100% - 240px)",
        marginBottom: "80px",
        overflowStyle: "none",
      }}
    >
      {/* Header Starts */}

      <div
        style={{
          backgroundColor: "#282828",
          width: "100%",
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
            width: "130px",
            height: "40px",
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
              width: "92px",
              height: "20px",
              flexShrink: "0",
            }}
          >
            Status
          </div>
          <img
            style={{
              position: "relative",
              width: "21.5px",
              height: "10.01px",
            }}
            alt=""
            src="/down-arrow.svg"
          />
        </div>
        <div
          style={{
            width: "240px",
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
              width: "214px",
              height: "20px",
              flexShrink: "0",
            }}
          >
            Forecaster
          </div>
        </div>
        <div
          style={{
            width: "140px",
            height: "40px",
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
              width: "101px",
              height: "20px",
              flexShrink: "0",
            }}
          >
            Topic
          </div>
          <img
            style={{
              position: "relative",
              width: "21.5px",
              height: "10.01px",
            }}
            alt=""
            src="/down-arrow.svg"
          />
        </div>
        <div
          style={{
            width: "457px",
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
              width: "135px",
              height: "20px",
              flexShrink: "0",
            }}
          >
            Prediction
          </div>
        </div>
        <div
          style={{
            width: "185px",
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
              width: "135px",
              height: "20px",
              flexShrink: "0",
            }}
          >
            Market
          </div>
        </div>
      </div>

      {/* Header ENds */}
      {/* Array Data Starts */}
      {data.map((val, index) => {
        return (
          <>
            <div
              style={{
                backgroundColor: "#282828",
                width: "100%",
                height: "84px",
                overflow: "hidden",
                flexShrink: "0",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "7px 22px",
                boxSizing: "border-box",
                gap: "26px",
                cursor: "pointer",
                color: "#fff",
              }}
              onClick={() => onClickDescription(index)}
            >
              <div
                style={{
                  backgroundColor:
                    val?.prediction_validation === "PENDING"
                      ? "#374C98"
                      : val?.prediction_validation === "TRUE"
                      ? "green"
                      : val?.prediction_validation === "UNDETERMINED"
                      ? "#D29D15"
                      : val?.prediction_validation === "PARTIALLY TRUE"
                      ? "#388E3C"
                      : "#E72E2E",
                  width: "130px",
                  height: "84px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  textAlign: "center",
                  color:
                    val?.prediction_validation === "PARTIALLY TRUE"
                      ? "#FFFFFF"
                      : "#fff",
                }}
              >
                <p
                  style={{
                    position: "relative",
                    // fontWeight: "",
                    display: "flex",
                    // alignItems: "center",
                    justifyContent: "center",
                    width: "130px",
                    height: "25px",
                    // flexShrink: "0",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  {val?.prediction_validation}
                </p>
              </div>
              <div
                style={{
                  width: "240px",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "15px",
                  fontFamily: "Inter",
                }}
              >
                {/* <div
                  style={{
                    position: "relative",
                    borderRadius: "25px",
                    border: "1px solid #4B6CC2",
                    boxSizing: "border-box",
                    width: "40px",
                    height: "40px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                > */}
                <img
                  style={{
                    position: "relative",
                    borderRadius: "100%",
                    width: "56px",
                    height: "56px",
                    overflow: "hidden",
                    flexShrink: "0",
                    border: "1px solid #4B6CC2",
                    // position: "absolute",
                    // top: "3px",
                    // left: "3px",
                    // // // borderRadius: "19.5px",
                    // // width: "34px",
                    // // height: "34px",
                    objectFit: "cover",
                    // border: "2px solid",
                    padding: "4px",
                  }}
                  alt=""
                  src={val?.image_url}
                />
                {/* </div> */}
                <div
                  style={{
                    width: "184px",
                    height: "40px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    fontFamily: "Inter",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      width: "184px",
                      fontSize: "16px",
                    }}
                  >
                    {val?.first_name.startsWith("Unknown")
                      ? "Unknown"
                      : val?.first_name + " " + val?.last_name}
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "140px",
                  height: "84px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "140px",
                    height: "39px",
                    // flexShrink: "0",
                    fontSize: "16px",
                  }}
                >
                  {val?.category}
                </div>
              </div>
              <div
                style={{
                  width: "457px",
                  height: "84px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "457px",
                    height: "84px",
                    // flexShrink: "0",
                    fontSize: "16px",
                    paddingTop: "2px",
                    fontStyle: "normal",
                  }}
                >
                  {val?.prediction}
                </div>
              </div>
              <div
                style={{
                  width: "145px",
                  height: "58px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "21px 1px",
                  boxSizing: "border-box",
                  gap: "85px",
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "38px",
                    height: "37px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                  alt=""
                  src="/marketgraph.svg"
                />
                <div>
                  {val?.predictionActive ? (
                    <img
                      style={{
                        position: "relative",
                        width: "21.5px",
                        height: "21.5px",
                      }}
                      alt=""
                      src="/vector-1433.svg"
                    />
                  ) : (
                    <img
                      style={{
                        position: "relative",
                        width: "21.5px",
                        height: "21.5px",
                      }}
                      alt=""
                      src="/vector-278.svg"
                    />
                  )}
                </div>
              </div>
            </div>
            {val?.predictionActive ? (
              <div
                style={{
                  backgroundColor: "",
                  width: "1275px",
                  height: "302px",
                  overflow: "hidden",
                  flexShrink: "0",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "7px 22px",
                  boxSizing: "border-box",
                  gap: "133px",
                  fontSize: "14px",
                  color: "#aeaeae",
                }}
              >
                <div
                  style={{
                    borderRadius: "10px",
                    width: "357px",
                    height: "262px",
                    overflow: "hidden",
                    flexShrink: "0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "7px 22px",
                    boxSizing: "border-box",
                    gap: "11px",
                  }}
                >
                  <div
                    style={{
                      width: "322px",
                      height: "40px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        width: "160px",
                        height: "20px",
                        flexShrink: "0",
                      }}
                    >
                      Title
                    </div>
                    <div
                      style={{
                        position: "relative",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        width: "323px",
                        height: "20px",
                        flexShrink: "0",
                      }}
                    >
                      {val?.source_title.slice(0, 30)}...
                    </div>
                  </div>
                  <div
                    style={{
                      width: "335px",
                      height: "47px",
                      overflow: "hidden",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "12px 0px",
                      boxSizing: "border-box",
                      gap: "55px",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#4B6CC2",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "8px",
                        backgroundColor: "#282828",
                        width: "141px",
                        height: "43px",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        boxSizing: "border-box",
                      }}
                    >
                      <Button
                        style={{
                          borderRadius: "8px",
                          width: "140px",
                          height: "40px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          fontSize: "11px",
                          color: "#4B6CC2",
                        }}
                        onClick={() =>
                          navigate("/Summaries", {
                            state: { id: val?.user_id },
                          })
                        }
                      >
                        Summary
                      </Button>
                    </div>
                    <div
                      style={{
                        width: "143px",
                        height: "40px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        textAlign: "left",
                        fontSize: "14px",
                        color: "#aeaeae",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          width: "160px",
                          height: "20px",
                          flexShrink: "0",
                        }}
                      >
                        Made on:
                      </div>
                      <div
                        style={{
                          position: "relative",
                          color: "#4B6CC2",
                          display: "flex",
                          alignItems: "center",
                          width: "160px",
                          height: "20px",
                          flexShrink: "0",
                        }}
                      >
                        {val?.publish_date}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "47px",
                      overflow: "hidden",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "12px 0px",
                      boxSizing: "border-box",
                      gap: "28px",
                    }}
                  >
                    <div
                      style={{
                        width: "168px",
                        height: "40px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          width: "160px",
                          height: "20px",
                          flexShrink: "0",
                        }}
                      >
                        Prediction Accuracy
                      </div>
                      <div
                        style={{
                          position: "relative",
                          fontSize: "16px",
                          fontWeight: "500",
                          color: "#4B6CC2",
                          display: "flex",
                          alignItems: "center",
                          width: "160px",
                          height: "20px",
                          flexShrink: "0",
                        }}
                      >
                        {Math.floor(val?.prediction_accuracy)}%
                      </div>
                    </div>
                    <div
                      style={{
                        width: "126px",
                        height: "40px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          width: "126px",
                          height: "20px",
                          flexShrink: "0",
                        }}
                      >
                        Resolves on:
                      </div>
                      <div
                        style={{
                          position: "relative",
                          color: "#4B6CC2",
                          display: "flex",
                          alignItems: "center",
                          width: "126px",
                          height: "20px",
                          flexShrink: "0",
                        }}
                      >
                        {val?.fixed_date}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "335px",
                      height: "58px",
                      overflow: "hidden",
                      flexShrink: "0",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "10px 10px 10px 0px",
                      boxSizing: "border-box",
                      gap: "53px",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#4B6CC2",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "8px",
                        backgroundColor: "#282828",
                        width: "141px",
                        height: "43px",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        // padding: "17px 34px",
                        boxSizing: "border-box",
                      }}
                    >
                      <Button
                        style={{
                          borderRadius: "8px",
                          width: "140px",
                          height: "40px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          fontSize: "11px",
                          color: "#4B6CC2",
                        }}
                        onClick={() =>
                          navigate("/Profiles", {
                            state: { id: val?.user_id },
                          })
                        }
                      >
                        View Profile
                      </Button>
                    </div>
                    <div
                      style={{
                        borderRadius: "8px",
                        backgroundColor: "#282828",
                        width: "141px",
                        height: "43px",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        // padding: "17px 34px",
                        boxSizing: "border-box",
                      }}
                    >
                      <Button
                        style={{
                          borderRadius: "8px",
                          width: "140px",
                          height: "40px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          fontSize: "11px",
                          color: "#4B6CC2",
                        }}
                        onClick={() =>
                          navigate("/Markets", {
                            state: { id: val?.user_id },
                          })
                        }
                      >
                        View Market
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    borderRadius: "14px",
                    backgroundColor: "#141c23",
                    width: "492px",
                    height: "262px",
                    overflow: "hidden",
                    flexShrink: "0",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "492px",
                      height: "262px",
                      objectFit: "cover",
                    }}
                    alt=""
                    src="/image-140@2x.png"
                  />
                  <div>
                    {console.log("YouTube ID:", val?.youtube_id)}
                    {console.log("Start Time:", val?.youtube_start_time)}
                    <iframe
                      style={{
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "493px",
                        height: "262px",
                        objectFit: "cover",
                      }}
                      alt=""
                      src={`https://www.youtube.com/embed/${val?.youtube_id}?start=${val?.youtube_start_time}`}
                    />
                  </div>
                </div>
              </div>
            ) : null}
          </>
        );
      })}
      {/* Array Data Ends */}
    </div>
  );
};

export default Predictions;
