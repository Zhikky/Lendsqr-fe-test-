import React from "react";
import { NavLink } from "react-router-dom";

// Same concept of importing Icons as Business Functional Component
import signout from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/User general details/Users/user icons/sign-out 1.png";

function Logout() {
  return (
    <div className="logout-container">
      <NavLink className="customers" to="/">
        <i>
          <img src={signout} alt="" />
        </i>
        <p id="logout">Logout</p>
      </NavLink>
      <div className="customers">
        <p>v1.2.0</p>
      </div>
    </div>
  );
}

export default Logout;