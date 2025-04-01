import React from "react";
import Card from "./Card";  // Ensure the correct path

import "./index.css";  // Ensure the correct path

// Image imports
import Pic1 from "./Gallery12.jpg";
import Pic2 from "./Gallery15.jpg";
import Pic3 from "./Gallery3.jpg";
import Pic4 from "./Gallery9.jpg";

// Data inside the same file
const cardData = [
  {
    imageSrc: Pic1,
    name: "Gallery Image 1",
    description: "This is the first image in the gallery.",
  },
  {
    imageSrc: Pic2,
    name: "Gallery Image 2",
    description: "This is the second image in the gallery.",
  },
  {
    imageSrc: Pic3,
    name: "Gallery Image 3",
    description: "This is the third image in the gallery.",
  },
  {
    imageSrc: Pic4,
    name: "Gallery Image 4",
    description: "This is the fourth image in the gallery.",
  },
];

const CardContent = () => {
  return (
    <div className="gallery">
      {cardData.map((card, index) => (
        <Card
          key={index}
          imageSrc={card.imageSrc}
          name={card.name}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardContent;
