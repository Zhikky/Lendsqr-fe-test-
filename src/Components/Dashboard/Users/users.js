import React, { useState, createContext, useEffect } from "react";
import "./users.css";
import "./User Pagination/paginate.css";
import Userbox from "./User Header box/userbox";
import UserContent from "./User Content/usercontent";
import Paginate from "./User Pagination/paginate";

function Users() {
  const UserContext = createContext();
  const PageNumber = createContext();

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

  function postPerPageHandler() {
    let postPerPageNumber = document.getElementById("input-number").value;
    setPostPerPage(postPerPageNumber);
  }

  function nextPageHandler() {
    if (details.length === lastDataIndex) {
      return;
    } else {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  }

  function prevPageHandler() {
    if (currentPage != 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    } else {
      setCurrentPage(1);
    }
  }

  const lastDataIndex = currentPage * postPerPage;
  const firstDataIndex = lastDataIndex - postPerPage;
  const currentDetails = details.slice(firstDataIndex, lastDataIndex);
  return (
    <UserContext.Provider value={currentDetails}>
      <section className="user-container">
        <h3 className="user-header">Users</h3>

        <Userbox />
        <UserContent UserContext={UserContext} />

        <div className="pagination-container">
          <div className="item-number-container">
            <div>
              <label for="postNumber">Showing </label>
              <select id="input-number" onInput={postPerPageHandler}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
              </select>
            </div>
            <p>out of 100</p>
          </div>
          <div className="page-number-container">
            <button className="prev" onClick={prevPageHandler}>
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <Paginate totalPosts={details.length} postPerPage={postPerPage} />
            <button className="next" onClick={nextPageHandler}>
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
    </UserContext.Provider>
  );
}

export default Users;
