import React, { useContext, useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";
import api from "../api/api";
import Breadcrumb from "../components/Breadcrumb";
import ProductCard from "../components/ProductCard";
import { Star, Heart, ShoppingBag, ArrowLeft, Check, Shield, RefreshCw } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, wishlist, toggleWishlist, addToCart } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Gallery and Selection states
  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data } = await api.get(`/product/${id}`);

      if (data.success) {
        setProduct(data.product);

        setMainImage(data.product.images?.[0]);

        setSelectedColor(
          data.product.colors?.length ? data.product.colors[0] : ""
        );

        setSelectedSize(
          data.product.sizes?.length ? data.product.sizes[0] : ""
        );

        setQuantity(1);

        fetchRelatedProducts(data.product.category._id, data.product._id);
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }

    setLoading(false);
  };

  const fetchRelatedProducts = async (categoryId, productId) => {
    try {
      const { data } = await api.get("/product");

      if (data.success) {
        const related = data.products.filter(
          (item) =>
            item.category._id === categoryId &&
            item._id !== productId
        );

        setRelatedProducts(related);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <div className="container py-80 text-center">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-80 text-center">
        Product Not Found
      </div>
    );
  }

  const isWishlisted = wishlist.some(
    (item) => item._id === product._id
  );

  // Filter 4 related products in same category (excluding current)

  const handleAddToCart = () => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

    addToCart(product._id, quantity);
  };

  const handleBuyNow = () => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      toast.error("Please login first");
      navigate("/login");
      return;
    }

   addToCart(product._id, quantity);
    navigate("/cart");
  };

  const renderStars = (rating) => {
    const count = Math.round(rating);
    return (
      <div className="stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < count ? "var(--accent)" : "none"}
            color="var(--accent)"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="animate-fade">
      <Breadcrumb
        customPaths={[
          { name: product.category?.name },
          { name: product.name },
        ]}
      />

      <div className="container py-48">
        <Link
          to={`/${product.category?.name.toLowerCase()}`}
          className="btn btn-secondary mb-24"
          style={{ padding: "8px 16px" }}
        >
          <ArrowLeft size={16} />
          Back to {product.category.name}
        </Link>

        <div className="product-details-grid">
          {/* Gallery Section */}
          <div className="details-image-section">
            <div className="main-image-display">
              <img src={mainImage} alt={product.name} />
            </div>

            {/* Custom Gallery Thumbnails */}
            {/* <div className="thumbnail-images-row">
              <button
                className={`thumb-image-btn ${mainImage === product.images?.[0] ? "active" : ""}`}
                onClick={() => setMainImage(product.images?.[0])}
              >
                <img src={product.images?.[0]} alt={product.name} />
              </button>

            
              <button
                className={`thumb-image-btn ${mainImage === "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" ? "active" : ""}`}
                onClick={() => setMainImage("https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80")}
              >
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" alt="Alternate View 1" />
              </button>
            </div> */}
            <div className="thumbnail-images-row">

              {product.images?.map((img, index) => (
                <button
                  key={index}
                  className={`thumb-image-btn ${mainImage === img ? "active" : ""
                    }`}
                  onClick={() => setMainImage(img)}
                >
                  <img
                    src={img}
                    alt={product.name}
                  />
                </button>
              ))}

            </div>
          </div>

          {/* Details Section */}
          <div className="details-info-section">
            <div>
              <span className="details-brand">{product.brand}</span>
              <h1 className="details-title mt-8">{product.name}</h1>
            </div>

            <div className="details-rating-row">
              {renderStars(product.rating)}
              <span className="font-semibold">{product.rating}</span>
              <span style={{ color: "var(--text-muted)" }}>|</span>
              <span style={{ color: "var(--text-muted)" }}>{product.rating || 0} verified reviews</span>
            </div>

            <div className="details-price-row">

              <span className="details-price-current">
                ₹{product.discountPrice > 0 ? product.discountPrice : product.price}
              </span>

              {product.discountPrice > 0 && (
                <span className="details-price-original">
                  ₹{product.price}
                </span>
              )}

              {product.discountPrice > 0 && (
                <span className="badge badge-discount">
                  {Math.round(
                    ((product.price - product.discountPrice) / product.price) * 100
                  )}% OFF
                </span>
              )}

            </div>

            <p className="details-desc">{product.description}</p>

            {/* Colors Swatches (If applicable) */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>Select Color:</h4>
                <div className="color-swatches-grid">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-swatch-circle ${selectedColor === color ? "active" : ""}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sizes Badges (If applicable) */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>Select Size:</h4>
                <div className="size-badges-flex">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-badge-btn ${selectedSize === size ? "active" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Actions */}
            <div>
              <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "8px" }}>Quantity:</h4>
              <div className="purchase-actions-row">
                <div className="qty-counter">
                  <button onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                </div>

                <button className="btn btn-primary" onClick={handleAddToCart} style={{ flex: 1 }}>
                  <ShoppingBag size={18} /> Add to Cart
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`btn-icon ${isWishlisted ? "active" : ""}`}
                  style={{ color: isWishlisted ? "#ef4444" : "var(--text-main)", width: "44px", height: "44px" }}
                  aria-label="Toggle Wishlist"
                >
                  <Heart size={20} fill={isWishlisted ? "#ef4444" : "none"} />
                </button>
              </div>
            </div>

            <div className="purchase-actions-row">
              <button className="btn btn-accent" onClick={handleBuyNow} style={{ width: "100%" }}>
                Buy It Now
              </button>
            </div>

            {/* Warranties strip */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--border-color)" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Shield size={20} className="color-primary" />
                <span style={{ fontSize: "12px", fontWeight: 600 }}>1 Year Offical Brand Warranty</span>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <RefreshCw size={20} className="color-primary" />
                <span style={{ fontSize: "12px", fontWeight: 600 }}>30-Day Hassle-Free Exchange</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Specs Table */}
        <section className="py-48" style={{ borderTop: "1px solid var(--border-color)", marginTop: "48px" }}>
          <h2 className="mb-24" style={{ fontSize: "22px" }}>Product Specifications</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                <td style={{ padding: "12px", fontWeight: 700, width: "30%", color: "var(--text-muted)" }}>Brand manufacturer</td>
                <td style={{ padding: "12px" }}>{product.brand}</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                <td style={{ padding: "12px", fontWeight: 700, color: "var(--text-muted)" }}>Store department</td>
                <td style={{ padding: "12px" }}>
                  {product.category?.name} ({product.subCategory?.name})
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                <td style={{ padding: "12px", fontWeight: 700, color: "var(--text-muted)" }}>Stock availability</td>
                <td style={{ padding: "12px" }}>
                  <span className="badge badge-stock">{product.stock > 0 ? `${product.stock} items remaining` : "Out of Stock"}</span>
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                <td style={{ padding: "12px", fontWeight: 700, color: "var(--text-muted)" }}>Rating score</td>
                <td style={{ padding: "12px" }}>{product.rating} / 5 stars based on verified customers</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Related Products Carousel Grid */}
        {relatedProducts.length > 0 && (
          <section className="py-48" style={{ borderTop: "1px solid var(--border-color)" }}>
            <h2 className="section-title mb-24" style={{ fontSize: "22px" }}>You May Also Like</h2>
            <div className="grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p._id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
