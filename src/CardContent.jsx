import React from "react";
import "./index.css";  // Ensure the correct path
import Card2 from "./card2";

// Image imports
import Pic1 from "./Gallery12.jpg";
import Pic2 from "./Gallery15.jpg";
import Pic3 from "./Gallery3.jpg";
import Pic4 from "./Gallery9.jpg";


// Data inside the same file
const cardData = [
  {
    image: Pic1,
    name: "Gallery Image 1",
   
  },
  {
    image: Pic2,
    name: "Gallery Image 2",

  },
  {
    image: Pic3,
    name: "Gallery Image 3",

  },
  {
    image: Pic4,
    name: "Gallery Image 4",

  },
];

const CardContent = () => {
  return (
    <div className="gallery">
      {cardData.map((card, index) => (
        <Card2
          key={index}
          imageSrc={card.image}
          name={card.name}
        />
      ))}
    </div>
  );
};

export default CardContent;
