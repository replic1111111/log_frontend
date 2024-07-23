import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { getSinglePrediction } from "../services/Predictions.service";
import "../styles/feedCard.css";
import { useNavigate } from "react-router-dom";
import { FaCrown } from "react-icons/fa";
import { FaRegCalendarPlus, FaYoutube } from "react-icons/fa6";
import { CgArrowLongRightC } from "react-icons/cg";
import { FaFlagCheckered } from "react-icons/fa";
import infoIcon from "../assets/hover_info.png";
import CircularProgress from "@mui/material/CircularProgress";

const FeedCard = ({
  category,
  resolvedOn,
  imgUrl,
  prediction,
  madeOn,
  user,
  status,
  userId,
  predictionId,
  setOpenShare,
  onCardClick,
  isOpen,
}) => {
  const navigate = useNavigate();

  const [openProof, setOpenProof] = useState(false);
  const [val, setVal] = useState({});
  const [loading, setLoading] = useState(false);

  const handleProof = async () => {
    setLoading(true);
    try {
      const response = await getSinglePrediction(predictionId);
      setVal(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div
      className="feed-card cursor-pointer backdrop-blur-md sm:bg-[#ffffff20] rounded-xl hover:border hover:border-primary400 transition-all ease-in-out shadow-black"
      onClick={() => {
        onCardClick();
        handleProof();
      }}
    >
      <div className="card-header">
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="card-header-img">
            <Image
              src={imgUrl}
              alt="N/A"
              className="cursor-pointer"
              onClick={() =>
                navigate("/Leaderboards", {
                  state: { id: userId },
                })
              }
            />
          </div>
          <div className="profile-name">
            <span className="flex items-center text-[#ffffff80] gap-4">
              <h5
                className={"cursor-pointer hover:underline"}
                onClick={() => navigate(`/dashboard/Leaderboards/${userId}`)}
              >
                {user}
              </h5>
              <FaCrown />
            </span>
          </div>
        </div>
        <button
          className="card-header-btn h-8 w-8 !text-xs !p-0 text-white justify-center hover:shadow-md hover:shadow-primary400 transition-all ease-in-out hover:scale-105 active:scale-95"
          onClick={() => {
            handleProof();
          }}
        >
          <FaPlus />
        </button>
      </div>
      <div className="card-description font-raleway">
        <p>{prediction}</p>
      </div>
      <div className="flex w-full items-center gap-6 text-[#ffffff80] text-sm pt-4">
        <span className="bg-[#ffffff10] px-2 rounded-full">#{category}</span>

        <p className="flex gap-2 items-center ">
          <FaRegCalendarPlus /> <span>{madeOn}</span>
        </p>
        <CgArrowLongRightC />
        <p className="flex gap-2 items-center ">
          <FaFlagCheckered />{" "}
          <span>{resolvedOn !== null ? resolvedOn : "Null"}</span>
        </p>
        <span className="bg-[#ffffff10] px-2 rounded-full flex gap-2 items-center">
          Source : <FaYoutube />
        </span>
        <span
          className="font-bold"
          style={{
            color:
              status === "PENDING"
                ? "#c2964b"
                : status === "TRUE"
                ? "#23B678"
                : status === "PARTIALLY TRUE"
                ? "#388E3C"
                : "#E72E2E",
          }}
        >
          # {status}
        </span>
      </div>

      <div className="card-footer">
        <div className="likes">
          <ImArrowUp
            style={{
              cursor: "pointer",
              color: "#00000040",
            }}
          />
        </div>
        <div className="dislikes">
          <ImArrowDown
            style={{
              cursor: "pointer",
              color: "#00000040",
            }}
          />
        </div>
        <div className="comment">
          <IoChatbubbleEllipses
            style={{
              cursor: "pointer",
              color: "#00000040",
            }}
          />
        </div>
        <div className="share">
          <RiSendPlaneFill
            style={{
              cursor: "pointer",
              color: "#00000040",
            }}
            onClick={() => setOpenShare(true)}
          />
        </div>
      </div>
      {isOpen && (
        <>
          {loading ? (
            ""
          ) : (
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#ffffff20] shadow-md rounded-xl grid grid-cols-2 w-full p-4 gap-4 font-poppins">
                  <div className=" text-[#ffffff60]">
                    <span className="font-raleway">Made on</span>
                    <div className="text-white md:text-base text-sm">
                      {val[0]?.publish_date}
                    </div>
                  </div>
                  <div className="block justify-end text-[#ffffff60]">
                    <span className="font-raleway">Resolves on</span>
                    <div className="text-white md:text-base text-sm">
                      {val[0]?.fixed_date}
                    </div>
                  </div>
                  <div className="block text-[#ffffff60]">
                    <span className="font-raleway leading-1">
                      Predictor Accuracy{" "}
                    </span>
                    <div className="text-white md:text-base text-sm">
                      {val[0]?.prediction_accuracy}%
                    </div>
                  </div>
                  <div className="block text-[#ffffff60]">
                    <span className="font-raleway">Status</span>
                    <div
                      style={{
                        color:
                          val[0]?.prediction_validation === "TRUE"
                            ? "#23B678"
                            : val[0]?.prediction_validation === "PARTIALLY TRUE"
                            ? "#388E3C"
                            : val[0]?.prediction_validation === "PENDING"
                            ? "#c2964b"
                            : "#E72E2E",
                      }}
                      className="font-[600] md:text-base text-sm"
                    >
                      {val[0]?.prediction_validation}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col  shadow-md">
                    <span className="bg-primary p-4 flex justify-center items-center rounded-t-lg md:rounded-t-xl font-raleway text-sm text-[#ffffff80]">
                      Points{" "}
                      <img
                        src={infoIcon}
                        alt="Info"
                        title="Point based on prediction accuracy & timeline (max gain +100 | max loss of -100) "
                        style={{
                          marginLeft: "5px",
                          width: "16px", // Adjust as needed
                          height: "16px", // Adjust as needed
                          cursor: "pointer",
                        }}
                      />
                    </span>
                    <div className="h-24 rounded-b-lg md:rounded-b-xl bg-[#ffffff20] flex justify-center items-center font-poppins text-sm md:text-lg text-white">
                      <div
                        style={{
                          position: "relative",
                          fontWeight: "600",
                        }}
                      >
                        {val[0]?.score && Number(val[0]?.score).toFixed(1)}
                        <span style={{ fontSize: "16px", fontWeight: "500" }}>
                          {" "}
                          Pts
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col shadow-md">
                    <span className="bg-primary p-4 flex justify-center items-center rounded-t-lg md:rounded-t-xl font-raleway text-sm text-[#ffffff80]">
                      Timeline
                      <img
                        src={infoIcon}
                        alt="Info"
                        title="The ammount of days in the future the prediction is made for"
                        style={{
                          marginLeft: "5px",
                          width: "16px", // Adjust as needed
                          height: "16px", // Adjust as needed
                          cursor: "pointer",
                        }}
                      />
                    </span>
                    <div className="h-24 rounded-b-lg md:rounded-b-xl bg-[#ffffff20] flex justify-center items-center font-poppins text-sm md:text-lg text-white">
                      <div
                        style={{
                          position: "relative",
                          fontWeight: "600",
                        }}
                      >
                        {val[0]?.days_since}{" "}
                        <span style={{ fontSize: "16px", fontWeight: "500" }}>
                          Days
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col shadow-md">
                    <span
                      className="bg-primary p-4 flex justify-center items-center rounded-t-lg md:rounded-t-xl font-raleway text-sm text-[#ffffff80]
text-sm text-[#ffffff80"
                    >
                      Error %
                      <img
                        src={infoIcon}
                        alt="Info"
                        title="The error rate of the prediction compared to ground truth (only for continuous predictions)."
                        style={{
                          marginLeft: "5px",
                          width: "16px", // Adjust as needed
                          height: "16px", // Adjust as needed
                          cursor: "pointer",
                        }}
                      />
                    </span>
                    <div className="h-24 rounded-b-lg md:rounded-b-xl bg-[#ffffff20] flex justify-center items-center font-poppins text-sm md:text-lg text-white">
                      <div
                        style={{
                          position: "relative",
                          fontWeight: "600",
                        }}
                      >
                        N/A
                        {/* {val[0]?.error !== null ? val[0]?.error : "N/A"} */}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col shadow-md">
                    <span
                      className="bg-primary p-4 flex justify-center items-center rounded-t-lg md:rounded-t-xl font-raleway text-sm text-[#ffffff80]
text-sm text-[#ffffff80"
                    >
                      Type
                      <img
                        src={infoIcon}
                        alt="Info"
                        title="Binary predictions are TRUE or FALSE statements. Continuous predictions are numerical, eg stock prices."
                        style={{
                          marginLeft: "5px",
                          width: "16px", // Adjust as needed
                          height: "16px", // Adjust as needed
                          cursor: "pointer",
                        }}
                      />
                    </span>
                    <div className="h-24 rounded-b-lg md:rounded-b-xl bg-[#ffffff20] flex justify-center items-center font-poppins text-sm md:text-base text-white">
                      <div
                        style={{
                          position: "relative",
                          fontWeight: "600",
                        }}
                      >
                        {val[0]?.prediction_type !== null
                          ? val[0]?.prediction_type
                          : "N/A"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row-section-2">
                <iframe
                  className="w-full h-[20vh] md:h-full rounded-lg md:rounded-xl object-cover"
                  alt=""
                  src={`https://www.youtube.com/embed/${val[0]?.youtube_id}?start=${val[0]?.youtube_start_time}`}
                />

                {/* Below Part Ends */}
              </div>
              {/* Youtube Video Starts */}

              {/* YouTube Video Ends */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FeedCard;
