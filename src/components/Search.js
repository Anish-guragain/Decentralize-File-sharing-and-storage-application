import React, { Component } from "react";

const Search = (props) => {
    return(
        <div className="relative">
          <input type="text" className="h-14 w-96 pr-8 pl-5 border-white border-1  rounded bg-transparent z-0 border-spacing-1" placeholder="Search anything..." onChange={props.handelChange} />
          <div className="absolute top-4 right-3">
            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500" />
          </div>
        </div>
    )

}

export default Search;
