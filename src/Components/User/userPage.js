import React from "react";
import "../Styles/userPage.css";
import Navbar from "../Dashboard/Navbar/navbar";
import Borrower from "../Dashboard/BorrowerNav/borrower";
import Users from "./Users/users";

function UserPage(){
    return (
      <div className="user-page">
        <Navbar />
        <div className="user-page-container">
          <Borrower />
          <Users />
        </div>
      </div>
    );
};

export default UserPage;