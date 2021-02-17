import pg from 'pg';

const pool = new pg.Pool();

export async function findCloseTrailheads (miles) {
  return await pool.query('SELECT * FROM "trailheads" LIMIT 50;')
}
