import React from "react";
import Profile1 from "./pf1.jpg"; // Import your images
import Profile2 from "./pf2.jpg"; // Import your images
import "./CardAboutUs.css"; // Import your CSS file

const Card = ({ image, name }) => {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={image} alt={name} className="card-image" />
      </div>
      <h3 className="card-name">{name}</h3>
    </div>
  );
};

// Example Usage
function CardAboutUS() {
  return (
    <div className="card-container">
      <Card image={Profile1} name="Jin Hong" />
      <Card image={Profile2} name="Davin" />
    </div>
  );
}

export default CardAboutUS;
