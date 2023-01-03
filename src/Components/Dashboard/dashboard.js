import React from "react";
import Navbar from "./Navbar/navbar";
import Borrower from "./BorrowerNav/borrower";
import Users from "./Users/users";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard-content-container">
        <Borrower />
        <Users />
      </div>
    </div>
  );
}

export default Dashboard;
