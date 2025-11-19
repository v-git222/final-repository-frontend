import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import funding from "./assets/funding.svg";
import compliance from "./assets/compliance.svg";
import investor from "./assets/investor.svg";
import msg from "./assets/msgs.svg";
import outreach from "./assets/outreach.svg";
import overview from "./assets/overview.svg";
import Subtitle from "./components-and-styles/Subtitle";
import StatsCard from "./components-and-styles/Statscard";
import {
  FaEnvelope,
  FaUserCheck,
  FaChartLine,
} from "react-icons/fa";
import InvestmentBanner from "./components-and-styles/InvestmentBanner";
import CompanySummary from "./components-and-styles/CompanySummary";
import GrowthInvestorDashboard from "./components-and-styles/GrowthInvestorDashboard";
import InvestorEngagement from "./components-and-styles/InvestorEngagement";
import profile from "./assets/profile.svg";
import Profile from "./components-and-styles/Profile";
import MessageComponent from "./components-and-styles/MessageComponent";
import InvestorDashboard from "./components-and-styles/InvestmentBanner";
import InvestorStats from "./components-and-styles/InvestorDashboardSection";
import InvestorContactList from "./components-and-styles/InvestmentContactList";
import EngagementAnalytics from "./components-and-styles/EngagementAnalytics";
import FollowUpCalendar from "./components-and-styles/FollowUpCalendar";
import SmartInsights from "./components-and-styles/SmartInsights";
import InquiryPipeline from "./components-and-styles/InquiryPipeline";
import InvestorSidebar from "./components-and-styles/InvestorSidebar";
import InvestorStatsCards from "./components-and-styles/InvestorStatsCard";
import FundingStatusCards from "./components-and-styles/FundingStatusCards";
import SeedRoundProgress from "./components-and-styles/SeedRoundProgress";
import RecentInvestmentActivity from "./components-and-styles/RecentInvestmentActivity";
import FundingAndInvestmentCards from "./components-and-styles/FundingAndInvestmentCards";
import ComplianceCards from "./components-and-styles/ComplianceCards";
import ComplianceOverview from "./components-and-styles/ComplianceOverview";
import ComplianceRecords from "./components-and-styles/ComplianceRecords";


export default function App() {
  const [dark, setDark] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [active, setActive] = useState("Overview");
  const scrollRef = useRef(null);
// 🔹 Dynamic margin calculator
const getSidebarFooterMargin = (active) => {
  switch (active) {
    case "Profile":
      return "20vh"; // for Profile tab
    case "Overview":
      return "230vh"; // for Overview
    case "Outreach Sent":
      return "180vh";
    case "Investor Inquiries":
      return "190vh";
    case "Funding Progress":
      return "200vh";
    case "Documents & Compliance":
      return "220vh";
    default:
      return "20vh"; // fallback for unknown or small tabs
  }
};

  // ✅ Zoom Logic
  const handleZoom = (delta) => {
    setZoom((z) => Math.min(1.2, Math.max(0.8, z + delta)));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.ctrlKey && (e.key === "=" || e.key === "+")) {
        e.preventDefault();
        handleZoom(0.1);
      } else if (e.ctrlKey && e.key === "-") {
        e.preventDefault();
        handleZoom(-0.1);
      } else if (e.ctrlKey && e.key === "0") {
        e.preventDefault();
        setZoom(1);
      }
    };

    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        handleZoom(e.deltaY > 0 ? -0.1 : 0.1);
      }
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const subtitles = {
    Overview: "Quick insights into your platform’s activity and progress.",
    "Outreach Sent": "Track outreach, manage relationships, and monitor engagement.",
    "Investor Inquiries": "Monitor incoming investor interests and responses.",
    "Funding Progress": "Visualize your funding milestones and commitments.",
    "Documents & Compliance": "Access and manage required compliance documentation.",
    Messages: "Communicate seamlessly with investors and partners.",
  };

  const data = [
    "Dashboard Overview",
    "Project Timeline",
    "User Analytics",
    "Settings and Preferences",
    "Notifications Panel",
    "Team Members",
    "Integrations",
    "Activity Logs",
    "Reports and Insights",
  ];

  // ✅ Search filter
  useEffect(() => {
    if (!query.trim()) setResults([]);
    else {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  // ✅ Theme background
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.background = dark ? "#000000" : "#ffffff";
      root.style.color = dark ? "#ffffff" : "#000000";
    }
  }, [dark]);

  const sidebar = [
    {
      section: "MAIN",
      items: [
        { name: "Overview", icon: overview },
        { name: "Profile", icon: profile },
      ],
    },
    {
      section: "INVESTORS",
      items: [
        { name: "Outreach Sent", icon: outreach },
        { name: "Investor Inquiries", icon: investor },
        { name: "Funding Progress", icon: funding },
      ],
    },
    {
      section: "COMPLIANCE",
      items: [{ name: "Documents & Compliance", icon: compliance }],
    },
    { section: "COMMUNICATION", items: [{ name: "Messages", icon: msg }] },
  ];

  // 🔹 Stats Scroll Animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let start = 0;
    const scrollWidth = container.scrollWidth - container.clientWidth;
    const step = () => {
      if (start < scrollWidth) {
        start += 2;
        container.scrollLeft = start;
        requestAnimationFrame(step);
      }
    };

    const timer = setTimeout(() => requestAnimationFrame(step), 1000);
    const stopTimer = setTimeout(() => cancelAnimationFrame(step), 4000);
    return () => {
      clearTimeout(timer);
      clearTimeout(stopTimer);
    };
  }, []);

  return (
    <div
      className={`page ${dark ? "dark" : "light"} ${
        leftCollapsed ? "left-collapsed" : "left-expanded"
      }`}
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: "top left",
        overflowY: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 🔍 Searchbar */}
      <div className="searchbar-wrapper">
        <div className="searchbar">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="search-icon"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="clear" onClick={() => setQuery("")}>
              ✕
            </button>
          )}
          {results.length > 0 && (
            <ul className="results">
              {results.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 🌗 Header */}
      <header
        className="header"
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 1rem",
          borderBottom: dark ? "1px solid #222" : "1px solid #e5e7eb",
          background: dark ? "#111" : "#fff",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <button
          className="toggle"
          onClick={() => setDark((s) => !s)}
          title={dark ? "Light mode" : "Dark mode"}
        >
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
              <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="M4.2 4.2l1.4 1.4" />
                <path d="M18.4 18.4l1.4 1.4" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="M4.2 19.8l1.4-1.4" />
                <path d="M18.4 5.6l1.4-1.4" />
              </g>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </header>

      {/* 🧩 Layout */}
      <div
        className="layout"
        style={{
          display: "flex",
          alignItems: "stretch",
          flex: 1,
          minHeight: "calc(100vh - 64px)",
        }}
      >
       {/* Left Sidebar */}
<aside
  className={`left ${leftCollapsed ? "collapsed" : ""}`}
  style={{
    flexShrink: 0,
    width: leftCollapsed ? "70px" : "240px",
    background: dark ? "#0f0f0f" : "#ffffff",
    borderRight: dark ? "1px solid #333" : "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  }}
>
  <div
    className="sidebar"
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      paddingBottom: "2rem",
      position: "relative",
      top: "2rem",
    }}
  >
    {/* Logo */}
    <img
      src={logo}
      className="logo"
      alt="logo"
      style={{ width: "140px", margin: "1rem auto" }}
    />

    {/* Sidebar Sections */}
    {sidebar.map((group) => (
      <div key={group.section} className="sidebar-section">
        <p className="sidebar-title">{group.section}</p>
        <div className="sidebar-items">
          {group.items.map((item) => (
            <button
              key={item.name}
              className={`sidebar-item ${
                active === item.name ? "active" : ""
              }`}
              onClick={() => setActive(item.name)}
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="sidebar-icon"
              />
              <span className="sidebar-label">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    ))}

    {/* 🔹 Sidebar Footer (ACCOUNT + Logout) */}
 <div key={active}>
  <div
    className="sidebar-footer"
    style={{
      marginTop: getSidebarFooterMargin(active),
      borderTop: dark ? "1px solid #222" : "1px solid #e5e7eb",
      padding: "1.5rem 1rem 0.5rem 1rem",
      transition: "margin-top 0.3s ease", // smooth animation
    }}
  >
    <p
      className="sidebar-title"
      style={{
        fontSize: "0.75rem",
        letterSpacing: "1px",
        color: dark ? "#888" : "#555",
        marginBottom: "0.75rem",
      }}
    >
      ACCOUNT
    </p>

    <button
      className="sidebar-item logout-btn"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.6rem",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: dark ? "#ccc" : "#333",
        fontSize: "0.9rem",
        fontWeight: 500,
        padding: "0.4rem 0.6rem",
        transition: "color 0.2s ease",
      }}
      onClick={() => console.log("Logout clicked")}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
      <span>Log out</span>
    </button>
  </div>
</div>

  </div>
</aside>

        {/* Center Section */}
      <main
  className="center"
  style={{
    flex: 1,
    padding: "2rem",
    overflow: "visible",
    transition: "all 0.3s ease",
    fontFamily: `"URW Geometric", 'Poppins', 'Helvetica Neue', Arial, sans-serif`,
  }}
>
  <div className="dashboard-header">
    <h1>{active}</h1>
    <div className="spacer-xl"></div>
    <Subtitle text={subtitles[active] || ""} dark={dark} />
  </div>

  {/* Render different content based on active tab */}
  {active === "Overview" ? (
    <>
      <div className="stats-scroll" ref={scrollRef}>
        <StatsCard
          title="Contacted Investors"
          value="12"
          subtitle="Total outreach sent"
          icon={<FaEnvelope color="#155DFC" size={18} />}
          iconBg="#EFF6FF"
          borderColor="#155DFC"
        />
        <StatsCard
          title="Interested Investors"
          value="5"
          subtitle="Reached out to you"
          icon={<FaUserCheck color="#00A63E" size={18} />}
          iconBg="#F0FDF4"
          borderColor="#00A63E"
        />
        <StatsCard
          title="Funding Progress"
          value="45%"
          subtitle="Of target goal"
          icon={<FaChartLine color="#9810FA" size={18} />}
          iconBg="#FAF5FF"
          borderColor="#9810FA"
        />
      </div>

      {/* <InvestmentBanner dark={dark} /> */}
      <div className="spacer-xl"></div>
      <CompanySummary />
      <div className="spacer-xl"></div>
      <GrowthInvestorDashboard dark={dark} />
      <div className="spacer-xl"></div>
      <InvestorEngagement dark={dark} />

    </>
  ) : active === "Profile" ? (
    <Profile dark={dark}/>
  ): active === "Outreach Sent" ? (
    <>
<InvestorStats dark={dark}/>
<InvestorContactList dark = {dark}/>
<EngagementAnalytics dark = {dark}/>
<FollowUpCalendar dark = {dark}/>
<SmartInsights dark={dark}/>
</>
):active === "Messages" ? (
  <MessageComponent style={{ margin: 0, padding: 0, height: "100%" }} />
): active === "Investor Inquiries" ? (
  <>
  <InvestorStatsCards dark = {dark}/>
  <div
    style={{
      display: "flex",
      gap: "1.5rem",
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginTop: "2rem",
      marginLeft: "2rem",
      flexWrap: "nowrap",
      overflow: "visible", // ✅ allow sidebar content to fully show
    }}
  >
    {/* 🔹 Inquiry Pipeline Section */}
    <div
      style={{
        flexBasis: "70%",
        flexGrow: 1,
        background: dark ? "#0d0d0d" : "#f9fafb",
        borderRadius: "12px",
        padding: "1rem 1.5rem",
        boxSizing: "border-box",
        transition: "all 0.3s ease",
        overflow: "hidden", // ✅ no internal scrollbars
      }}
    >
      <InquiryPipeline dark={dark} />
    </div>

    {/* 🔹 Investor Sidebar Section */}
    <div
      style={{
        flexBasis: "28%",
        minWidth: "300px",
        background: dark ? "#121212" : "#ffffff",
        borderRadius: "12px",
        padding: "0rem 0rem",
        boxSizing: "border-box",
        left:"-1rem",
        border: dark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "visible", // ✅ allow full sidebar card visibility
      }}
    >
      <InvestorSidebar dark={dark} />
    </div>
  </div>
  </>
):  active === "Funding Progress" ? (
  <>
 <FundingStatusCards dark={dark}/>
 <div className="spacer-xl"></div>
 <div className="spacer-xl"></div>
 <div className="spacer-xl"></div>
 <div className="spacer-xl"></div>
 <SeedRoundProgress dark={dark} />
  <div className="spacer-xl"></div>
 <div className="spacer-xl"></div>
<RecentInvestmentActivity dark={dark}/>
  <div className="spacer-xl"></div>
 <div className="spacer-xl"></div>
 <FundingAndInvestmentCards dark={dark}/>
   
  </>
): active === "Documents & Compliance" ? (
  <>
  <ComplianceCards dark={dark}/>
  <ComplianceOverview dark={dark}/>
  <ComplianceRecords dark={dark}/>
  <SmartInsights dark={dark}/>
  </>
)
 : (
  <div style={{ padding: "2rem", opacity: 0.7 }}>
    <h3>{active}</h3>
    <p>Coming soon...</p>
  </div>
)}

</main>

      </div>
    </div>
  );
}
