import React from "react";
import users from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/icon@2x.png";
import activeUsers from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/activeUsers.png";
import userLoans from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/userLoans.png";
import userSavings from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/userSavings.png";

function Userbox(){
    return (
      <div className="user-box-container">
        <div className="user-box">
          <i>
            <img src={users} alt="" className="user-icons" />
          </i>
          <p>USER</p>
          <p>2,453</p>
        </div>
        <div className="user-box">
          <i>
            <img src={activeUsers} alt="" className="user-icons" />
          </i>
          <p>ACTIVE USERS</p>
          <p>2,453</p>
        </div>
        <div className="user-box">
          <i>
            <img src={userLoans} alt="" className="user-icons" />
          </i>
          <p>USERS WITH LOANS</p>
          <p>12,453</p>
        </div>
        <div className="user-box">
          <i>
            <img src={userSavings} alt="" className="user-icons" />
          </i>
          <p>USERS WITH SAVINGS</p>
          <p>102,453</p>
        </div>
      </div>
    );
};
export default Userbox;