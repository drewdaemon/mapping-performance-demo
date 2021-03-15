import fs from 'fs';
import booleanIntersects from '@turf/boolean-intersects';
import buffer from '@turf/buffer';

const featureSets = [
  { filename: './datasets/Utah_Trailheads.geojson', var: 'trailheads' },
  { filename: './datasets/Utah_Major_Streams__Statewide_.geojson', var: 'streams' }
];

export function loadFeatureSets () {
  const ret = {};
  featureSets.forEach(info => {
    const contents = fs.readFileSync(info.filename, 'utf8');
    ret[info.var] = JSON.parse(contents);
  });
  return ret;
}

export function findCloseTrailheads (streams, trailheads, miles) {
  const bufferedTrailHeads = buffer(trailheads, miles, { units: 'miles' });
  return trailheads.features.filter((_, i) => {
    console.info(`Checking trailhead ${i} of ${trailheads.features.length}...`);
    const ret = booleanIntersects(bufferedTrailHeads, streams)
    console.info(ret ? 'Yes!' : 'No!');
    return ret;
  });
}
