const axios = require('axios')
const url = `https://uk1.ukvehicledata.co.uk/api/datapackage/FuelPriceData?v=2&api_nullitems=1&auth_apikey=${process.env.REACT_APP_API_KEY}&user_tag=&key_postcode=ab41 8aa`;
exports.getStationInfo = async () => {
  // console.log("Boo?");
  try {
    return await axios.get(url)
    .then(function(res){
      // console.log(res.data);
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

exports.runUpdate = async function (obj){
    try {
      let updateStation = db.Station.findOneAndUpdate(
        {name: obj.Name},
        {
          diesel: obj.FuelPriceList[0].LatestRecordedPrice.InGbp
        },
        { new: true}).then();
        await updateStation.save();
          
    } catch(err) {

    }
}