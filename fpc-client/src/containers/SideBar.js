import React, { Component } from 'react';

class SideBar extends Component {
  render(){
    const { petrol, unleaded, ft } = this.props;

    return(
      <div id="sidebar-container">
        <div>Side Bar!</div>
        <div>this is {ft} yayay</div>
        <div onClick={petrol}>
          Petrol
        </div>
        <div onClick={unleaded}>
          Unleaded
        </div>
      </div>
    )
  }
}

export default SideBar;