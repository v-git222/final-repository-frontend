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

  const [stats, setStats] = useState({
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  const [startupRows, setStartupRows] = useState([]);

  // --------------------------------------------------------
  //  LOGIN IF TOKEN IS MISSING
  // --------------------------------------------------------
  async function ensureToken() {
    let token = localStorage.getItem("token");

    if (!token) {
      console.log("%c[LOGIN] No token found → Logging in…", "color:#e11d48;font-weight:700;");
      try {
        const res = await fetch("/api/superadmin/auth/login/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "admin",
            password: "Qazxsw12#",
          }),
        });

        if (!res.ok) {
          console.error("Login failed", res.status);
          return null;
        }

        const json = await res.json();
        token = json.token;

        localStorage.setItem("token", token);
        console.log("%c[LOGIN OK] Token saved ✔", "color:#22c55e;font-weight:700;");
      } catch (error) {
        console.error("Login error:", error);
        return null;
      }
    }

    return token;
  }

  // --------------------------------------------------------
  // LOAD STATS
  // --------------------------------------------------------
  async function loadStats() {
    const API_URL = "/api/superadmin/overview/";

    const token = await ensureToken();
    if (!token) return;

    console.log("%c[API] Fetching Overview…", "color:#3b82f6;font-weight:700;");

    try {
      const res = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
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

  // --------------------------------------------------------
  // LOAD STARTUPS TABLE
  // --------------------------------------------------------
  async function loadStartups() {
    const token = await ensureToken();
    if (!token) return;

    const API_URL = `/api/superadmin/startups/?status=${statusFilter.toLowerCase()}`;

    console.log("%c[API] Table Data → " + API_URL, "color:#0ea5e9;font-weight:700;");

    try {
      const res = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });

      console.log("%c[STATUS] " + res.status, "color:#f59e0b;");

      if (!res.ok) {
        console.error("Failed loading table data");
        return;
      }

      const json = await res.json();

      console.log("%c[TABLE LOADED] ✔", "color:#22c55e;font-weight:700;");
      setStartupRows(json);
    } catch (error) {
      console.error("[ERROR] Table loading crashed!", error);
    }
  }

  // Initial load
  useEffect(() => {
    loadStats();
    loadStartups();
  }, []);

  // Reload on filter change
  useEffect(() => {
    loadStartups();
  }, [statusFilter]);

  // --------------------------------------------------------
  // SEARCH FILTER
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
      {/* Stats cards */}
      <div className="stats-cards-container">
        <div className="stat-card orange">
          <Clock size={18} />
          <p>Pending Approval</p>
          <h2>{stats.pending}</h2>
        </div>

        <div className="stat-card green">
          <CheckCircle size={18} />
          <p>Approved</p>
          <h2>{stats.approved}</h2>
        </div>

        <div className="stat-card red">
          <XCircle size={18} />
          <p>Rejected</p>
          <h2>{stats.rejected}</h2>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-row">
        <select onChange={(e) => setStageFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="idea">Idea</option>
          <option value="seed">Seed</option>
          <option value="pre-seed">Pre-seed</option>
        </select>

        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>

        <input
          type="text"
          placeholder="Search startups…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="startups-table">
          <thead>
            <tr>
              <th>Startup</th>
              <th>Email</th>
              <th>Stage</th>
              <th>Created</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredStartups.map((s) => (
              <tr key={s.id} onClick={() => onSelectStartup(s.id)}>
                <td>{s.startup_name}</td>
                <td>{s.username}</td>
                <td>{s.stage}</td>
                <td>{new Date(s.created_at).toLocaleDateString()}</td>
                <td>{s.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
