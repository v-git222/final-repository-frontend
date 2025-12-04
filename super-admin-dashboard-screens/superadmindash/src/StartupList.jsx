import React, { useState, useEffect } from "react";
import {
  IconClock,
  IconCircleCheck,
  IconCircleX,
} from "@tabler/icons-react";

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

  /** --------------------  API LOGIN -------------------- **/
  async function ensureToken() {
    let token = localStorage.getItem("token");
    if (!token) {
      const res = await fetch("/api/superadmin/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: "admin", password: "Qazxsw12#" }),
      });
      const json = await res.json();
      token = json.token;
      localStorage.setItem("token", token);
    }
    return token;
  }

  /** -------------------- LOAD STATS -------------------- **/
  async function loadStats() {
    const API_URL = "/api/superadmin/overview/";
    const token = await ensureToken();
    if (!token) return;

    const res = await fetch(API_URL, { headers: { Authorization: `Token ${token}` } });
    const json = await res.json();

    setStats({
      pending: json.startups?.pending ?? 0,
      approved: json.startups?.approved ?? 0,
      rejected: json.startups?.rejected ?? 0,
    });
  }

  /** -------------------- LOAD TABLE -------------------- **/
  async function loadStartups() {
    const token = await ensureToken();
    if (!token) return;
    const API_URL = `/api/superadmin/startups/?status=${statusFilter.toLowerCase()}`;
    const res = await fetch(API_URL, { headers: { Authorization: `Token ${token}` } });
    const json = await res.json();
    setStartupRows(json);
  }

  useEffect(() => {
    loadStats();
    loadStartups();
  }, []);

  useEffect(() => {
    loadStartups();
  }, [statusFilter]);

  /** -------------------- FILTER STARTUPS -------------------- **/
  const filteredStartups = startupRows.filter((s) => {
    const search = searchQuery.toLowerCase();
    return (
      (s.startup_name?.toLowerCase().includes(search) ||
        s.username?.toLowerCase().includes(search)) &&
      (stageFilter === "All" || s.stage === stageFilter)
    );
  });

  /** -------------------- INLINE STYLE SYSTEM -------------------- **/
  const styles = {
    container: {
      fontFamily: "URW Geometric, sans-serif",
      padding: "22px",
      color: dark ? "#f5f5f5" : "#111827",
    },

    statGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "18px",
      marginBottom: "32px",
    },

    statCard: {
      background: "#fff",
      borderRadius: "20px",
      padding: "22px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      position: "relative",
      overflow: "hidden",
    },

    bubble: (color) => ({
      position: "absolute",
      top: "-30px",
      right: "-30px",
      width: "140px",
      height: "140px",
      background: color,
      opacity: 0.22,
      borderRadius: "50%",
      zIndex: 0,
    }),

    iconContainer: (bg) => ({
      background: bg,
      width: "54px",
      height: "54px",
      borderRadius: "16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
      boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    }),

    statRight: {
      textAlign: "right",
      marginTop: "-48px",
      zIndex: 2,
    },

    statTitle: {
      fontSize: "16px",
      color: "#6B7280",
    },

    statValue: {
      fontSize: "42px",
      fontWeight: 600,
      color: "#111827",
      lineHeight: "36px",
    },

    footerRow: {
      borderTop: "1px solid #E5E7EB",
      paddingTop: "12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 2,
    },

    footerText: {
      fontSize: "14px",
      color: "#6B7280",
    },

    badge: (type) => ({
      padding: "6px 14px",
      borderRadius: "10px",
      fontSize: "13px",
      fontWeight: 600,
      background:
        type === "approved"
          ? "#E8FFE9"
          : type === "pending"
          ? "#FFEFD4"
          : "#FFE1E1",
      color:
        type === "approved"
          ? "#22C55E"
          : type === "pending"
          ? "#FF8C32"
          : "#EF4444",
    }),

    filterRow: {
      display: "flex",
      gap: "14px",
      marginBottom: "18px",
      alignItems: "center",
    },

    input: {
      padding: "10px 14px",
      borderRadius: "10px",
      border: "1px solid #E5E7EB",
      width: "240px",
      fontSize: "14px",
    },

    tableWrapper: {
      background: "#fff",
      padding: "22px",
      borderRadius: "16px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "12px",
      fontSize: "14px",
    },

    th: {
      background: "#F9FAFB",
      padding: "14px",
      textAlign: "left",
      fontSize: "11px",
      color: "#6B7280",
      textTransform: "uppercase",
    },

    td: {
      padding: "16px 14px",
      borderTop: "1px solid #EEE",
    },

    row: {
      cursor: "pointer",
      transition: "0.15s",
    },
  };

  return (
    <div style={styles.container}>

      {/* -------- STATISTICS CARDS -------- */}
      <div style={styles.statGrid}>

        {/* Pending */}
        <div style={styles.statCard}>
          <div style={styles.bubble("#FFDFAF")}></div>
          <div style={styles.iconContainer("#FF8C32")}>
            <IconClock size={26} color="white" stroke={2} />
          </div>

          <div style={styles.statRight}>
            <span style={styles.statTitle}>Pending Approval</span>
            <div style={styles.statValue}>{stats.pending}</div>
          </div>

          <div style={styles.footerRow}>
            <span style={styles.footerText}>Awaiting review</span>
            <span style={styles.badge("pending")}>Action needed</span>
          </div>
        </div>

        {/* Approved */}
        <div style={styles.statCard}>
          <div style={styles.bubble("#CFF7DF")}></div>
          <div style={styles.iconContainer("#22C55E")}>
            <IconCircleCheck size={26} color="white" stroke={2} />
          </div>

          <div style={styles.statRight}>
            <span style={styles.statTitle}>Approved</span>
            <div style={styles.statValue}>{stats.approved}</div>
          </div>

          <div style={styles.footerRow}>
            <span style={styles.footerText}>Active startups</span>
            <span style={styles.badge("approved")}>Verified</span>
          </div>
        </div>

        {/* Rejected */}
        <div style={styles.statCard}>
          <div style={styles.bubble("#FFC9CC")}></div>
          <div style={styles.iconContainer("#EF4444")}>
            <IconCircleX size={26} color="white" stroke={2} />
          </div>

          <div style={styles.statRight}>
            <span style={styles.statTitle}>Rejected</span>
            <div style={styles.statValue}>{stats.rejected}</div>
          </div>

          <div style={styles.footerRow}>
            <span style={styles.footerText}>Not qualified</span>
            <span style={styles.badge("rejected")}>Declined</span>
          </div>
        </div>
      </div>

      {/* -------- FILTERS -------- */}
      <div style={styles.filterRow}>
        <select style={styles.input} onChange={(e) => setStageFilter(e.target.value)}>
          <option>All</option>
          <option>Idea</option>
          <option>Seed</option>
        </select>

        <select style={styles.input} onChange={(e) => setStatusFilter(e.target.value)}>
          <option>All</option>
          <option>Pending</option>
          <option>Approved</option>
        </select>

        <input
          style={styles.input}
          placeholder="Search startups…"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* -------- TABLE -------- */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              {["Startup", "Email", "Stage", "Created", "Status"].map((h) => (
                <th key={h} style={styles.th}>{h}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredStartups.map((s) => (
              <tr
                key={s.id}
                style={styles.row}
                onMouseEnter={(e) => (e.target.parentNode.style.background = "#F9FAFB")}
                onMouseLeave={(e) => (e.target.parentNode.style.background = "transparent")}
                onClick={() => onSelectStartup(s.id)}
              >
                <td style={styles.td}>{s.startup_name}</td>
                <td style={styles.td}>{s.username}</td>
                <td style={styles.td}>{s.stage}</td>
                <td style={styles.td}>{new Date(s.created_at).toLocaleDateString()}</td>
                <td style={styles.td}>
                  <span style={styles.badge(s.status)}>{s.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
