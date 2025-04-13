import React, { useState, useEffect } from "react";

export const Header = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = props.data || [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) return <div>Loading...</div>;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const { title, paragraph, image } = slides[currentSlide];

  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header id="header">
      <div className="intro" style={backgroundStyle}>
        <div className="overlay">
        <div className="intro-center left-align">
  <div className="intro-content-wrapper">
    <div className="intro-text fade-in">
      <h1 className="intro-title">
        {title.split(" ").map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </h1>
      <p className="multi-line-text">{paragraph}</p>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </header>
  );
};
