import React, { useState, useEffect } from "react";
import "./StartupList.css";
import {
  CheckCircle,
  Clock,
  XCircle,
  ChevronDown,
  Search,
} from "lucide-react";

export default function StartupsList({ dark, onSelectStartup }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [stageFilter, setStageFilter] = useState("All");

  // ⭐ Stats from /overview
  const [stats, setStats] = useState({
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  // ⭐ Startups table (API data)
  const [startupRows, setStartupRows] = useState([]);

  // --------------------------------------------------------
  // 1️⃣ LOAD STATS → /api/superadmin/overview/
  // --------------------------------------------------------
  useEffect(() => {
    async function loadStats() {
      const API_URL = "/api/superadmin/overview/";

      console.log("%c[API] Fetching Overview...", "color:#3b82f6;font-weight:700;");

      try {
        const res = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        console.log("%c[STATUS] " + res.status, "color:#9333ea;");

        if (!res.ok) return console.error("Failed to load stats");

        const json = await res.json();

        setStats({
          pending: json.startups?.pending ?? 0,
          approved: json.startups?.approved ?? 0,
          rejected: json.startups?.rejected ?? 0,
        });

        console.log("%c[OK] Stats loaded ✔", "color:#16a34a;");
      } catch (err) {
        console.error("Overview crashed", err);
      }
    }

    loadStats();
  }, []);

  // --------------------------------------------------------
  // 2️⃣ LOAD TABLE → /api/superadmin/startups?status=pending
  // --------------------------------------------------------
  useEffect(() => {
    async function loadStartups() {
      const API_URL = `/api/superadmin/startups?status=${statusFilter.toLowerCase()}`;

      console.log(
        `%c[API] Table Data → ${API_URL}`,
        "color:#0ea5e9;font-weight:700;"
      );

      try {
        const res = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        console.log("%c[STATUS] " + res.status, "color:#f59e0b;");

        if (!res.ok) {
          console.error("Failed loading table data");
          return;
        }

        const json = await res.json();

        console.log("%c[TABLE LOADED] ✔", "color:#22c55e;font-weight:700;");
        console.log(json);

        setStartupRows(json);
      } catch (error) {
        console.error(
          "%c[ERROR] Table loading crashed!",
          "background:#dc2626;color:white;padding:4px;border-radius:6px;"
        );
        console.log(error);
      }
    }

    loadStartups();
  }, [statusFilter]); // refetch on filter change

  // --------------------------------------------------------
  // 3️⃣ SEARCH FILTER (on already fetched rows)
  // --------------------------------------------------------
  const filteredStartups = startupRows.filter((s) => {
    const search = searchQuery.toLowerCase();

    const matchSearch =
      s.startup_name?.toLowerCase().includes(search) ||
      s.username?.toLowerCase().includes(search) ||
      s.stage?.toLowerCase().includes(search);

    const matchStage = stageFilter === "All" || s.stage === stageFilter;

    return matchSearch && matchStage;
  });

  return (
    <div className={`startups-section ${dark ? "dark" : ""}`}>

      {/* ------------------------------------------------------ */}
      {/*            TOP STATS CARDS (Using API Stats)          */}
      {/* ------------------------------------------------------ */}
      <div className="stats-cards-container">

        <div className="stat-card orange">
          <div className="stat-icon orange"><Clock size={18} /></div>
          <p className="stat-title">Pending Approval</p>
          <h2 className="stat-value">{stats.pending}</h2>
          <span className="stat-status orange">Action needed</span>
        </div>

        <div className="stat-card green">
          <div className="stat-icon green"><CheckCircle size={18} /></div>
          <p className="stat-title">Approved</p>
          <h2 className="stat-value">{stats.approved}</h2>
          <span className="stat-status green">Verified</span>
        </div>

        <div className="stat-card red">
          <div className="stat-icon red"><XCircle size={18} /></div>
          <p className="stat-title">Rejected</p>
          <h2 className="stat-value">{stats.rejected}</h2>
          <span className="stat-status red">Declined</span>
        </div>

      </div>

      {/* ------------------------------------------------------ */}
      {/*                      FILTER BAR                        */}
      {/* ------------------------------------------------------ */}
      <div className="filters-row">

        <div className="filter-btn">
          <span>Stage</span>
          <ChevronDown size={16} />
          <select className="filter-select" onChange={(e) => setStageFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="idea">Idea</option>
            <option value="seed">Seed</option>
            <option value="pre-seed">Pre-seed</option>
          </select>
        </div>

        <div className="filter-btn">
          <span>Status</span>
          <ChevronDown size={16} />
          <select
            className="filter-select"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search startups…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

      </div>

      {/* ------------------------------------------------------ */}
      {/*                       TABLE SECTION                     */}
      {/* ------------------------------------------------------ */}
      <div className="table-wrapper">

        <table className="startups-table">
          <thead>
            <tr>
              <th>Startup</th>
              <th>Email</th>
              <th>Stage</th>
              <th>Created</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredStartups.map((s) => (
              <tr
                key={s.id}
                className="clickable-row"
                onClick={() => onSelectStartup(s.id)}
              >
                <td>{s.startup_name || "(Unnamed)"}</td>
                <td>{s.username}</td>
                <td>
                  <span className="stage-pill">{s.stage}</span>
                </td>
                <td>{new Date(s.created_at).toLocaleDateString()}</td>
                <td>
                  <span className={`status-pill ${s.status}`}>
                    {s.status}
                  </span>
                </td>
                <td>
                  <button className="view-details-btn">⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
