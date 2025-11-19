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
import StartupsList from "./StartupList";
import ActionBar from "./ActionBar";
import StartupDetails from "./StartupDetails";
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

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Sidebar menu with upgraded subtitles
  const menuItems = [
    {
      section: "MAIN",
      items: [
        {
          name: "Dashboard",
          icon: <Home size={16} />,
          subtitle: "Your control center for insights and analytics",
        },
        {
          name: "Startups",
          icon: <Users size={16} />,
          subtitle: "Browse and manage registered startups seamlessly",
        },
        {
          name: "Investors",
          icon: <Users size={16} />,
          subtitle: "Track investor activity, profiles, and engagement",
        },
        {
          name: "Funding",
          icon: <DollarSign size={16} />,
          subtitle: "Monitor and manage funding rounds efficiently",
        },
        {
          name: "Deal",
          icon: <FileText size={16} />,
          subtitle: "Review, negotiate, and finalize your active deals",
        },
      ],
    },
    {
      section: "MANAGEMENT",
      items: [
        {
          name: "Compliance",
          icon: <BarChart2 size={16} />,
          subtitle: "Ensure transparency and meet audit standards",
        },
        {
          name: "Reports",
          icon: <Layers size={16} />,
          subtitle: "Generate and analyze performance metrics easily",
        },
      ],
    },
    {
      section: "ADVANCED",
      items: [
        {
          name: "Tokenization",
          icon: <Globe size={16} />,
          subtitle: "Convert assets into secure digital tokens effortlessly",
        },
        {
          name: "Metaverse",
          icon: <Gift size={16} />,
          subtitle: "Engage in next-gen digital collaboration spaces",
        },
        {
          name: "Zakat",
          icon: <DollarSign size={16} />,
          subtitle: "Automate and simplify Zakat calculation workflow",
        },
        {
          name: "Investor Network",
          icon: <Share2 size={16} />,
          subtitle: "Expand your investor connections across regions",
        },
      ],
    },
    {
      section: "ACCOUNT",
      items: [
        {
          name: "Settings",
          icon: <Settings size={16} />,
          subtitle: "Customize your preferences and system appearance",
        },
        {
          name: "Log out",
          icon: <LogOut size={16} />,
          subtitle: "Sign out securely from your Emireq dashboard",
        },
      ],
    },
  ];

  // Retrieve active subtitle dynamically
  const activeSubtitle =
    menuItems
      .flatMap((section) => section.items)
      .find((item) => item.name === activeTab)?.subtitle || "";

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src={logo} alt="emireq" />
        </div>

        {menuItems.map((section) => (
          <div key={section.section}>
            <p className="menu-title">{section.section}</p>
            {section.items.map((item) => (
              <a
                key={item.name}
                className={`menu-item ${
                  activeTab === item.name ? "active" : ""
                }`}
                onClick={() => setActiveTab(item.name)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="topbar">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="search-bar">
            <Search size={16} />
            <input type="text" placeholder="Search..." />
          </div>

          <div className="topbar-icons">
            <Bell size={18} />
            <img
              src="https://i.pravatar.cc/30"
              alt="profile"
              className="avatar"
            />
          </div>
        </header>

        <div className="content">
          <h2 className="content-title">{activeTab}</h2>
          <p className="content-subtitle">{activeSubtitle}</p>

          {/* ✅ Dashboard visible only when active */}
          {activeTab === "Dashboard" && (
            <>
              <div className="stats-row">
                <StatsCard
                  title="Total Startups"
                  value="87"
                  change="12"
                  positive
                  icon={Building2}
                  color="#10b981"
                  dark={darkMode}
                />
                <StatsCard
                  title="Active Investors"
                  value="1,258"
                  change="12"
                  positive
                  icon={Users}
                  color="#3b82f6"
                  dark={darkMode}
                />
                <StatsCard
                  title="Tokenized Startups"
                  value="34"
                  change="12"
                  positive
                  icon={Coins}
                  color="#f59e0b"
                  dark={darkMode}
                />
                <StatsCard
                  title="Zakat Pending"
                  value="$42.5k"
                  change="12"
                  positive={false}
                  icon={HandHeart}
                  color="#8b5cf6"
                  dark={darkMode}
                />
              </div>

              {/* ✅ Add Investment Section */}
              <InvestmentSection dark={darkMode} />
              <FundingAndTokenization dark={darkMode}/>
              <MarketOverview dark={darkMode}/>
            </>
          )}
          
{activeTab === "Startups" && (
  <>
    <ActionBar dark={darkMode} />

    <div className="startup-view">
      <div className="startup-left">
        <StartupDetails dark={darkMode} />
      </div>
      <div className="startup-right">
        {/* Import FounderSidebar at top */}
        <FounderSidebar dark={darkMode}/>
      </div>
    </div>
  </>
)}
{activeTab === "Investors" && (
  <>
    <ActionBar dark={darkMode} />
    <div className="investor-view">
      <div className="investor-left">
        <InvestorDetails dark={darkMode} />
      </div>
      <div className="investor-right">
        <InvestorSidebar dark={darkMode}/>
      </div>
    </div>
  </>
)}
{
  activeTab === "Funding" &&(
    <>
    <FundingStats dark={darkMode}/>
    <FundingTrendsAndDeals dark={darkMode}/>
    <RecentFundingDeals dark={darkMode}/>
 
    </>
  )
}
{
  activeTab=="Deal" &&(
    <>
  <DealsSummary dark={darkMode}/>
  <DealStageAndValueCharts dark={darkMode}/>
  <CurrentDeals dark={darkMode}/>
    </>
  )
}

{

  activeTab =="Compliance" &&(
    <>
  <DashboardStats dark={darkMode} />
  <DonutCharts dark={darkMode}/>
  <ComplianceRecords dark={darkMode}/>
 
  </>
  )
}
{
activeTab == "Reports" &&(
  <>
   <ReportStats dark={darkMode}/>
   <ReportCharts dark={darkMode}/>
   <GenerateReport dark={darkMode}/>
   <RecentReports dark={darkMode}/>
   </>
)

}
{
 activeTab == "Tokenization" &&(
  <>
  <Dashboard dark={darkMode}/>
  <TokenizedStartups dark={darkMode}/>
  </>
 )
}
{

  activeTab=="Metaverse" &&(
    <>
  <MetaverseDashboard dark={darkMode}/>
  <MetaverseEvents dark={darkMode}/>
 
    </>
  )
}
{
  activeTab=="Zakat" &&(
   <>
  <ZakatSummary dark={darkMode} />
  <div style={{ marginTop: "2rem" }}></div>
  <ZakatCharts dark={darkMode} />
    <div style={{ marginTop: "2rem" }}></div>
    <ZakatRecords dark={darkMode}/>
</>

  )
}
{
  activeTab =="Investor Network" &&(
    <>
    <InvestorDashboard dark={darkMode}/>
    <InvestorDirectory dark={darkMode}/>
    </>
  )
}
{
  activeTab =="Settings" &&(
    <>
    <SettingsDashboard dark={darkMode}/>
    </>
  )
}
        </div>
      </main>
    </div>
  );
}
