import "./RightSidePanel.css";
import { FiCheckCircle } from "react-icons/fi";
import { BsCalendarEvent } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";
import { FiInfo } from "react-icons/fi";

function RightSidePanel() {
  return (
    <div className="right-panel">

      {/* QUICK STATS */}
      <div className="card quick-card">
        <h3 className="card-title">Quick Stats</h3>

        <div className="qs-block">
          <p className="qs-label">Available Balance</p>
          <h1 className="qs-amount">$4.1M</h1>
          <p className="qs-sub">$6M total</p>
        </div>

        <hr />

        <div className="qs-block">
          <p className="qs-label">Available Balance</p>
          <h1 className="qs-amount">0</h1>
        </div>

        <hr />

        <div className="qs-block">
          <p className="qs-label">Profile Status</p>
          <span className="status approved">Approved</span>
        </div>
      </div>

      {/* ACCOUNT TIMELINE */}
      <div className="card timeline-card">
        <h3 className="card-title">Account Timeline</h3>

        <div className="timeline-item">
          <div className="timeline-icon green">
            <FiCheckCircle size={18} />
          </div>
          <div className="timeline-text">
            <p className="timeline-title">Approved</p>
            <p className="timeline-date">October 26, 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon blue">
            <BsCalendarEvent size={18} />
          </div>
          <div className="timeline-text">
            <p className="timeline-title">Registered</p>
            <p className="timeline-date">October 26, 2025</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon purple">
            <LuClock3 size={18} />
          </div>
          <div className="timeline-text">
            <p className="timeline-title">Last Updated</p>
            <p className="timeline-date">October 26, 2025</p>
          </div>
        </div>
      </div>

      {/* NEXT STEPS */}
      <div className="card next-steps">
        <h3 className="card-title">Next Steps</h3>

        <div className="next-item blue-bg">
          <div className="next-icon blue-icon">
            <FiInfo size={18} />
          </div>
          <div>
            <p className="next-title">Complete KYC verification</p>
            <p className="next-desc">Upload required documents</p>
          </div>
        </div>

        <div className="next-item violet-bg">
          <div className="next-icon violet-icon">
            <FiInfo size={18} />
          </div>
          <div>
            <p className="next-title">Add sector preferences</p>
            <p className="next-desc">Help us match you with startups</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default RightSidePanel;
