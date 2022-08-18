import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import Decentragram from "../abis/Decentragram.json";
import Main from "./Main";
import Wallet from "./wallet";
import Landing from "./landing";
import Faqs from "./faq";
import File from "./file";
import Footer from "./footer";
import Loading from "./loading";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const projectId = "2DNC4SBCz7Ng25Er4w5ScMTdsaE";
const projectSecret = "f7ff4b799ed9f27555de38d8112aa568";
const auth =
  "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

class App extends Component {
  async componentDidMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // load account
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    this.setState({ account: accounts[0] });

    // network id
    const networkId = await web3.eth.net.getId();
    const networkData = Decentragram.networks[networkId];
    console.log(networkData);
    console.log(networkId);
    if (networkData) {
      const decentragram = web3.eth.Contract(
        Decentragram.abi,
        networkData.address
      );
      this.setState({ decentragram });
      // get image count
      const imageCount = await decentragram.methods.imageCount().call();
      // get file count
      const fileCount = await decentragram.methods.fileCount().call();
      //Update the state with image count
      this.setState({ imageCount });

      // update the state with file count
      this.setState({ fileCount });

      // loop through all images
      for (let i = 1; i <= imageCount; i++) {
        const image = await decentragram.methods.images(i).call();
        this.setState({
          images: [...this.state.images, image],
        });
      }

      // lopp through all the files
      for (let i = fileCount; i >= 1; i--) {
        const file = await decentragram.methods.files(i).call();
        this.setState({
          files: [...this.state.files, file],
        });
      }

      // set highest tip image first
      this.setState({
        images: this.state.images.sort((a, b) => b.tipAmount - a.tipAmount),
      });

      this.setState({ loading: false });
    } else {
      window.alert("Smart contract not deployed to detected network");
    }

    const decentragram = web3.eth.Contract(
      Decentragram.abi,
      "0x8f8b8f8b8f8b8f8b8f8b8f8b8f8b8f8b8f8b8f8b"
    );
  }

  capturefile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) });
      console.log(this.state.buffer);
    };
  };

  capturefile2 = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    const reader = new window.FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.setState({
        buffer: Buffer(reader.result),
        type: file.type,
        name: file.name,
      });
      console.log("buffer", this.state.buffer);
    };
  };

  uploadImage = (description) => {
    console.log("submiting image to ipfs");
    ipfs.add(this.state.buffer, (error, result) => {
      console.log("ipfs result", result);
      if (error) {
        console.log(error);
        return;
      }
      const imageHash = result[0].hash;
      this.setState({ loading: true });
      console.log(imageHash);
      this.state.decentragram.methods
        .uploadImage(imageHash, description)
        .send({
          from: this.state.account,
        })
        .on("transactionHash", (hash) => {
          this.setState({ loading: false });
        });
    });
  };

  uploadFile = (description) => {
    console.log("submiting File to ipfs");
    ipfs.add(this.state.buffer, (error, result) => {
      console.log("ipfs file result", result);
      if (error) {
        console.log(error);
        return;
      }
      const fileHash = result[0].hash;
      this.setState({ loading: true });
      console.log(fileHash);

      if (this.state.type === "") {
        this.setState({ type: "none" });
      }
      this.state.decentragram.methods
        .uploadFile(
          result[0].hash,
          result[0].size,
          this.state.type,
          this.state.name,
          description
        )
        .send({ from: this.state.account })
        .on("transactionHash", (hash) => {
          this.setState({
            loading: false,
            type: null,
            name: null,
          });
          window.location.reload();
        })
        .on("error", (e) => {
          window.alert("Error");
          this.setState({ loading: false });
        });
    });
  };

  tipImageOwner = (id, tipAmount) => {
    this.setState({ loading: true });
    this.state.decentragram.methods
      .tipImageOwner(id)
      .send({ from: this.state.account, value: tipAmount })
      .on("transactionHash", (hash) => {
        this.setState({ loading: false });
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      decentragram: null,
      images: [],
      files: [],
      loading: true,
      type: null,
      name: null,
      vantaRef: React.createRef(),
    };
    this.uploadFile = this.uploadFile.bind(this);
    this.capturefile2 = this.capturefile2.bind(this);
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/Main"
            element={
              this.state.loading ? (
                <div
                  id="loader"
                  className="flex items-center flex-col text-2xl justify-center text-white h-screen bg-gradient-to-l from-gray-700 via-gray-900 to-black"
                >
                 
                <Loading/>
             
                </div>
              ) : (
                <Main
                  account={this.state.account}
                  images={this.state.images}
                  capturefile={this.capturefile}
                  uploadImage={this.uploadImage}
                  tipImageOwner={this.tipImageOwner}
                />
              )
            }
          />

          <Route path="/" element={<Landing />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/faq" element={<Faqs />} />
          <Route
            path="/file"
            element={
              this.state.loading ? (
                <div
                  id="loader"
                  className="flex items-center text-2xl justify-center text-white h-screen bg-gradient-to-l from-gray-700 via-gray-900 to-black"
                >
                <Loading/>
                  
                </div>
              ) : (
                <File
                  account={this.state.account}
                  files={this.state.files}
                  capturefile={this.capturefile2}
                  uploadFile={this.uploadFile}
                />
              )
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
