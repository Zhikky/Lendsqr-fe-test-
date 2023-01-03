import React, { useContext } from "react";
import UserDetails from "./userdetails";
import filterIcon from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/filter-results-button.png";

function UserContent({UserContext,}) {
  const currentDetails = useContext(UserContext)

  return (
    <div className="user-content-container">
      <div className="user-content-box">
        <div className="user-content-header">
          <button className="title-company">
            ORGANIZATION
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </button>
          <button className="title-name">
            USERNAME
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </button>
          <button className="title-email">
            EMAIL
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </button>
          <button className="title-number">
            PHONE NUMBER
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </button>
          <button className="title-date">
            DATE JOINED
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </button>
          <button className="title-status">
            STATUS
            <i>
              <img src={filterIcon} alt="" />
            </i>
          </button>
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
