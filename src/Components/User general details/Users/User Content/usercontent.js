import React, { useContext, useState, useEffect, useRef } from "react";
import "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Styles/usercontent.css";

function UserContent({ UserContext}) {
  const currentDetails = useContext(UserContext);
  // console.log(currentDetails)

  return (
    <div className="user-content-container">
      <div className="user-detail-box">
        <div className="details-container">
          <span>Personal Information</span>
          <div className="personal-details1">
            <div>
              <span>FULL NAME</span>
              <span>Grace Effiom</span>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <span>07060780922</span>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <span>grace@gmail.com</span>
            </div>
            <div>
              <span>BVN</span>
              <span>07060780922</span>
            </div>
            <div>
              <span>GENDER</span>
              <span>Female</span>
            </div>
          </div>
          <div className="personal-details1">
            <div>
              <span>MARITAL STATUS</span>
              <span>Single </span>
            </div>
            <div>
              <span>CHILDREN</span>
              <span>None</span>
            </div>
            <div>
              <span>TYPE OF RESIDENCE</span>
              <span>Parent's Apartment</span>
            </div>
          </div>
        </div>

        <div className="details-container">
          <span>Education and Employment</span>
          <div className="personal-details2">
            <div>
              <span>LEVEL OF EDUCATION</span>
              <span>B.Sc</span>
            </div>
            <div>
              <span>EMPLOYMENT STATUS</span>
              <span>Employed</span>
            </div>
            <div>
              <span>SECTOR OF EMPLOYMENT</span>
              <span>Fintech</span>
            </div>
            <div>
              <span>DURATION OF EMPLOYMENT</span>
              <span>2 Years</span>
            </div>
          </div>
          <div className="personal-details2">
            <div>
              <span>OFFICIAL EMAIL</span>
              <span>grace@lendsqr.com </span>
            </div>
            <div>
              <span>MONTHLY INCOME</span>
              <span>₦200,000.00- ₦400,000.00</span>
            </div>
            <div>
              <span>LOAN REPAYMENT</span>
              <span>#40,000</span>
            </div>
          </div>
        </div>

        <div className="details-container2">
          <span>Socials</span>
          <div className="personal-details2">
            <div>
              <span>TWITTER</span>
              <span>@grace_effiom</span>
            </div>
            <div>
              <span>FACEBOOK</span>
              <span>Grace Effiom</span>
            </div>
            <div>
              <span>INSTAGRAM</span>
              <span>@grace_effiom</span>
            </div>
          </div>
        </div>

        <div className="details-container2">
          <span>Guarantor</span>
          <div className="personal-details2">
            <div>
              <span>FULL NAME</span>
              <span>Debby Ogana</span>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <span>07060780922</span>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <span>debby@gmail.com</span>
            </div>
            <div>
              <span>RELATIONSHIP</span>
              <span>Sister</span>
            </div>
          </div>
        </div>

        <div className="details-container2">
          <span></span>
          <div className="personal-details2">
            <div>
              <span>FULL NAME</span>
              <span>Debby Ogana</span>
            </div>
            <div>
              <span>PHONE NUMBER</span>
              <span>07060780922</span>
            </div>
            <div>
              <span>EMAIL ADDRESS</span>
              <span>debby@gmail.com</span>
            </div>
            <div>
              <span>RELATIONSHIP</span>
              <span>Sister</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserContent;
