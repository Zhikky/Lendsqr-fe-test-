import React from "react";

// Same concept of importing Icons as Business Functional Component
import users from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/user-friends 2.png";
import user1 from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/users.png";
import loan from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/money sack.png";
import handShake from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/Handshake.png";
import savings from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/piggy-bank 1.png";
import loan2 from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/loan.png";
import userCheck from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/user-check 1.png";
import userTimes from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/user-times 1.png";

function Customers() {
  return (
    <div className="customers-container">
      <p className="customer-header">CUSTOMERS</p>
      <div className="customers">
        <i>
          <img src={users} alt="" />
        </i>
        <p>Users</p>
      </div>
      <div className="customers">
        <i>
          <img src={user1} alt="" />
        </i>
        <p>Guarantors</p>
      </div>
      <div className="customers">
        <i>
          <img src={loan} alt="" />
        </i>
        <p>Loans</p>
      </div>
      <div className="customers">
        <i>
          <img src={handShake} alt="" />
        </i>
        <p>Decision Models</p>
      </div>
      <div className="customers">
        <i>
          <img src={savings} alt="" />
        </i>
        <p>Savings</p>
      </div>
      <div className="customers">
        <i>
          <img src={loan2} alt="" />
        </i>
        <p>Loan Requests</p>
      </div>
      <div className="customers">
        <i>
          <img src={userCheck} alt="" />
        </i>
        <p>Whitelist</p>
      </div>
      <div className="customers">
        <i>
          <img src={userTimes} alt="" />
        </i>
        <p>Karma</p>
      </div>
    </div>
  );
}

export default Customers;
