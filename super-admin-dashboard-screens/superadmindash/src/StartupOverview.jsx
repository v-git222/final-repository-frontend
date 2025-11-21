import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartupsOverview.css";

export default function StartupsOverview() {
  const navigate = useNavigate();
  const [startups, setStartups] = useState([]);

  const API_URL = "/api/superadmin/startups?limit=20";

  useEffect(() => {
    async function loadStartups() {
      console.log("%c[FETCH] Loading startups overview...", "color:#00aaff");

      try {
        const res = await fetch(API_URL, {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        console.log("%c[STARTUPS LOADED]", "color:#22c55e", data);

        setStartups(data.results || []);
      } catch (err) {
        console.error("[ERROR] Failed loading startups", err);
      }
    }

    loadStartups();
  }, []);

  return (
    <div className="startups-page">
      <h2 className="page-title">Startups Overview</h2>
      <p className="subtitle">Manage and monitor all startups on the platform</p>

      <div className="table-container">
        <table className="startup-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Founder</th>
              <th>Email</th>
              <th>Stage</th>
              <th>Onboarding</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {startups.map((s) => (
              <tr
                key={s.id}
                className="startup-row"
                onClick={() => {
                  console.log("%c[NAVIGATE] → Startup Details " + s.id, "color:#2563eb");
                  navigate(`/startup/${s.id}`);
                }}
              >
                <td>{s.startup_name}</td>
                <td>{s.founder_name || "N/A"}</td>
                <td>{s.username}</td>

                {/* STAGE */}
                <td>
                  <span className="badge stage">{s.stage?.toUpperCase()}</span>
                </td>

                {/* ONBOARDING */}
                <td>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${s.onboarding_percentage || 0}%` }}
                    ></div>
                  </div>
                </td>

                {/* STATUS */}
                <td>
                  <span className={`badge status ${s.status}`}>
                    {s.status}
                  </span>
                </td>

                <td>
                  <button className="action-btn">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
