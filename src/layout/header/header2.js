import React from "react";


class Header2 extends React.Component {
  render() {
    return(
      
      <nav className="flex flex-wrap sticky bottom-0  md:flex md:flex-col px-4 py-8  md:h-[119vh]  md:w-fit md:justify-start justify-between z-10 bg-gray-800">
        <div>
          <h3 className="text-sm   hidden md:flex font-medium text-blue-500 mb-10">DAPP</h3>
        </div>
        <div>
          <a href="landing">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  md:mb-10 text-white hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </div>
        <div>
          <a href="main">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:mb-10 text-white hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
          </a>
        </div>
        <div>
          <a className="hover:text-blue-400" href="file">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:mb-10 text-white hover:text-blue-800 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
          </a>
        </div>
        <div>
        <a href="Storage">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:mb-10  text-white hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
        </a>
      </div>
        <div>
        <a href="faq">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:mb-10 text-white hover:text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </a>
      </div>
 
       
      </nav>
      
    );
  }
}
export default Header2;