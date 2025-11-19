import React from "react";
import "./FollowUpCalendar.css";

export default function FollowUpCalendar({ dark = false }) {
  const followUpsThisWeek = [
    { name: "Monica Gonzalez", company: "Novocure Ventures", date: "Nov 4 2025" },
    { name: "John Miler", company: "FutureTech Angels", date: "Nov 5 2025" },
  ];

  const followUpsNextWeek = [
    { name: "Monica Gonzalez", company: "Novocure Ventures", date: "Nov 14 2025" },
    { name: "John Miler", company: "FutureTech Angels", date: "Nov 14 2025" },
  ];

  return (
    <div className={`page`}>
      <div className={`profile-wrapper ${dark ? "dark" : "light"}`}>
        <div className="calendar-container">
          {/* Left Section */}
          <div className="followup-section">
            <div className="header">
              <h2>Upcoming Follow-up Calendar</h2>
              <p>Visualize scheduled meetings and reminders.</p>
            </div>

            <div className="followup-list">
              <h3>Scheduled Follow-ups for this week</h3>
              {followUpsThisWeek.map((item, i) => (
                <div key={i} className="followup-card">
                  <div className="dot"></div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.company}</span>
                  </div>
                  <div className="date">{item.date}</div>
                </div>
              ))}

              <h3>Next week</h3>
              {followUpsNextWeek.map((item, i) => (
                <div key={i} className="followup-card">
                  <div className="dot"></div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.company}</span>
                  </div>
                  <div className="date">{item.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="calendar-section">
            <div className="calendar-header">
              <h2>Calendar</h2>
              <select defaultValue="September 2025">
                <option>September 2025</option>
                <option>October 2025</option>
                <option>November 2025</option>
              </select>
            </div>

            <div className="calendar-grid">
              {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
                <div key={d} className="day-label">
                  {d}
                </div>
              ))}
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className={`day ${i + 1 === 8 || i + 1 === 14 ? "event" : ""}`}>
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="today-card">
              <div className="initial">M</div>
              <div>
                <h4>Monica</h4>
                <span>Novocure Ventures</span>
              </div>
              <div className="date">Nov 4 2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
