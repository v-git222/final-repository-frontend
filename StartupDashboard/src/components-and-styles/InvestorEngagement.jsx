import React, { useState } from "react";
import {
  Mail,
  Phone,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const InvestorEngagement = ({ dark }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  // 🎨 Theme palette
  const theme = {
    bg: dark ? "#0f0f0f" : "#ffffff",
    text: dark ? "#f5f5f5" : "#111111",
    subtext: dark ? "#b5b5b5" : "#555555",
    border: dark ? "#333333" : "#e5e7eb",
    tooltipBg: dark ? "#1e1e1e" : "#ffffff",
    shadow: dark
      ? "0 4px 10px rgba(255, 255, 255, 0.05)"
      : "0 4px 10px rgba(0, 0, 0, 0.08)",
    icon: dark ? "#d1d5db" : "#6b7280",
    accent: "#2563eb",
  };

  const investors = [
    { name: "Sarah Johnson", firm: "Venture Capital Partners", status: "Meeting Scheduled", color: "#BBF7D0", amount: "$250k", contact: "2 hours ago" },
    { name: "Michael Chen", firm: "Tech Angles Fund", status: "Interested", color: "#BAE6FD", amount: "$250k", contact: "1 day ago" },
    { name: "Emily Rodriguez", firm: "Growth Equity LLC", status: "Contacted", color: "#E9D5FF", amount: "$250k", contact: "3 days ago" },
    { name: "David Park", firm: "Seed Stage Ventures", status: "Meeting Scheduled", color: "#BBF7D0", amount: "$250k", contact: "5 days ago" },
    { name: "John Doe", firm: "Venture Capital Partners", status: "Due Diligence", color: "#FED7AA", amount: "$250k", contact: "6 days ago" },
    { name: "Alicia Patel", firm: "FinEdge Group", status: "Interested", color: "#BAE6FD", amount: "$200k", contact: "1 week ago" },
    { name: "Robert Lin", firm: "NextGen Angels", status: "Contacted", color: "#E9D5FF", amount: "$300k", contact: "2 weeks ago" },
  ];

  const filteredInvestors = investors.filter((inv) =>
    inv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredInvestors.length / itemsPerPage);
  const paginatedInvestors = filteredInvestors.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Inline styles
  const styles = {


    header: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      marginBottom: "1.5rem",
    },
    controls: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    select: {
      borderRadius: "8px",
      padding: "0.4rem 0.7rem",
      border: `1px solid ${theme.border}`,
      fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
      cursor: "pointer",
      background: theme.bg,
      color: theme.text,
    },
    searchContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      flex: "1 1 150px",
    },
    searchIcon: {
      position: "absolute",
      left: "8px",
      top: "50%",
      transform: "translateY(-50%)",
      color: theme.subtext,
      width: "16px",
      height: "16px",
    },
    searchInput: {
      border: `1px solid ${theme.border}`,
      borderRadius: "8px",
      padding: "6px 8px 6px 28px",
      fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
      width: "100%",
      background: theme.bg,
      color: theme.text,
    },
    
 card: {
  background: theme.bg,
  borderRadius: "16px",
  padding: "24px",
  boxShadow: theme.shadow,
  width: "100%",
  height: "100%",
  flex: "1 1 auto",
  margin: "0 auto",
  color: theme.text,
  border: `1px solid ${theme.border}`,
  transition: "all 0.3s ease",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  
  overflowX: "auto", // ✅ add horizontal scroll for small screens
  maxWidth: "100%",
},
table: {
  width: "100%",
  minWidth: "600px", // ✅ prevent layout breaking
  borderCollapse: "separate",
  borderSpacing: "0 10px",
},

    th: {
      textAlign: "left",
      padding: "8px 16px",
      fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
      color: theme.subtext,
      textTransform: "uppercase",
      whiteSpace: "nowrap",
    },
    td: {
      padding: "10px 16px",
      fontSize: "clamp(0.8rem, 1vw, 0.9rem)",
      color: theme.text,
      whiteSpace: "nowrap",
    },
    tr: {
      background: dark ? "#1a1a1a" : "#f9fafb",
      borderRadius: "12px",
      transition: "all 0.2s ease",
    },
    badge: {
      padding: "5px 10px",
      borderRadius: "14px",
      fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
      fontWeight: 500,
      minWidth: "100px",
      textAlign: "center",
    },
    avatar: {
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      background: theme.border,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 500,
      color: theme.text,
      flexShrink: 0,
    },
    investorInfo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    firm: {
      fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
      color: theme.subtext,
    },
    pagination: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: "1.5rem",
      fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
      color: theme.subtext,
      gap: "0.5rem",
    },
    pageBtn: {
      border: `1px solid ${theme.border}`,
      borderRadius: "6px",
      padding: "4px 8px",
      cursor: "pointer",
      fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
      color: theme.text,
      background: theme.bg,
      transition: "all 0.2s ease",
    },
  };

  return (
    <div style={styles.card}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h2
            style={{
              fontFamily: `"URW Geometric", 'Poppins', sans-serif`,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 400,
              color: theme.text,
              margin: 0,
            }}
          >
            Recent Investor Engagement
          </h2>
          <p
            style={{
              fontFamily: `"URW Geometric", 'Poppins', sans-serif`,
              fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
              fontWeight: 400,
              color: theme.subtext,
              marginTop: "6px",
            }}
          >
            Track your investor conversations
          </p>
        </div>

        <div style={styles.controls}>
          <select style={styles.select}>
            <option>Status</option>
            <option>Meeting Scheduled</option>
            <option>Interested</option>
            <option>Contacted</option>
            <option>Due Diligence</option>
          </select>

          <div style={styles.searchContainer}>
            <Search style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              style={styles.searchInput}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div
  className="no-scrollbar scroll-hint"
  style={{
    overflowX: "auto",
    position: "relative",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}


>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Investor</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Amount ($K)</th>
              <th style={styles.th}>Last Contact</th>
              <th style={{ ...styles.th, textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedInvestors.map((inv, i) => (
              <tr key={i} style={styles.tr}>
                <td style={styles.td}>
                  <div style={styles.investorInfo}>
                    <div style={styles.avatar}>{inv.name.charAt(0)}</div>
                    <div>
                      <div style={{ fontWeight: 500 }}>{inv.name}</div>
                      <div style={styles.firm}>{inv.firm}</div>
                    </div>
                  </div>
                </td>
                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.badge,
                      backgroundColor: inv.color,
                      color: dark ? "#111" : "#111",
                      filter: dark ? "brightness(1.1)" : "none",
                    }}
                  >
                    {inv.status}
                  </span>
                </td>
                <td style={styles.td}>{inv.amount}</td>
                <td style={styles.td}>{inv.contact}</td>
                <td style={{ ...styles.td, textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    <Mail size={16} style={{ cursor: "pointer", color: theme.icon }} />
                    <Phone size={16} style={{ cursor: "pointer", color: theme.icon }} />
                    <MoreHorizontal size={16} style={{ cursor: "pointer", color: theme.icon }} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <div style={{  fontFamily: `"URW Geometric", 'Poppins', 'Helvetica Neue', Arial, sans-serif`,}}>
          Showing <b>{paginatedInvestors.length}</b> of {filteredInvestors.length} Results
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          <button
            style={styles.pageBtn}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            <ChevronLeft size={14} />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              style={{
                ...styles.pageBtn,
                background: page === i + 1 ? theme.accent : theme.bg,
                color: page === i + 1 ? "#fff" : theme.text,
              }}
            >
              {i + 1}
            </button>
          ))}
          <button
            style={styles.pageBtn}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      <p
        style={{
          fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
          textAlign: "center",
          marginTop: "1rem",
            fontFamily: `"URW Geometric", 'Poppins', 'Helvetica Neue', Arial, sans-serif`,
          color: theme.subtext,
        }}
      >
        Market data is updated in real-time. Prices are for reference only and may vary across exchanges.
      </p>
    </div>
  );
};

export default InvestorEngagement;
