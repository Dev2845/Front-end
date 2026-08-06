import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { products } from "../data/products";
import SidebarFilter from "../components/SidebarFilter";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

export default function Shoes() {
  const { searchQuery, setSearchQuery } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [sortOption, setSortOption] = useState("featured");

  const rawShoes = products.filter((p) => p.category === "shoes");
  const brands = [...new Set(rawShoes.map((p) => p.brand))];
  const subcategories = [
    "Sports", "Casual", "Formal", "Running", "Sneakers", "Boots", "Sandals", "Kids Shoes"
  ];
  
  // Aggregate colors & sizes dynamically
  const sizes = ["7", "8", "9", "10", "11", "12"];
  const colors = ["#ff0000", "#ffffff", "#000000", "#ff007f", "#add8e6", "#8b5a2b", "#0000ff", "#ffd700", "#d2b48c"];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClearFilters = () => {
    setSelectedBrands([]);
    setPriceRange([0, 300]);
    setSelectedRating(null);
    setSelectedSubcategory(null);
    setSelectedSize(null);
    setSelectedColor(null);
    setSearchQuery("");
  };

  const filteredProducts = rawShoes.filter((product) => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedRating && product.rating < selectedRating) return false;
    if (selectedSubcategory && product.subcategory !== selectedSubcategory) return false;
    if (selectedSize && product.sizes && !product.sizes.includes(selectedSize)) return false;
    if (selectedColor && product.colors && !product.colors.includes(selectedColor)) return false;
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="animate-fade">
      <Breadcrumb />
      <div className="container">
        {/* Banner Section */}
        <div
          className="banner-strip mt-24"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80)",
            padding: "32px",
            height: "220px"
          }}
        >
          <div className="banner-strip-overlay" style={{ background: "linear-gradient(90deg, rgba(239, 68, 68, 0.9) 0%, rgba(124, 58, 237, 0.6) 100%)" }}></div>
          <div className="banner-strip-content">
            <span className="badge badge-discount" style={{ marginBottom: "8px", background: "#fee2e2", color: "#b91c1c" }}>Kickz Drop</span>
            <h2 style={{ fontSize: "28px" }}>Premium Shoes & Footwear</h2>
            <p>Shop sneakers, running shoes, formal dress oxfords, and winter leather boots from Nike, Adidas, and Clarks.</p>
          </div>
        </div>

        <div className="store-layout">
          {/* Sidebar */}
          <SidebarFilter
            brands={brands}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            maxPriceLimit={300}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            sizes={sizes}
            colors={colors}
            onClear={handleClearFilters}
          />

          {/* Catalog */}
          <div className="store-content-pane">
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search running trainers, air max retro, suede desert boots..." />

            {/* Department horizontal menu */}
            <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "16px", marginBottom: "20px" }}>
              <button
                onClick={() => setSelectedSubcategory(null)}
                className={`size-badge-btn ${!selectedSubcategory ? "active" : ""}`}
                style={{ whiteSpace: "nowrap" }}
              >
                All Footwear
              </button>
              {subcategories.map((subcat) => (
                <button
                  key={subcat}
                  onClick={() => setSelectedSubcategory(selectedSubcategory === subcat ? null : subcat)}
                  className={`size-badge-btn ${selectedSubcategory === subcat ? "active" : ""}`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {subcat}
                </button>
              ))}
            </div>

            {/* Toolbar */}
            <div className="store-toolbar">
              <span>Displaying <b>{sortedProducts.length}</b> premium shoes</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="store-sort-select"
              >
                <option value="featured">Featured Footwear</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated Reviews</option>
              </select>
            </div>

            {loading ? (
              <Loader count={6} />
            ) : sortedProducts.length > 0 ? (
              <div className="grid-cols-3">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-illustration">
                <h3>No footwear matching filter parameters</h3>
                <p>Try clearing some filters or searching for another shoe brand.</p>
                <button className="btn btn-primary" onClick={handleClearFilters}>Clear All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
