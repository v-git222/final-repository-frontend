import React, { useState } from "react";
import "./categorySelector.css";
import { FiCheckCircle, FiShoppingCart, FiHeart, FiCpu, FiGrid } from "react-icons/fi";
import { MdRealEstateAgent } from "react-icons/md";
import { GiByzantinTemple } from "react-icons/gi";

const categoriesData = [
  { id: 1, name: "Technology", icon: <FiCpu />, count: 634, color: "#7D6BFF" },
  { id: 2, name: "Real Estate", icon: <MdRealEstateAgent />, count: 634, color: "#4DD4AC" },
  { id: 3, name: "Healthcare", icon: <FiHeart />, count: 634, color: "#FFAFAF" },
  { id: 4, name: "AI & Machine Learning", icon: <GiByzantinTemple />, count: 634, color: "#BFA3FF" },
  { id: 5, name: "E-Commerce", icon: <FiShoppingCart />, count: 634, color: "#4EC4FF" },
  { id: 6, name: "Events & Entertainment", icon: <FiGrid />, count: 634, color: "#F5D059" },
  { id: 7, name: "Fashion & Beauty", icon: <GiByzantinTemple />, count: 634, color: "#FFB6E1" },
];

const CategorySelector = () => {
  const [selected, setSelected] = useState([]);

  const toggleCategory = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="category-wrapper">

      {/* Stepper */}
      <div className="stepper">
        <div className="step done">
          <FiCheckCircle size={22} />
          <span>Setup</span>
        </div>

        <div className="line active"></div>

        <div className="step active">
          <div className="circle">2</div>
          <span>Pickup Category</span>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle">3</div>
          <span>Start Exploring</span>
        </div>
      </div>

      {/* Tooltip */}
      <div className="tooltip-box animate-tooltip">
        Please select your interested topic to make our suggestions better
      </div>

      {/* Title */}
      <h2 className="title">Pickup your Category to start</h2>

      {/* Arrow */}
      <div className="arrow-animated"></div>

      {/* CATEGORY GRID */}
      <div className="categories-grid">
        {categoriesData.map((cat) => (
          <div
            key={cat.id}
            className={`category-card ${selected.includes(cat.id) ? "active" : ""}`}
            onClick={() => toggleCategory(cat.id)}
          >
            <div className="category-left">
              <div className="category-icon" style={{ background: cat.color }}>
                {cat.icon}
              </div>

              <div className="category-text">
                <h4>{cat.name}</h4>
                <p>{cat.count} Opportunities</p>
              </div>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                checked={selected.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              <span className="slider"></span>
            </label>
          </div>
        ))}

        {/* Empty Card */}
        <div className="category-card empty-card">
          <FiGrid size={32} opacity={0.4} />
          <p>Browse Category</p>
        </div>
      </div>

      {/* Continue */}
      <div className="continue-box animate-continue">
        Select continue to <b>complete this step</b> & go to next one
      </div>

      {/* Footer */}
      <div className="footer-actions">
        <span className="clear">Clear all</span>
        <button className="btn-continue">Continue</button>
      </div>
    </div>
  );
};

export default CategorySelector;
