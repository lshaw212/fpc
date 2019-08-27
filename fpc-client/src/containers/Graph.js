import React, { Component } from 'react';
import createGraph from '../graph';


class Graph extends Component {

  componentDidMount() {
    if(this.props.selected_station)
      createGraph(this.props.selected_station);
  }

  render(){
    const {selected_station} = this.props;
    return(
      <div id="graph-container">
        {selected_station ? (
          <svg
            className="station-graph"
          />
        ) : (
          <div>Please select a Petrol station to view historical stats</div>
        )}
      </div>
    )
  }
}
export default Graph;