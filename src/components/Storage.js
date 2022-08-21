import React, { Component } from "react";
import { convertBytes } from "./helpers";
import moment from "moment";
import Layout2 from "../layout/layout2.js";
import Identicon from "identicon.js";

class Post extends Component {
  render() {
    return (
      <Layout2>
        <div
          className=" overflow-x-hidden  flex w-full   flex-col sm:flex-row-reverse    justify-between bg-gradient-to-l p-14 from-gray-700 via-gray-900 to-black "
          id="BODY"
        >
          <div className="flex flex-col ">
            <div className="text-white">
              <button class="relative align-middle inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
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
            </div>

            <div role="main" className=" pt-8   ">
              <div className="bg-[#80a0cd] rounded-lg">
                <p>&nbsp;</p>
                <h2 className=" font-bold text-2xl p-2">Share File</h2>
                <div className="px-2 py-2">
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      const description = this.postDescription.value;
                      this.props.uploadPost(description);
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
                            all format
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
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
                          this.postDescription = input;
                        }}
                        className="form-control"
                        placeholder=" Description..."
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

          <div className="no-scrollbar w-full sm:w-[60%] h-screen   overflow-scroll rounded-xl overflow-x-auto   ">
            <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="bg-dark text-white">
                  <th className="py-3 px-6" scope="col">
                    id
                  </th>
                  <th className="py-3 px-6" scope="col">
                    name
                  </th>
                  <th className="py-3 px-6" scope="col">
                    description
                  </th>
                  <th className="py-3 px-6" scope="col">
                    type
                  </th>
                  <th className="py-3 px-6" scope="col">
                    size
                  </th>
                  <th className="py-3 px-6" scope="col">
                    date
                  </th>
                  <th className="py-3 px-6" scope="col">
                    uploader/view
                  </th>
                  <th className="py-3 px-6" scope="col">
                    hash/view/get
                  </th>
                </tr>
              </thead>

              {this.props.posts.map((post, key) => {
                // add new data to the table in numerical order

                if(this.props.account === post.postuploader){

                return (
                  <thead style={{ fontSize: "12px" }} key={key}>
                    <tr className=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">{parseInt(post.postId, 16)}</td>
                      <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {post.postName}
                      </td>
                      <td className="py-4 px-6">{post.postDescription}</td>
                      <td className="py-4 px-6">{post.postType}</td>
                      <td className="py-4 px-6">
                        {convertBytes(post.postSize)}
                      </td>
                      <td className="py-4 px-6">
                        {moment.unix(post.uploadTime).format("h:mm:ss A M/D/Y")}
                      </td>
                      <td className="py-4 px-6 hover:text-white">
                        <a
                          href={"https://etherscan.io/address/" + post.uploader}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {post.postuploader.substring(0, 10)}...
                        </a>
                      </td>
                      <td className="py-4 px-6 text-green-500">
                        <a
                          href={`https://dapp.infura-ipfs.io/ipfs/${post.posthash}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {post.posthash.substring(0, 10)}...
                        </a>
                      </td>
                    </tr>
                  </thead>
                );
              }
              else{
                return null;
              }
            })}
            </table>
          </div>
        </div>
      </Layout2>
    );
  }
}

export default Post;
