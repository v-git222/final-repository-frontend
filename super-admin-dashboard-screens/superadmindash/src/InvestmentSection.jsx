import React from "react";
import "./InvestmentSection.css";
import { Plus, Info } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import bitcoinBg from "./assets/bitcoin.png"; // ✅ Bitcoin image for banner background
import InvestmentCard from "./InvestmentCard";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3800 },
  { name: "Mar", value: 4100 },
  { name: "Apr", value: 3600 },
  { name: "May", value: 4600 },
  { name: "Jun", value: 4900 },
  { name: "Jul", value: 5100 },
];

export default function InvestmentSection({ dark }) {
  return (
    <div className={`investment-section ${dark ? "dark" : ""}`}>
      {/* Left - Banner with Bitcoin background */}
      <div
        className="investment-banner"
        style={{
          backgroundImage: `url(${bitcoinBg})`,
        }}
      >
        <div className="banner-overlay">
          <div className="banner-content">
            <h2>Securely Invest your money</h2>
            <p>You can start your journey here</p>
            <span className="banner-date">20th October, 2025</span>
            <button className="create-btn">
              <Plus size={16} />
              Create your fund
            </button>
          </div>
        </div>
      </div>

      {/* Right - Chart Card */}
     <InvestmentCard />
      </div>
   
  );
}
