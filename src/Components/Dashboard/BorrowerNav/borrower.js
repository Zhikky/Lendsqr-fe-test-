import React from "react";
import "./borrower.css";
import briefcase from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/briefcase 1.png";
import home1 from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/home 1.png";
import Customers from "./Customers/customers";
import Business from "./Businesses/Business";
import Settings from "./Settings/settings";

function Borrower() {
  return (
    <div className="borrower-container">
      <div className="switch-container">
        <i>
          <img src={briefcase} alt="" />
        </i>
        <p className="switch">Switch Organization</p>
        <i class="fa-solid fa-chevron-down"></i>
      </div>

      <div className="home-container">
        <i>
          <img src={home1} alt="" />
        </i>
        <p className="home-content">Dashboard</p>
      </div>

      <Customers />
      <Business />
      <Settings />

      
    </div>
  );
}

export default Borrower;
