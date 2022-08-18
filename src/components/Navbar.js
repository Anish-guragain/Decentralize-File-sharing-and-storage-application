import React, { Component } from "react";
import Identicon from "identicon.js";

class Navbar extends Component {


  
  render() {
    return (
      <nav className=" absolute z-10 flex justify-between    ">
        

        <div className="RIGHT mt-3 ml-72 text-xl">
          <ul className=" flex decoration-black ">
            <a
              className=" items-center block mr-4   pb-2  text-white  capitalize  "
              href="Main"
            >
              Upload Images &nbsp;
            </a>
            <aimport React, { Component } from "react";
            import Identicon from "identicon.js";
            
            class Navbar extends Component {
              render() {
                return (
                  <nav className=" absolute z-10 flex justify-between    ">
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
                              <span>Connect your wallet</span>
                            )}
                          </li>
                        </a>
                      </ul>
                    </div>
                  </nav>
                );
              }
            }
            
            export default Navbar;
            
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
                  <span>Connect your wallet</span>
                )}
              </li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
