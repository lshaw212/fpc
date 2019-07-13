import React from 'react';
import MapContainer from './MapContainer';
import dotenv from 'dotenv';

function App() {
  const env = dotenv.config().parsed;
  let url = `https://uk1.ukvehicledata.co.uk/api/datapackage/FuelPriceData?v=2&api_nullitems=1&auth_apikey=${process.env.REACT_APP_API_KEY}&user_tag=&key_postcode=ab41 8aa`;
  let fuelData;
  console.log(url);

  // fetch(url)
  //   .then(function(res){
  //     return res.json();
  //   })
  //   .then(function(data){
  //     let fuelData = data;
  //     // fuelPrice = fuelData.Response.DataItems.FuelStationDetails.FuelStationList[0].FuelPriceList[0].LatestRecordedPrice.InGbp;
  //     console.log(fuelData.Response.DataItems.FuelStationDetails.FuelStationList[0].FuelPriceList[0].LatestRecordedPrice.InGbp);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   });

  return (
    <div className="App">
      <h2>Aberdeenshire Fuel Prices</h2>
      <div>
        <MapContainer/>
      </div>
    </div>
  );
}

export default App;
