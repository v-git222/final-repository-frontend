
import "./hero.css";
import React, { useState, useEffect, useRef } from "react";


const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const [showResults, setShowResults] = useState(false);

  const [apiResults, setApiResults] = useState({
    startups: [],
    investors: [],
  });
  const resultsRef = useRef(null);


  const [loading, setLoading] = useState(false);

  /* ======================================================
   * PROXY API CALL → backend (app.emireq.com)
   * Triggered ONLY when search button clicked OR category changed
   * ====================================================== */
  // Close search results when clicking outside
useEffect(() => {
  const handleClickOutside = (e) => {
    // if search results are open and user clicks outside → close
    if (resultsRef.current && !resultsRef.current.contains(e.target)) {
      setShowResults(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  const fetchSearchResults = async (query) => {
    if (!query) {
      setApiResults({ startups: [], investors: [] });
      setShowResults(true);
      return;
    }

    setLoading(true);
    setShowResults(true);

    const endpoint = `/search/?q=${query}`;
    console.log(
      `%c[PROXY REQUEST] → ${endpoint}`,
      "color:#8A2BE2;font-weight:bold;"
    );

    try {
      const res = await fetch(endpoint);
      const data = await res.json();

      console.log(
        "%c[PROXY SUCCESS] Response:",
        "color:#4CAF50;font-weight:bold;",
        data
      );

      setApiResults({
        startups: data.startups || [],
        investors: data.investors || [],
      });
    } catch (err) {
      console.error(
        "%c[PROXY ERROR] JSON parse failed:",
        "color:red;font-weight:bold;",
        err
      );
    }

    setLoading(false);
  };

  /* ======================================================
   * HANDLE SEARCH TEXT INPUT (no fetching)
   * ====================================================== */
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  /* ======================================================
   * SEARCH BUTTON CLICK
   * ====================================================== */
  const handleSearchClick = () => {
    fetchSearchResults(search);
  };

  /* ======================================================
   * CATEGORY SELECT
   * ====================================================== */
  const handleSelect = (item) => {
    setSelectedOption(item);
    setOpen(false);

    // Re-fetch results if search text exists
    if (search.trim() !== "") {
      fetchSearchResults(search);
    }
  };

  /* ======================================================
   * MERGE + FILTER RESULTS
   * ====================================================== */
  const mergeFilteredResults = () => {
    let all = [];

    apiResults.startups.forEach((i) =>
      all.push({ ...i, category: "startups" })
    );
    apiResults.investors.forEach((i) =>
      all.push({ ...i, category: "investors" })
    );

    if (selectedOption === "startups") {
      all = all.filter((i) => i.category === "startups");
    }

    if (selectedOption === "investors") {
      all = all.filter((i) => i.category === "investors");
    }

    return all;
  };

  const finalResults = mergeFilteredResults();

  return (
    <section className="hero">
      {/* TITLE */}
      <h1 className="hero-title">
        Tokenize real-world <br /> opportunities
      </h1>

      <p className="hero-subtitle">
        Emireq empowers entrepreneurs to tokenize equity, revenue, and project
        shares — connecting them with<br /> investors across the globe.
      </p>

      <div className="hero-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Explore Marketplace</button>
      </div>

      {/* SEARCH BAR */}
      <div className="hero-search-container">
        <div className="hero-search">
          <input
            type="text"
            placeholder="Search startups, tokens, or investors..."
            value={search}
            onChange={handleSearchChange}
          />

          {/* DROPDOWN */}
          <div className="custom-select">
            <div
              className="custom-select-trigger"
              onClick={() => setOpen(!open)}
            >
              {selectedOption}
              <span className="arrow">▾</span>
            </div>

            {open && (
              <div className="custom-options">
                {["All", "startups", "investors"].map((item) => (
                  <div
                    key={item}
                    className="custom-option"
                    onClick={() => handleSelect(item)}
                  >
                    {item === "All"
                      ? "All"
                      : item.charAt(0).toUpperCase() + item.slice(1)}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className="btn-search" onClick={handleSearchClick}>
            Search
          </button>
        </div>

        {/* RESULTS */}
        {showResults && (
           <div className="search-results" ref={resultsRef}>
            {/* AI DISCOVERY CARD */}
            <div className="ai-discovery-card">
              <div className="ai-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4c6fff"
                  strokeWidth="2"
                >
                  <path d="M12 3v2" />
                  <path d="M12 19v2" />
                  <path d="M5 5l1.5 1.5" />
                  <path d="M17.5 17.5L19 19" />
                  <path d="M3 12h2" />
                  <path d="M19 12h2" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>

              <div className="ai-details">
                <h3 className="ai-title">AI-Powered Discovery</h3>
                <p className="ai-description">
                  Let our AI analyze market trends and suggest personalized
                  investment opportunities
                </p>
              </div>
            </div>

            <div className="divider"></div>

            {/* HEADER */}
            <div className="search-results-title">
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="#52627a">
                <polyline points="3 17 9 11 13 15 21 7"></polyline>
                <polyline points="14 7 21 7 21 14"></polyline>
              </svg>
              <span>TRENDING SEARCHES</span>
            </div>

            {/* LOADING SKELETON */}
            {loading && (
              <div className="skeleton-wrapper">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
            )}

            {/* EMPTY STATE */}
            {!loading && finalResults.length === 0 && (
              <div className="no-results">No matching results found.</div>
            )}

            {/* RESULTS LIST */}
            {!loading &&
              finalResults.map((item) => (
                <div className="trending-item" key={item.id}>
                  <span>{item.name}</span>
                  <span className="trend-positive">
                    {item.score ?? item.trend ?? ""}
                  </span>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
