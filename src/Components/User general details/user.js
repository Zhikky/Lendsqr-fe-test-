import React from "react";
import Navbar from "../Dashboard/Navbar/navbar";
import Borrower from "./BorrowerNav/borrower";
import Users from "./Users/users";

function UserGeneralDetails(){
    return (
      <div>
        <Navbar />
        <div className="user-page-container">
          <Borrower />
          <Users />
        </div>
      </div>
    );
};

export default UserGeneralDetails;