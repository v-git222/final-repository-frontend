import React from "react";
import "./DealsSummary.css";
import { Boxes, DollarSign, CheckCircle, Clock } from "lucide-react";

export default function DealsSummary({ dark }) {
  const deals = [
    {
      title: "Active Deals",
      value: "24",
      subtext: "+12% from last week",
      tag: "+4 new",
      icon: <Boxes size={22} />,
      iconColor: "#10b981",
      tagColor: "#10b981",
    },
    {
      title: "Total Value",
      value: "$8.2M",
      subtext: "In pipeline",
      tag: "+22.5%",
      icon: <DollarSign size={22} />,
      iconColor: "#f97316",
      tagColor: "#f97316",
    },
    {
      title: "Closed Deals",
      value: "16",
      subtext: "$4.2m total value",
      tag: "This quarter",
      icon: <CheckCircle size={22} />,
      iconColor: "#3b82f6",
      tagColor: "#3b82f6",
    },
    {
      title: "Avg. Close Time",
      value: "45d",
      subtext: "5 days vs last quarter",
      tag: "-5 days",
      icon: <Clock size={22} />,
      iconColor: "#8b5cf6",
      tagColor: "#8b5cf6",
    },
  ];

  return (
    <div className={`deals-summary ${dark ? "dark" : ""}`}>
      {deals.map((deal, index) => (
        <div className="deal-card" key={index}>
          <div className="deal-header">
            <div
              className="icon-box"
              style={{ backgroundColor: deal.iconColor }}
            >
              {deal.icon}
            </div>
            <span
              className="deal-tag"
              style={{
                borderColor: `${deal.tagColor}33`,
                color: deal.tagColor,
              }}
            >
              {deal.tag}
            </span>
          </div>

          <div className="deal-body">
            <h4>{deal.title}</h4>
            <h2>{deal.value}</h2>
            <p
              className={`deal-sub ${
                deal.subtext.includes("+") ? "positive" : "neutral"
              }`}
            >
              {deal.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
