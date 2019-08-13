import React, { Component } from "react";
import PetrolMarker from '../components/PetrolMarker';
import { connect } from 'react-redux';
import { getStation } from '../store/actions/stations';

class MarkerList extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  selectStation(name){
    let selectedStation = this.props.stations.filter(s => s.NameId === name);
    this.props.getStation(selectedStation);
  }

  render(){

    const {stations} = this.props;

    let stationList = stations.map(s => (
      <PetrolMarker
        position={s.Position}
        text={s.Name}
        price={s.FuelPriceList[0].LatestPrice}
        selectStation={this.selectStation.bind(this, s.NameId)}
        location={s.Postcode}
        key={s._id}
      />
    ))

    return (
      <div>
        {stationList}
      </div>
    );

  }
}
function mapStateToProps(state){
  return {
    selected_station: state.stations.selected_station
  };
}
export default connect(mapStateToProps,{getStation})(MarkerList);