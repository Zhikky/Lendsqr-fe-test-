import React from "react";

// Same concept of importing Icons as Business Functional Component
import settings from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/settings.png";
import percentage from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/badge-percent 1.png";
import auditLog from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/images/audit log.png";

function Settings() {
  return (
    <div className="settings-container">
      <p className="settings-header">SETTINGS</p>
      <div className="customers">
        <i>
          <img src={settings} alt="" />
        </i>
        <p>Preferences</p>
      </div>
      <div className="customers">
        <i>
          <img src={percentage} alt="" />
        </i>
        <p>Fees and Pricing</p>
      </div>
      <div className="customers">
        <i>
          <img src={auditLog} alt="" />
        </i>
        <p>Audit Logs</p>
      </div>
    </div>
  );
}

export default Settings;
