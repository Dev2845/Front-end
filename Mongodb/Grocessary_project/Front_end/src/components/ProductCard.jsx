import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Heart, ShoppingCart, Star } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, addToCart } = useContext(AppContext);

  const isWishlisted = wishlist.some(
    (item) => item._id === product._id
  );

  const handleWishlistToggle = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    toggleWishlist(product);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    const defaultColor =
      product.colors?.length > 0 ? product.colors[0] : "";

    const defaultSize =
      product.sizes?.length > 0 ? product.sizes[0] : "";

    addToCart(product, 1, defaultColor, defaultSize);
  };

  const renderStars = (rating = 0) => {
    const starCount = Math.round(rating);

    return (
      <div className="stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            fill={i < starCount ? "var(--accent)" : "none"}
            color="var(--accent)"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="card product-card animate-fade">
      {/* Image */}
      <div className="product-image-container">

       {product.discountPrice > 0 && (
  <span className="discount-badge-absolute">
    {Math.round(
      ((product.price - product.discountPrice) / product.price) * 100
    )}
    % OFF
  </span>
)}

        <button
          onClick={handleWishlistToggle}
          className={`wishlist-heart-btn ${isWishlisted ? "active" : ""
            }`}
        >
          <Heart
            size={18}
            fill={isWishlisted ? "#ef4444" : "none"}
          />
        </button>

        <Link to={`/product/${product._id}`}>
          <img
            src={product.images?.[0]}
            alt={product.name}
            loading="lazy"
          />
        </Link>
      </div>

      {/* Info */}
      <div className="product-info">

        <span className="product-brand">
          {product.brand}
        </span>

        <Link
          to={`/product/${product._id}`}
          className="product-name-link"
        >
          <h3>{product.name}</h3>
        </Link>

        <div className="product-rating-row">
          {renderStars(product.rating || 0)}

          <span className="rating-value">
            {product.rating || 0}
          </span>

          <span className="reviews-count">
            ({product.totalReviews} reviews)
          </span>
        </div>

        <div className="product-price-row">
          <div className="price-box">

            {product.discountPrice > 0 ? (
              <>
                <span className="price-current">
                  ₹{product.discountPrice}
                </span>

                <span className="price-original">
                  ₹{product.price}
                </span>

                <span className="discount-percent">
                  {Math.round(
                    ((product.price - product.discountPrice) / product.price) * 100
                  )}
                  % OFF
                </span>
              </>
            ) : (
              <span className="price-current">
                ₹{product.price}
              </span>
            )}

          </div>

          <button
            onClick={handleAddToCart}
            className="add-cart-btn-circle"
          >
            <ShoppingCart size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}