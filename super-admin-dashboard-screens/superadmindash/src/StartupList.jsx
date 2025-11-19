import React from "react";
import "./StartupList.css";
import { CheckCircle, Clock, XCircle } from "lucide-react";

const startups = [
  {
    name: "TechNova Labs",
    founder: "Aditi Sharma",
    industry: "AI & Automation",
    status: "Active",
    joined: "Jan 2024",
  },
  {
    name: "GreenGrid Energy",
    founder: "Rahul Verma",
    industry: "Clean Energy",
    status: "Pending",
    joined: "Mar 2024",
  },
  {
    name: "FinMatrix",
    founder: "Neha Kapoor",
    industry: "Fintech",
    status: "Inactive",
    joined: "Aug 2023",
  },
];

export default function StartupsList({ dark }) {
  return (
    <div className={`startups-section ${dark ? "dark" : ""}`}>
      <div className="section-header">
        <h3>🚀 Registered Startups</h3>
        <p>Monitor the onboarding and activity status of startups</p>
      </div>

      <table className="startups-table">
        <thead>
          <tr>
            <th>Startup Name</th>
            <th>Founder</th>
            <th>Industry</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {startups.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.founder}</td>
              <td>{s.industry}</td>
              <td>
                <span
                  className={`status-badge ${
                    s.status === "Active"
                      ? "active"
                      : s.status === "Pending"
                      ? "pending"
                      : "inactive"
                  }`}
                >
                  {s.status === "Active" && <CheckCircle size={14} />}
                  {s.status === "Pending" && <Clock size={14} />}
                  {s.status === "Inactive" && <XCircle size={14} />}
                  {s.status}
                </span>
              </td>
              <td>{s.joined}</td>
              <td>
                <button className="view-btn">View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
