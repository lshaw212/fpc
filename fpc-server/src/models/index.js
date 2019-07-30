const mongoose = require("mongoose");
const username = process.env.data_username;
const password = process.env.data_password
const CONNECTION_URL = `mongodb+srv://${username}:${password}@fpc-ugjbd.mongodb.net/test?retryWrites=true&w=majority`;

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
}
mongoose.set("debug", true);
mongoose.Promise = Promise;


mongoose.connect(CONNECTION_URL, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting to the Database due to:", err);
  }
);


module.exports.Station = require("./stations");