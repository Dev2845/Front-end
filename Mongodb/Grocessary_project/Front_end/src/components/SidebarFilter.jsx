import React from "react";
import { Star, RefreshCw } from "lucide-react";

export default function SidebarFilter({
  brands = [],
  selectedBrands = [],
  setSelectedBrands,
  priceRange = [0, 2000],
  setPriceRange,
  maxPriceLimit = 2000,
  selectedRating = null,
  setSelectedRating,
  selectedColor = null,
  setSelectedColor,
  selectedSize = null,
  setSelectedSize,
  colors = [],
  sizes = [],
  onClear
}) {
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <aside className="sidebar-filter-pane glass-card animate-fade">
      <div className="filter-group flex-between" style={{ borderBottom: "1.5px solid var(--border-color)", paddingBottom: "12px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "800" }}>Filter Search</h3>
        <button onClick={onClear} className="btn-theme-toggle" title="Reset Filters" style={{ width: "32px", height: "32px" }}>
          <RefreshCw size={14} />
        </button>
      </div>

      {/* Brand filters */}
      {brands.length > 0 && (
        <div className="filter-group">
          <h4>Brands</h4>
          {brands.map((brand) => (
            <label key={brand} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      )}

      {/* Price Slider */}
      <div className="filter-group">
        <div className="flex-between">
          <h4>Price Limit</h4>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--primary)" }}>
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max={maxPriceLimit}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          className="range-slider"
        />
        <div className="flex-between" style={{ fontSize: "10px", color: "var(--text-muted)", marginTop: "4px" }}>
          <span>$0</span>
          <span>${maxPriceLimit}</span>
        </div>
      </div>

      {/* Size filters */}
      {sizes.length > 0 && (
        <div className="filter-group">
          <h4>Sizes</h4>
          <div className="size-badges-flex">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                className={`size-badge-btn ${selectedSize === size ? "active" : ""}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color filters */}
      {colors.length > 0 && (
        <div className="filter-group">
          <h4>Colors</h4>
          <div className="color-swatches-grid">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(selectedColor === color ? null : color)}
                className={`color-swatch-circle ${selectedColor === color ? "active" : ""}`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      )}

      {/* Rating Filters */}
      <div className="filter-group">
        <h4>Customer Review</h4>
        {[4, 3, 2].map((stars) => (
          <label
            key={stars}
            className="checkbox-label"
            style={{ display: "flex", gap: "8px", cursor: "pointer" }}
            onClick={() => setSelectedRating(selectedRating === stars ? null : stars)}
          >
            <input
              type="radio"
              name="rating-filter"
              checked={selectedRating === stars}
              readOnly
            />
            <div className="stars" style={{ gap: "1px" }}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star
                  key={idx}
                  size={12}
                  fill={idx < stars ? "var(--accent)" : "none"}
                  color="var(--accent)"
                />
              ))}
            </div>
            <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>& Up</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
