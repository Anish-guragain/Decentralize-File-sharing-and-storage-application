import React, { Component } from 'react'
import Header2 from "./header/header2"





class Layout2 extends Component {
  render() {
    return (
        <div className='flex flex-col-reverse md:flex-row'>
        <Header2 />
        <main className='w-full h-full flex flex-wrap'
        >{this.props.children}</main>
        </div>
    );
  }
}

export default Layout2;
