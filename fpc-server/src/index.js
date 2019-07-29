import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

let stations = {
  1: {
    id: '1',
    name: 'BP',
    position: [57.15, -2.35]
  },
  2: {
    id: '2',
    name: 'Shell',
    position: [57.15, -2.20]
  },
};

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

app.get('/stations', (req, res) => {
  // return res.send('Received a STATION GET HTTP method');
  return res.send(Object.values(stations));
})

app.post('/stations', (req, res) => {
  return res.send('Received a STATION POST HTTP method');
})

app.put('/stations', (req, res) => {
  return res.send('Received a STATION PUT HTTP method');
})

app.delete('/stations', (req, res) => {
  return res.send('Received a STATION DELETE HTTP method');
})


app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}...`),
);