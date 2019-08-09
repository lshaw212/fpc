import React, { Component } from "react";

class MapTabs extends Component {

  render(){
    const { map, stats, graph } = this.props;
    return(
      <div id="map-information">
        <div onClick={map}>Map</div>
        <div onClick={stats}>Stats</div>
        <div onClick={graph}>Graphs</div>
      </div>
    )
  }
}

export default MapTabs;