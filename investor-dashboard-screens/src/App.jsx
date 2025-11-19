import "./App.css";
import logo from "./assets/logo.png";
import { useState } from "react";
import StatsCards from "./StatsCard";
import PortfolioAndActions from "./PortfolioAndActions";
import SectorAndInvestments from "./SectorAndInvestments";

import InvestorDashboard from "./Investor";
import StatsCardsPortfolio from "./StatsCards";
import StartupInvestments from "./StartupInvestments";


import DocumentsDashboard from "./DocumentDashboard";
import GlobalInsights from "./GlobalInsights";


import Analytics from "./Analytics";
import TokenDashboard from "./Token";
import AnalyticsTopCards from "./AnalyticsTopCards";
import DashboardAnalytics from "./Analytics";




function App() {

  // SIDEBAR ACTIVE STATE
  const [active, setActive] = useState("Overview");
const analyticsData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 200 },
];

  // helper: add yellow style
  const isActive = (name) => (active === name ? "active-menu" : "");

  // MAIN SCREEN TEXTS
  const titles = {
    Overview: "Overview",
    Profile: "Profile",
    Portfolio: "Portfolio",
    Token: "Token",
    Analytics: "Analytics",
    Documents: "Documents",
    Logout: "Logged Out",
  };

  const subtitles = {
    Overview: "Summary of activity, insights and quick stats.",
    Profile: "View and update your personal profile details.",
    Portfolio: "Manage your portfolio and track asset growth.",
    Token: "View and manage your token assets and balances.",
    Analytics: "Visual insights and detailed performance metrics.",
    Documents: "Your generated documents and saved reports.",
    Logout: "You have logged out from your account.",
  };

  return (
    <div className="layout-container">
      
      {/* LEFT SIDEBAR */}
      <aside className="sidebar">

        {/* LOGO */}
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* MAIN */}
        <h2 className="sidebar-title">MAIN</h2>
        <ul className="sidebar-menu">
          <li className={isActive("Overview")} onClick={() => setActive("Overview")}>Overview</li>
          <li className={isActive("Profile")} onClick={() => setActive("Profile")}>Profile</li>
        </ul>

        {/* ASSETS */}
        <h2 className="sidebar-title">ASSETS</h2>
        <ul className="sidebar-menu">
          <li className={isActive("Portfolio")} onClick={() => setActive("Portfolio")}>Portfolio</li>
          <li className={isActive("Token")} onClick={() => setActive("Token")}>Token</li>
        </ul>

        {/* INSIGHTS */}
        <h2 className="sidebar-title">INSIGHTS</h2>
        <ul className="sidebar-menu">
          <li className={isActive("Analytics")} onClick={() => setActive("Analytics")}>Analytics</li>
          <li className={isActive("Documents")} onClick={() => setActive("Documents")}>Documents</li>
        </ul>

        {/* ACCOUNT */}
        <h2 className="sidebar-title">ACCOUNT</h2>
        <ul className="sidebar-menu">
          <li className={isActive("Logout")} onClick={() => setActive("Logout")}>Log out</li>
        </ul>

      </aside>

      {/* MAIN SECTION */}
      <main className="main-section">
        
        {/* TOPBAR */}
        <header className="topbar">
          <h3>{titles[active]}</h3> 
        </header>

        {/* MAIN CONTENT — Dynamic Title + Subtitle */}
  <div className="content-area">

  {active === "Overview" && (
    <>
      <h1 className="main-title">{titles[active]}</h1>
      <p className="main-subtitle">{subtitles[active]}</p>

      {/* Overview Cards */}
      <StatsCards />
      <PortfolioAndActions/>
      <SectorAndInvestments/>
      <GlobalInsights/>
    </>
  )}
   {active === "Profile" && (
   <InvestorDashboard/>
  )}
 
{active === "Portfolio" && (
  <>
    <h1 className="main-title">{titles[active]}</h1>
    <p className="main-subtitle">{subtitles[active]}</p>

    {/* Portfolio Stats Cards */}
    <StatsCardsPortfolio/>
<StartupInvestments/>
    {/* OPTIONAL: Add other portfolio components here */}
    {/* <YourPortfolioTable /> */}
    {/* <YourHoldingsChart /> */}
  </>
)}
{active === "Token" && (
  <>
    <h1 className="main-title">{titles[active]}</h1>
    <p className="main-subtitle">{subtitles[active]}</p>

    {/* TOKEN DASHBOARD COMPONENT */}
    <TokenDashboard/>
  </>
)}
{

  active === "Analytics" &&(

    <>
     <h1 className="main-title">{titles[active]}</h1>
    <p className="main-subtitle">{subtitles[active]}</p>
   <div style={{ width: "100%", height: "300px", minWidth: "300px" }}>
 
  <AnalyticsTopCards/>
<DashboardAnalytics/>
</div>


    </>
  )
}

{active === "Documents" && (
  <>
  <DocumentsDashboard/>
  
  </>
)}
</div>


      </main>

    </div>
  );
}

export default App;
