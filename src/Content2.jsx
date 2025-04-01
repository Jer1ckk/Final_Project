import React from "react";
import Card2 from "./card2"; // Importing Card2 component

// Image imports
import Pic1 from "./Gallery12.jpg";
import Pic2 from "./Gallery15.jpg";
import Pic3 from "./Gallery3.jpg";


// Data inside the same file
const cardData = [
  { image: Pic1, name: "American Gothic" },
  { image: Pic2, name: "Whistler's Mother" },
  { image: Pic3, name: "Mona Lisa" },

];

const Content2 = () => {
  return (
    <div className="gallery">
      {cardData.map((card, index) => (
        <Card2 key={index} image={card.image} name={card.name} /> // ✅ Corrected prop
      ))}
    </div>
  );
};

export default Content2;
