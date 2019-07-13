import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const PetrolMarker = ({position,text}) => (
  <Marker position={position}>
    <Popup>
      {text}
    </Popup>
  </Marker>
);

export default PetrolMarker;