const db = require("../models");
// const getStations = require("../api");
import {runUpdate, getStationInfo} from '../api';

exports.createStation = async function(req,res,next){
  let newStation = new db.Station(req.body);
  newStation.save((err, station) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(station);
  });
}

exports.getStations = async function(req,res,next){
  db.Station.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

exports.updateStations = async function(req,res,next){
  try {

    let updatedInfo = await getStationInfo();

    updatedInfo.forEach(element => {
      runUpdate(element);
      console.log("Update complete");
    });
    let newStationInfo = await db.Station.find();
    return res.status(200).json(newStationInfo);

  } catch(err) {
    console.log(err);
    return next(err);
  }
}

exports.deleteStations = async function(req,res,next){
  try {
    return res.send('Received a STATION DELETE HTTP method');
  } catch(err) {
    return next(err);
  }
}

// *************************************



// async function runUpdate(obj){
//     try {
//       let updateStation = db.Station.findOneAndUpdate(
//         {name: obj.Name},
//         {
//           diesel: obj.FuelPriceList[0].LatestRecordedPrice.InGbp
//         },
//         { new: true}).then();
//         await updateStation.save();
          
//     } catch(err) {

//     }
// }