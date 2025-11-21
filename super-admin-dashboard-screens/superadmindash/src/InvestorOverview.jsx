import React, { useEffect, useState } from "react";
import "./InvestorOverview.css";
import { Clock, CheckCircle, XCircle, ChevronDown, Search } from "lucide-react";

export default function InvestorOverview({ dark, onSelectInvestor }) {
  const [stats, setStats] = useState({
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  const [investors, setInvestors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  /* ============================================================
        LOAD OVERVIEW STATS
  ============================================================ */
  useEffect(() => {
    async function loadStats() {
      console.log("%c[GET] /api/superadmin/overview/", "color:#38bdf8");

      try {
        const res = await fetch("/api/superadmin/overview/", {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        });

        console.log(
          `%c[STATUS] ${res.status}`,
          "color:#a855f7;font-weight:700"
        );

        const json = await res.json();

        console.log("%c[OVERVIEW RESPONSE]", "color:#2563eb");
        console.log(json);

        setStats({
          pending: json.investors?.pending ?? 0,
          approved: json.investors?.approved ?? 0,
          rejected: json.investors?.rejected ?? 0,
        });
      } catch (err) {
        console.error("Stats load error:", err);
      }
    }

    loadStats();
  }, []);

  /* ============================================================
        LOAD INVESTORS TABLE
  ============================================================ */
  useEffect(() => {
    async function loadInvestors() {
      console.log(
        "%c[GET] /api/superadmin/investors?status=pending",
        "color:#38bdf8"
      );

      try {
        const res = await fetch(
          "/api/superadmin/investors?status=pending",
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("token")}`,
            },
          }
        );

        const json = await res.json();

        console.log("%c[INVESTOR TABLE DATA]", "color:#2563eb");
        console.log(json);

        setInvestors(json);
      } catch (err) {
        console.error("Investor table load error:", err);
      }
    }

    loadInvestors();
  }, []);

  /* ============================================================
        FILTER SEARCH
  ============================================================ */
  const filteredInvestors = investors.filter((inv) => {
    const q = searchQuery.toLowerCase();

    const matchesSearch =
      inv.full_name.toLowerCase().includes(q) ||
      inv.email.toLowerCase().includes(q) ||
      inv.username.toLowerCase().includes(q);

    const matchesStatus =
      statusFilter === "All" ||
      inv.approval_status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div className={`investor-section ${dark ? "dark" : ""}`}>

      {/* ================================================== */}
      {/*                      STAT CARDS                    */}
      {/* ================================================== */}
      <div className="stats-cards-container">

        <div className="stat-card orange">
          <div className="stat-icon orange"><Clock size={18} /></div>
          <p className="stat-title">Pending Approval</p>
          <h2 className="stat-value">{stats.pending}</h2>
          <span className="stat-status orange">Awaiting review</span>
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

      {/* ================================================== */}
      {/*                   FILTER + SEARCH                 */}
      {/* ================================================== */}
      <div className="filters-row">

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
            placeholder="Search investors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

      </div>

      {/* ================================================== */}
      {/*                     TABLE                         */}
      {/* ================================================== */}
      <div className="table-wrapper">

        <table className="investor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Type</th>
              <th>Status</th>
              <th>Onboarding</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredInvestors.map((inv) => (
              <tr
                key={inv.id}
                className="clickable-row"
                onClick={() => onSelectInvestor(inv.id)}
              >
                <td>{inv.full_name || "—"}</td>
                <td>{inv.email}</td>
                <td>{inv.country?.toUpperCase() || "—"}</td>
                <td>{inv.investor_type || "—"}</td>

                <td>
                  <span
                    className={`status-pill ${inv.approval_status.toLowerCase()}`}
                  >
                    {inv.approval_status}
                  </span>
                </td>

                <td>{inv.onboarding_step}/7</td>

                <td
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectInvestor(inv.id);
                  }}
                >
                  <button className="view-details-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
