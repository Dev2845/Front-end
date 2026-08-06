import React from "react";

const PlaylistCard = ({ name, creator, songCount }) => {
  return (
    <div
      style={{
        width: "300px",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        margin: "20px auto",
      }}
    >
      <h2>{name}</h2>
      <p>
        <strong>Creator:</strong> {creator}
      </p>
      <p>
        <strong>Total Songs:</strong> {songCount}
      </p>
    </div>
  );
};

export default PlaylistCard;