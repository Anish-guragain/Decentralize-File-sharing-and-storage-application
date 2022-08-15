import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class File extends Component {

  render() {




    return (
      <div className="container-fluid bg-gradient-to-l from-gray-700 via-gray-900 to-black">
   <div id="background1 " className="row relative ">
      <main  role="main"
      className="col-lg-12 ml-auto mt-36 mr-auto"
      style={{ maxWidth: "500px" }}
      >
      <div className="bg-[#80a0cd] rounded-lg">
         <p>&nbsp;</p>
         <h2 className=" font-bold text-2xl p-2">Share File</h2>
         <div className="px-2 py-2">
            <form
               onSubmit={(event) =>
               {
               event.preventDefault();
               const description = this.fileDescription.value;
               this.props.uploadFile(description);
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
                           <span className="font-semibold">Click to upload</span> or
                           drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                           Text (MAX. 800x400px)
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
                     ref={(input) => { this.fileDescription = input }}
                  className="form-control"
                  placeholder="File description..."
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
         <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px'}}>
         <thead style={{ 'fontSize': '15px' }}>
         <tr className="bg-dark text-white">
            <th scope="col" style={{ width: '10px'}}>id</th>
            <th scope="col" style={{ width: '200px'}}>name</th>
            <th scope="col" style={{ width: '230px'}}>description</th>
            <th scope="col" style={{ width: '120px'}}>type</th>
            <th scope="col" style={{ width: '90px'}}>size</th>
            <th scope="col" style={{ width: '90px'}}>date</th>
            <th scope="col" style={{ width: '120px'}}>uploader/view</th>
            <th scope="col" style={{ width: '120px'}}>hash/view/get</th>
         </tr>
         </thead>
        

        
          { this.props.files.map((file, key) => {

          const shorten= file.uploader? file.uploader.substring(0, 20):'...'
         
            return(
              <thead style={{ 'fontSize': '12px' }} key={key}>
                <tr>
                  <td>{parseInt(file.fileId,16)}</td>
                  <td>{file.fileName}</td>
                  <td>{file.fileDescription}</td>
                  <td>{file.fileType}</td>
                  <td>{convertBytes(file.fileSize)}</td>
                  <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                  <td>
                    <a
                      href={"https://etherscan.io/address/" + file.uploader}
                      rel="noopener noreferrer"
                      target="_blank">
                      {shorten}...
                    </a>
                   </td>
                  <td>
                    <a
                      href={`https://ipfs.io/ipfs/${file.filehash}`}
                      rel="noopener noreferrer"
                      target="_blank">
                      {file.fileHash}.
                    </a>
                  </td>
                </tr>
              </thead>
            )
          })}
         </table>
      </div>
      </main>
   </div>
</div>
    );
  }
}

export default File;