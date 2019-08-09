import React, { Component } from 'react';
import SideBar from './SideBar';
import MapContainer from './MapContainer';
import { connect } from 'react-redux';
import { fetchStations } from '../store/actions/stations';
import { fetchFuelType, updateFuelType } from '../store/actions/fuel';
import { fetchTab, updateTab } from '../store/actions/tab';

class Main extends Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true
    }
    this.petrol = this.petrol.bind(this);
    this.unleaded = this.unleaded.bind(this);
  }

  componentDidMount(){
    
    this.props.fetchFuelType();
    this.props.fetchTab();
    this.props.fetchStations().then((res) =>{
      this.setState({isLoading:false});
    });
  }

  petrol(){
    this.props.updateFuelType("Petrol");
  }
  unleaded(){
    this.props.updateFuelType("Unleaded");
  }

  render(){
    const {stations, fuelType, tab} = this.props
    if(this.state.isLoading){
      return (<div>Loading....</div>)
    }
    return(
      <div id="main-container">
        <SideBar petrol={this.petrol} unleaded={this.unleaded} ft={fuelType}/>
        <MapContainer tab={tab} stations={stations}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    stations: state.stations || [],
    fuelType: state.fuel.fuelType,
    tab: state.tab.tab
  };
}


export default connect(mapStateToProps, {fetchStations, fetchFuelType, updateFuelType, fetchTab, updateTab})(Main);