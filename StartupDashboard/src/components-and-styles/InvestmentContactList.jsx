import React, { useState, useMemo } from "react";

const InvestorContactList = ({ dark = false }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const theme = {
    light: {
      background: "#ffffff",
      cardBg: "#f9fafb",
      textPrimary: "#1f1f1f",
      textSecondary: "#555",
      border: "#e6e6e6",
      accent: "#007bff",
    },
    dark: {
      background: "#0d0d0d",
      cardBg: "#121212",
      textPrimary: "#f5f5f5",
      textSecondary: "#a0a0a0",
      border: "rgba(255, 255, 255, 0.08)",
      accent: "#ffc300",
    },
  };

  const colors = dark ? theme.dark : theme.light;

  const data = [
    { name: "Sarah Johnson", firm: "Novocure Ventures", round: "Seed", location: "Switzerland", status: "In Discussion", last: "Nov 3, 2025", next: "Nov 6, 2025" },
    { name: "Michael Chen", firm: "Crescent Capital", round: "Series A", location: "UAE", status: "Interested", last: "Nov 1, 2025", next: "-" },
    { name: "Emily Rodriguez", firm: "FutureTech Angels", round: "Pre-Seed", location: "USA", status: "No Response", last: "Oct 25, 2025", next: "Nov 8, 2025" },
    { name: "David Park", firm: "NeoFund Global", round: "Series B", location: "Singapore", status: "Follow up needed", last: "Oct 15, 2025", next: "-" },
    { name: "Lina Kapoor", firm: "BrightSeed Ventures", round: "Pre-Seed", location: "India", status: "Interested", last: "Oct 20, 2025", next: "-" },
    { name: "John Smith", firm: "AlphaWave Partners", round: "Seed", location: "Canada", status: "In Discussion", last: "Oct 27, 2025", next: "Nov 9, 2025" },
    { name: "Ravi Menon", firm: "GrowthX Capital", round: "Series B", location: "Singapore", status: "Follow up needed", last: "Oct 18, 2025", next: "-" },
    { name: "Nina Patel", firm: "TechRise Angels", round: "Series A", location: "UK", status: "No Response", last: "Oct 10, 2025", next: "Nov 12, 2025" },
  ];

  const filtered = useMemo(() => {
    return data.filter(
      (item) =>
        (statusFilter === "All" || item.status === statusFilter) &&
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  const statusColors = {
    "In Discussion": "#b4f8c8",
    Interested: "#a0e7e5",
    "No Response": "#dab6fc",
    "Follow up needed": "#ffd6a5",
  };

  const container = {
    fontFamily: `"URW Geometric", sans-serif`,
    background: colors.background,
    color: colors.textPrimary,
    minHeight: "100vh",
    padding: "40px",
    transition: "all 0.3s ease",
  };

  const card = {
    background: colors.cardBg,
    borderRadius: "10px",
    border: `1px solid ${colors.border}`,
    overflow: "hidden",
    boxShadow: dark
      ? "0 0 10px rgba(255,255,255,0.05)"
      : "0 0 10px rgba(0,0,0,0.05)",
  };

  const tableHeader = {
    display: "grid",
    gridTemplateColumns: "1.2fr 1.2fr 1fr 1fr 1.2fr 1fr 1fr",
    fontWeight: "600",
    padding: "16px 20px",
    borderBottom: `1px solid ${colors.border}`,
    color: colors.textSecondary,
    fontSize: "14px",
  };

  const tableRow = {
    display: "grid",
    gridTemplateColumns: "1.2fr 1.2fr 1fr 1fr 1.2fr 1fr 1fr",
    padding: "16px 20px",
    alignItems: "center",
    borderBottom: `1px solid ${colors.border}`,
    fontSize: "15px",
  };

  const pill = (status) => ({
    background: statusColors[status] || "#eee",
    color: "#000",
    borderRadius: "20px",
    padding: "4px 12px",
    fontSize: "13px",
    fontWeight: "500",
    display: "inline-block",
    textAlign: "center",
  });

  const inputStyle = {
    padding: "10px 16px",
    border: `1px solid ${colors.border}`,
    borderRadius: "8px",
    background: colors.cardBg,
    color: colors.textPrimary,
    fontSize: "14px",
    outline: "none",
    width: "220px",
  };

  const selectStyle = {
    ...inputStyle,
    width: "140px",
  };

  const footerContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "24px",
    flexWrap: "wrap",
    gap: "10px",
  };

  const paginationContainer = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  const pageButton = (active) => ({
    border: `1px solid ${colors.border}`,
    background: active
      ? (dark ? colors.accent : "#000")
      : colors.cardBg,
    color: active
      ? (dark ? "#000" : "#fff")
      : colors.textPrimary,
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  });

  const arrowButton = {
    border: `1px solid ${colors.border}`,
    background: colors.cardBg,
    color: colors.textPrimary,
    borderRadius: "6px",
    padding: "6px 10px",
    cursor: "pointer",
    fontSize: "14px",
  };

  return (
    <div style={container}>
      <h2 style={{ fontSize: "22px", marginBottom: "6px", fontWeight:"400" }}>
        Investor Contact List
      </h2>
      <p style={{ color: colors.textSecondary, marginBottom: "20px" }}>
        Manage your outreach and follow-up progress.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
          style={selectStyle}
        >
          <option value="All">All Status</option>
          {Object.keys(statusColors).map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          style={inputStyle}
        />
      </div>

      <div style={card}>
        <div style={tableHeader}>
          <div>INVESTOR</div>
          <div>FIRM</div>
          <div>ROUND</div>
          <div>LOCATION</div>
          <div>STATUS</div>
          <div>LAST CONTACT</div>
          <div>NEXT FOLLOW UP</div>
        </div>

        {paginated.map((item, i) => (
          <div key={i} style={tableRow}>
            <div>{item.name}</div>
            <div style={{ color: colors.accent }}>{item.firm}</div>
            <div>{item.round}</div>
            <div>{item.location}</div>
            <div>
              <span style={pill(item.status)}>{item.status}</span>
            </div>
            <div>{item.last}</div>
            <div>{item.next}</div>
          </div>
        ))}
      </div>

      {/* Footer (Results + Pagination on opposite sides) */}
      <div style={footerContainer}>
        <div style={{ color: colors.textSecondary, fontSize: "13px" }}>
          Showing{" "}
          <span
            style={{
              border: `1px solid ${colors.border}`,
              padding: "4px 10px",
              borderRadius: "6px",
              fontWeight: "600",
              marginRight: "4px",
              color: colors.accent,
            }}
          >
            {String(paginated.length).padStart(2, "0")}
          </span>
          / {filtered.length} Results
        </div>

        <div style={paginationContainer}>
          <button
            style={arrowButton}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            // Show first, last, and nearby pages with ellipsis
            if (
              i + 1 === 1 ||
              i + 1 === totalPages ||
              (i + 1 >= currentPage - 1 && i + 1 <= currentPage + 1)
            ) {
              return (
                <button
                  key={i}
                  style={pageButton(currentPage === i + 1)}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              );
            } else if (
              i + 1 === currentPage - 2 ||
              i + 1 === currentPage + 2
            ) {
              return (
                <span
                  key={i}
                  style={{ color: colors.textSecondary, fontSize: "14px" }}
                >
                  ...
                </span>
              );
            }
            return null;
          })}

          <button
            style={arrowButton}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorContactList;
