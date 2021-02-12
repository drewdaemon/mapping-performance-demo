import express from 'express';
import { loadFeatureSets } from './utils.js';

const app = express()
const port = 3000

const { streams, trailheads } = loadFeatureSets()

app.get('/geometry', (req, res) => {
  const bufferMiles = req.query.bufferSize ?? 1;
  res.send(trailheads)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})