import React from "react";
import "./Card.css"; // Ensure you have a separate CSS file for styles

const Card = ({ imageSrc, name, link }) => {
  const handleClick = () => {
    console.log(`Card clicked: ${name} - ${link}`);
  };

  return (
    <a
      href={link}
      className="card"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <img className="card-image" src={imageSrc} alt={name} />
      <div className="card-description">
        <h3>{name}</h3>
      </div>
    </a>
  );
};

export default Card;
