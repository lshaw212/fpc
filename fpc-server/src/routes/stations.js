const express = require("express");
const router = express.Router({mergeParams: true});

const { getStations, updateStations, createStation, deleteStations } = require("../handlers/stations");

router
  .route("/")
  .get(getStations)
  .put(updateStations)
  .post(createStation)
  .delete(deleteStations);

  module.exports = router;