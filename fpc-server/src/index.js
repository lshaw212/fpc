import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const bodyParser = require("body-parser");
const stationRoutes = require("./routes/stations");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;


const DATABASE_NAME = "FPC"

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use("/stations", stationRoutes);


app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
})

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
})

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
})

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
})

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}...`),
);