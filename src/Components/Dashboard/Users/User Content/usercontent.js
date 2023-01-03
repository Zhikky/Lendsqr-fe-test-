import React, { useContext } from "react";
import UserDetails from "./userdetails";
import filterIcon from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/filter-results-button.png";

function UserContent({UserContext,}) {
  const currentDetails = useContext(UserContext)

  return (
    <div className="user-content-container">
      <div className="user-content-box">
        <div className="user-content-header">
          <div>
            <p>ORGANIZATION</p>
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </div>
          <div>
            <p>USERNAME</p>
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </div>
          <div>
            <p>EMAIL</p>
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </div>
          <div>
            <p>PHONE NUMBER</p>
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </div>
          <div>
            <p>DATE JOINED</p>
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </div>
          <div>
            <p>STATUS</p>
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </div>
        </div>

        <div className="user-details">
          {currentDetails.map((currentDetail) => {
            return (
              <UserDetails
                key={currentDetail.id}
                name={
                  currentDetail.profile.firstName +
                  " " +
                  currentDetail.profile.lastName
                }
                email={currentDetail.email}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserContent;
