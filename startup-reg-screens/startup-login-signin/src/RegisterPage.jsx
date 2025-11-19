import React, { useState } from "react";
import "./RegisterPage.css";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

// Lucide Icons
import { Sparkles, Wallet, LineChart, ShieldCheck } from "lucide-react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    // No validation → immediately go to onboarding
    navigate("/onboarding");
  };

  return (
    <div className="page">
      {/* LEFT SIDE */}
      <div className="left">
        <div className="left-inner">

          <div className="brand">
            <img src={logo} className="brand-logo" />
          </div>

          <h1 className="title">Welcome back</h1>
          <p className="subtitle">Access your startup dashboard and funding journey</p>

          <form className="form" onSubmit={submitForm}>
            <label>
              <span className="label">Username</span>
              <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label>
              <span className="label">Email</span>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              <span className="label">Password</span>
              <input
                type="password"
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button className="btn-primary" type="submit">
              Register
            </button>
          </form>

          <p className="login">
            Already have an account? <a href="#">Log in</a>
          </p>

          <div className="divider">
            <span></span> <p>Or</p> <span></span>
          </div>

          <button className="btn-social">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="social-icon"
            />
            <span>Register with Google</span>
          </button>

          <button className="btn-social">
            <img
              src="https://www.svgrepo.com/show/448234/linkedin.svg"
              alt="LinkedIn"
              className="social-icon"
            />
            <span>Register with LinkedIn</span>
          </button>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="overlay">

          <div className="trusted">
            <Sparkles size={16} color="white" />
            Trusted by 50,000+ users worldwide
          </div>

          <h1 className="hero-title">
            Build Your Startup the <br /> Shariah Way
          </h1>

          <p className="hero-desc">
            Connect with ethical investors, secure funding, and scale your business on a platform built for Shariah compliance and transparency.
          </p>

          <div className="features">
            <div className="feature-item">
              <div className="feature-icon-box">
                <Wallet size={26} color="white" />
              </div>
              <div>
                <h4>Access to Funding</h4>
                <p>Connect with 10,000+ verified investors</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <LineChart size={26} color="white" />
              </div>
              <div>
                <h4>Track Your Progress</h4>
                <p>Real-time analytics and engagement insights</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon-box">
                <ShieldCheck size={26} color="white" />
              </div>
              <div>
                <h4>Shariah Certified</h4>
                <p>Deals verified by Islamic finance experts</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
