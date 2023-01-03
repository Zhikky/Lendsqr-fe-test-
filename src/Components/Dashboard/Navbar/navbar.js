import React from "react";
import "./navbar.css";
import image1 from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/lendsqr.png";
import image2 from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/image 4.png";
import bell from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/Vector.png";

function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <img src={image1} alt="" className="logo" />
      </div>

      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search for anything" />
        <div className="search-icon">
          <i class="fas fa-search"></i>
        </div>
      </div>

      <p className="docs">Docs</p>
      <img src={bell} alt="" className="bell"/>

      <div className="avatar">
        <img src={image2} alt="" className="avatar-image" />
      </div>

      <div className="username-container">
        <p className="username">Adedeji</p>
        <i class="fa-sharp fa-solid fa-caret-down"></i>
      </div>
    </div>
  );
}

export default Navbar;
