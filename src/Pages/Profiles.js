import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import { Button } from "@mui/material";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { LuCalendarDays } from "react-icons/lu";
import "../styles/profiles.css";
import {
  getAllProfiles,
  getProfilesBySubjects,
  getProfilesPredictions,
} from "../services/Profiles.service";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router-dom";
import Tabs from "../components/common/tabs";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Profiles() {
  const location = useLocation();

  const [profilesData, setProfilesData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [predictionData, setPredictionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");

  useEffect(() => {
    getAllProfiles()
      .then((res) => {
        // console.log("res:::::::", res.data);
        setProfilesData([...res.data]);
        setProfilesData(
          [...res.data].map((obj) => ({
            ...obj,
            profileActive: false,
          }))
        );
        if (location?.state?.id != undefined) {
          setProfilesData(
            [...res.data].filter((obj) => obj.user_id === location?.state?.id)
          );
        }
      })
      .catch((err) => {
        console.log("err::::", err);
      });
  }, []);

  const handleProfileToggle = (index, id) => {
    const arr = [...profilesData];
    arr[index].profileActive = !arr[index].profileActive;
    setProfilesData([...arr]);
    if (profilesData[index].profileActive == false) {
      return;
    }
    setProfilesData(
      [...profilesData].map((obj, ind) => {
        if (ind == index) {
          return {
            ...obj,
            profileActive: true,
          };
        } else {
          return {
            ...obj,
            profileActive: false,
          };
        }
      })
    );
    setActiveIndex(index);
    setLoading(true);
    Promise.all([getUserSubject(id), getUserPredictions(id)]).then((res) => {
      // console.log("res get data:::::", res);
    });
  };

  const getUserSubject = async (id) => {
    getProfilesBySubjects(id)
      .then((res) => {
        setSubjectData([...res.data]);
        setLoading(false);
        setActiveIndex("");
        console.log("res getProfileSubject::::", res.data);
      })
      .catch((err) => {
        console.log("err::::", err);
      });
  };
  const getUserPredictions = async (id) => {
    getProfilesPredictions(id)
      .then((res) => {
        setPredictionData([...res.data]);
        console.log("res getProfilePredictions::::", res.data);
        setLoading(false);
        setActiveIndex("");
      })
      .catch((err) => {
        console.log("err getProfilePredictions::::", err);
      });
  };
  const items = [
    {
      title: "Statistics",
      content: (
        <>
          {subjectData?.map((val, index) => {
            return (
              <div className="profile-graph-section">
                {/* Bar Graph Section Starts */}
                <div className="bar-graph-section">
                  <div className="bar-header">
                    <div>Predictions by Category</div>
                    <div className="sub-part-2">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "2px",
                          textAlign: "left",
                          fontSize: "16px",
                          fontFamily: "Poppins",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              lineHeight: "24px",
                              color: "#AEAEAE",
                              fontFamily: "inter",
                            }}
                          >
                            Sort by
                          </div>
                        </div>
                        <div
                          style={{
                            position: "relative",
                            borderRadius: "9999px",
                            backgroundColor: "#e5fa78",
                            width: "fit-content",
                            height: "20px",
                            overflow: "hidden",
                            flexShrink: "0",
                            display: "none",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              height: "80%",
                              width: "fit-content",
                              top: "10%",
                              right: "5.88%",
                              bottom: "10%",
                              left: "47.06%",
                              borderRadius: "9999px",
                              backgroundColor: "#1f1f21",
                              overflow: "hidden",
                            }}
                          />
                        </div>
                      </div>

                      <Button
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "#4B6CC2",
                          width: "fit-content",
                          height: "28px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                          boxSizing: "border-box",
                          position: "relative",
                          letterSpacing: "0.08em",
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      >
                        All
                      </Button>

                      <Button
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "#181818",
                          width: "fit-content",
                          height: "28px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                          boxSizing: "border-box",
                          position: "relative",
                          letterSpacing: "0.08em",
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      >
                        True
                      </Button>
                      <Button
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "#181818",
                          width: "fit-content",
                          height: "28px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                          boxSizing: "border-box",
                          position: "relative",
                          letterSpacing: "0.08em",
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      >
                        False
                      </Button>
                      <Button
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "#181818",
                          width: "fit-content",
                          height: "28px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "8px",
                          boxSizing: "border-box",
                          position: "relative",
                          letterSpacing: "0.08em",
                          color: "#fff",
                          fontSize: "12px",
                        }}
                      >
                        Pending
                      </Button>
                    </div>
                  </div>
                  <div className="bar">
                    <Bar
                      style={{ width: "100%" }}
                      plugins={[ChartDataLabels]} // Use the datalabels plugin
                      options={{
                        plugins: {
                          legend: {
                            display: false,
                          },
                          datalabels: {
                            font: {
                              display: false,
                              size: 0,
                              weight: "bold",
                            },
                            formatter: function (value, context) {
                              return value;
                            },
                          },
                        },
                        maintainAspectRatio: false,
                        scales: {
                          x: {
                            barThickness: 3,
                            categoryPercentage: 1,
                            ticks: {
                              color: "#fff",
                            },
                            grid: {
                              display: false,
                            },
                          },
                          y: {
                            beginAtZero: true,
                            ticks: {
                              color: "#fff",
                            },
                            grid: {
                              display: false,
                            },
                          },
                        },
                        elements: {
                          bar: {
                            borderRadius: 7,
                            barThickness: 5,
                            barPercentage: 0.1,
                          },
                        },
                      }}
                      data={{
                        labels: subjectData[0]?.categories?.map(
                          (i) => i.Category
                        ),
                        datasets: [
                          {
                            label: "",
                            data: subjectData[0]?.categories?.map(
                              (i) => i.count
                            ),
                            backgroundColor: [
                              "#FFB085",
                              "#9467DC",
                              "#4172D0",
                              "#3D42C3",
                              "#316DE3",
                              "#FF6B7C",
                              "#2AE6CC",
                            ],
                          },
                        ],
                      }}
                    />
                  </div>
                </div>
                {/* Bar Graph Section Starts */}
                {/* Donught Graph Starts */}
                <div className="donught-graph-section">
                  <div className="donught-header">
                    <p style={{ color: "#fff", textAlign: "start" }}>
                      Predictions by Plaform
                    </p>
                  </div>
                  <div className="donught">
                    <Doughnut
                      data={{
                        labels: subjectData[0]?.source_types.map(
                          (st) => st.source
                        ),
                        datasets: [
                          {
                            label: "Source Types",
                            data: subjectData[0]?.source_types.map(
                              (st) => parseFloat(st.percentage) / 100
                            ), // Extract all percentages
                            backgroundColor: [
                              "#E72E2E", // For YouTube (example)
                              "#4B6CC2", // For Twitter (example)
                              "#333FFF", // For Spotify (example)
                              // ... Add more colors if there are more sources
                            ],
                            borderColor: "transparent",
                          },
                        ],
                      }}
                      options={{
                        layout: {
                          padding: {
                            top: 0, // Adjust this value to create more or less space between the chart and the legend
                          },
                        },
                        plugins: {
                          legend: {
                            display: true,
                            position: "bottom",
                            align: "bottom",
                            labels: {
                              boxWidth: 15,
                              padding: 20,
                              usePointStyle: true,
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </div>
                {/* Donught Graph Ends */}
              </div>
            );
          })}{" "}
        </>
      ),
    },
    {
      title: "Predictions",
      content: (
        <>
          {predictionData.map((val, index) => {
            return (
              <div className="mob-prediction-tab" key={index}>
                <div className="mob-prediction-tab-header">
                  <span>Prediction</span>
                  <p>{val?.prediction.slice(0, 150)}</p>
                </div>
                <div className="mob-prediction-tab-content">
                  <div className="column">
                    <div className="img">
                      <LuCalendarDays />
                    </div>
                    <div className="sub-column">
                      <span>Status</span>
                      <div>{val?.prediction_validation}</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="img">
                      <LuCalendarDays />
                    </div>
                    <div className="sub-column">
                      <span>Predictions</span>
                      <div>{val?.category}</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="img">
                      <LuCalendarDays />
                    </div>
                    <div className="sub-column">
                      <span>Date Made on</span>
                      <div>{val?.publish_date}</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="img">
                      <LuCalendarDays />
                    </div>
                    <div className="sub-column">
                      <span>Settles</span>
                      <div>{val?.fixed_date}</div>
                    </div>
                  </div>
                </div>
                <div className="mob-prediction-tab-footer">
                  <span>Source</span>
                  <div>{val?.source_type}</div>
                </div>
              </div>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <div className="custom-container">
      {/* User Data Row Starts */}
      {profilesData?.map((val, index) => {
        return (
          <>
            <div className="custom-header">
              <div className="custom-box">
                <img className="custom-image" alt="" src={val?.image_url} />
              </div>
              <div className="custom-Sub-container">
                <b className="custom-element">
                  {val?.first_name} {val?.last_name}
                </b>
                <div className="person-details">
                  <div className="column">
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      #{index + 1}
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        color: "#aeaeae",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      Ranked
                    </div>
                  </div>
                  <div className="column">
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      {Math.floor(val?.prediction_accuracy)}%
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        color: "#aeaeae",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      Accuracy
                    </div>
                  </div>
                  <div className="column">
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      {val?.total_predictions}
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        color: "#aeaeae",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      Predictions
                    </div>
                  </div>
                  <div className="column">
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      {val?.all_pending_predictions}
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        color: "#aeaeae",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      Pending
                    </div>
                  </div>
                  <div className="column">
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                        color:
                          val?.total_user_score < 0 ? "#e87d7d" : "inherit",
                      }}
                    >
                      {Math.floor(val?.total_user_score)}
                    </div>
                    <div
                      style={{
                        position: "relative",
                        fontSize: "16px",
                        color: "#aeaeae",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                      }}
                    >
                      Points
                    </div>
                  </div>
                  <div className="column-2">
                    <div
                      style={{
                        position: "relative",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        flexShrink: "0",
                        color: "#AEAEAE",
                      }}
                    >
                      Available on :
                    </div>
                    <img
                      style={{
                        position: "relative",
                        width: "27px",
                        height: "18px",
                      }}
                      alt=""
                      src="/youtube.svg"
                    />
                    <img
                      style={{
                        position: "relative",
                        width: "23px",
                        height: "18px",
                      }}
                      alt=""
                      src="/twitterlogo.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                className="icon"
                onClick={() => handleProfileToggle(index, val?.user_id)}
              >
                {val?.profileActive ? (
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
            <div className="mob-custom-header">
              <div className="header">
                <div className="profile">
                  <img className="" alt="" src={val?.image_url} />
                  <div className="profile-column">
                    <div>
                      {val?.first_name} {val?.last_name}
                    </div>
                    <div>
                      <span style={{ color: "#aeaeae" }}>Ranked</span> #
                      {index + 1}
                    </div>
                  </div>
                </div>
                <div
                  className="mob-icon"
                  onClick={() => handleProfileToggle(index, val?.user_id)}
                >
                  {val?.profileActive ? (
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
              <div className="body">
                <div className="column">
                  <div className="body-icon">
                    <LuCalendarDays style={{ width: "30px", height: "30px" }} />
                  </div>
                  <div className="text">
                    <span style={{ color: "#AEAEAE" }}>Accuracy</span>
                    <div className="value">
                      {Math.floor(val?.prediction_accuracy)}%
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="body-icon">
                    <LuCalendarDays style={{ width: "30px", height: "30px" }} />
                  </div>
                  <div className="text">
                    <span style={{ color: "#AEAEAE" }}>Predictions</span>
                    <div className="value">{val?.total_predictions}</div>
                  </div>
                </div>
                <div className="column">
                  <div className="body-icon">
                    <LuCalendarDays style={{ width: "30px", height: "30px" }} />
                  </div>
                  <div className="text">
                    <span style={{ color: "#AEAEAE" }}>Pending</span>
                    <div className="value">{val?.all_pending_predictions}</div>
                  </div>
                </div>
                <div className="column">
                  <div className="body-icon">
                    <LuCalendarDays style={{ width: "30px", height: "30px" }} />
                  </div>
                  <div className="text">
                    <span style={{ color: "#AEAEAE" }}>Points</span>
                    <div className="value">
                      {Math.floor(val?.total_user_score)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer">
                <div
                  style={{
                    position: "relative",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: "0",
                    color: "#AEAEAE",
                  }}
                >
                  Available on :
                </div>
                <img
                  style={{
                    position: "relative",
                    width: "27px",
                    height: "18px",
                  }}
                  alt=""
                  src="/youtube.svg"
                />
                <img
                  style={{
                    position: "relative",
                    width: "23px",
                    height: "18px",
                  }}
                  alt=""
                  src="/twitterlogo.svg"
                />
              </div>
            </div>

            {!loading && val?.profileActive ? (
              <>
                <div className="desktop-profile-active">
                  {subjectData?.map((val, index) => {
                    return (
                      <div className="profile-graph-section">
                        {/* Bar Graph Section Starts */}
                        <div className="bar-graph-section">
                          <div className="bar-header">
                            <div>Predictions by Category</div>
                            <div className="sub-part-2">
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "flex-start",
                                  gap: "2px",
                                  textAlign: "left",
                                  fontSize: "16px",
                                  fontFamily: "Poppins",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "relative",
                                      lineHeight: "24px",
                                      color: "#AEAEAE",
                                      fontFamily: "inter",
                                    }}
                                  >
                                    Sort by
                                  </div>
                                </div>
                                <div
                                  style={{
                                    position: "relative",
                                    borderRadius: "9999px",
                                    backgroundColor: "#e5fa78",
                                    width: "fit-content",
                                    height: "20px",
                                    overflow: "hidden",
                                    flexShrink: "0",
                                    display: "none",
                                  }}
                                >
                                  <div
                                    style={{
                                      position: "absolute",
                                      height: "80%",
                                      width: "fit-content",
                                      top: "10%",
                                      right: "5.88%",
                                      bottom: "10%",
                                      left: "47.06%",
                                      borderRadius: "9999px",
                                      backgroundColor: "#1f1f21",
                                      overflow: "hidden",
                                    }}
                                  />
                                </div>
                              </div>

                              <Button
                                style={{
                                  borderRadius: "30px",
                                  backgroundColor: "#4B6CC2",
                                  width: "fit-content",
                                  height: "28px",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "8px",
                                  boxSizing: "border-box",
                                  position: "relative",
                                  letterSpacing: "0.08em",
                                  color: "#fff",
                                  fontSize: "12px",
                                }}
                              >
                                All
                              </Button>

                              <Button
                                style={{
                                  borderRadius: "30px",
                                  backgroundColor: "#181818",
                                  width: "fit-content",
                                  height: "28px",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "8px",
                                  boxSizing: "border-box",
                                  position: "relative",
                                  letterSpacing: "0.08em",
                                  color: "#fff",
                                  fontSize: "12px",
                                }}
                              >
                                True
                              </Button>
                              <Button
                                style={{
                                  borderRadius: "30px",
                                  backgroundColor: "#181818",
                                  width: "fit-content",
                                  height: "28px",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "8px",
                                  boxSizing: "border-box",
                                  position: "relative",
                                  letterSpacing: "0.08em",
                                  color: "#fff",
                                  fontSize: "12px",
                                }}
                              >
                                False
                              </Button>
                              <Button
                                style={{
                                  borderRadius: "30px",
                                  backgroundColor: "#181818",
                                  width: "fit-content",
                                  height: "28px",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "8px",
                                  boxSizing: "border-box",
                                  position: "relative",
                                  letterSpacing: "0.08em",
                                  color: "#fff",
                                  fontSize: "12px",
                                }}
                              >
                                Pending
                              </Button>
                            </div>
                          </div>
                          <div className="bar">
                            {/* <div
                          {/* // here */}
                            <Bar
                              style={{ width: "100%" }}
                              plugins={[ChartDataLabels]} // Use the datalabels plugin
                              options={{
                                plugins: {
                                  legend: {
                                    display: false,
                                  },
                                  datalabels: {
                                    font: {
                                      display: false,
                                      size: 0,
                                      weight: "bold",
                                    },
                                    formatter: function (value, context) {
                                      return value;
                                    },
                                  },
                                },
                                maintainAspectRatio: false,
                                scales: {
                                  x: {
                                    barThickness: 3,
                                    categoryPercentage: 1,
                                    ticks: {
                                      color: "#fff",
                                    },
                                    grid: {
                                      display: false,
                                    },
                                  },
                                  y: {
                                    beginAtZero: true,
                                    ticks: {
                                      color: "#fff",
                                    },
                                    grid: {
                                      display: false,
                                    },
                                  },
                                },
                                elements: {
                                  bar: {
                                    borderRadius: 7,
                                    barThickness: 5,
                                    barPercentage: 0.1,
                                  },
                                },
                              }}
                              data={{
                                labels: subjectData[0]?.categories?.map(
                                  (i) => i.Category
                                ),
                                datasets: [
                                  {
                                    label: "",
                                    data: subjectData[0]?.categories?.map(
                                      (i) => i.count
                                    ),
                                    backgroundColor: [
                                      "#FFB085",
                                      "#9467DC",
                                      "#4172D0",
                                      "#3D42C3",
                                      "#316DE3",
                                      "#FF6B7C",
                                      "#2AE6CC",
                                    ],
                                  },
                                ],
                              }}
                            />
                          </div>
                        </div>
                        {/* Bar Graph Section Starts */}
                        {/* Donught Graph Starts */}
                        <div className="donught-graph-section">
                          <div className="donught-header">
                            <p style={{ color: "#fff", textAlign: "start" }}>
                              Predictions by Plaform
                            </p>
                          </div>
                          <div className="donught">
                            <Doughnut
                              data={{
                                labels: subjectData[0]?.source_types.map(
                                  (st) => st.source
                                ),
                                datasets: [
                                  {
                                    label: "Source Types",
                                    data: subjectData[0]?.source_types.map(
                                      (st) => parseFloat(st.percentage) / 100
                                    ), // Extract all percentages
                                    backgroundColor: [
                                      "#E72E2E", // For YouTube (example)
                                      "#4B6CC2", // For Twitter (example)
                                      "#333FFF", // For Spotify (example)
                                      // ... Add more colors if there are more sources
                                    ],
                                    borderColor: "transparent",
                                  },
                                ],
                              }}
                              options={{
                                layout: {
                                  padding: {
                                    top: 0, // Adjust this value to create more or less space between the chart and the legend
                                  },
                                },
                                plugins: {
                                  legend: {
                                    display: true,
                                    position: "bottom",
                                    align: "bottom",
                                    labels: {
                                      boxWidth: 15,
                                      padding: 20,
                                      usePointStyle: true,
                                    },
                                  },
                                },
                              }}
                            />
                          </div>
                        </div>
                        {/* Donught Graph Ends */}
                      </div>
                    );
                  })}
                  <div className="profile-prediction-section">
                    <div className="profile-prediction-header">
                      <b>Predictions</b>
                      <div className="prediction-search">
                        <div className="search-bar">
                          <input placeholder="Search" />
                          <img
                            style={{
                              width: "18.85px",
                              height: "18.85px",
                              cursor: "pointer",
                            }}
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="profile-prediction-subHeader">
                      <div className="column">Status</div>
                      <div className="column">Source</div>
                      <div className="column">Topic</div>
                      <div className="column">Predictions</div>
                      <div className="column">Date Made</div>
                      <div className="column">Settles</div>
                    </div>
                    {predictionData.map((val, index) => {
                      return (
                        <div className="profile-prediction-data">
                          <div
                            className="column-1"
                            style={{
                              backgroundColor:
                                val?.prediction_validation === "PENDING"
                                  ? "#374C98"
                                  : val?.prediction_validation === "TRUE"
                                  ? "#23B678"
                                  : val?.prediction_validation ===
                                    "UNDETERMINED"
                                  ? "#D29D15"
                                  : val?.prediction_validation ===
                                    "PARTIALLY TRUE"
                                  ? "#388E3C"
                                  : "#E72E2E",
                              color:
                                val?.prediction_validation === "PARTIALLY TRUE"
                                  ? "#FFFFFF"
                                  : "#fff",
                            }}
                          >
                            <div className="sub-column-1">
                              {val?.prediction_validation}
                            </div>
                          </div>
                          <div className="column-2">
                            <img
                              style={{
                                position: "relative",
                                width: "27px",
                                height: "18px",
                              }}
                              alt=""
                              src="/youtube.svg"
                            />
                            <div>{val?.source_type}</div>
                          </div>
                          <div className="column-2">
                            <div>{val?.category}</div>
                          </div>
                          <div className="column-2">
                            {val?.prediction.slice(0, 150)}
                          </div>
                          <div className="column-2">
                            <div
                              style={{
                                color: "#aeaeae",
                                fontWeight: "500",
                              }}
                            >
                              {val?.publish_date}
                            </div>
                          </div>
                          <div className="column-2">
                            <div>{val?.fixed_date}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mobile-profile-active">
                  <Tabs items={items} />
                </div>
              </>
            ) : null}

            {activeIndex == index && loading ? (
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
      {/* User Data Row Ends */}
    </div>
  );
}

export default Profiles;
