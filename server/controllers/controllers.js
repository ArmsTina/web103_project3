import { pool } from "../config/database.js";

const getEvents = async (req, res) => {
  const selectQuery = "SELECT * FROM events";
  try {
    const result = await pool.query(selectQuery);
    res.json(result.rows);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

const getEventsByContinent = async (req, res) => {
  const continent = req.params.continent;
  try {
    const selectQuery = `SELECT * FROM events WHERE LOWER(continent) = LOWER($1)`;
    const result = await pool.query(selectQuery, [continent]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error getEventsByLocation: ", error);
    res.status(409).json({ error: error.message });
  }
};

export default {
  getEvents,
  getEventsByLocation: getEventsByContinent,
};
