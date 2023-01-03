import React from "react";

function UserDetails(props) {
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
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div />
    </div>
  );
}

export default UserDetails;
