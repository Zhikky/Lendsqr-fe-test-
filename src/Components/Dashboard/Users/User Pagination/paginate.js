import React from "react";

function Paginate({totalPosts, postPerPage}){
    let pages = []

    for (let i = 1; i = Math.ceil(totalPosts/postPerPage); i++ ){
        pages.push(i)
    }

    return (
        <div>
            {pages.map((page, index)=>{
                return <button key={index}>{page}</button>
            })}
        </div>
    ) 
};

export default Paginate;