import { pool } from "./database.js";
import "./dotenv.js";
import eventData from "../data/events.js";

const createEventsTable = async () => {
  const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            continent VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            date DATE NOT NULL
        );
    `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 Events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating events table", err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();

  eventData.forEach((event) => {
    const insertQuery = {
      text: "INSERT INTO events (continent, location, name, image, date) VALUES ($1, $2, $3, $4, $5)",
    };

    const values = [
      event.continent,
      event.location,
      event.name,
      event.image,
      event.date,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error(`⚠️ error inserting event ${event.name}`, err);
        return;
      }

      console.log(`✅ ${event.name} added successfully`);
    });
  });
};

seedEventsTable();
