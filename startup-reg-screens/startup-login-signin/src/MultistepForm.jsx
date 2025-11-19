import { useState, useEffect } from "react";
import "./MultiStepForm.css";
import logo from "./assets/logo.png";

import {
  ChevronRight,
  Building2,
  Calendar,
  Globe,
  Hash,
  User,
  Mail,
  Phone,
  Briefcase,
  Flag,
  Target,
  CheckCircle2
} from "lucide-react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 10;

  const nextStep = () => step < totalSteps && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  /* -------------------------------------------
     🔒 HARD LOCK ZOOM
  ------------------------------------------- */
  useEffect(() => {
    const lockZoom = (e) => {
      if (
        e.ctrlKey ||
        e.metaKey ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "=" ||
        e.key === "0"
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", lockZoom, { passive: false });
    window.addEventListener("keydown", lockZoom);

    document.addEventListener(
      "touchmove",
      (e) => {
        if (e.scale !== 1) e.preventDefault();
      },
      { passive: false }
    );

    return () => {
      window.removeEventListener("wheel", lockZoom);
      window.removeEventListener("keydown", lockZoom);
    };
  }, []);

  /* -------------------------------------------
     STEP CONTENT
  ------------------------------------------- */
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="msf-form">
            <h2 className="msf-heading">
              <Building2 size={22} />
              Company Identity
            </h2>
            <p className="msf-subheading">Tell us about your company.</p>

            <label>
              Company Name*
              <input type="text" placeholder="Acme Technologies Inc." />
            </label>

            <label>
              Registration Number
              <div className="input-icon">
                <Hash size={18} />
                <input type="text" placeholder="REG123456" />
              </div>
            </label>
          </div>
        );

      case 2:
        return (
          <div className="msf-form">
            <h2 className="msf-heading">
              <User size={22} />
              Founder Details
            </h2>

            <p className="msf-subheading">Tell us who is leading the company.</p>

            <label>
              Founder Name*
              <input type="text" placeholder="John Doe" />
            </label>

            <label>
              Email*
              <div className="input-icon">
                <Mail size={18} />
                <input type="text" placeholder="john@example.com" />
              </div>
            </label>

            <label>
              Phone Number*
              <div className="input-icon">
                <Phone size={18} />
                <input type="text" placeholder="+91 9876543210" />
              </div>
            </label>
          </div>
        );

      /* -----------------------------------------
         ✅ FIXED STEP 3 — Wrapped in .msf-form
      ----------------------------------------- */
      case 3:
        return (
          <div className="msf-form">
            <h2 className="msf-heading">
              <Briefcase size={22} />
              Industry & Stage
            </h2>

            <p className="msf-subheading">
              Select your primary industry and stage.
            </p>

            <label>
              Industry*
              <select>
                <option>Select industry</option>
                <option>FinTech</option>
                <option>EdTech</option>
                <option>HealthTech</option>
                <option>E-commerce</option>
              </select>
            </label>

            <label>
              Founded Date*
              <div className="input-icon">
                <Calendar size={18} />
                <input type="text" placeholder="2020" />
              </div>
            </label>
          </div>
        );

      case 4:
        return (
          <div className="msf-form">
            <h2 className="msf-heading">
              <Globe size={22} />
              Website & Socials
            </h2>

            <label>
              Website
              <input type="text" placeholder="https://example.com" />
            </label>

            <label>
              LinkedIn Page
              <input type="text" placeholder="https://linkedin.com/company" />
            </label>
          </div>
        );

      case 5:
        return (
          <div className="msf-form">
            <h2 className="msf-heading">
              <Flag size={22} />
              Location Details
            </h2>

            <label>
              Country*
              <input type="text" placeholder="India" />
            </label>

            <label>
              City*
              <input type="text" placeholder="Bengaluru" />
            </label>
          </div>
        );

      default:
        return (
          <div className="msf-form">
            <h2 className="msf-heading">
              <Target size={22} />
              Step {step}
            </h2>

            <p className="msf-subheading">
              Placeholder — add your fields for steps 6–10.
            </p>

            <label>
              Sample Input
              <input type="text" placeholder="Enter something..." />
            </label>
          </div>
        );
    }
  };

  return (
    <div className="msf-page">

      {/* LEFT */}
      <div className="msf-left">
        <div className="msf-left-inner">
          <div className="trusted-badge">
            <CheckCircle2 size={16} />
            Trusted by 50,000+ users worldwide
          </div>

          <p className="lang">English(UK) ▾</p>
          <p className="step-tag">
            Step {step} of {totalSteps}
          </p>

          <h1 className="msf-left-title">Your Company Identity</h1>

          <p className="msf-left-desc">
            Please complete onboarding to unlock verified investor access.
          </p>

          <div className="msf-bullets">
            <div className="msf-bullet-item"><span></span> Faster approvals</div>
            <div className="msf-bullet-item"><span></span> Boost investor trust</div>
            <div className="msf-bullet-item"><span></span> Verified identity</div>
            <div className="msf-bullet-item"><span></span> Higher visibility</div>
          </div>
        </div>
      </div>

      {/* RIGHT — 80% ZOOM */}
      <div
        className="msf-right"
        style={{
          transform: "scale(0.80)",
          transformOrigin: "top left",
          width: "125%",
        }}
      >
        {/* HEADER */}
        <div className="msf-right-header">
          <div className="logo-flex">
            <img src={logo} className="emireq-logo" alt="" />
            <span className="brand-text">emireq</span>
          </div>
          <div className="lang-right">English(UK) ▾</div>
        </div>

        {/* PROGRESS */}
        <div className="msf-progress">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const num = i + 1;
            return (
              <span key={i} className="msf-progress-segment">
                <div
                  className={
                    "msf-circle " +
                    (num < step ? "completed" : "") +
                    (num === step ? "current" : "")
                  }
                >
                  {num}
                </div>

                {i < totalSteps - 1 && (
                  <div
                    className={
                      "msf-connector " +
                      (i < step - 1 ? "completed" : "") +
                      (i === step - 1 ? "current" : "")
                    }
                  />
                )}
              </span>
            );
          })}
        </div>

        {/* FORM */}
        <div className="msf-content">{renderStepContent()}</div>

        {/* BUTTONS */}
        <div className="msf-buttons">
          {step > 1 && (
            <button className="btn-back" onClick={prevStep}>
              Back
            </button>
          )}

          <button className="btn-next" onClick={nextStep}>
            {step === totalSteps ? "Finish" : "Continue"}{" "}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
