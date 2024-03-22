import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";

import TopPredictorsCard from "../components/top-predictors-card";
import TrendingPredictionCard from "../components/trending-prediction-card";
import FeedRightSection from "../components/feed-right-section";
import ShareModal from "../components/shareModal";

import "../styles/feed.css";

const Feed = () => {
  const [openShare, setOpenShare] = useState(false);
  const cards = [
    { name: "Ray Dailo", src: "/elon_musk.svg" },
    { name: "Ray Dailo", src: "/elon_musk.svg" },
    { name: "Ray Dailo" },
    { name: "Ray Dailo", src: "/elon_musk.svg" },
    { name: "Ray Dailo", src: "/elon_musk.svg" },
  ];
  return (
    <div className="feed-section">
      <div className="feed-container">
        <div className="feed-part1">
          <div className="recent-predictions">
            <div className="rp-heading">
              <label>Recent Predictions</label>
            </div>
            <div className="rp-cards">
              {cards.map((card, index) => (
                <div className="feed-card" key={index}>
                  <div className="card-header">
                    <div
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div className="card-header-img">
                        <Image src="/feed-profile.svg" alt="profile-image" />
                      </div>
                      <div className="profile-name">
                        <h5>{card.name}</h5>
                        <span>Economy</span>
                      </div>
                    </div>
                    <button className="card-header-btn">Proof</button>
                  </div>
                  <div className="card-status">
                    <Image src="/status.svg" />
                    <p>
                      Status : <span> Pending</span>
                    </p>
                  </div>
                  <div className="card-dates">
                    <p>
                      Made on : <span>2023/2/4</span>
                    </p>
                    <p>
                      Resolves on : <span>2023/2/4</span>
                    </p>
                  </div>
                  <div className="card-description">
                    <p>
                      Elon Musk predicts that Tesla will solve self-driving and
                      surpass the average person's accident probability by
                      2023dvksnjs k <a href="">Read More</a>
                    </p>
                  </div>
                  <div className="card-image">
                    <Image src={card.src} />
                  </div>
                  <div className="card-footer">
                    <div className="likes">
                      <ImArrowUp
                        style={{
                          cursor: "pointer",
                        }}
                      />
                      <span>30</span>
                    </div>
                    <div className="dislikes">
                      <ImArrowDown
                        style={{
                          cursor: "pointer",
                        }}
                      />
                      <span>13</span>
                    </div>
                    <div className="comment">
                      <IoChatbubbleEllipses
                        style={{
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <div className="share">
                      <RiSendPlaneFill
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => setOpenShare(true)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="top-predictors">
            <div className="top-predictors-header">
              <label>Top predictors</label>
              <a href="">View All</a>
            </div>
            <div className="tp-cards">
              <TopPredictorsCard />
              <TopPredictorsCard />
            </div>
          </div>
          <div className="trending-predictions">
            <div className="trending-predictions-header">
              <label>Trending predictions</label>
            </div>
            <div
              className="trending-cards"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                flexDirection: "column",
              }}
            >
              <TrendingPredictionCard />
              <TrendingPredictionCard />
              <TrendingPredictionCard />
              <TrendingPredictionCard />
              <TrendingPredictionCard />
            </div>
          </div>
        </div>
        <div className="feed-part2">
          <FeedRightSection />
        </div>
      </div>
      <ShareModal showModal={openShare} setShowModal={setOpenShare} />
    </div>
  );
};

export default Feed;
