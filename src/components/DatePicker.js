import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es"; // importar el idioma español

moment.locale("es"); // configurar el idioma en Moment.js

const localizer = momentLocalizer(moment); // configurar el localizador con Moment.js



function Calendario() {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end, title, id, type }) => {
    if(!type) {
      setEvents([...events, { start, end, title, id: events.length }]);
      return
    }
    if (type === "edit") {
      const newTitle = window.prompt("Nuevo nombre de la cita:", title);
      if (newTitle) {
        const newEvents = events.map((event) => {
          if (event.id === id) {
            return { ...event, title: newTitle };
          } else {
            return event;
          }
        });
        setEvents(newEvents);
      }
    } else if (type === "delete") {
      const newEvents = events.filter((event) => event.id !== id);
      setEvents(newEvents);
    } 
  };

  const eventStyleGetter = () => {
    let style = {
      backgroundColor: "#3174ad",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
      textAlign: "center",
    };
    return {
      style,
    };
  };

  const Event = ({ event }) => {
    return (
      <span>
        <strong>{event.title}</strong>
        <div>
          <button
            className="text-white bg-blue-500 px-2 py-1 rounded-md mr-2"
            onClick={() => {
              handleSelect({ ...event, type:"edit" });
            }}
          >
            Editar
          </button>
          <button
            className="text-white bg-red-500 px-2 py-1 rounded-md"
            onClick={() => {
              handleSelect({ ...event, type:"delete" });
            }}
          >
            Eliminar
          </button>
        </div>
      </span>
    );
  };

  return (
    <div className="p-4">
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        defaultView="month"
        onSelectSlot={handleSelect}
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        components={{ event: Event }}
      />
    </div>
  );
}

export default Calendario;
