import React, { useState, createContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./users.css";
import Userbox from "./User Header box/userbox";
import UserContent from "./User Content/usercontent";

function Users() {
  const UserContext = createContext();

  const [details, setDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);

  // function postPerPageHandler() {
  //   let postPerPageNumber = document.getElementById("input-number").value;
  //   console.log(document.getElementById("input-number"));
  //   setPostPerPage(postPerPageNumber);
  // }

  // function nextPageHandler() {
  //   if (details.length === lastDataIndex) {
  //     return;
  //   } else {
  //     setCurrentPage((currentPage) => currentPage + 1);
  //   }
  // }

  // function prevPageHandler() {
  //   if (currentPage !== 1) {
  //     setCurrentPage((currentPage) => currentPage - 1);
  //   } else {
  //     setCurrentPage(1);
  //   }
  // }

  // const lastDataIndex = currentPage * postPerPage;
  // const firstDataIndex = lastDataIndex - postPerPage;
  // const currentDetails = details.slice(firstDataIndex, lastDataIndex);
  return (
    <UserContext.Provider value={details}>
      <section className="user-container">
        <div>
          <NavLink className="back-to-users" to="/userpage">
            <i class="fa-solid fa-arrow-left-long"></i>
            <span>Back to Users</span>
          </NavLink>
          <div className="user-header-container">
            <h3 className="user-header">Users Details</h3>
            <div>
              <button>BLACKLIST USER</button>
              <button>ACTIVATE USER</button>
            </div>
          </div>
        </div>

        <Userbox />
        <UserContent UserContext={UserContext} />
      </section>
    </UserContext.Provider>
  );
}

export default Users;
