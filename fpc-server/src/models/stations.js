const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema(
  {
    Name:{
      type: String,
      required: true
    },
    NameId:{
      type: String
    },
    Brand:{
      type: String
    },
    Postcode:{
      type: String
    },
    Position:{
      type: Array,
      required: true
    },

    FuelPriceList:{
      type: [{
        FuelType:{
          type: String
        },
        LatestPrice:{
          type: String
        },
        PreviousPrices:{
          type: Array
        }
    }]},
  },
  {
    timestamps: true
  }
);

const Station = mongoose.model("Station", stationSchema);
module.exports = Station;