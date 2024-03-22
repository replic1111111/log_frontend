import React from "react";
import { BiSolidCategory } from "react-icons/bi";
import { NavLink } from "react-router-dom";

import "../styles/topNav.css";
import logoIcon from "../assests/logo-icon.svg";
import logoText from "../assests/logo-text.svg";

const TopNav = () => {
  return (
    <div className="topNav">
      <div className="topNav-header">
        <BiSolidCategory className="header-icon" />
        <div className="topNav-logo-div">
          <img className="logo-icon" alt="" src={logoIcon} />
          <img className="logo-text" alt="" src={logoText} />
        </div>
      </div>

      <div className="topNav-links">
        <NavLink
          to="/Feed"
          className={({ isActive }) =>
            isActive ? "active-link navlink" : "navlink"
          }
        >
          <p style={{ marginTop: "10px" }}> Feed</p>
        </NavLink>
        <NavLink
          to="/LeaderBoards"
          className={({ isActive }) =>
            isActive ? "active-link navlink" : "navlink"
          }
        >
          <p style={{ marginTop: "10px" }}> Leaderboards</p>
        </NavLink>
        <NavLink
          to="/Summaries"
          className={({ isActive }) =>
            isActive ? "active-link navlink" : "navlink"
          }
        >
          <p style={{ marginTop: "13px" }}>Summaries</p>
        </NavLink>
        <NavLink
          to="/Predictions"
          className={({ isActive }) =>
            isActive ? "active-link navlink" : "navlink"
          }
        >
          <p style={{ marginTop: "13px" }}>Predictions</p>
        </NavLink>
        <NavLink
          to="/Markets"
          className={({ isActive }) =>
            isActive ? "active-link navlink" : "navlink"
          }
        >
          <p style={{ marginTop: "13px" }}>Markets</p>
        </NavLink>
        <NavLink
          to="/Profiles"
          className={({ isActive }) =>
            isActive ? "active-link navlink" : "navlink"
          }
        >
          <p style={{ marginTop: "13px" }}>Profiles</p>
        </NavLink>
        <NavLink
          to="/MyChannels"
          className={({ isActive }) =>
            isActive ? "active-link navlink" : "navlink"
          }
        >
          <p style={{ marginTop: "13px" }}> My Channels</p>
        </NavLink>
      </div>
    </div>
  );
};

export default TopNav;
