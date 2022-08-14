import React from "react";
import { Link } from "react-router-dom";
import Identicon from "identicon.js";
import Web3 from "web3";

class Header extends React.Component {
  render() {
    return(
      <header>
      <nav className=" absolute z-10 flex justify-between    ">
      <div className="lEFT ml-5 text-white ">
        <a
          className=" items-center hover:text-black text-xl capitalize "
          href="landing"
        >
          <img src="" alt="logo" className="w-38 h-38 " />
        </a>
      </div>

      <div className="RIGHT mt-3 ml-72 text-xl">
        <ul className=" flex decoration-black ">
          <a
            className=" items-center block mr-4   pb-2  text-white  capitalize  "
            href="Main"
          >
            Upload Images &nbsp;
          </a>
          <a
            className="items-center block mr-4  pb-2   text-white  capitalize  "
            href="file"
          >
            Upload Files
          </a>
          <a
            className="items-center block  pb-2    text-white  capitalize  "
            href="faq"
          >
            FAQ
          </a>
        </ul>
      </div>
      <div className="far left ml-64">
        <ul className=" flex decoration-black ">
          <a
            className="items-center  block px-2 pb-2 hover:bg-blue-900  hover:text-yellow-400  text-white  capitalize  "
            href="wallet"
          >
            <li className="flex flex-row-reverse mt-3">
              <small className=" text-xl">
                <small id="account">{this.props.account}</small>
              </small>
              {this.props.account ? (
                <img
                  className=""
                  width="30"
                  height="30"
                  src={`data:image/png;base64,${new Identicon(
                    this.props.account,
                    30
                  ).toString()}`}
                />
              ) : (
                <span></span>
              )}
            </li>
          </a>
        </ul>
      </div>
    </nav>
      </header>
    );
  }
}
export default Header;