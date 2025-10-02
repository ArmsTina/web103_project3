import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

function Continent() {
  const { continent } = useParams();
  const [events, setEvents] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/events/${continent}`
        );
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap space-y-4">
      <div className="cards-list flex flex-wrap space-x-4 space-y-4">
        {events && events.length > 0 ? (
          events.map((event, idx) => <Card key={idx} event={event} />)
        ) : (
          <h3>{"No Events Yet 😞"}</h3>
        )}
      </div>
    </div>
  );
}

export default Continent;
