import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RouterData from "../Routes";
import Sidenav from "../components/SideNav";
import TopNav from "../components/TopNav";
import "../styles/dashboard.css";
function Dashboard() {
  return (
    <div className="main-div ">
      <div className="Container">
        <div className="sideNav-div">
          <Sidenav />
        </div>
        <div className="topNav-div">
          <TopNav />
        </div>
        <div className="main-content-div">
          <Header />
          <RouterData />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
