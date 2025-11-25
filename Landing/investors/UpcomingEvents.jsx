import React from "react";
import "./upcomingevents.css";

const IconBuilding = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#fff" d="M4 22h16V2L12 6 4 2v20z"/>
  </svg>
);

const IconPeople = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 12c2.7 0 4.5-2 4.5-4.5S14.7 3 12 3 7.5 5 7.5 7.5 9.3 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z"/>
  </svg>
);

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 
    1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
    16H5V9h14v11z"/>
  </svg>
);

const IconLocation = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 
    13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 
    9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 
    1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
  </svg>
);

function EventCard({ title, attendees, date, location, description }) {
  return (
    <div className="event-card">
      <div className="event-header">
        <div className="event-icon">
          <IconBuilding />
        </div>
        <div className="event-title">
          <h3>{title}</h3>
          <span className="event-badge">Upcoming</span>
        </div>
      </div>

      <div className="event-meta">
        <div className="meta-row">
          <IconPeople />
          <span>{attendees}</span>
        </div>
      </div>

      <div className="divider" />

      <div className="event-details">
        <div className="detail-row">
          <IconCalendar />
          <span>{date}</span>
        </div>

        <div className="detail-row">
          <IconLocation />
          <span>{location}</span>
        </div>

        <p className="event-description">{description}</p>
      </div>

      <div className="event-actions">
        <button className="btn-primary">Register now</button>
        <button className="btn-outline">Details</button>
      </div>
    </div>
  );
}

export default function UpcomingEvents() {
  const events = [
    {
      title: "Dubai Investor Summit 2025",
      attendees: "350+ Attendees",
      date: "Feb 12, 2025",
      location: "Dubai World Trade Centre",
      description: "Meet top VCs, angel networks, and Islamic finance funds."
    },
    {
      title: "Saudi Startup Connect",
      attendees: "350+ Attendees",
      date: "March 5, 2025",
      location: "Riyadh Convention Center",
      description: "Networking event for founders and investors."
    },
    {
      title: "Dubai Investor Summit 2025",
      attendees: "350+ Attendees",
      date: "Feb 12, 2025",
      location: "Dubai World Trade Centre",
      description: "Meet top VCs, angel networks, and Islamic finance funds."
    }
  ];

  return (
    <div className="events-wrapper">
      <header className="events-header">
        <div className="header-badge">Upcoming</div>
        <h1>
          Upcoming <span className="blue">Investors</span>
        </h1>
        <p className="header-text">
          Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra
          orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
        </p>
      </header>

      <div className="events-grid">
        {events.map((ev, i) => (
          <EventCard {...ev} key={i} />
        ))}
      </div>
    </div>
  );
}
