import React, { Component } from "react";
import Identicon from "identicon.js";
import Web3 from "web3";
import Decentragram from "../abis/Decentragram.json";
import "./App.css";
import Navbar from "./Navbar";

class Wallet extends Component {
  render() {
    return (
      <div className="container-fluid mt-20 ">
        <div className="row">
          <main
            role="main"
            className="col-lg-12 ml-auto mr-auto"
            style={{ maxWidth: "500px" }}
          >
            <div className="bg-[#80a0cd] rounded-lg">
              <p>&nbsp;</p>
              <h2 className=" font-bold text-2xl p-2">Connect your wallet</h2>
              <button class="bg-[#6565e7] rounded-md hover:bg-[#60c9c7] ">
                hello click me
              </button>

              <p>&nbsp;</p>

              {/* Code ... */}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Wallet;
