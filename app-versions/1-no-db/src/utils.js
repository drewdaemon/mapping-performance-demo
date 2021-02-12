import fs from 'fs';

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
