import React from "react";

import FeedRightSectionColumns from "./feed-right-section-columns";

const feedrightSection = () => {
  return (
    <div
      className="right-section"
      style={{
        width: "30%",
        overflowY: "auto",
        backgroundColor: "#262626",
        padding: "0px 16px 16px 16px",
        height: "100%",
        width: "100%",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="right-heading"
        style={{
          position: "sticky",
          backgroundColor: "#262626",
          padding: "16px 0px 0px 0px",
          top: "0",
        }}
      >
        <h4>Top Predictors</h4>
      </div>
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
      <FeedRightSectionColumns />
    </div>
  );
};

export default feedrightSection;
