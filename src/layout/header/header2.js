import React from "react";
import { Link } from "react-router-dom";

class Header2 extends React.Component {
  render() {
    return(
      
      <nav className="flex flex-wrap sm:sticky sm:top-0 sticky bottom-0   sm:flex sm:flex-col px-5 py-8 h-fit sm:h-screen  sm:w-fit sm:justify-start justify-between z-10 bg-gray-800">
        <div>
          <h3 className="text-xl   hidden sm:flex font-medium text-blue-500 mb-10">D-APP</h3>
        </div>
        <div>
          <a href="landing">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  sm:mb-10 text-white hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </div>
        <div>
          <a href="main">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  sm:mb-10 text-white hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
        </div>
        <div>
          <a href="file">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  sm:mb-10 text-white hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </a>
        </div>
        <div>
          <a href="notification.html">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-blue-800 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </a>
        </div>
      </nav>
      
    );
  }
}
export default Header2;