import React from "react";
import "./CategoryOverlay.css";

const CategoryOverlay = () => {
  return (
    <>
      <div className="purple-overlay-container">
        <div className="purple-tooltip-box">
          <span className="purple-tooltip-text">
            Please select your interested topic to make our
          </span>
        </div>
        <div className="purple-arrow-pointer" />
      </div>

      <div className="yellow-overlay-container">
        <div className="yellow-tooltip-box">
          <span className="yellow-tooltip-text">
            Select continue to complete this step & go to next one
          </span>
        </div>
        <div className="yellow-arrow-pointer" />
      </div>
    </>
  );
};

export default CategoryOverlay;
