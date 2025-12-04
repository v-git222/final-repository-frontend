import React from "react";
import "./RecentReports.css";
import { FileSpreadsheet, Clock, Download } from "lucide-react";

export default function ReportStats({ dark }) {
  const data = [
    {
      Icon: Clock,
      iconBg: "#00A86B20",
      iconColor: "#00A86B",
      title: "Schedule Reports",
      value: "12",
      subtitle: "Active automations",
      growth: "+3",
    },
    {
      Icon: Download,
      iconBg: "#9B51E020",
      iconColor: "#9B51E0",
      title: "Recent Downloads",
      value: "42",
      subtitle: "Last 30 days",
      growth: "+8",
    },
    {
      Icon: FileSpreadsheet,
      iconBg: "#F2994A20",
      iconColor: "#F2994A",
      title: "Export Formats",
      value: "6",
      subtitle: "PDF, Excel, CSV, JSON",
      growth: "+2",
    },
  ];

  return (
    <div className={`report-container ${dark ? "dark" : "light"}`}>
      {data.map((item, index) => (
        <div className="report-card" key={index}>
          
          <div className="report-card-top">
            <div
              className="icon-box"
              style={{
                backgroundColor: item.iconBg,
                color: item.iconColor,
              }}
            >
              <item.Icon
                size={34}
                strokeWidth={2}
                style={{
                  stroke: item.iconColor,
                  color: item.iconColor,
                  display: "block",
                }}
              />
            </div>

            <span
              className="growth-badge"
              style={{
                color: item.iconColor,
                borderColor: item.iconColor,
              }}
            >
              ↑ {item.growth}
            </span>
          </div>

          <div className="report-title">{item.title}</div>
          <div className="report-value">{item.value}</div>
          <div className="report-sub">{item.subtitle}</div>
        </div>
      ))}
    </div>
  );
}
