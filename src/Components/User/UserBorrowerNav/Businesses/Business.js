import React from "react";
import organization from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/briefcase 1.png";
import loan from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/loan.png";
import bank from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/Banks.png";
import coins from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/Coins.png";
import transactions from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/Transactions.png";
import galaxy from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/galaxy.png";
import serviceAccounts from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/Service accounts.png";
import scroll from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/scroll 1.png";
import charts from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/chart-bar.png";

function Business() {
  return (
    <div className="business-container">
      <p className="business-header">BUSINESSES</p>
      <div className="customers">
        <i>
          <img src={organization} alt="" />
        </i>
        <p>Organization</p>
      </div>
      <div className="customers">
        <i>
          <img src={loan} alt="" />
        </i>
        <p>Loan Products</p>
      </div>
      <div className="customers">
        <i>
          <img src={bank} alt="" />
        </i>
        <p>Savings Products</p>
      </div>
      <div className="customers">
        <i>
          <img src={coins} alt="" />
        </i>
        <p>Fees and Charges</p>
      </div>
      <div className="customers">
        <i>
          <img src={transactions} alt="" />
        </i>
        <p>Transactions</p>
      </div>
      <div className="customers">
        <i>
          <img src={galaxy} alt="" />
        </i>
        <p>Services</p>
      </div>
      <div className="customers">
        <i>
          <img src={serviceAccounts} alt="" />
        </i>
        <p>Service Accounts</p>
      </div>
      <div className="customers">
        <i>
          <img src={scroll} alt="" />
        </i>
        <p>Settlements</p>
      </div>
      <div className="customers">
        <i>
          <img src={charts} alt="" />
        </i>
        <p>Reports</p>
      </div>
    </div>
  );
}

export default Business;
