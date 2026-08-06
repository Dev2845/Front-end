import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import api from "../api/api";
import SidebarFilter from "../components/SidebarFilter";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

export default function Grocery() {
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);


  // Filter States
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [sortOption, setSortOption] = useState("featured");

  // Fetch only grocery products
  const rawGroceryProducts = products;

  const brands = [...new Set(products.map((p) => p.brand))];
  // Read search query from URL (e.g. from navbar search redirect)
  useEffect(() => {
    fetchSubCategories();
    fetchProducts();

    const timer = setTimeout(() => setLoading(false), 500);

    return () => clearTimeout(timer);
  }, []);



  const fetchSubCategories = async () => {
    try {

      const { data } = await api.get("/subcategory");

      if (data.success) {

        const grocerySub = data.subCategories.filter(
          (item) => item.category.name === "Grocery"
        );

        setSubCategories(grocerySub);

      }

    } catch (err) {
      console.log(err);
    }
  };



  const fetchProducts = async () => {
    try {

      const { data } = await api.get("/product");

      if (data.success) {

        const grocery = data.products.filter(
          (item) => item.category.name.toLowerCase() === "grocery"
        );

        setProducts(grocery);

        setAllProducts(grocery);

        setLoading(false);

      }

    } catch (err) {
      console.log(err);
    }
  };



  const filterSubCategory = (id) => {

    setSelectedSubcategory(id);

    if (!id) {

      setProducts(allProducts);

      return;

    }

    const filtered = allProducts.filter(
      (item) => item.subCategory?._id === id
    );

    setProducts(filtered);

  };

  const handleClearFilters = () => {

    setSelectedBrands([]);

    setPriceRange([0, 50000]);

    setSelectedRating(null);

    setSelectedSubcategory(null);

    setProducts(allProducts);

    setSearchQuery("");

  };

  // Filter Logic
  const filteredProducts = rawGroceryProducts.filter((product) => {
    // Brand search
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    // Price range
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    // Rating range
    if (selectedRating && product.rating < selectedRating) return false;
    // Subcategory range
    if (
      selectedSubcategory &&
      product.subCategory?._id !== selectedSubcategory
    )
      return false;
    // Search Term query
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0; // Featured / default
  });

  return (
    <div className="animate-fade">
      <Breadcrumb />
      <div className="container">
        {/* Banner Section */}
        <div
          className="banner-strip mt-24"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80)",
            padding: "32px",
            height: "220px"
          }}
        >
          <div className="banner-strip-overlay" style={{ background: "linear-gradient(90deg, rgba(16, 185, 129, 0.9) 0%, rgba(5, 150, 105, 0.5) 100%)" }}></div>
          <div className="banner-strip-content">
            <span className="badge badge-discount" style={{ marginBottom: "8px" }}>Weekly Fresh Promo</span>
            <h2 style={{ fontSize: "28px" }}>Organic Fresh Produce</h2>
            <p>Get up to 20% discount on farm-fresh organic greens and seasonal apples.</p>
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
            maxPriceLimit={50000}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            onClear={handleClearFilters}
          />

          {/* Catalog content */}
          <div className="store-content-pane">
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search fruits, dairy, bakery, beverages..." />

            {/* Subcategory selectors */}
            <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "16px", marginBottom: "20px" }}>
              <button
                onClick={() => filterSubCategory(null)}
                className={`size-badge-btn ${!selectedSubcategory ? "active" : ""}`}
                style={{ whiteSpace: "nowrap" }}
              >
                All Departments
              </button>
              {subCategories.map((subcat) => (
                <button
                  key={subcat._id}
                  onClick={() => filterSubCategory(subcat._id)}
                  className={`size-badge-btn ${selectedSubcategory === subcat._id ? "active" : ""
                    }`}
                  style={{ whiteSpace: "nowrap" }}
                >
                  {subcat.name}
                </button>
              ))}
            </div>

            {/* Toolbar */}
            <div className="store-toolbar">
              <span>Displaying <b>{sortedProducts.length}</b> premium groceries</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="store-sort-select"
              >
                <option value="featured">Featured Deals</option>
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
                  <ProductCard
                    key={product._id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-illustration">
                <h3>No groceries matching filter parameters</h3>
                <p>Try clearing some filters or searching for another term.</p>
                <button className="btn btn-primary" onClick={handleClearFilters}>Clear All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
