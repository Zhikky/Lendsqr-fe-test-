import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import eyeIcon from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/User/Users/user icons/eye icon.png";
import blacklistIcon from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/User/Users/user icons/delete friend icon.png";
import activateIcon from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/User/Users/user icons/add user icon.png";

function UserDetails(props) {
  const [openOption, setOpenOption] = useState(false);

  const handleOption = () => {
    setOpenOption(!openOption);
  };

  return (
    <div className="user-details-container">
      <div className="detail-company">
        <p>Lendsqr</p>
      </div>
      <div className="detail-name">
        <p>{props.name}</p>
      </div>
      <div className="detail-email">
        <p>{props.email}</p>
      </div>
      <div className="detail-number">
        <p>07060780922</p>
      </div>
      <div className="detail-date">
        <p>Apr 30, 2020 10:00 AM</p>
      </div>
      <div className="detail-status" id="detail-status">
        <p>Active</p>
        <i class="fa-solid fa-ellipsis-vertical" onClick={handleOption}></i>
        <div
          className={`option-container ${openOption ? "active" : "inactive"}`}
        >
          <NavLink className="detail-navlink" to="/userdetails"  props={props}>
            <i>
              <img src={eyeIcon} alt="" />
            </i>
            View Details
          </NavLink>
          <button>
            <i>
              <img src={blacklistIcon} alt="" />
            </i>
            Blacklist User
          </button>
          <button>
            <i>
              <img src={activateIcon} alt="" />
            </i>
            Activate User
          </button>
        </div>
      </div>
      <div />
    </div>
  );
}

export default UserDetails;
