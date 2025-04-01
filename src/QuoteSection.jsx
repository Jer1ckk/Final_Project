import React, { useState, useEffect } from "react";
import "./QuoteSection.css";

const QuoteSection = () => {
  const quotes = [
    {
      text: "“Just what your toiletry bag didn’t know it was missing.”",
      author: "Forbes",
    },
    {
      text: "“A game-changer for everyday essentials.”",
      author: "TechCrunch",
    },
    {
      text: "“The perfect addition to your travel gear.”",
      author: "The Verge",
    },
    {
      text: "“A must-have for every adventurer.”",
      author: "Wired",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prevQuote) => {
        const currentIndex = quotes.indexOf(prevQuote);
        const nextIndex = (currentIndex + 1) % quotes.length;
        return quotes[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="quote-section">
      <p className="quote-text">{currentQuote.text}</p>
      <p className="quote-author">
        <strong>{currentQuote.author}</strong>
      </p>
    </div>
  );
};

export default QuoteSection;
