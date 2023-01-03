import React from "react";

function Filter({openFilter}){
    return (
      <div className={`filter-container ${openFilter ? "active" : "inactive"}`}>
        <form>
          <div className="filter-item-container">
            <label for="organization">Organization</label>
            <select id="organization" name="organization">
              <option>Select</option>
              <option value="Lendsqr">Lendsqr</option>
              <option value="Lendsqr">Lendsqr</option>
              <option value="Lendsqr">Lendsqr</option>
              <option value="Lendsqr">Lendsqr</option>
            </select>
          </div>
          <div className="filter-item-container">
            <label for="name">Username</label>
            <input type="text" placeholder="User" />
          </div>
          <div className="filter-item-container">
            <label for="email">Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="filter-item-container">
            <label for="date">Date</label>
            <input type="date" placeholder="Date" />
          </div>
          <div className="filter-item-container">
            <label for="phone">Phone Number</label>
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="filter-item-container">
            <label for="status">Status</label>
            <select id="status" name="status">
              <option>Select</option>
              <option value="Lendsqr">Active</option>
              <option value="Lendsqr">Inactive</option>
              <option value="Lendsqr">Pending</option>
              <option value="Lendsqr">Blacklisted</option>
            </select>
          </div>
          <div className="filter-button-container">
            <button className="reset-button">Reset</button>
            <button className="filter-button">Filter</button>
          </div>
        </form>
      </div>
    );
}

export default Filter;