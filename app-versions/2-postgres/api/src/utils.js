import pg from 'pg';

const pool = new pg.Pool();

const queryString = `
  SELECT json_build_object(
    'type', 'FeatureCollection',
    'features', json_agg(ST_AsGeoJSON(t.*)::json)
  )
  FROM (
    SELECT DISTINCT ON (tr.gid)
      tr.gid,
      tr.primarynam,
      tr.geom::geometry
    FROM
      trailheads AS tr,
      utahmajor_streams AS st
    WHERE ST_DWithin(tr.geom, st.geom, $1)
  ) AS t(id, name, geom);`;

function milesToMeters (miles) {
  const mileMeters = 1609.344;
  return Math.floor(miles * mileMeters);
}

/**
 * Returns a promise that resolves to a GeoJSON feature collection
 * @param {*} miles - the trailheads will be within this number of miles of a major stream
 */
export function findCloseTrailheads (miles) {
  return pool.query(queryString, [milesToMeters(miles)])
    .then(res => res.rows[0].json_build_object);
}
