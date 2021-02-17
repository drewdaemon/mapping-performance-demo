import express from 'express';
import { findCloseTrailheads } from './utils.js';

const app = express()
const port = 3000

app.get('/geo/trailheads', async (req, res) => {
  const streamWithin = req.query.streamWithin ?? 1;
  let resBody;
  try {
    const dbRes = await findCloseTrailheads(streamWithin);
    resBody = JSON.stringify(dbRes);
  } catch (err) {
    resBody = JSON.stringify(err);
  }
  res.send(resBody);
})

app.listen(port, () => {
  console.log(`Trailhead app listening at http://localhost:${port}`)
})