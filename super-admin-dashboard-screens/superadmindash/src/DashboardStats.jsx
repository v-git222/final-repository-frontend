import React from "react";
import "./DashboardStats.css";
import { Shield, FileText, Users, Clock } from "lucide-react";

export default function DashboardStats({ dark=false }) {
  const data = [
    {
      icon: <Shield size={36} />,
      iconBg: "rgba(0,168,107,0.15)",
      iconColor: "#00A86B",
      title: "Shariah Compliant",
      value: "95%",
      subtitle: "31 out of 33 startups",
      tag: "+2.3%",
      tagColor: "#00A86B",
    },
    {
      icon: <FileText size={36} />,
      iconBg: "rgba(0,122,255,0.15)",
      iconColor: "#007AFF",
      title: "Audits Completed",
      value: "124",
      subtitle: "+18 vs last year",
      tag: "This week",
      tagColor: "#007AFF",
    },
    {
      icon: <Users size={36} />,
      iconBg: "rgba(155,81,224,0.15)",
      iconColor: "#9B51E0",
      title: "Board Members",
      value: "8",
      subtitle: "active scholars",
      tag: "+1",
      tagColor: "#9B51E0",
    },
    {
      icon: <Clock size={36} />,
      iconBg: "rgba(242,153,74,0.15)",
      iconColor: "#F2994A",
      title: "Pending Reviews",
      value: "6",
      subtitle: "-2% this week",
      tag: "This year",
      tagColor: "#F2994A",
    },
  ];

  return (
    <div className={`dashboard-container ${dark ? "dark" : "light"}`}>
      {data.map((item, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <div
              className="icon-box"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </div>
            <div
              className="tag"
              style={{ color: item.tagColor, borderColor: item.tagColor }}
            >
              {item.tag}
            </div>
          </div>
          <h4 className="title">{item.title}</h4>
          <div className="value">{item.value}</div>
          <p className="subtitle">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
