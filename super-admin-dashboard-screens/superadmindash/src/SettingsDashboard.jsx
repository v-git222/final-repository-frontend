import React, { useState } from "react";
import "./SettingsDashboard.css";
import {
  Settings,
  Users,
  Lock,
  Bell,
  Database,
  Plug,
  Code2,
} from "lucide-react";

export default function SettingsDashboard({ dark = false }) {
  const [toggles, setToggles] = useState({
    shariah: true,
    zakat: false,
    kyc: true,
    tokenization: true,
    metaverse: false,
    ai: true,
  });

  const toggleSwitch = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menu = [
    { icon: <Settings size={16} />, name: "General" },
    { icon: <Users size={16} />, name: "User Management" },
    { icon: <Lock size={16} />, name: "Security" },
    { icon: <Bell size={16} />, name: "Notifications" },
    { icon: <Database size={16} />, name: "Data Management" },
    { icon: <Plug size={16} />, name: "Integrations" },
    { icon: <Code2 size={16} />, name: "API Settings" },
  ];

  return (
    <div className={`settings-dashboard ${dark ? "dark" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <h3 className="sidebar-title">Settings</h3>
        <ul>
          {menu.map((item, i) => (
            <li key={i} className={i === 0 ? "active" : ""}>
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="settings-content">
        <div className="settings-section">
          <h4>Platform Information</h4>
          <div className="form-grid">
            <div>
              <label>Platform Name</label>
              <input type="text" value="EmiraQ" readOnly />
            </div>
            <div>
              <label>Support Email</label>
              <input type="email" value="support@emiraq.com" readOnly />
            </div>
            <div>
              <label>Contact Phone</label>
              <input type="text" value="+971-4-1234567" readOnly />
            </div>
            <div>
              <label>Default Currency</label>
              <input type="text" value="USD ($)" readOnly />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h4>Regional Settings</h4>
          <div className="form-grid">
            <div>
              <label>Timezone</label>
              <select>
                <option>Asia/Dubai (UTC+4)</option>
              </select>
            </div>
            <div>
              <label>Date Format</label>
              <select>
                <option>YYYY-MM-DD</option>
              </select>
            </div>
            <div>
              <label>Language</label>
              <select>
                <option>English</option>
              </select>
            </div>
            <div>
              <label>Number Format</label>
              <select>
                <option>1,234.56</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h4>Shariah & Compliance</h4>
          <div className="toggle-row">
            <span>
              <strong>Shariah Compliance Enforcement</strong>
              <p>Require Shariah approval for all investments</p>
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={toggles.shariah}
                onChange={() => toggleSwitch("shariah")}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-row">
            <span>
              <strong>Automated Zakat Calculation</strong>
              <p>Calculate Zakat automatically for investors</p>
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={toggles.zakat}
                onChange={() => toggleSwitch("zakat")}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-row">
            <span>
              <strong>KYC/AML Verification</strong>
              <p>Mandatory verification for all users</p>
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={toggles.kyc}
                onChange={() => toggleSwitch("kyc")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h4>Platform Features</h4>
          <div className="toggle-row">
            <span>
              <strong>Tokenization Module</strong>
              <p>Enable blockchain tokenization features</p>
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={toggles.tokenization}
                onChange={() => toggleSwitch("tokenization")}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-row">
            <span>
              <strong>Metaverse Integration</strong>
              <p>Enable virtual events and metaverse features</p>
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={toggles.metaverse}
                onChange={() => toggleSwitch("metaverse")}
              />
              <span className="slider"></span>
            </label>
          </div>
          <div className="toggle-row">
            <span>
              <strong>AI-Powered Matching</strong>
              <p>Use AI to match startups with investors</p>
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={toggles.ai}
                onChange={() => toggleSwitch("ai")}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <button className="save-btn">Save Changes</button>
      </main>
    </div>
  );
}
