import React, { useEffect, useState } from "react";
import "../styles/summaries.css";
// import "../styles/summariesSubSection.css";
import {
  allSummarySources,
  getSummaryPeople,
  getSummaryPrediction,
  getSummarySummaries,
  getFullTranscript,
} from "../services/summaries.services";
import { LuCalendarDays } from "react-icons/lu";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Tabs from "../components/common/tabs";

const myComponentStyle = {
  fontFamily: "Roboto, sans-serif", // Use the font name specified in Google Fonts
};
function Summaries() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState([]);
  const [peopleData, setPeopleData] = useState([]);
  const [predictionData, setPredictionData] = useState([]);
  const [summariesData, setSummariesData] = useState([]);
  const [fullTranscriptData, setFullTranscriptData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const [subSectionIndex, setSubSectionIndex] = useState(false);

  useEffect(() => {
    allSummarySources()
      .then((res) => {
        // console.log("res::::", res.data);
        setData([...res.data]);
        setData(
          [...res.data].map((obj) => ({
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          }))
        );
      })
      .catch((err) => {
        console.log("err:::::::", err);
      });
  }, []);
  const convertMinsToHrsMins = (minutes) => {
    let h = Math.floor(minutes / 60);
    let m = minutes % 60;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    return `${h}:${m}:00`; // Assumes no seconds part, so it's always '00'
  };

  const onClickPrediction = (index) => {
    const arr = [...data];
    arr[index].predictionActive = !arr[index].predictionActive;
    setData([...arr]);
    if (data[index].predictionActive === false) {
      return;
    }
    setData(
      [...data].map((obj, ind) => {
        if (ind === index) {
          return {
            ...obj,
            predictionActive: true,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        } else {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getSummaryPrediction(data[index].source_id)
      .then((res) => {
        console.log("res setPredictionData:::::::", res.data);
        setPredictionData([...res.data]);
        setActiveIndex("");
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  };
  const onClickPeople = (index) => {
    const arr = [...data];
    arr[index].peopleActive = !arr[index].peopleActive;
    setData([...arr]);
    if (data[index].peopleActive === false) {
      return;
    }
    setData(
      [...data].map((obj, ind) => {
        if (ind === index) {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: true,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        } else {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getSummaryPeople(data[index].source_id)
      .then((res) => {
        console.log("res people:::::::", res.data);
        setPeopleData([...res.data]);
        setActiveIndex("");
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  };

  const onClickSummaries = (index) => {
    const arr = [...data];
    arr[index].summariesActive = !arr[index].summariesActive;
    setData([...arr]);
    if (data[index].summariesActive === false) {
      return;
    }
    setData(
      [...data].map((obj, ind) => {
        if (ind == index) {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: true,
            fullTranscriptActive: false,
          };
        } else {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getSummarySummaries(data[index].source_id)
      .then((res) => {
        console.log("res setPredictionData:::::::", res.data);
        setSummariesData([...res.data]);
        setActiveIndex("");
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  };
  const onClickFullTranscript = (index) => {
    const arr = [...data];
    arr[index].fullTranscriptActive = !arr[index].fullTranscriptActive;
    setData([...arr]);
    if (data[index].fullTranscriptActive === false) {
      return;
    }
    setData(
      [...data].map((obj, ind) => {
        if (ind === index) {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: true,
          };
        } else {
          return {
            ...obj,
            predictionActive: false,
            peopleActive: false,
            summariesActive: false,
            fullTranscriptActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    getFullTranscript(data[index].source_id)
      .then((res) => {
        console.log("res setPredictionData:::::::", res.data);
        setFullTranscriptData([...res.data]);
        // setFullTranscriptData([]);
        setActiveIndex("");
        setLoading(false);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  };
  const onClickSummariesCol = (index) => {
    const arr = [...data];
    arr[index].Active = !arr[index].Active;
    setData([...arr]);
    onClickPrediction(index);
    onClickPeople(index);
    onClickSummaries(index);
    onClickFullTranscript(index);
  };

  return (
    <div className="summaries">
      {/* Column Starts */}
      {data.map((val, index) => {
        return (
          <>
            {/* Column Starts */}
            <div className="summaries-col">
              <div className="summaries-col-1">
                <img alt="" src="/youtube.svg" />
                <div className="sub-col-1">
                  <div className="sub-col-text-1">
                    {val.source_title.slice(0, 30)}..
                  </div>
                  <div className="sub-col-text-2">
                    Views: {Math.round(val?.views / 1000000)}M | Length:{" "}
                    {convertMinsToHrsMins(val.duration)}
                  </div>
                </div>
              </div>
              <div className="summaries-col-2">
                <div className="sub-col-2">
                  <div className="sub-col-text-1"># of Predictions</div>
                  <div className="sub-col-text-2">
                    {val.number_of_predictions}
                  </div>
                </div>
              </div>
              <div className="summaries-col-3">
                <div className="sub-col-text-1">Publish Date</div>
                <div className="sub-col-text-2">
                  {val.publication_date.toString().slice(0, 10)}
                </div>
              </div>
              <div
                className="summaries-col-4"
                onClick={() => onClickSummaries(index)}
              >
                <div className="sub-col-text-1">Summaries</div>
                {val?.summariesActive ? (
                  <img alt="" src="/vector-1433.svg" />
                ) : (
                  <img alt="" src="/vector-278.svg" />
                )}
              </div>
              <div
                className="summaries-col-5"
                onClick={() => onClickPrediction(index)}
              >
                <div className="sub-col-text-1">Predictions</div>
                {val?.predictionActive ? (
                  <img alt="" src="/vector-1433.svg" />
                ) : (
                  <img alt="" src="/vector-278.svg" />
                )}
              </div>
              <div
                className="summaries-col-6"
                onClick={() => {
                  onClickPeople(index);
                }}
              >
                <div className="sub-col-text-1">People</div>
                {val?.peopleActive ? (
                  <img alt="" src="/vector-1433.svg" />
                ) : (
                  <img alt="" src="/vector-278.svg" />
                )}
              </div>
              <div
                className="summaries-col-7"
                onClick={() => {
                  onClickFullTranscript(index);
                }}
              >
                <div className="sub-col-text-1">Full Transcript</div>
                {val?.fullTranscriptActive ? (
                  <img alt="" src="/vector-1433.svg" />
                ) : (
                  <img alt="" src="/vector-278.svg" />
                )}
              </div>
            </div>

            {/* Mobile View Starts */}
            <div
              className="mob-summaries-col"
              onClick={() => {
                onClickSummariesCol(index);
              }}
            >
              <div className="summaries-header">
                <div className="summaries-header-img">
                  <img alt="" src="/youtube.svg" />
                </div>
                <div className="summaries-header-content">
                  <h6 className=""> {val.source_title.slice(0, 30)}..</h6>
                  <span style={{ color: "#aeaeae" }}>
                    Views: {Math.round(val?.views / 1000000)}M | Length:{" "}
                    {convertMinsToHrsMins(val.duration)}
                  </span>
                </div>
              </div>
              <div className="summaries-body">
                <div className="col">
                  <span>No. of Predictions</span>
                  <h6>{val.number_of_predictions}</h6>
                </div>
                <div className="col">
                  <span>Publish Date</span>
                  <h6>{val.publication_date.toString().slice(0, 10)}</h6>
                </div>
              </div>
            </div>

            {/* Column Ends */}
            {/* Column Description Starts */}
            {!loading && val?.peopleActive ? (
              <>
                {peopleData.map((val, index) => {
                  return (
                    <div className="people-section">
                      <div className="ps-col-1">
                        <img alt="" src={val?.image_url} />
                        <div>
                          <div
                            style={{
                              fontWeight: "800",
                              display: "flex",
                              alignItems: "center",
                              flexShrink: "0",
                              fontSize: "19px",
                            }}
                          >
                            {val?.first_name.startsWith("Unknown")
                              ? "Unknown"
                              : val?.first_name + " " + val?.last_name}
                          </div>
                          <div
                            style={{
                              position: "relative",
                              fontWeight: "400",
                              display: "flex",
                              alignItems: "center",
                              flexShrink: "0",
                            }}
                          >
                            #85
                          </div>
                          <div
                            style={{
                              position: "relative",
                              fontSize: "16px",
                              color: "#aeaeae",
                              display: "flex",
                              alignItems: "center",
                              width: "116px",
                              height: "20px",
                              flexShrink: "0",
                            }}
                          >
                            Ranked
                          </div>
                        </div>
                      </div>
                      <div className="ps-col-2">
                        <div className="sub-col-2">
                          <div className="sub-col-text-1">
                            {Math.floor(val?.accuracy_score)}%
                          </div>
                          <div className="sub-col-text-2">Score</div>
                        </div>
                        <div className="sub-col-2">
                          <div className="sub-col-text-1">
                            {val?.total_predictions}
                          </div>
                          <div className="sub-col-text-2">Predictions</div>
                        </div>
                        <div className="sub-col-2">
                          <div className="sub-col-text-1">
                            {val?.pending_predictions}
                          </div>
                          <div className="sub-col-text-2">Pending</div>
                        </div>
                        <div className="sub-col-2">
                          <div className="sub-col-text-1">
                            {val?.episode_predictions}
                          </div>
                          <div className="sub-col-text-2">{`Episode Predictions `}</div>
                        </div>
                      </div>

                      <div
                        style={{
                          borderRadius: "8px",
                          backgroundColor: "#282828",
                          height: "41px",
                          overflow: "hidden",
                          flexShrink: "0",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "17px 34px",
                          boxSizing: "border-box",
                          textAlign: "center",
                          fontSize: "14px",
                        }}
                      >
                        <Button
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: "0",
                            color: "#4B6CC2",
                            backgroundColor: "#282828",
                          }}
                          onClick={() =>
                            navigate("/Profiles", {
                              state: { id: val?.user_id },
                            })
                          }
                        >
                          Full Profile
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}

            {!loading && val?.predictionActive ? (
              <div className="active-predictions-section">
                <div className="ap-col-1">
                  {predictionData.map((val, index) => {
                    return (
                      <>
                        {" "}
                        <div className="ap-col-1-row">
                          <div
                            style={{
                              position: "relative",
                              fontWeight: "500",
                              display: "flex",
                              alignItems: "center",
                              flexShrink: "0",
                            }}
                          >
                            {val?.prediction.slice(0, 50)}...
                          </div>
                          <div
                            onClick={() => {
                              // setSubSection((prev) => !prev);
                              console.log(index);
                              setSubSectionIndex(index);
                            }}
                          >
                            {subSectionIndex === index ? (
                              <img alt="" src="/vector-1433.svg" />
                            ) : (
                              <img alt="" src="/vector-278.svg" />
                            )}
                          </div>
                        </div>
                        {subSectionIndex === index ? (
                          <div
                            style={{
                              paddingRight: "20px",
                              marginTop: "10px",
                              color: "#AEAEAE",
                              fontFamily: "inter",
                              fontSize: "14px",
                            }}
                          >
                            {val?.prediction}
                            <p style={{ color: "#4B6CC2" }}>
                              Status :
                              <span
                                style={{
                                  color:
                                    val?.prediction_validation == "TRUE"
                                      ? "green"
                                      : val?.prediction_validation == "FALSE"
                                      ? "#E72E2E"
                                      : val?.prediction_validation ==
                                        "PARTIALLY TRUE"
                                      ? "#2DD22A"
                                      : val?.prediction_validation == "PENDING"
                                      ? "#374C98"
                                      : "#D29D15",
                                  fontFamily: "inter",
                                  fontSize: "14px",
                                }}
                              >
                                {" "}
                                {val?.prediction_validation}
                              </span>
                            </p>
                            <p style={{ color: "#4B6CC2" }}>
                              Settled Date :{" "}
                              <span
                                style={{ fontSize: "14px", color: "#AEAEAE" }}
                              >
                                {val?.fixed_date}
                              </span>
                            </p>
                          </div>
                        ) : null}
                      </>
                    );
                  })}
                </div>

                <div className="ap-col-2">
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                    src={`https://youtube.com/embed/${predictionData[subSectionIndex]?.youtube_id}?start=${predictionData[subSectionIndex]?.youtube_start_time}`}
                  />
                  {console.log(
                    "Video ID:",
                    predictionData[subSectionIndex]?.youtube_id
                  )}
                  {console.log(
                    "Start time:",
                    predictionData[subSectionIndex]?.youtube_start_time
                  )}
                </div>
              </div>
            ) : null}
            {!loading && val?.summariesActive ? (
              <div className="active-summaries-section">
                <div className="as-col-1">
                  {summariesData.map((val, index) => {
                    return (
                      <>
                        <div className="as-col-1-row">
                          <div className="as-col-1-row-inner">
                            <span style={{ color: "#6495ED" }}>
                              {"["}
                              {val?.time}
                              {"]"}&nbsp;
                            </span>
                            {val?.summary_title.slice(0, 50)}...
                          </div>
                          <div
                            onClick={() => {
                              // setSubSectionIndex((prev) => !prev);
                              setSubSectionIndex(index);
                            }}
                          >
                            {subSectionIndex === index ? (
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
                        {subSectionIndex === index ? (
                          <div
                            style={{
                              paddingRight: "20px",
                              marginTop: "10px",
                              color: "#AEAEAE",
                              fontFamily: "inter",
                              fontSize: "16px",
                            }}
                          >
                            {val?.summary_text}
                          </div>
                        ) : null}
                      </>
                    );
                  })}
                </div>

                <div className="as-col-2">
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                    src={`https://youtube.com/embed/${summariesData[subSectionIndex]?.youtube_id}?start=${summariesData[subSectionIndex]?.youtube_start_time}`}
                  />
                  {console.log(
                    "Video ID:",
                    summariesData[subSectionIndex]?.youtube_id
                  )}
                  {console.log(
                    "Start time:",
                    summariesData[subSectionIndex]?.youtube_start_time
                  )}
                </div>
              </div>
            ) : null}
            {!loading && val?.fullTranscriptActive ? (
              <>
                {fullTranscriptData.map((val, index) => {
                  return (
                    <div
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#282828" : "#202020",
                      }}
                      className="active-transcript-section"
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "40px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "259px",
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
                              width: "259px",
                              height: "20px",
                              flexShrink: "0",
                            }}
                          >
                            {val?.time_range}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          width: "131px",
                          height: "40px",
                          color: "#aeaeae",
                        }}
                      >
                        <div
                          style={{
                            width: "90%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "16px",
                            color: "#fff",
                          }}
                        >
                          {/* Profile Image with hover-over username */}
                          {val?.image_url ? (
                            <img
                              src={val.image_url}
                              alt={val.user_name}
                              title={
                                val.user_name.startsWith("Unknown")
                                  ? ""
                                  : val.user_name
                              } // Tooltip on hover
                              style={{
                                width: "50px", // Smaller size
                                height: "50px", // Ensure width and height are the same for a circle
                                borderRadius: "50%", // Makes the image circular
                                border: "2px solid #fff", // Thin white border, adjust color and width as needed
                                objectFit: "cover", // Ensures the image covers the area without stretching
                                marginBottom: "10px", // Space below the image
                                cursor: "pointer", // Changes cursor to indicate hover effect
                              }}
                            />
                          ) : null}
                        </div>
                      </div>
                      <div
                        style={{
                          width: "90%",
                          // height: "40px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "left",
                          justifyContent: "center",
                          fontSize: "16px",
                          color: "#fff",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            width: "90%",
                            // height: "41px",
                            flexShrink: "0",
                            flexWrap: "wrap",
                          }}
                        >
                          {val?.labelled_segments}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : null}
            {!loading && val?.Active ? (
              <div className="mob-active-col">
                <Tabs
                  items={[
                    {
                      title: "Summaries",
                      content: (
                        <div className="mob-summaries-active">
                          <div className="mob-summaries">
                            {summariesData.map((val, index) => {
                              return (
                                <>
                                  <div className="as-col-1-row" key={index}>
                                    <div className="">
                                      {val?.summary_title.slice(0, 50)}...
                                    </div>
                                    <div
                                      onClick={() => {
                                        // setSubSectionIndex((prev) => !prev);
                                        setSubSectionIndex(index);
                                      }}
                                    >
                                      {subSectionIndex === index ? (
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
                                  {subSectionIndex === index ? (
                                    <div
                                      style={{
                                        paddingRight: "20px",
                                        marginTop: "10px",
                                        color: "#AEAEAE",
                                        fontFamily: "inter",
                                        fontSize: "16px",
                                      }}
                                    >
                                      {val?.summary_text}
                                    </div>
                                  ) : null}
                                </>
                              );
                            })}
                          </div>
                          <div className="mob-full-transcript">
                            <div className="head">Full Transcript</div>
                            {fullTranscriptData.map((val, index) => (
                              <div className="body" key={index}>
                                <div className="">
                                  Duration:{" "}
                                  <span style={{ color: "#aeaeae" }}>
                                    {val?.time_range}
                                  </span>
                                </div>
                                <div className="">
                                  {" "}
                                  {val.user_name.startsWith("Unknown")
                                    ? ""
                                    : val.user_name}
                                </div>
                                <div className="">{val?.labelled_segments}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ),
                    },
                    {
                      title: "Predictions",
                      content: (
                        <div className="mob-predictions-active">
                          {predictionData.map((val, index) => {
                            return (
                              <div className="body">
                                <div className="ap-col-1-row">
                                  <div
                                    style={{
                                      position: "relative",
                                      fontWeight: "500",
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    {val?.prediction.slice(0, 40)}...
                                  </div>
                                  <div
                                    onClick={() => {
                                      // setSubSection((prev) => !prev);
                                      console.log(index);
                                      setSubSectionIndex(index);
                                    }}
                                  >
                                    {subSectionIndex === index ? (
                                      <img alt="" src="/vector-1433.svg" />
                                    ) : (
                                      <img alt="" src="/vector-278.svg" />
                                    )}
                                  </div>
                                </div>
                                {subSectionIndex === index ? (
                                  <div
                                    style={{
                                      paddingRight: "20px",
                                      marginTop: "10px",
                                      color: "#AEAEAE",
                                      fontFamily: "inter",
                                      fontSize: "14px",
                                    }}
                                  >
                                    {val?.prediction}
                                    <p style={{ color: "#4B6CC2" }}>
                                      Status :
                                      <span
                                        style={{
                                          color:
                                            val?.prediction_validation == "TRUE"
                                              ? "green"
                                              : val?.prediction_validation ==
                                                "FALSE"
                                              ? "#E72E2E"
                                              : val?.prediction_validation ==
                                                "PARTIALLY TRUE"
                                              ? "#2DD22A"
                                              : val?.prediction_validation ==
                                                "PENDING"
                                              ? "#374C98"
                                              : "#D29D15",
                                          fontFamily: "inter",
                                          fontSize: "14px",
                                        }}
                                      >
                                        {" "}
                                        {val?.prediction_validation}
                                      </span>
                                    </p>
                                    <p style={{ color: "#4B6CC2" }}>
                                      Settled Date :{" "}
                                      <span
                                        style={{
                                          fontSize: "14px",
                                          color: "#AEAEAE",
                                        }}
                                      >
                                        {val?.fixed_date}
                                      </span>
                                    </p>
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      ),
                    },
                    {
                      title: "People",
                      content: (
                        <div className="mob-people-active">
                          {peopleData.map((val, index) => {
                            return (
                              <div className="mob-people-section">
                                <div className="ps-header">
                                  <div className="col-1">
                                    <div className="col-img">
                                      <img
                                        alt=""
                                        src={val?.image_url}
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                          objectFit: "cover",
                                          borderRadius: "50%",
                                        }}
                                      />
                                    </div>
                                    <div className="col-content">
                                      <h6>
                                        {val?.first_name.startsWith("Unknown")
                                          ? "Unknown"
                                          : val?.first_name +
                                            " " +
                                            val?.last_name}
                                      </h6>
                                      <span style={{ color: "#aeaeae" }}>
                                        #85
                                      </span>
                                    </div>
                                  </div>
                                  <div
                                    className="col-2"
                                    onClick={() =>
                                      navigate("/Profiles", {
                                        state: { id: val?.user_id },
                                      })
                                    }
                                  >
                                    Full Profile
                                  </div>
                                </div>
                                <div className="ps-body">
                                  <div className="col">
                                    <LuCalendarDays
                                      style={{ fontSize: "24px" }}
                                    />
                                    <div className="detail">
                                      <h6>Score</h6>
                                      <span>
                                        {Math.floor(val?.accuracy_score)}%
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <LuCalendarDays
                                      style={{ fontSize: "24px" }}
                                    />
                                    <div className="detail">
                                      <h6>Predictions</h6>
                                      <span>{val?.total_predictions}</span>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <LuCalendarDays
                                      style={{ fontSize: "24px" }}
                                    />
                                    <div className="detail">
                                      <h6>Pending</h6>
                                      <span>{val?.pending_predictions}</span>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <LuCalendarDays
                                      style={{ fontSize: "24px" }}
                                    />
                                    <div className="detail">
                                      <h6>EP-Predictions</h6>
                                      <span>{val?.episode_predictions}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            ) : null}

            {activeIndex === index && loading ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : null}
          </>
        );
      })}
      {/* Column Description ENds */}
    </div>
  );
}

export default Summaries;
