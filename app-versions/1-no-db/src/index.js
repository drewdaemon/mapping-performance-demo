import express from 'express';
import { loadFeatureSets, findCloseTrailheads } from './utils.js';

const app = express()
const port = 3000

const { streams, trailheads } = loadFeatureSets();

app.get('/geo/trailheads', (req, res) => {
  const streamWithin = req.query.streamWithin ?? 1;
  findCloseTrailheads(streams, trailheads, streamWithin);
  res.send(trailheads)
})

app.listen(port, () => {
  console.log(`Trailhead app listening at http://localhost:${port}`)
})