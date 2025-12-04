import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";


import {
  Home,
  Users,
  DollarSign,
  FileText,
  BarChart2,
  Layers,
  Globe,
  Gift,
  Share2,
  Settings,
  LogOut,
  Moon,
  Sun,
  Search,
  Bell,
  Building2,
  Coins,
  HandHeart,
} from "lucide-react";

import StatsCard from "./StatsCard";
import InvestmentSection from "./InvestmentSection";
import FundingAndTokenization from "./FundingAndTokenization";
import MarketOverview from "./MarketOverview";
import ActionBar from "./ActionBar";
import StartupsList from "./StartupList";
import StartupDetails from "./StartupDetails";
import StartupActionBar from "./StartupActionBar";
import FounderSidebar from "./FounderSidebar";
import InvestorDetails from "./InvestorDetails";
import InvestorSidebar from "./InvestorSidebar";
import FundingStats from "./FundingStats";
import FundingTrendsAndDeals from "./FundingTrendsAndDeals";
import RecentFundingDeals from "./RecentFundingDeals";
import DealsSummary from "./DealsSummary";
import DealStageAndValueCharts from "./DealStageAndValueCharts";
import CurrentDeals from "./CurrentDeals";
import DashboardStats from "./DashboardStats";
import DonutCharts from "./ComplianceAuditCharts";
import ComplianceRecords from "./ComplianceRecords";
import ReportStats from "./ReportStats";
import ReportCharts from "./ReportCharts";
import GenerateReport from "./GenerateReport";
import RecentReports from "./ReportsComponent";
import Dashboard from "./TokenDash";
import TokenizedStartups from "./TokenizedStartups";
import MetaverseDashboard from "./MetaverseDash";
import MetaverseEvents from "./MetaverseEvents";
import ZakatSummary from "./ZakatSummary";
import ZakatCharts from "./ZakatCharts";
import ZakatRecords from "./ZakatRecords";
import InvestorDashboard from "./InvestorDashboard";
import InvestorDirectory from "./InvestorDirectory";
import SettingsDashboard from "./SettingsDashboard";
import InvestorOverview from "./InvestorOverview";
import ChartsSection from "./ChartSectionUpdated";
import MiniCharts from "./ZakatCharts";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  
  const [selectedStartupId, setSelectedStartupId] = useState(null);
const [selectedInvestorId, setSelectedInvestorId] = useState(null);
const [previousTab, setPreviousTab] = useState(null);


  const menuItems = [
    {
      section: "MAIN",
      items: [
        { name: "Dashboard", icon: <Home size={16} />, subtitle: "Your control center for insights and analytics" },
        { name: "Startups", icon: <Users size={16} />, subtitle: "Browse and manage registered startups seamlessly" },
        { name: "Investors", icon: <Users size={16} />, subtitle: "Track investor activity, profiles, and engagement" },
        { name: "Funding", icon: <DollarSign size={16} />, subtitle: "Monitor and manage funding rounds efficiently" },
        { name: "Deal", icon: <FileText size={16} />, subtitle: "Review, negotiate, and finalize your active deals" },
      ],
    },
    {
      section: "MANAGEMENT",
      items: [
        { name: "Compliance", icon: <BarChart2 size={16} />, subtitle: "Ensure transparency and meet audit standards" },
        { name: "Reports", icon: <Layers size={16} />, subtitle: "Generate and analyze performance metrics easily" },
      ],
    },
    {
      section: "ADVANCED",
      items: [
        { name: "Tokenization", icon: <Globe size={16} />, subtitle: "Convert assets into secure digital tokens effortlessly" },
        { name: "Metaverse", icon: <Gift size={16} />, subtitle: "Engage in next-gen digital collaboration spaces" },
        { name: "Zakat", icon: <DollarSign size={16} />, subtitle: "Automate and simplify Zakat calculation workflow" },
        { name: "Investor Network", icon: <Share2 size={16} />, subtitle: "Expand your investor connections across regions" },
      ],
    },
    {
      section: "ACCOUNT",
      items: [
        { name: "Settings", icon: <Settings size={16} />, subtitle: "Customize your preferences and system appearance" },
        { name: "Log out", icon: <LogOut size={16} />, subtitle: "Sign out securely from your Emireq dashboard" },
      ],
    },
  ];

  const activeSubtitle =
    menuItems.flatMap((s) => s.items).find((i) => i.name === activeTab)?.subtitle || "";

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>

      {/* ========================= SIDEBAR ========================= */}
   <aside className="sidebar">
  <div className="logo">
    <img src={logo} alt="emireq" />
  </div>


  {menuItems.map((section) => (
    <div key={section.section}>
      <p className="menu-title" style={{ fontSize: "13px" }}>{section.section}</p>

      {section.items.map((item) => (
        <a
          key={item.name}
          className={`menu-item ${activeTab === item.name ? "active" : ""}`}
          style={{ fontSize: "17px", padding: "12px 18px" }} // ← increased size
          onClick={() => {
            setActiveTab(item.name);
            setSelectedStartupId(null);
          }}
        >
          {item.icon}
          {item.name}
        </a>
      ))}
    </div>
  ))}
</aside>

      {/* ========================= MAIN ========================= */}
      <main className="main">
        <header className="topbar">
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="search-bar">
            <Search size={16} />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="topbar-icons">
            <Bell size={18} />
            <img src="https://i.pravatar.cc/30" alt="profile" className="avatar" />
          </div>
        </header>

        <div className="content">
          <h2 className="content-title">{activeTab}</h2>
          <p className="content-subtitle">{activeSubtitle}</p>

          {/* ========================= DASHBOARD ========================= */}
         {activeTab === "Dashboard" && (
  <div className="dashboard-wrapper">
    
    <div className="stats-row">
      <StatsCard title="Total Startups" value="87" icon={Building2} color="#10b981" dark={darkMode} />
      <StatsCard title="Active Investors" value="1,258" icon={Users} color="#3b82f6" dark={darkMode} />
      <StatsCard title="Tokenized Startups" value="34" icon={Coins} color="#f59e0b" dark={darkMode} />
      <StatsCard title="Zakat Pending" value="$42.5k" icon={HandHeart} color="#8b5cf6" dark={darkMode} />
    </div>

    <InvestmentSection dark={darkMode} />
    <FundingAndTokenization dark={darkMode} />
    <MarketOverview dark={darkMode} />

  </div>
)}


          {/* ========================= STARTUPS ========================= */}
          {activeTab === "Startups" && (
            <>
              {!selectedStartupId && (
               <StartupsList
  dark={darkMode}
  onSelectStartup={(id) => {
    console.log(
      `%c[STARTUP SELECTED] → ID: ${id}`,
      "color:#16a34a;font-weight:700;font-size:14px;"
    );
    setSelectedStartupId(id);
  }}
/>

              )}

              {selectedStartupId && (
                <>
                  <StartupActionBar
                    dark={darkMode}
                    onBack={() => {
                      console.log("%c[BACK] Returning to Startup List", "color:#2563eb;font-weight:600;");
                      setSelectedStartupId(null);
                    }}
                  />

                  <div className="startup-view">
                    <div className="startup-left">
                      <StartupDetails dark={darkMode} startupId={selectedStartupId} />
                    </div>

                    <div className="startup-right">
                      <FounderSidebar dark={darkMode} startupId={selectedStartupId} />
                    </div>
                  </div>
                </>
              )}
            </>
          )}

          {/* ========================= INVESTORS ========================= */}
       {/* ========================= INVESTORS ========================= */}
{activeTab === "Investors" && (
  <>
    {/* If NO investor selected → show overview list */}
    {!selectedInvestorId && (
      <>
        <ActionBar />
        <InvestorOverview
          dark={darkMode}
          onSelectInvestor={(id) => {
            console.log(
              "%c[INVESTOR SELECTED] → ID: " + id,
              "color:#4f46e5;font-weight:700;"
            );
            setSelectedInvestorId(id);
          }}
        />
      </>
    )}

    {/* If investor selected → show details */}
    {selectedInvestorId && (
      <>
        <StartupActionBar  // yes you can reuse, or rename to InvestorActionBar
          dark={darkMode}
          onBack={() => {
            console.log(
              "%c[BACK] Returning to Investor Overview",
              "color:#2563eb;font-weight:700;"
            );
            setSelectedInvestorId(null);
          }}
        />

        <div className="investor-view">
          <InvestorDetails 
            dark={darkMode} 
            investorId={selectedInvestorId} 
          />

          <InvestorSidebar 
            dark={darkMode} 
            investorId={selectedInvestorId} 
          />
        </div>
      </>
    )}
  </>
)}


          {/* FUNDING */}
          {activeTab === "Funding" && (
            <>
             <div style={{ marginTop: "13rem" }}></div>
              <FundingStats dark={darkMode} />
              {/* <FundingTrendsAndDeals dark={darkMode} /> */}
              <div style={{ marginTop: "5rem" }}></div>
           <ChartsSection />

<div style={{ marginTop: "5rem" }}>
  <RecentFundingDeals dark={darkMode} />
</div>

            </>
          )}

          {/* DEALS */}
          {activeTab === "Deal" && (
            <>
              <DealsSummary dark={darkMode} />
              <DealStageAndValueCharts dark={darkMode} />
              <CurrentDeals dark={darkMode} />
            </>
          )}

          {/* COMPLIANCE */}
          {activeTab === "Compliance" && (
            <>
              <DashboardStats dark={darkMode} />
              <DonutCharts dark={darkMode} />
              <ComplianceRecords dark={darkMode} />
            </>
          )}

          {/* REPORTS */}
          {activeTab === "Reports" && (
            <>
              <ReportStats dark={darkMode} />
              <ReportCharts dark={darkMode} />
              <GenerateReport dark={darkMode} />
              <RecentReports dark={darkMode} />
            </>
          )}

          {/* TOKENIZATION */}
          {activeTab === "Tokenization" && (
            <>
              <Dashboard dark={darkMode} />
              <TokenizedStartups dark={darkMode} />
            </>
          )}

          {/* METAVERSE */}
          {activeTab === "Metaverse" && (
            <>
              <MetaverseDashboard dark={darkMode} />
              <MetaverseEvents dark={darkMode} />
            </>
          )}

          {/* ZAKAT */}
          {activeTab === "Zakat" && (
            <>
             <div style={{ marginBottom: "4rem" }}>
  <ZakatSummary dark={darkMode} />
</div>

<div style={{ marginBottom: "4rem" }}>
  <MiniCharts/>
</div>

<ZakatRecords dark={darkMode} />

            </>
          )}

          {/* INVESTOR NETWORK */}
          {activeTab === "Investor Network" && (
            <>
              <InvestorDashboard dark={darkMode} />
              <InvestorDirectory dark={darkMode} />
            </>
          )}

          {/* SETTINGS */}
          {activeTab === "Settings" && <SettingsDashboard dark={darkMode} />}

          {/* LOG OUT */}
    {activeTab === "Log out" && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: darkMode ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: "blur(6px)",
      zIndex: 999,
    }}
  >
    <div
      style={{
        backgroundColor: darkMode ? "#1f2937" : "#fff",
        padding: "30px",
        width: "350px",
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: darkMode
          ? "0 10px 25px rgba(0,0,0,0.4)"
          : "0 10px 25px rgba(0,0,0,0.15)",
        transition: "all 0.3s ease",
      }}
    >
      <h2
        style={{
          marginBottom: "10px",
          fontSize: "22px",
          fontWeight: "600",
          color: darkMode ? "#f5f5f5" : "#111",
        }}
      >
        Log Out?
      </h2>

      <p
        style={{
          marginBottom: "25px",
          fontSize: "14px",
          color: darkMode ? "#9ca3af" : "#6b7280",
        }}
      >
        You’ll be signed out of your account and will need to log in again.
      </p>

      <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
        <button
          style={{
            padding: "10px 18px",
            backgroundColor: darkMode ? "#ef4444" : "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "600",
            flex: 1,
          }}
          onClick={() => {
            console.log(
              "%c[LOG OUT] User logged out.",
              "color:#b91c1c;font-weight:700;"
            );
            // Add logout logic here
          }}
        >
          Yes, Log Out
        </button>

        <button
          style={{
            padding: "10px 18px",
            backgroundColor: darkMode ? "#374151" : "#e5e7eb",
            color: darkMode ? "#f3f4f6" : "#111",
            border: "none",
            fontWeight: "500",
            borderRadius: "10px",
            cursor: "pointer",
            flex: 1,
          }}
          onClick={() => {
            setActiveTab(previousTab || "Dashboard");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}


        </div>
      </main>
    </div>
  );
}
