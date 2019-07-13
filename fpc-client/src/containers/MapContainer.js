import React, { Component } from "react";
import TestMap from './TestMap';

class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  render(){
   
    
    return(
      <div id="map-container">
        <div id="map-information">
          Map Information
        </div>
        <TestMap/>
      </div>
    );
  }
}

export default MapContainer;