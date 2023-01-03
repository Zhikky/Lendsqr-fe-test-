import React from "react";
import Filter from "./filter";
import filterIcon from "/Users/israeladetuwo/Documents/lendsqr/lendsqr-app/src/Components/Dashboard/Users/user icons/filter-results-button.png";

function UserContentHeader({openFilter, setOpenFilter}) {

  const handleFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="user-content-header">
      <button className="title-company">
        ORGANIZATION
        <i onClick={handleFilter}>
          <img src={filterIcon} alt="" />
        </i>
      </button>
      <button className="title-name">
        USERNAME
        <i onClick={handleFilter}>
          <img src={filterIcon} alt="" />
        </i>
      </button>
      <button className="title-email">
        EMAIL
        <i onClick={handleFilter}>
          <img src={filterIcon} alt="" />
        </i>
      </button>
      <button className="title-number">
        PHONE NUMBER
        <i onClick={handleFilter}>
          <img src={filterIcon} alt="" />
        </i>
      </button>
      <button className="title-date">
        DATE JOINED
        <i onClick={handleFilter}>
          <img src={filterIcon} alt="" />
        </i>
      </button>
      <button className="title-status">
        STATUS
        <i onClick={handleFilter}>
          <img src={filterIcon} alt="" />
        </i>
      </button>
      <Filter openFilter={openFilter} />
    </div>
  );
}

export default UserContentHeader;
