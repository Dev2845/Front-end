import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div
      style={{
        width: "220px",
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img src={image} alt={title} width="180" />
      <h3>{title}</h3>
      <h2>₹{price}</h2>
    </div>
  );
};

export default ProductCard;