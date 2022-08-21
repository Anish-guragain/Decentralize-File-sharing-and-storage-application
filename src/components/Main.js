import React, { Component } from "react";
import Identicon from "identicon.js";
import Layout2 from "../layout/layout2.js";
import NET from "vanta/dist/vanta.net.min";
import anime from "animejs/lib/anime.es.js";
import Search from "./Search.js";

class Main extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
   
  }
  componentDidMount() {
    anime({
      targets: ".animate",
      zIndex: [{ value: 1 }],
      translateY: [
        { value: -200, duration: 500 },
        { value: 0, duration: 3000 },
      ],
      rotate: {
        value: "1turn",
      },
      opacity: [{ value: [0, 1], duration: 2000 }],
      loop: false,
    });

    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x1f1d28,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    
    return (
      <Layout2>
      
    
        <div
          className=" overflow-x-hidden  flex flex-wrap w-full   flex-col md:flex-row-reverse    justify-between bg-gradient-to-l p-14 from-gray-700 via-gray-900 to-black "
          ref={this.vantaRef}
          id="animation"
        >


          <div className="flex flex-col ">
            <div className="text-white">
              <a href="wallet" target="_blank" className="text-white">
                <button class="relative align-middle inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span class="relative px-2 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
                  </span>
                </button>
              </a>
            </div>
            <div role="main" className=" animate pt-8  ">
              <div className="bg-[#80a0cd] rounded-2xl ">
                <p>&nbsp;</p>
                <h2 className=" font-bold text-2xl p-2">Share Image</h2>
                <div className="px-2 py-2">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      const description = this.imageDescription.value;
                      this.props.uploadImage(description);
                    }}
                  >
                    <div className="flex justify-center items-center w-full">
                      <label
                        for="dropzone-file"
                        className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                      >
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                          <svg
                            aria-hidden="true"
                            className="mb-3 w-10 h-10 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            ></path>
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          accept=".jpg, .jpeg, .png, .bmp, .gif"
                          onChange={this.props.capturefile}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="form-group mr-sm-2">
                      <br></br>
                      <input
                        id="imageDescription"
                        type="text"
                        ref={(input) => {
                          this.imageDescription = input;
                        }}
                        className="form-control"
                        placeholder="Image description..."
                        required
                      />
                    </div>

              
                    <button
                      type="submit"
                      className="bg-[#6565e7] rounded-md hover:bg-[#60c9c7] ml-2 p-2"
                    >
                      Upload!
                    </button>
              
                          
                  </form>
                </div>
              </div>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className="flex flex-col ">

          <div className="relative">
         
        </div>
          

          <div className="no-scrollbar w-full mt-10  h-screen   overflow-scroll rounded-xl    ">
            {this.props.images.map((image, key) => {

              // only return if image.author == this.props.account
          

              return (
                <div className=" rounded-md mb-5 " key={key}>
                  <div className="p-3  bg-blue-300 flex items-center">
                    <img
                      alt="avatar"
                      className="mr-2 rounded-full h-10 w-10 "
                      src={`data:image/png;base64,${new Identicon(
                        image.author,
                        30
                      ).toString()}`}
                    />
                    <small className=" text-black">{image.author}</small>
                  </div>
                  <ul id="imageList" className="list-group list-group-flush">
                    <li className="list-group-item bg-gradient-to-r from-[#373643] to-[#314b5e] ">
                      <p className="text-center flex justify-center">
                        <img
                          className=" object-cover max-w-xl"
                          alt="image"
                          src={`https://dapp.infura-ipfs.io/ipfs/${image.hash}`}
                        />
                      </p>
                      <p className="font-bold text-white">
                        {image.description}
                      </p>
                    </li>
                    <li key={key} className="list-group-item py-2">
                      <small className="float-left mt-1 text-muted">
                        TIPS:{" "}
                        {window.web3.utils.fromWei(
                          image.tipAmount.toString(),
                          "Ether"
                        )}{" "}
                        ETH
                      </small>

                      <button
                        className="btn btn-link btn-sm float-right pt-0"
                        name={image.id}
                        onClick={(event) => {
                          let tipAmount = window.web3.utils.toWei(
                            "0.1",
                            "Ether"
                          );
                          console.log(event.target.name, tipAmount);
                          this.props.tipImageOwner(
                            event.target.name,
                            tipAmount
                          );
                        }}
                      >
                        TIP 0.1 ETH
                      </button>
                    </li>
                  </ul>
                </div>
              );
            }
           )}
          </div>
          </div>
        </div>
      </Layout2>
    );
  }
}

export default Main;
