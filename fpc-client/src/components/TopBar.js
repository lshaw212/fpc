import React from 'react';

const TopBar = ({fuelType}) => (
  <div id="topbar-container">
    <div id="topbar-title">Aberdeenshire Fuel Prices</div>
    <div>Petrol: {fuelType}</div>
    <div>Last updated: ....</div>
  </div>
);


export default TopBar;
