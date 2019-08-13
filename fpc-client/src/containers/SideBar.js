import React, { Component } from 'react';

class SideBar extends Component {
  render(){
    const { petrol, unleaded, tester } = this.props;

    return(
      <div id="sidebar-container">
        <div>Side Bar!</div>
        <div onClick={petrol}>
          Petrol
        </div>
        <div onClick={unleaded}>
          Unleaded
        </div>
        <div onClick={tester}>
          tester
        </div>
        <div></div>
      </div>
    )
  }
}

export default SideBar;