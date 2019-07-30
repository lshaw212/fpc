const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema(
  {
    brand:{
      type: String
    },
    name:{
      type: String,
      required: true
    },
    position:{
      type: Array,
      required: true
    },
    diesel:[{
      type: String
    }],
    premiumDiesel:[{
      type: String
    }],
    unleaded:[{
      type: String
    }],
    superUnleaded:[{
      type: String
    }]
  },
  {
    timestamps: true
  }
);

const Station = mongoose.model("Station", stationSchema);
module.exports = Station;