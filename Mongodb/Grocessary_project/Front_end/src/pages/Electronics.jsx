import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import SidebarFilter from "../components/SidebarFilter";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";
import api from "../api/api";

export default function Electronics() {
  const { searchQuery, setSearchQuery } = useContext(AppContext);

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);



  // Filter States
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [sortOption, setSortOption] = useState("featured");

  const rawElectronics = products;
  const brands = [...new Set(products.map((p) => p.brand))];


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

        const electronicsSub = data.subCategories.filter(
          (item) => item.category.name === "Electronics"
        );

        setSubCategories(electronicsSub);

      }

    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {

      const { data } = await api.get("/product");

      if (data.success) {

        const electronics = data.products.filter(
          (item) => item.category.name === "Electronics"
        );

        setProducts(electronics);
        setAllProducts(electronics);

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
    setPriceRange([0, 10000000]);
    setSelectedRating(null);
    setSelectedSubcategory(null);
    setSearchQuery("");
  };

  const filteredProducts = rawElectronics.filter((product) => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedRating && product.rating < selectedRating) return false;
    if (
      selectedSubcategory &&
      product.subCategory?._id !== selectedSubcategory
    )
      return false;
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
            backgroundImage: "url(https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1200&q=80)",
            padding: "32px",
            height: "220px"
          }}
        >
          <div className="banner-strip-overlay" style={{ background: "linear-gradient(90deg, rgba(37, 99, 235, 0.9) 0%, rgba(124, 58, 237, 0.6) 100%)" }}></div>
          <div className="banner-strip-content">
            <span className="badge badge-discount" style={{ marginBottom: "8px", background: "#fee2e2", color: "#ef4444" }}>Tech Fest Sale</span>
            <h2 style={{ fontSize: "28px" }}>Next-Gen Tech Gadgets</h2>
            <p>Shop premium electronics from Apple, Samsung, Sony, and Microsoft with full warranties.</p>
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
            maxPriceLimit={10000000}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            onClear={handleClearFilters}
          />

          {/* Catalog */}
          <div className="store-content-pane">
            <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search iPhones, Laptops, Sony Headphones, Smart Hubs..." />

            {/* Department horizontal menu */}
            <div style={{ display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "16px", marginBottom: "20px" }}>
              <button
                onClick={() => filterSubCategory(null)}
                className={`size-badge-btn ${!selectedSubcategory ? "active" : ""}`}
              >
                All Departments
              </button>

              {subCategories.map((subcat) => (

                <button
                  key={subcat._id}
                  onClick={() => filterSubCategory(subcat._id)}
                  className={`size-badge-btn ${selectedSubcategory === subcat._id ? "active" : ""
                    }`}
                >
                  {subcat.name}
                </button>

              ))}
            </div>

            {/* Toolbar */}
            <div className="store-toolbar">
              <span>Displaying <b>{sortedProducts.length}</b> premium gadgets</span>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="store-sort-select"
              >
                <option value="featured">Featured Hardware</option>
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
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="empty-illustration">
                <h3>No gadgets matching filter parameters</h3>
                <p>Try clearing some filters or searching for another device name.</p>
                <button className="btn btn-primary" onClick={handleClearFilters}>Clear All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
