import React, { Component } from "react";
import { connect } from 'react-redux';
import MapTabs from './MapTabs';
import MapView from './MapView';
import Graph from './Graph';
import { fetchTab, updateTab } from '../store/actions/tab';



class MapContainer extends Component {

  constructor(props){
    super(props);
    this.handleMap = this.handleMap.bind(this);
    this.handleStats = this.handleStats.bind(this);
    this.handleGraph = this.handleGraph.bind(this);
  }
  handleMap(){
    this.props.updateTab("map");
  }
  handleStats(){
    this.props.updateTab("stats");
  }  
  handleGraph(){
    this.props.updateTab("graph");
  }
  render(){
    const { tab, stations, selected_station } = this.props;

    return(
      <div id="map-container">
        <MapTabs map={this.handleMap} stats={this.handleStats} graph={this.handleGraph} />
        { tab=="map" && <MapView stations={stations}/> }
        { tab=="stats" && <div>Stats</div> }
        { tab=="graph" && <Graph stations={stations} selected_station={selected_station}/> }
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tab: state.tab.tab
  };
}

export default connect(mapStateToProps, {fetchTab, updateTab})(MapContainer);