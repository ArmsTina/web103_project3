import React, { useState, useEffect } from "react";

function Card({ event }) {
  const calculateDaysRemaining = (eventDateString) => {
    // Get dates only from today
    const today = new Date();
    const todayAtMidnight = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    // Get event dates
    const eventDate = new Date(eventDateString);
    const eventDateAtMidnight = Date.UTC(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate()
    );

    const timeDifference = eventDateAtMidnight - todayAtMidnight;

    // To convert milliseconds to day
    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;

    const daysRemaining = Math.floor(timeDifference / oneDayInMilliseconds);

    return daysRemaining;
  };

  const [eventData, setEvent] = useState({
    id: 0,
    name: "",
    location: "",
    date: "",
    image: "",
    timeLeft: "",
  });

  useEffect(() => {
    const eventDate = event.date.split("T")[0];

    setEvent({
      id: event.id,
      name: event.name,
      location: event.location,
      date: eventDate,
      image: event.image,
      timeLeft: calculateDaysRemaining(eventDate),
    });
  }, [event]);

  return (
    <div className="border-1 rounded-sm w-100 border-indigo-600">
      <div
        className="top-container"
        style={{ backgroundImage: `url(https://placehold.co/400)` }}
      ></div>
      <div className="bottom-container">
        <h3>{eventData.name}</h3>
        <p>{"Location: " + eventData.location}</p>
        <p>{"When: " + eventData.date}</p>
        <p>{"Time Left: " + eventData.timeLeft}</p>
      </div>
    </div>
  );
}

export default Card;
