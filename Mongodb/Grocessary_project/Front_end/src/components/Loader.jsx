import React from "react";

export default function Loader({ count = 8 }) {
  const skeletons = Array.from({ length: count });

  return (
    <div className="grid-cols-4 animate-fade" style={{ margin: "24px 0" }}>
      {skeletons.map((_, i) => (
        <div key={i} className="card" style={{ height: "360px", padding: "16px" }}>
          <div className="skeleton" style={{ width: "100%", height: "200px", marginBottom: "16px" }}></div>
          <div className="skeleton" style={{ width: "40%", height: "16px", marginBottom: "12px" }}></div>
          <div className="skeleton" style={{ width: "85%", height: "20px", marginBottom: "16px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="skeleton" style={{ width: "30%", height: "24px" }}></div>
            <div className="skeleton" style={{ width: "38px", height: "38px", borderRadius: "50%" }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
