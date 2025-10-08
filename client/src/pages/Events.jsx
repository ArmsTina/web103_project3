import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";

function Events() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetch("http://localhost:3001/events");
        const data = await response.json();
        setEvents(data);
        setFilteredEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  // Filter
  useEffect(() => {
    try {
      if (filter === "All") {
        setFilteredEvents(events);
      } else {
        const filteredData = events.filter(
          (event) => event.continent === filter
        );
        setFilteredEvents(filteredData);
      }
    } catch (error) {
      console.error("Error filtering events:", error);
    }
  }, [filter, events]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap space-y-4">
      <div className="menu w-full">
        <div className="dropdown">
          <label className="border-1 rounded-sm border-indigo-600">
            Filter by continents:{" "}
            <select
              name="continent"
              id="continentMenu"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
            </select>
          </label>
        </div>
      </div>
      <div className="cards-list flex flex-wrap space-x-4 space-y-4">
        {filteredEvents && filteredEvents.length > 0 ? (
          filteredEvents.map((event, idx) => <Card key={idx} event={event} />)
        ) : (
          <h3>{"No Events Yet 😞"}</h3>
        )}
      </div>
    </div>
  );
}

export default Events;
