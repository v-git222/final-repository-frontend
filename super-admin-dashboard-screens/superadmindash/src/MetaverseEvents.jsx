import React from "react";
import "./MetaverseEvents.css";
import {
  Info,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function MetaverseEvents({ dark = false }) {
  const events = [
    {
      name: "Startup Pitch Day",
      platform: "Decentraland",
      date: "2025-08-15",
      time: "14:00–17:00",
      attendees: 350,
      status: "Confirmed",
    },
    {
      name: "Investor Networking",
      platform: "The Sandbox",
      date: "2025-08-15",
      time: "16:00–18:00",
      attendees: 200,
      status: "Scheduled",
    },
    {
      name: "Islamic Finance Summit",
      platform: "Somnium Space",
      date: "2025-08-15",
      time: "10:00–16:00",
      attendees: 500,
      status: "Planning",
    },
  ];

  return (
    <div className={`metaverse-events ${dark ? "dark" : ""}`}>
      <div className="events-header">
        <div className="title">
          <h2>Metaverse Events</h2>
          <Info size={16} />
        </div>
        <p>Scheduled virtual events across platforms</p>
      </div>

      <div className="controls">
        <button className="status-btn">
          Status <ChevronDown size={16} />
        </button>
        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <table className="events-table">
        <thead>
          <tr>
            <th>EVENT NAME</th>
            <th>PLATFORM</th>
            <th>DATE</th>
            <th>TIME (UTC)</th>
            <th>EXPECTED ATTENDEES</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {events.map((e, i) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.platform}</td>
              <td>{e.date}</td>
              <td>{e.time}</td>
              <td>{e.attendees}</td>
              <td>
                <span className={`status ${e.status.toLowerCase()}`}>
                  {e.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        <span>
          Showing <strong>04</strong> / 100 Results
        </span>
        <div className="pagination">
          <button>
            <ChevronLeft size={16} />
          </button>
          <button className="active">1</button>
          <button>2</button>
          <span>...</span>
          <button>20</button>
          <button>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <p className="disclaimer">
        Market data is updated in real-time. Prices are for reference only and
        may vary across exchanges.
      </p>
    </div>
  );
}
