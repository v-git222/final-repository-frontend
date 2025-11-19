import React from "react";
import "./title.css"; // Ensure the filename case matches exactly

/**
 * Props:
 * - title: string (defaults to provided title)
 * - subtitle: string (optional second line text)
 * - className: extra wrapper classes
 */
export default function Title({
  title = "Tokenize real-world opportunities",
  subtitle = "Emireq empowers entrepreneurs to tokenize equity, revenue, and project shares — connecting them with investors across the globe.",
  className = "",
}) {
  return (
    <div className={`hero-wrapper ${className}`}>
      <h1 className="hero-title">{title}</h1>
      <span></span>
      <p className="hero-subtitle">{subtitle}</p>
    </div>
  );
}
