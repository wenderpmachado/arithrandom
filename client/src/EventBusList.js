import React, { useState, useEffect } from "react";
import axios from "axios";

const EventBusList = () => {
  const [events, setEvents] = useState();

  const fetchEvents = async () => {
    const { data } = await axios.get('http://localhost:4000/events')
    setEvents(data);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    await fetchEvents();
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (!events) return 'Loading...';

  const renderedEvents = events.map((event) => {
    return (
      <div key={event.id}>
        <div>
          <code>{JSON.stringify(event)}</code>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container mx-auto px-4">
        {renderedEvents}
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <button className="btn btn-warning">Refresh</button>
        </form>
      </div>
    </>
  );
};

export default EventBusList;
