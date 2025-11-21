import React, { useState } from "react";
import "./RegisterPage.css";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

// Lucide Icons
import { Sparkles, Wallet, LineChart, ShieldCheck } from "lucide-react";

// 🔹 Minimal Toast Component
const Toast = ({ message }) => (
  <div
    style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      padding: "12px 18px",
      background: "#111",
      color: "white",
      borderRadius: "8px",
      fontSize: "14px",
      border: "1px solid #333",
      boxShadow: "0 0 12px rgba(255,255,255,0.15)",
      zIndex: 1000,
    }}
  >
    {message}
  </div>
);

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  // 🔹 Fake API function (replace later with real API)
  const callRegisterAPI = async (payload) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 1200);
    });
  };

  // 🔹 Validation
  const validate = () => {
    const newErrors = {};

    // Username
    if (!username.trim()) newErrors.username = "Username is required.";
    else if (username.length < 3)
      newErrors.username = "Username must be at least 3 characters.";

    // Email
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Enter a valid email address.";

    // Password — min 8 chars
    if (!password.trim()) newErrors.password = "Password is required.";
    else if (typeof password !== "string")
      newErrors.password = "Password must be a string.";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Submit Handler
// 🔹 Submit Handler
// Submit Handler
const submitForm = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  showToast("Calling API…");

  const body = {
    email: email.trim(),
    password: password.trim(),
  };

  try {
    // Call YOUR local proxy instead of the real API
    const response = await fetch("http://localhost:8080/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    // Green log = API updated
    console.log(
      "%c✔ API UPDATED WITH REQUEST PAYLOAD",
      "color:#33ff99; font-weight:700;"
    );
    console.log("📤 Request Body Sent:", body);
    console.log("response body :",result);
    // Save json response file
    saveRegisterResponse(result);

    // Success log
    console.log(
      "%c✔ USER REGISTERED SUCCESSFULLY",
      "color:#00ff6a; font-weight:700; font-size:14px;"
    );

    navigate("/onboarding");
  } catch (err) {
    console.error("❌ Registration failed:", err);
    showToast("API Error");
  }
};
// 🔹 Save API response to downloadable JSON file
const saveRegisterResponse = (data) => {
  const fileData = JSON.stringify(data, null, 2);
  const blob = new Blob([fileData], { type: "application/json" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "registerResponse.json"; 
  a.click();

  URL.revokeObjectURL(url);

  console.log(
    "%c✔ REGISTER RESPONSE SAVED TO registerResponse.json",
    "color:#00eaff; font-weight:700;"
  );
};


  return (
    <>
      {/* Toast */}
      {toast && <Toast message={toast} />}

      <div className="page">
        {/* LEFT SIDE */}
        <div className="left">
          <div className="left-inner">

            <div className="brand">
              <img src={logo} className="brand-logo" />
            </div>

            <h1 className="title">Welcome back</h1>
            <p className="subtitle">
              Access your startup dashboard and funding journey
            </p>

            <form className="form" onSubmit={submitForm}>
              {/* USERNAME */}
              <label>
                <span className="label">Username</span>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <p className="error">{errors.username}</p>
                )}
              </label>

              {/* EMAIL */}
              <label>
                <span className="label">Email</span>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </label>

              {/* PASSWORD */}
              <label>
                <span className="label">Password</span>
                <input
                  type="password"
                  placeholder="************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="error">{errors.password}</p>
                )}
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
              Connect with ethical investors, secure funding, and scale your
              business on a platform built for Shariah compliance and transparency.
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
    </>
  );
}
