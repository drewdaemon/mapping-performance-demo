import { findCloseTrailheads } from './utils.js';
import { writeFileSync } from 'fs';

const nginxStaticAssetRoot = '/www';

// the options in miles in the dropdown
const proximityOptions = [1, 2, 3, 4];

async function main () {

  for (const proximity of proximityOptions) {
    try {
      const geoJsonObj = await findCloseTrailheads(proximity);
      writeFileSync(`${nginxStaticAssetRoot}/${proximity}-mile-trailheads.geojson`, JSON.stringify(geoJsonObj));
    } catch (err) {
      console.error(err);
    }
  }

}

setInterval(main, 10000);