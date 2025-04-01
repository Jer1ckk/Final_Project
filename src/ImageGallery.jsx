import React from "react";
import "./ImageGallery.css";
import art1 from "./Artwork1.jpg";
import art2 from "./Artwork2.jpg";

function ImageGallery() {
  return (
    <div className="image-gallery">
      <div className="image-card">
        <img src={art1} alt="Artwork 1" />
        <p className="caption">Water Lilies</p>
      </div>
      <div className="image-card">
        <img src={art2} alt="Artwork 2" />
        <p className="caption">The Great Wave off Kanagawa</p>
      </div>
    </div>
  );
};

export default ImageGallery;
