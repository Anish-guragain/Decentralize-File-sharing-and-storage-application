import React from "react"
import Header from "./header/header"
import Web3 from "web3";

class Layout extends React.Component {
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
  }


  constructor(props) {
    super(props);
    this.state = {
      account: "",
      decentragram: null,
      images: [],
      files:[],
      loading: true,
      type: null,
      name: null,
    };
  }
  render(){
    return (
        <div>
        <Header account={this.state.account} />
          <main>{this.props.children}</main>
      </div>
    )
  }
}
export default Layout;