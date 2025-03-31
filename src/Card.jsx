import React from 'react';
import './Card.css'; // Ensure you have a separate CSS file for styles

const Card = ({ imageSrc, name, description }) => {
  return (
    <div className="card">
      <img className="card-image" src={imageSrc} alt={name} />
      <div className="card-description">
        <h3>{name}</h3> {/* Display name */}
        <p>{description}</p> {/* Display description */}
      </div>
    </div>
  );
};

export default Card;
