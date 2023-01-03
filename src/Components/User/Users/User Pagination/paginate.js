import React from "react";

function Paginate({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  let lastPage = pages.length;
  let newpages = [
    currentPage,
    currentPage + 1,
    currentPage + 2,
    "...",
    lastPage - 1,
    lastPage,
  ];

  if (pages.length <= 5) {
    newpages = pages;
  } else if (currentPage >= lastPage - 5) {
    newpages = [
      lastPage - 5,
      lastPage - 4,
      lastPage - 3,
      lastPage - 2,
      lastPage - 1,
      lastPage,
    ];
  }

  return (
    <div className="page-number">
      {newpages.map((newPage, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(newPage)}
            className={newPage === currentPage ? "active" : ""}
          >
            {newPage}
          </button>
        );
      })}
    </div>
  );
}

export default Paginate;
