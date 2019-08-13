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
    this.tester = this.tester.bind(this);
  }

  componentDidMount(){
    
    this.props.fetchFuelType();
    this.props.fetchTab();
    this.props.fetchStations().then((res) =>{
      this.setState({isLoading:false});
    });
  }

  petrol(){
    this.props.updateFuelType("Diesel");
  }
  unleaded(){
    this.props.updateFuelType("Unleaded");
  }
  tester(){
    this.props.updateFuelType("Super Unleaded");
  }

  render(){
    const {stations, fuelType, tab, selected_station} = this.props
    
    let checkStations = stations.map((item) => {
      
      return {...item, FuelPriceList: item.FuelPriceList.filter((subItem) => subItem.FuelType === fuelType)}
    });
    // ******
    // Find a better way of perfroming this check
    // ******
    let filteredStations = checkStations.filter((item) => {
      if(item.FuelPriceList.length != 0)
        return {...item}
    })

    console.log(filteredStations);
    if(this.state.isLoading){
      return (<div>Loading....</div>)
    }
    return(
      <div id="main-container">
        <SideBar ss={selected_station} petrol={this.petrol} unleaded={this.unleaded} tester={this.tester}/>
        <MapContainer tab={tab} stations={filteredStations}/>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    stations: state.stations.station_list || [],
    selected_station: state.stations.selected_station,
    fuelType: state.fuel.fuelType,
    tab: state.tab.tab
  };
}


export default connect(mapStateToProps, {fetchStations, fetchFuelType, updateFuelType, fetchTab, updateTab})(Main);