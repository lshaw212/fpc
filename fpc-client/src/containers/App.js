import React from 'react';
import MapContainer from './MapContainer';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import { configureStore } from '../store';


const env = dotenv.config().parsed;
let url = `https://uk1.ukvehicledata.co.uk/api/datapackage/FuelPriceData?v=2&api_nullitems=1&auth_apikey=${process.env.REACT_APP_API_KEY}&user_tag=&key_postcode=ab41 8aa`;
let fuelData;
// console.log(url);
const store = configureStore();

const App = () => (

  <Provider store={store}>
    <h2>Aberdeenshire Fuel Prices</h2>
    <div>
      <MapContainer/>
    </div>
  </Provider>
);


export default App;
