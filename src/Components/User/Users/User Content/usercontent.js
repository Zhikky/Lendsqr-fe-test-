import React, { useContext, useState, useEffect, useRef } from "react";
import UserDetails from "./userdetails";
import UserContentHeader from "./userContentHeader";

function UserContent({ UserContext }) {
  const currentDetails = useContext(UserContext);
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="user-content-container">
      <div className="user-content-box">
        <UserContentHeader
          openFilter={openFilter}
          setOpenFilter={setOpenFilter}
        />

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
