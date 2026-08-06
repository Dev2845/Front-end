import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { products } from "../data/products";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import { Star, ShieldCheck, Truck, RotateCcw, Award } from "lucide-react";
import api from "../api/api";


export default function Home() {
  const { wishlist } = useContext(AppContext);

  // Filter different sets of products for featured displays
  const flashSaleProducts = products.filter(p => p.discount).slice(0, 4);
  const bestSellers = products.filter(p => p.rating >= 4.8).slice(4, 8);
  const newArrivals = products.slice(10, 14);
  const trendingProducts = products.filter(p => p.reviewsCount > 200).slice(0, 4);

  const categories = [
    { title: "Grocery & Greens", emoji: "🍎", countText: "20 items", path: "/grocery" },
    { title: "Consumer Tech", emoji: "💻", countText: "20 items", path: "/electronics" },
    { title: "Modern Fashion", emoji: "✨", countText: "20 items", path: "/fashion" },
    { title: "Chic Apparel", emoji: "🧥", countText: "20 items", path: "/clothes" },
    { title: "Footwear Outlet", emoji: "👟", countText: "20 items", path: "/shoes" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sophia Martinez",
      role: "Verified Purchaser",
      text: "The delivery of fresh groceries was incredibly fast, and the packaging was excellent. Highly recommend the Fuji apples and organic spinach!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Vance",
      role: "Gadget Enthusiast",
      text: "Bought the Sony WH-1000XM5 headphones here. Switched colors smoothly, and the customer assistance chat helped me get a $20 coupon code instantly!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Clara Dupont",
      role: "Stylist",
      text: "The linen shirt and white sneakers match perfectly. Premium fabrics and quick exchanges. This is my go-to online fashion store.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
      rating: 4
    }
  ];

  return (
    <div className="container animate-fade">
      {/* Hero Banner Section */}
      <Hero />

      {/* Categories Department Grid */}
      <section className="py-48">
        <div className="section-header text-center">
          <h2 className="section-title">Shop by Departments</h2>
          <p className="section-subtitle">Explore our premium catalog collections</p>
        </div>
        <div className="category-grid">
          {categories.map((cat, i) => (
            <CategoryCard key={i} {...cat} />
          ))}
        </div>
      </section>

      {/* Flash Sale Grid */}
      <section className="py-48" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="section-header flex-between">
          <div>
            <h2 className="section-title">⚡ Lightning Flash Deals</h2>
            <p className="section-subtitle">Grab these high discount deals before they expire</p>
          </div>
          <span style={{ fontSize: "14px", fontWeight: "700", color: "var(--secondary)" }}>Limited Stock</span>
        </div>
        <div className="grid-cols-4">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promos Banner */}
      <Banner />

      {/* Best Sellers Grid */}
      <section className="py-48" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="section-header text-center">
          <h2 className="section-title">🔥 Best Sellers</h2>
          <p className="section-subtitle">The most highly-rated products in our mall</p>
        </div>
        <div className="grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Arrivals & Trending split grids */}
      <section className="py-48" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="grid-cols-2">
          <div>
            <h3 className="section-title mb-24" style={{ fontSize: "22px" }}>🆕 New Catalog Arrivals</h3>
            <div className="grid-cols-2">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="section-title mb-24" style={{ fontSize: "22px" }}>📈 Trending Searches</h3>
            <div className="grid-cols-2">
              {trendingProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-48 card glass-card" style={{ padding: "40px", margin: "48px 0" }}>
        <div className="section-header text-center">
          <h2 className="section-title">Why Shop at SmartMall?</h2>
          <p className="section-subtitle">We prioritize quality, speed, and premium support</p>
        </div>
        <div className="grid-cols-4 text-center">
          <div className="flex-column flex-center p-24" style={{ gap: "12px" }}>
            <div className="add-cart-btn-circle" style={{ width: "50px", height: "50px", cursor: "default" }}>
              <Truck size={22} />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: "700" }}>Express Logistics</h3>
            <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>Same-day delivery on groceries, 2-day express on apparel and gadgets.</p>
          </div>
          <div className="flex-column flex-center p-24" style={{ gap: "12px" }}>
            <div className="add-cart-btn-circle" style={{ width: "50px", height: "50px", cursor: "default" }}>
              <ShieldCheck size={22} />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: "700" }}>Secured Checkouts</h3>
            <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>Encrypted payment gateways support Visa, Mastercard, PayPal, and Apple Pay.</p>
          </div>
          <div className="flex-column flex-center p-24" style={{ gap: "12px" }}>
            <div className="add-cart-btn-circle" style={{ width: "50px", height: "50px", cursor: "default" }}>
              <RotateCcw size={22} />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: "700" }}>30-Day Returns</h3>
            <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>Hassle-free return policy. Return items easily from your profile console.</p>
          </div>
          <div className="flex-column flex-center p-24" style={{ gap: "12px" }}>
            <div className="add-cart-btn-circle" style={{ width: "50px", height: "50px", cursor: "default" }}>
              <Award size={22} />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: "700" }}>Premium Quality</h3>
            <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>Curated premium products from Apple, Nike, Sony, Zara, and local farms.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-48" style={{ borderTop: "1px solid var(--border-color)" }}>
        <div className="section-header text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Real experiences from our active shoppers</p>
        </div>
        <div className="review-grid">
          {testimonials.map((test) => (
            <div key={test.id} className="card review-card glass-card">
              <div className="stars mb-8" style={{ gap: "2px" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < test.rating ? "var(--accent)" : "none"}
                    color="var(--accent)"
                  />
                ))}
              </div>
              <p className="review-text">"{test.text}"</p>
              <div className="review-user">
                <img src={test.avatar} alt={test.name} className="review-avatar" />
                <div>
                  <h4 className="review-name">{test.name}</h4>
                  <span className="review-role">{test.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
