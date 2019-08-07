const db = require("../models");
const {getStationInfo, runUpdate} = require("../api");

exports.createStation = async (req,res,next) => {
  let newStation = new db.Station(req.body);
  newStation.save((err, station) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(station);
  });
}

exports.getStations = async (req,res,next) => {
  db.Station.find({}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

exports.updateStations = async (req,res,next) => {
  try {
    let updatedStationData = await getStationInfo();
    updatedStationData.forEach(obj => {
      obj.FuelPriceList.forEach(subObj => {
        runUpdate(obj.Name, subObj.FuelType, subObj.LatestRecordedPrice.InGbp);
      })
    });
    return res.status(200).json(updatedStationData);

  } catch(err) {
    console.log(err);
    return next(err);
  }
}

exports.deleteStations = async (req,res,next) => {
  try {
    return res.send('Received a STATION DELETE HTTP method');
  } catch(err) {
    return next(err);
  }
}