import React from "react";
import "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Styles/userbox.css";
import starIcon1 from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/User general details/Users/user icons/star 1.png";
import startIcon2 from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/User general details/Users/user icons/star 2.png";
import users from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/icon@2x.png";
import activeUsers from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/activeUsers.png";
import userLoans from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/userLoans.png";
import userSavings from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/userSavings.png";
import avatarIcon from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/User general details/Users/user icons/avatar (1).png";

function Userbox() {
  return (
    <div className="user-box-container2">
      <div className="top-user-box">
        <div>
          <img src={avatarIcon} alt="" />
          <div className="user-name-container">
            <span>Grace Effiom</span>
            <span>LSQFf587g90</span>
          </div>
        </div>
        <div className="user-tier-container">
          <span>User's Tier</span>
          <div className="starIcon-container">
            <i>
              <img src={starIcon1} alt="" />
            </i>
            <i>
              <img src={startIcon2} alt="" />
            </i>
            <i>
              <img src={startIcon2} alt="" />
            </i>
          </div>
        </div>
        <div className="bank-details-container">
          <span>₦200,000.00</span>
          <span>9912345678/Providus Bank</span>
        </div>
      </div>
      <div className="bottom-user-box">
        <button>General Details</button>
        <button>Documents</button>
        <button>Bank Details</button>
        <button>Loans</button>
        <button>Savings</button>
        <button>App and System</button>
      </div>
    </div>
  );
}
export default Userbox;
