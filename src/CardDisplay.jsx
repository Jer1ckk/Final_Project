import React from 'react';
import Card from './Card';
import cardData from './data';  // Import the card data
import './index.css';


const CardDisplay = () => {
  return (
    <div className="gallery">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          name={card.name}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardDisplay;
