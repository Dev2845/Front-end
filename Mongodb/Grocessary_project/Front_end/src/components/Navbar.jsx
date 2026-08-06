import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  ShoppingBag, Heart, User, Sun, Moon, Search, Menu, X, ChevronDown, Percent, Info, Mail
} from "lucide-react";

export default function Navbar() {
  const {
    theme,
    toggleTheme,
    cart,
    wishlist,
    user,
    logout,
    searchQuery,
    setSearchQuery
  } = useContext(AppContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Find what category matches best or navigate to general search layout
      navigate(`/grocery?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleCategory = (category) => {
    navigate(`/${category}`);
  };

  return (
    <header className="sticky-nav-wrapper">
      <nav className="navbar-container glass-card">
        <div className="nav-top container">
          {/* Logo */}
          <Link to="/" className="nav-brand">
            <span className="logo-gradient">SmartMall</span>
          </Link>

          {/* Search Bar */}
          <form className="nav-search-form" onSubmit={handleSearchSubmit}>
            <div className="search-input-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search premium products, brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">Search</button>
            </div>
          </form>

          {/* Action Icons */}
          <div className="nav-actions">
            <button className="btn-theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <Link to="/wishlist" className="action-icon-link" aria-label="Wishlist">
              <Heart size={22} />
              {wishlistCount > 0 && <span className="action-badge">{wishlistCount}</span>}
            </Link>

            <Link to="/cart" className="action-icon-link" aria-label="Shopping Cart">
              <ShoppingBag size={22} />
              {cartCount > 0 && <span className="action-badge-cart">{cartCount}</span>}
            </Link>

            {user ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px"
                }}
              >
                <Link
                  to="/profile"
                  className="profile-btn-link"
                >
                  <img
                    src={
                      user.profileImage ||
                      user.avatar ||
                      "https://via.placeholder.com/40"
                    }
                    alt="User"
                    className="user-avatar-sm"
                  />

                  <span className="user-name-sm">
                    {user.name}
                  </span>
                </Link>

                <button
                  onClick={handleLogout}
                  style={{
                    background: "#ef4444",
                    color: "#fff",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "600"
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="login-btn-link">
                <User size={18} />
                <span>Sign In</span>
              </Link>
            )}

            {/* Mobile Hamburger */}
            <button className="mobile-menu-trigger" onClick={toggleMobileMenu} aria-label="Toggle Navigation Menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Lower Navigation Links */}
        <div className="nav-bottom">
          <div className="container nav-links-row">
            {/* Categories Mega Dropdown */}
            <div className="category-dropdown-wrapper">
              <button className="category-dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <span>Explore Departments</span>
                <ChevronDown size={16} className={`chevron-icon ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen && (
                <div className="category-mega-menu glass-card animate-fade">
                  <div className="mega-menu-grid">
                    <div className="mega-column">
                      <h4>E-Mall Categories</h4>
                      <Link to="/grocery" oonClick={() => handleCategory("grocery")}>🍎 Grocery & Vegetables</Link>
                      <Link to="/electronics" onClick={() => handleCategory("electronics")}>💻 Electronics & Gadgets</Link>
                      <Link to="/fashion" onClick={() => handleCategory("fashion")}>✨ Fashion Collections</Link>
                      <Link to="/clothes" onClick={() => handleCategory("clothes")}>🧥 Apparel & Clothing</Link>
                      <Link to="/shoes" onClick={() => handleCategory("shoes")}>👟 Premium Footwear</Link>
                    </div>
                    <div className="mega-column">
                      <h4>Hot Offers</h4>
                      <Link to="/offers" onClick={() => setDropdownOpen(false)}>🔥 Today's Lightning Deals</Link>
                      <Link to="/offers" onClick={() => setDropdownOpen(false)}>🎟️ Coupon Codes</Link>
                      <Link to="/offers" onClick={() => setDropdownOpen(false)}>📦 Bulk Order Offers</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Flat Navigation */}
            <div className="main-nav-links">
              <Link to="/">Home</Link>
              <Link to="/grocery">Grocery</Link>
              <Link to="/electronics">Electronics</Link>
              <Link to="/fashion">Fashion</Link>
              <Link to="/clothes">Clothes</Link>
              <Link to="/shoes">Shoes</Link>
              <Link to="/offers" className="highlight-offers"><Percent size={14} /> Offers</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-card animate-fade">
          <div className="mobile-search-wrapper">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          <div className="mobile-drawer-links">
            <Link to="/" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/grocery" onClick={toggleMobileMenu}>Grocery Store</Link>
            <Link to="/electronics" onClick={toggleMobileMenu}>Electronics Depot</Link>
            <Link to="/fashion" onClick={toggleMobileMenu}>Fashion Hub</Link>
            <Link to="/clothes" onClick={toggleMobileMenu}>Clothing</Link>
            <Link to="/shoes" onClick={toggleMobileMenu}>Footwear Outlet</Link>
            <Link to="/offers" onClick={toggleMobileMenu}><Percent size={16} /> Hot Offers</Link>
            <Link to="/about" onClick={toggleMobileMenu}><Info size={16} /> About SmartMall</Link>
            <Link to="/contact" onClick={toggleMobileMenu}><Mail size={16} /> Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
}
