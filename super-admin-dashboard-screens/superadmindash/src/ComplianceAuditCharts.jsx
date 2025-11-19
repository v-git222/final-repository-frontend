import React from "react";
import "./ComplianceAuditCharts.css";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Info, Maximize2, Edit3, MoreHorizontal } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ComplianceAuditCharts({ dark = false }) {
  const complianceData = {
    labels: ["Approved", "In Review", "Pending", "Non-Compliant"],
    datasets: [
      {
        data: [31, 6, 2, 1],
        backgroundColor: ["#10b981", "#3b82f6", "#f59e0b", "#ef4444"],
        borderWidth: 0,
      },
    ],
  };

  const auditData = {
    labels: ["Initial Review", "Due Diligence", "Documentation", "Closing"],
    datasets: [
      {
        data: [31, 40, 32, 17],
        backgroundColor: ["#a855f7", "#06b6d4", "#f59e0b", "#ec4899"],
        borderWidth: 0,
      },
    ],
  };

  const calcPercent = (arr) => {
    const total = arr.reduce((a, b) => a + b, 0);
    return arr.map((v) => ((v / total) * 100).toFixed(0));
  };

  const compliancePercents = calcPercent(complianceData.datasets[0].data);
  const auditPercents = calcPercent(auditData.datasets[0].data);

  const totalCompliance = complianceData.datasets[0].data.reduce((a, b) => a + b, 0);
  const totalAudit = auditData.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <div className={`donut-pair ${dark ? "dark" : "light"}`}>
      {/* Compliance Status */}
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">Compliance Status <Info size={14} /></h3>
            <p className="chart-subtitle">Current status breakdown</p>
          </div>
          <div className="chart-actions">
            <Maximize2 size={16} />
            <Edit3 size={16} />
            <MoreHorizontal size={16} />
          </div>
        </div>

        <div className="chart-body">
          <div className="chart-wrapper">
            <Doughnut
              data={complianceData}
              options={{
                cutout: "70%",
                plugins: { legend: { display: false } },
                maintainAspectRatio: false,
              }}
            />
            <div className="chart-center">
              <h2>{totalCompliance}</h2>
              <p>Total</p>
            </div>
          </div>

          <ul className="chart-legend">
            {complianceData.labels.map((label, i) => (
              <li key={i}>
                <span
                  className="legend-dot"
                  style={{ background: complianceData.datasets[0].backgroundColor[i] }}
                ></span>
                <span className="legend-label">{label}</span>
                <span className="legend-value">{complianceData.datasets[0].data[i]}</span>
                <span className="legend-percent">({compliancePercents[i]}%)</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Audit Distribution */}
      <div className="chart-card">
        <div className="chart-header">
          <div>
            <h3 className="chart-title">Audit Distribution <Info size={14} /></h3>
            <p className="chart-subtitle">Breakdown by audit type</p>
          </div>
          <div className="chart-actions">
            <Maximize2 size={16} />
            <Edit3 size={16} />
            <MoreHorizontal size={16} />
          </div>
        </div>

        <div className="chart-body">
          <div className="chart-wrapper">
            <Doughnut
              data={auditData}
              options={{
                cutout: "70%",
                plugins: { legend: { display: false } },
                maintainAspectRatio: false,
              }}
            />
            <div className="chart-center">
              <h2>{totalAudit}</h2>
              <p>Total</p>
            </div>
          </div>

          <ul className="chart-legend">
            {auditData.labels.map((label, i) => (
              <li key={i}>
                <span
                  className="legend-dot"
                  style={{ background: auditData.datasets[0].backgroundColor[i] }}
                ></span>
                <span className="legend-label">{label}</span>
                <span className="legend-value">{auditData.datasets[0].data[i]}</span>
                <span className="legend-percent">({auditPercents[i]}%)</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
