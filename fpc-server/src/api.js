const axios = require('axios');
const db = require("./models");
const url = `https://uk1.ukvehicledata.co.uk/api/datapackage/FuelPriceData?v=2&api_nullitems=1&auth_apikey=${process.env.REACT_APP_API_KEY}&user_tag=&key_postcode=ab41 8aa`;
exports.getStationInfo = async () => {
  try {
    return await axios.get(url)
    .then(function(res){
      return res.data;
    })
    .then(function(data){
      return data.Response.DataItems.FuelStationDetails.FuelStationList;
    })
    .catch(function(error){
      console.log(error);
    });
  } catch (err) {
    console.log(err)
  }
}

exports.runUpdate = async (name, fuelType, newCost) => {
  let query = {"NameId": name,"FuelPriceList.FuelType": fuelType};

  let bulkUpdate = db.Station.collection.initializeOrderedBulkOp();
  bulkUpdate.find(query).update({"$pop":{"FuelPriceList.$.PreviousPrices": -1}},{new: true, runValidators: true} );
  bulkUpdate.find(query).update({"$push":{"FuelPriceList.$.PreviousPrices": newCost}},{new: true, runValidators: true} );
  bulkUpdate.find(query).update({"$set":{"FuelPriceList.$.LatestPrice": newCost}},{new: true, runValidators: true} );
  await bulkUpdate.execute(function(err,results) {
    if(err)
        console.error(err);
    else
        console.log(results);
  });
  return;
}