import React from "react";
import "./Card2.css"; // For styling

const Card2 = ({ image, name }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-name">{name}</h3>
    </div>
  );
};

export default Card2;
