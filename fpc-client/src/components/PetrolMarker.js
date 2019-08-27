import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const PetrolMarker = ({selectStation, position, text, location, price, openGraph }) => (
  <Marker onClick={selectStation} position={position} >
    <Popup minWidth={250}>
      <div>{text}</div>
      <div>{location}</div>
      <div>{price} (last updated)</div>
      <div onClick={openGraph}>last 30 days of prices</div>
    </Popup>
  </Marker>
);

export default PetrolMarker;