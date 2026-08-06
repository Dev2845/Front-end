import React from "react";
import { useNavigate } from "react-router-dom";

export default function Banner({
  title = "Mega Summer Clearance Sale",
  subtitle = "Get flat 25% discount on all premium apparel using code SAVE25 at checkout.",
  buttonText = "View Clothing Deals",
  image = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
  path = "/clothes"
}) {
  const navigate = useNavigate();

  return (
    <div className="banner-strip" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-strip-overlay"></div>
      <div className="banner-strip-content">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="banner-strip-action">
        <button className="btn btn-accent" onClick={() => navigate(path)}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
