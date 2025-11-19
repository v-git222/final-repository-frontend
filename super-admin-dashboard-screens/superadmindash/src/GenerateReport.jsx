import React from "react";
import "./GenerateReport.css";
import { BarChart, Download } from "lucide-react";

export default function GenerateReport({ dark }) {
  return (
    <div className={`generate-card ${dark ? "dark" : "light"}`}>
      <div className="generate-header">
        <div className="icon-box">
          <BarChart size={32} />
        </div>
        <div>
          <h3 className="generate-title">Generate New Report</h3>
          <p className="generate-subtitle">
            Create custom reports with flexible parameters
          </p>
        </div>
      </div>

      <div className="generate-form">
        <div className="form-group">
          <label>Report Type</label>
          <select>
            <option>Select report type</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date Range</label>
          <select>
            <option>Select date range</option>
          </select>
        </div>

        <div className="form-group">
          <label>Export Format</label>
          <select>
            <option>Select format</option>
          </select>
        </div>

        <button className="generate-btn">
          <Download size={18} /> Generate Report
        </button>
      </div>
    </div>
  );
}
