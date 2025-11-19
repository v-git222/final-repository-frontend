import React from "react";
import "./Subtitle.css";

export default function Subtitle({ text, dark }) {
  return (
    <p className={`subtitle ${dark ? "dark" : "light"}`}>
      {text}
    </p>
  );
}
