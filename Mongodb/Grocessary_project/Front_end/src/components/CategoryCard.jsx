import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ title, countText, emoji, path }) {
  const navigate = useNavigate();

  return (
    <div className="category-card" onClick={() => navigate(path)}>
      <div className="category-emoji">{emoji}</div>
      <h3>{title}</h3>
      <span>{countText}</span>
    </div>
  );
}
