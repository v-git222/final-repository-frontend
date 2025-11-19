import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const InvestorMix = () => {
  const [zoom, setZoom] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const data = [
    { name: "VC Firms", value: 30, color: "#8b5cf6" },
    { name: "Strategic Partners", value: 20, color: "#10b981" },
    { name: "Angel Investors", value: 35, color: "#3b82f6" },
    { name: "Others", value: 15, color: "#f59e0b" },
  ];

  // ✅ Detect global .page.light / .page.dark dynamically
  useEffect(() => {
    const page = document.querySelector(".page");
    if (!page) return;

    const updateTheme = () => {
      setIsDarkMode(page.classList.contains("dark"));
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(page, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  // ✅ Utility to safely get CSS variable value
  const getVar = (name, fallback) =>
    getComputedStyle(document.documentElement).getPropertyValue(name) || fallback;

  const vars = {
    cardBg: isDarkMode ? "#0f0f0f" : "#ffffff",
    textPrimary: isDarkMode ? "#f5f5f5" : "#111111",
    textSecondary: isDarkMode ? "#b5b5b5" : "#555555",
    borderColor: isDarkMode ? "#333333" : "#e5e7eb",
    tooltipBg: isDarkMode ? "#1e1e1e" : "#ffffff",
    shadow: isDarkMode
      ? "0 4px 10px rgba(255,255,255,0.05)"
      : "0 4px 10px rgba(0,0,0,0.08)",
  };

  const styles = {
    card: {
      background: vars.cardBg,
      color: vars.textPrimary,
      borderRadius: "16px",
      padding: "1.5rem",
      boxShadow: vars.shadow,
      transition: "all 0.3s ease",
      width: "100%",
      height: "100%", // ✅ fill parent height dynamically
      maxWidth: "100%", // ✅ remove fixed max width
      boxSizing: "border-box",
      border: `1px solid ${vars.borderColor}`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "1rem",
      flexShrink: 0,
    },
    title: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    },
    controls: {
      display: "flex",
      gap: "0.4rem",
    },
    button: {
      background: isDarkMode ? "#2d2d2d" : "#f3f4f6",
      border: "1px solid transparent",
      borderRadius: "8px",
      padding: "4px 8px",
      cursor: "pointer",
      fontSize: "1rem",
      color: vars.textPrimary,
      transition: "0.2s",
    },
    chartSection: {
      flex: 1, // ✅ fill remaining vertical space
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "1rem",
      minHeight: "240px",
      boxSizing: "border-box",
    },
   chartWrapper: {
    flex: "1 1 300px",
    minWidth: "280px",
    height: zoom ? "320px" : "260px", // ✅ explicit height ensures visibility
    minHeight: "240px",
  },
    legend: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      minWidth: "140px",
      justifyContent: "center",
      flex: "0 0 auto",
    },
    legendItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.5rem",
      fontSize: "0.9rem",
      color: vars.textSecondary,
      whiteSpace: "nowrap",
    },
    dot: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      flexShrink: 0,
    },
  };

  return (
    <div
      className={`investor-mix-card ${isDarkMode ? "dark" : "light"}`}
      style={styles.card}
    >
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.title}>
          <h3 style={{ fontWeight:"400" ,margin: 0, color: vars.textPrimary, fontSize: "1.4rem",fontFamily:`URW Geometric", 'Poppins', 'Helvetica Neue', Arial, sans-serif` }}>
            Investor Mix
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "0.85rem",
              color: vars.textSecondary,
            }}
          >
            Distribution by investor type
          </p>
        </div>

        <div style={styles.controls}>
          {["+", "✎", "⋯"].map((symbol, i) => (
            <button
              key={i}
              onClick={
                i === 0
                  ? () => setZoom((z) => !z)
                  : () => alert("Feature coming soon!")
              }
              style={styles.button}
            >
              {symbol === "+" && zoom ? "−" : symbol}
            </button>
          ))}
        </div>
      </div>

      {/* Chart + Legend */}
      <div style={styles.chartSection}>
        <div style={styles.chartWrapper}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={zoom ? "90%" : "70%"} // ✅ auto-scaling radius
                labelLine={false}
                onMouseEnter={(_, i) => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {data.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={entry.color}
                    style={{
                      cursor: "pointer",
                      transform:
                        activeIndex === i ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.25s ease",
                    }}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: vars.tooltipBg,
                  color: vars.textPrimary,
                  borderRadius: "8px",
                  border: `1px solid ${vars.borderColor}`,
                  boxShadow: vars.shadow,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={styles.legend}>
          {data.map((item, i) => (
            <div key={i} style={styles.legendItem}>
              <span style={{ ...styles.dot, background: item.color }}></span>
              <span>{item.name}</span>
              <div>{item.value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorMix;
