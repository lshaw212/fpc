import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import MarkerList from './MarkerList';

class MapView extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat: 57.15,
      lng: -2.30,
      zoom: 10
    }
  }

  componentDidMount(){
    let bounds =  this.refs.map.leafletElement.getBounds();
    // console.log(bounds);
  }
  componentDidUpdate(){
    let bounds =  this.refs.map.leafletElement.getBounds();
    // console.log(bounds);
  }

  render(){
    const position = [this.state.lat, this.state.lng];
    const corner1 = L.latLng(57.741, -1.255);
    const corner2 = L.latLng(56.549, -3.343);
    const bounds = L.latLngBounds(corner1,corner2);
    const {stations} = this.props;

    return (
      <Map center={position} maxBounds={bounds} zoom={this.state.zoom} zoomSnap={0.25} minZoom={9} maxZoom={16} ref='map'>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <MarkerList stations={stations}/>
      </Map>
    );

  }
}

export default MapView;