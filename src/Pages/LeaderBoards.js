import React, { useState, useEffect } from "react";
import { leaderBoardData } from "../services/Leaderboards.service";
import CircularProgress from "@mui/material/CircularProgress";
import { LuCalendarDays } from "react-icons/lu";
import { Image } from "react-bootstrap";
import "../styles/leaderboard.css";
import { useNavigate } from "react-router-dom";
import infoIcon from "../assests/hover_info6.png"; // Replace with the actual path to your icon

const LeaderBoards = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    leaderBoardData()
      .then((res) => {
        // console.log("res:::::::::", res.data);
        setLoader(true);
        setData([...res.data].map((obj) => ({ ...obj, Active: false })));
      })
      .catch((err) => {
        console.log("err::::::", err);
      });
  }, []);

  const onClickDetails = (index) => {
    const arr = [...data];
    arr[index].Active = !arr[index].Active;
    setData([...arr]);
  };

  // console.log(window.innerWidth, "window.innerWidth");
  return (
    <div className="custom-container">
      {loader ? (
        <>
          {data?.map((val, index) => {
            return (
              <div className="" style={{ width: "100%" }}>
                <div className="desktop-row-section ">
                  <div className="row-section-inner1">
                    <div className="row-section-inner2">
                      <div className="row-section-inner3">
                        {index == 0 ? (
                          <img alt="rank-1" src="/goldmedal-1.svg" />
                        ) : index == 1 ? (
                          <img alt="rank-2" src="/goldmedal-2.svg" />
                        ) : index == 2 ? (
                          <img alt="rank-3" src="/goldmedal-3.svg" />
                        ) : (
                          index + 1
                        )}
                      </div>
                    </div>
                    <img
                      style={{
                        position: "relative",
                        borderRadius: "100%",
                        width: "56px",
                        height: "56px",
                        padding: "4px",
                        overflow: "hidden",
                        flexShrink: "0",
                        objectFit: "cover",
                        border:
                          index == 0
                            ? "2px solid #FDBC4B"
                            : index == 1
                            ? "2px solid #A7A7A7"
                            : index == 2
                            ? "2px solid #846836"
                            : "1px solid #4B6CC2",
                      }}
                      alt=""
                      src={val?.image_url}
                      onClick={() =>
                        navigate("/Profiles", {
                          state: { id: val?.user_id },
                        })
                      }
                    />
                    <div className="user-name-section">
                      <div className="user-name-section1">
                        {val?.first_name} {val?.last_name}
                      </div>
                      <div
                        onClick={() =>
                          navigate("/Predictions", {
                            state: { id: val?.user_id },
                          })
                        }
                        className="prediction-section "
                      >
                        {val.total_predictions} Predictions{" "}
                        <img src="/Moreviewicon.svg" width={30} height={30} />
                      </div>
                    </div>
                  </div>
                  <div className="prediction-accuracy">
                    <div
                      style={{ color: "#aeaeae" }}
                      className="prediction-accuracy-title"
                    >
                      Prediction Accuracy
                      <img
                        src={infoIcon}
                        alt="Info"
                        title="Overall prediction accuracy for the forecaster across all predictions."
                        style={{
                          marginLeft: "5px",
                          width: "16px", // Adjust as needed
                          height: "16px", // Adjust as needed
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <div className="prediction-accuracy-title">
                      {Math.floor(val.prediction_accuracy)}%
                    </div>
                  </div>
                  <div className="bankroll-section ">
                    <div className="bankroll-section-title">
                      Points
                      <img
                        src={infoIcon}
                        alt="Info"
                        title="Point based on prediction accuracy & timeline (max gain +100 per predictiom | max loss of -100 per prediction) "
                        style={{
                          marginLeft: "5px",
                          width: "16px", // Adjust as needed
                          height: "16px", // Adjust as needed
                          cursor: "pointer",
                        }}
                      />
                    </div>

                    <div
                      className="bankroll-section-value"
                      style={{
                        color: val.total_user_score < 0 ? "#e87d7d" : "#4B6CC2",
                      }}
                    >
                      {/* ${Math.floor(val.bankroll)} */}
                      {/* {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0,
                      }).format(val.total_user_score*10)} */}
                      {new Intl.NumberFormat("en-IN", {
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      }).format(val.total_user_score)}
                    </div>
                  </div>
                  <button
                    className="view-profile-btn"
                    onClick={() =>
                      navigate("/Profiles", {
                        state: { id: val?.user_id },
                      })
                    }
                  >
                    View Profile
                  </button>
                  <div
                    onClick={() => {
                      onClickDetails(index);
                    }}
                    style={{ backgroundColor: "#282828", textAlign: "center" }}
                  >
                    {val.Active ? (
                      <img
                        className="click-icon"
                        alt="plus-icon"
                        src="/vector-1433.svg"
                      />
                    ) : (
                      <img
                        className="click-icon"
                        alt="minus-icon"
                        src="/vector-278.svg"
                      />
                    )}
                  </div>
                </div>
                <div className="mobile-row-section">
                  <div className="mob-row-section-1">
                    <div className="row-img">
                      <Image
                        alt=""
                        src={val?.image_url}
                        onClick={() =>
                          navigate("/Profiles", {
                            state: { id: val?.user_id },
                          })
                        }
                      />
                    </div>
                    <div className="row-header">
                      <div className="row-heading">
                        <span className="ranking" style={{ color: "#AEAEAE" }}>
                          #{index + 1}
                        </span>
                        <div className="user_name">
                          {val?.first_name} {val?.last_name}
                        </div>
                      </div>
                      <div className="row-sub-heading">
                        <label
                          style={{
                            color: "#aeaeae",
                            fontSize: "12px",
                          }}
                        >
                          Accuracy{" "}
                          <span
                            style={{
                              color:
                                val.prediction_accuracy > 70
                                  ? "#23B678"
                                  : val.prediction_accuracy > 50
                                  ? "#FDBC4B"
                                  : "#FF0000",
                            }}
                          >
                            {Math.floor(val.prediction_accuracy)}%
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mob-row-section-2">
                    <div
                      onClick={() => {
                        onClickDetails(index);
                      }}
                    >
                      {val.Active ? (
                        <img
                          className="click-icon"
                          alt="plus-icon"
                          src="/vector-1433.svg"
                        />
                      ) : (
                        <img
                          className="click-icon"
                          alt="minus-icon"
                          src="/vector-278.svg"
                        />
                      )}
                    </div>
                  </div>
                </div>
                {/* clickable section start */}
                {val.Active ? (
                  <>
                    <div className="desktop-clickable-section">
                      <div className="collapsable-section">
                        <div className="clickable-section-inner1">
                          <div className="clickable-section-inner2">
                            Area of Accuracy
                          </div>
                          <div className="category-value">
                            {val.top_two_categories}
                          </div>
                        </div>
                      </div>
                      <div className="pending-Predictions-section">
                        <div className="pending-Predictions-title">
                          Pending Predictions
                        </div>
                        <div className="pending-Predictions-value">
                          {val.all_pending_predictions}
                        </div>
                      </div>
                      <div className="settle-section">
                        <div className="settle-section-title">
                          Due to Settle in 2023
                        </div>
                        <div className="settle-section-value">
                          {val.predictions_due_to_settle}
                        </div>
                      </div>
                      <div className="markets-section">
                        <div className="markets-section-title ">
                          Have Open Markets
                        </div>
                        <div className="markets-section-value">
                          {val.open_markets}
                        </div>
                      </div>
                      <div className="streak-section">
                        <div className="streak-section-title">
                          Current Streak
                        </div>
                        <div className="streak-section-value">
                          {val.current_streak}
                        </div>
                      </div>
                    </div>
                    <div className="mobile-clickable-section">
                      <div className="mob-clickable-headings">
                        <div className="heading">Area of Accuracy</div>
                        <div className="mob-category-value">
                          {val.top_two_categories}
                        </div>
                      </div>
                      <div className="mob-clickable-content">
                        <div className="block">
                          <div className="icon">
                            <LuCalendarDays />
                          </div>
                          <div className="text">
                            <span style={{ color: "#AEAEAE" }}>
                              Pending Predictions
                            </span>
                            <div className="value">
                              {val.all_pending_predictions}
                            </div>
                          </div>
                        </div>
                        <div className="block">
                          <div className="icon">
                            <LuCalendarDays />
                          </div>
                          <div className="text">
                            <span style={{ color: "#AEAEAE" }}>
                              Due to Settle
                            </span>
                            <div className="value">
                              {val.predictions_due_to_settle}
                            </div>
                          </div>
                        </div>
                        <div className="block">
                          <div className="icon">
                            <LuCalendarDays />
                          </div>
                          <div className="text">
                            <span style={{ color: "#AEAEAE" }}>
                              Have Open Markets
                            </span>
                            <div className="value">{val.open_markets}</div>
                          </div>
                        </div>
                        <div className="block">
                          <div className="icon">
                            <LuCalendarDays />
                          </div>
                          <div className="text">
                            <span style={{ color: "#AEAEAE" }}>
                              Current Streak
                            </span>
                            <div className="value">{val.current_streak}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : null}

                {/* clickable section ends */}
              </div>
            );
          })}
        </>
      ) : (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default LeaderBoards;
