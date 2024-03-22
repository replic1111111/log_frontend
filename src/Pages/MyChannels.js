import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { channelsData } from "../services/channels.service";
import { useNavigate } from "react-router-dom";
import "../styles/mychannels.css";
import AddChannelModal from "../components/addChannelModal";
import { LuCalendarDays } from "react-icons/lu";

function MyChannels() {
  const [channelData, setChannelData] = useState([]);
  const [openAddChannel, setOpenAddChannel] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();

  const handleSubSection = (index) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
      return;
    }
    setActiveIndex(index);
  };
  useEffect(() => {
    channelsData()
      .then((res) => {
        // console.log("res chaneel:::", res.data);
        setChannelData([...res.data]);
      })
      .catch((err) => {
        console.log("err:::::", err);
      });
  }, []);
  return (
    <div className="myChannel">
      {/* Add Channel div Starts */}
      <div className="addChannel-section">
        <div className="block-1">Add New Channel</div>
        <div className="block-2">
          <input placeholder="Enter Channel Url" />
          <Button className="btn" onClick={() => alert("In Progress...")}>
            ADD
          </Button>
        </div>
        <div className="mob-block-2">
          <div onClick={() => setOpenAddChannel(true)}>
            <img
              style={{
                position: "relative",
                width: "21.5px",
                height: "21.5px",
              }}
              alt=""
              src="/vector-278.svg"
            />
          </div>
        </div>
      </div>
      {/* Add Channel div Ends */}
      <div className="channel-header">
        <div>Channel Name</div>
        <div>Summaries</div>
        <div>Predictions</div>
        <div>Prediction Accuracy</div>
        <div>View More</div>
      </div>
      {/* Add Channel div Ends */}
      {/* Row Data Starts */}
      {channelData.map((val, index) => {
        return (
          <>
            <div className="channelData-row">
              <div className="block">
                <img
                  style={{
                    position: "relative",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    objectFit: "cover",
                  }}
                  alt=""
                  src={val?.ChannelImageUrl}
                />
                <div className="">{val?.ChannelName.slice(0, 20)}</div>
              </div>
              <div className="block">{val?.Summaries}</div>
              <div className="block">{val?.Predictions}</div>
              <div className="block">{val?.PredictionAccuracy}</div>
              <div className="block" onClick={() => handleSubSection(index)}>
                {activeIndex == index ? (
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

            {/* Mobile View Starts */}
            <div className="mob-channelData-row">
              <div className="header">
                <div className="part-1">
                  <img
                    src={val?.ChannelImageUrl}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="column-1">
                    <span style={{ color: "#aeaeae" }}>Channel Name</span>
                    <div className="">{val?.ChannelName.slice(0, 20)}</div>
                  </div>
                </div>
                <div className="part-2" onClick={() => handleSubSection(index)}>
                  {activeIndex === index ? (
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
                    <span style={{ color: "#AEAEAE" }}>Summaries</span>
                    <div className="value">{Math.floor(val?.Summaries)}</div>
                  </div>
                </div>
                <div className="column">
                  <div className="body-icon">
                    <LuCalendarDays style={{ width: "30px", height: "30px" }} />
                  </div>
                  <div className="text">
                    <span style={{ color: "#AEAEAE" }}>Predictions</span>
                    <div className="value">{val?.Predictions}</div>
                  </div>
                </div>
                <div className="column">
                  <div className="body-icon">
                    <LuCalendarDays style={{ width: "30px", height: "30px" }} />
                  </div>
                  <div className="text">
                    <span style={{ color: "#AEAEAE" }}>
                      Prediction Accuracy
                    </span>
                    <div className="value">{val?.PredictionAccuracy}</div>
                  </div>
                </div>
                {/* <div className="column">
                  <div className="body-icon">
                    <LuCalendarDays style={{ width: "30px", height: "30px" }} />
                  </div>
                  <div className="text">
                    <span style={{ color: "#AEAEAE" }}>Points</span>
                    <div className="value">
                      {Math.floor(val?.total_user_score)}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            {/* Hidden Data Starts */}
            {index === activeIndex ? (
              <div className="channelData-active">
                <div className="section-1">
                  <div className="column-1">People</div>
                  <div className="column-2">
                    {val?.People.map((val, index) => {
                      return (
                        <>
                          <div
                            style={{
                              borderRadius: "10px",
                              border: "1px solid white",
                              boxSizing: "border-box",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "flex-start",
                              padding: "6px 12px",
                              gap: "12px",
                              flexWrap: "wrap",
                            }}
                            onClick={() =>
                              navigate("/Profiles", {
                                state: { id: val?.user_id },
                              })
                            }
                          >
                            <img
                              style={{
                                position: "relative",
                                borderRadius: "50%",
                                width: "42px",
                                height: "42px",
                                objectFit: "cover",
                              }}
                              alt=""
                              src={val?.image_url}
                            />
                            <div
                              style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                flexShrink: "0",
                              }}
                            >
                              {val?.name}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="section-1">
                  <div className="column-1">Topics</div>
                  <div className="column-2">
                    {val?.Topics?.toString().split(",").join(", ")}
                  </div>
                </div>
                <div className="section-1">
                  <div className="column-1">Pending Predictions</div>
                  <div className="column-2">{val?.TotalPendingPredictions}</div>
                </div>
                <div className="section-1">
                  <div className="column-1">Platforms</div>
                  <div className="column-2">
                    <img
                      style={{
                        position: "relative",
                        width: "36px",
                        height: "36px",
                      }}
                      alt=""
                      src="/youtube.svg"
                    />
                    <Button
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
                        padding: "1px",
                        fontSize: "16px",
                        color: "#e72e2e",
                      }}
                      onClick={() => alert("In Process....")}
                    >
                      Remove Channel
                    </Button>
                  </div>
                </div>
              </div>
            ) : null}
            {/* Hidden Data Ends */}
          </>
        );
      })}
      {/* Row Data Ends */}
      <AddChannelModal
        setShowModal={setOpenAddChannel}
        showModal={openAddChannel}
      />
    </div>
  );
}

export default MyChannels;
