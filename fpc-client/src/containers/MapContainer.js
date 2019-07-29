import React, { Component } from "react";
import TestMap from './TestMap';
import { connect } from 'react-redux';
import { fetchStations } from '../store/actions/stations';

class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }
  
  componentDidMount(){
    // this.props.fetchStations();

    // console.log(state)
  }

  render(){
    const { stations } = this.props;
    // console.log(stations);
    return(
      (typeof stations!=='undefined')?
      <div id="map-container">
        <div id="map-information">
          Map Information!
        </div>
        <TestMap stations={stations}/>
      </div>
      :
      <div>
        LOADING
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    stations: state.stations || []
  };
}

// export default withRouter(connect(mapStateToProps, { fetchBlogs, deleteBlog, fetchPosts, favoriteBlog })(BlogList));
// export default MapContainer;
export default connect(mapStateToProps, {fetchStations})(MapContainer);