import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "Limited Festival Sale",
      title: "Elevate Your Living Spaces",
      desc: "Get premium discounts of up to 40% on top electronics, home entertainment gadgets, and smart wearables.",
      bgImage: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1200&q=80",
      targetPath: "/electronics"
    },
    {
      id: 2,
      tag: "Fresh Grocery Harvest",
      title: "100% Organic Farms Daily",
      desc: "Delivered straight from domestic family farms. Enjoy crunchy green greens and juicy apples at discount costs.",
      bgImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
      targetPath: "/grocery"
    },
    {
      id: 3,
      tag: "Summer Trend Drop",
      title: "Redefine Your Style Statement",
      desc: "Explore modern premium clothing collections and luxury sneakers tailored to both casual and formal affairs.",
      bgImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
      targetPath: "/clothes"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="hero-tag">{slide.tag}</span>
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            <button
              onClick={() => navigate(slide.targetPath)}
              className="btn btn-primary"
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Slide Navigation Buttons */}
      <button className="hero-nav-btn hero-prev" onClick={prevSlide} aria-label="Previous Slide">
        <ChevronLeft size={24} />
      </button>
      <button className="hero-nav-btn hero-next" onClick={nextSlide} aria-label="Next Slide">
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
