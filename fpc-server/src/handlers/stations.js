const db = require("../models");

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

// exports.getStations = async function(req,res,next){
//   try {
//     let stations = await db.Station.find();
//     console.log(stations);
//     return res.status(200).json(stations);
//   } catch(err) {
//     return next(err);
//   }
// }

// exports.getStations = async function(req,res,next){
//   try {
//     let stations = {
//       1: {
//         id: '1',
//         name: 'BP',
//         position: [57.15, -2.65]
//       },
//       2: {
//         id: '2',
//         name: 'Shell',
//         position: [57.15, -2.20]
//       },
//       3: {
//         id: '3',
//         name: 'Esso',
//         position: [57.10, -2.27]
//       }
//     };
  
//     return res.send(Object.values(stations));
//   } catch(err) {
//     return next(err);
//   }
// }

exports.updateStations = async function(req,res,next){
  try {
    return res.send('Received a STATION PUT HTTP method');
  } catch(err) {
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