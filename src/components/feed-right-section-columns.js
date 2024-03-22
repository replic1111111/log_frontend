import React from "react";
import { Image } from "react-bootstrap";

const feedRightSectionColumns = () => {
  return (
    <div
      className="right-columns"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 0px",
        borderBottom: "1px solid #AEAEAE",
      }}
    >
      <div
        className="card-img"
        style={{
          borderRadius: "50%",
          border: "1px solid #4B6CC2",
          padding: "2px",
          height: "fit-content",
          width: "fit-content",
        }}
      >
        <Image src="/ray.svg" alt="profile-image" />
      </div>
      <div
        className="profile-name"
        style={{
          paddingLeft: "10px",
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h5>
          <span>#1</span> Ray Dalio
        </h5>
        <h6>
          Accuracy{" "}
          <span
            style={{
              color: "#388E3C",
            }}
          >
            78%
          </span>
        </h6>
      </div>
    </div>
  );
};

export default feedRightSectionColumns;
