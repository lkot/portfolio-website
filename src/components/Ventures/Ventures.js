import React from "react";
import "./Ventures.css";
import VenturesCarousel from "./VenturesCarousel";

const Ventures = () => {
  return (
    <div id="ventures" className="ventures">
      <h1>Others Ventures</h1>
      <div className="container">
        <div className="ventures-content">
          <VenturesCarousel />
        </div>
      </div>
    </div>
  );
};

export default Ventures;
