import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({ value, onChange, placeholder = "Search within this collection..." }) {
  return (
    <div className="search-input-wrapper" style={{ maxWidth: "100%", margin: "0 0 24px 0" }}>
      <Search className="search-icon" size={18} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "100%", background: "none" }}
      />
    </div>
  );
}
