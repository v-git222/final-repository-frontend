import React from "react";
import "./ReportStats.css";
import { FileText, Clock, Download, FileSpreadsheet } from "lucide-react";

export default function ReportStats({ dark }) {
  const data = [
    {
      icon: <FileText size={36} />,
      iconBg: "#007AFF20",
      iconColor: "#007AFF",
      title: "Total Reports",
      value: "148",
      subtitle: "Generated this year",
      tag: "+12%",
      tagColor: "#00A86B",
    },
    {
      icon: <Clock size={36} />,
      iconBg: "#00A86B20",
      iconColor: "#00A86B",
      title: "Schedule Reports",
      value: "12",
      subtitle: "Active automations",
      tag: "+3",
      tagColor: "#00A86B",
    },
    {
      icon: <Download size={36} />,
      iconBg: "#9B51E020",
      iconColor: "#9B51E0",
      title: "Recent Downloads",
      value: "42",
      subtitle: "Last 30 days",
      tag: "+8",
      tagColor: "#9B51E0",
    },
    {
      icon: <FileSpreadsheet size={36} />,
      iconBg: "#F2994A20",
      iconColor: "#F2994A",
      title: "Export Formats",
      value: "6",
      subtitle: "PDF, Excel, CSV, JSON",
      tag: "+8",
      tagColor: "#F2994A",
    },
  ];

  return (
    <div className={`report-container ${dark ? "dark" : "light"}`}>
      {data.map((item, i) => (
        <div className="report-card" key={i}>
          <div className="report-header">
            <div
              className="report-icon"
              style={{ backgroundColor: item.iconBg, color: item.iconColor }}
            >
              {item.icon}
            </div>
            <div
              className="report-tag"
              style={{
                color: item.tagColor,
                borderColor: item.tagColor,
              }}
            >
              ↑ {item.tag}
            </div>
          </div>

          <h4 className="report-title">{item.title}</h4>
          <div className="report-value">{item.value}</div>
          <p className="report-subtitle">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
