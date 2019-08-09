import React, { Component } from 'react';
import { connect } from "react-redux";

class Graph extends Component {
  render(){
    const {stations} = this.props;
    let stationStats = stations.find(station => station.NameId === 'TESCO ELLON');
    console.log(stationStats);
    return(
      <div>{stationStats.FuelPriceList[0].LatestPrice}</div>
    )
  }
}
function mapStateToProps(state){
  return {
  };
}
export default connect(mapStateToProps)(Graph);