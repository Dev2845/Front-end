import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useContext(AppContext);

  const handleMoveToCart = (product) => {
    // Select default options
    const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : "";
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : "";
    addToCart(product, 1, defaultColor, defaultSize);
    toggleWishlist(product); // Remove from wishlist on move
  };

  return (
    <div className="animate-fade">
      <Breadcrumb />
      
      <div className="container py-48">
        <h1 className="mb-24" style={{ fontSize: "32px", fontWeight: "800" }}>My Wishlist</h1>

        {wishlist.length > 0 ? (
          <div className="grid-cols-4">
            {wishlist.map((product) => (
              <div key={product.id} className="card product-card animate-fade">
                <div className="product-image-container">
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="wishlist-heart-btn active"
                    aria-label="Remove from wishlist"
                  >
                    <Heart size={18} fill="#ef4444" />
                  </button>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                </div>

                <div className="product-info">
                  <span className="product-brand">{product.brand}</span>
                  <Link to={`/product/${product.id}`} className="product-name-link">
                    <h3>{product.name}</h3>
                  </Link>
                  <span className="price-current" style={{ display: "block", margin: "8px 0 16px 0" }}>
                    ${product.price.toFixed(2)}
                  </span>
                  
                  <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="btn btn-primary"
                      style={{ flex: 1, padding: "10px", gap: "6px", fontSize: "12px" }}
                    >
                      <ShoppingCart size={14} /> Move to Cart
                    </button>
                    <button
                      onClick={() => toggleWishlist(product)}
                      className="btn btn-secondary"
                      style={{ padding: "10px", color: "#ef4444" }}
                      title="Delete from list"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-illustration card glass-card">
            <div className="category-emoji" style={{ fontSize: "64px" }}>🖤</div>
            <h2>Your wishlist is empty</h2>
            <p>Save items you like here to purchase them later.</p>
            <Link to="/" className="btn btn-primary">Discover Hot Deals</Link>
          </div>
        )}
      </div>
    </div>
  );
}
