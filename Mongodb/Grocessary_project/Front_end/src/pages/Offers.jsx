import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Breadcrumb from "../components/Breadcrumb";
import { Tag, Clock, Check, Copy } from "lucide-react";

export default function Offers() {
  const { addToast } = useContext(AppContext);
  const [copiedCode, setCopiedCode] = useState(null);

  // Countdown timer calculation
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 48, seconds: 23 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    addToast(`Coupon ${code} copied to clipboard!`, "success");
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const discountProducts = products.filter((p) => p.discount).slice(4, 8);

  const activeCoupons = [
    { code: "SAVE20", desc: "Get flat 20% discount on all checkout values.", condition: "Valid on orders over $50" },
    { code: "FREESHIP", desc: "Receive free logistics shipping on heavy orders.", condition: "No minimum purchase required" },
    { code: "TECH15", desc: "Claim 15% discount on laptops and mobiles category.", condition: "Applies to electronics only" },
    { code: "FRESH10", desc: "Get 10% discount on dairy and farm groceries.", condition: "Valid on grocery store items" }
  ];

  return (
    <div className="animate-fade">
      <Breadcrumb />
      
      <div className="container py-48">
        {/* Banner with Ticking Countdown */}
        <div
          className="banner-strip mt-24"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80)",
            padding: "40px",
            height: "260px"
          }}
        >
          <div className="banner-strip-overlay" style={{ background: "linear-gradient(90deg, rgba(124, 58, 237, 0.9) 0%, rgba(37, 99, 235, 0.7) 100%)" }}></div>
          
          <div className="banner-strip-content">
            <span className="badge badge-discount" style={{ background: "#fee2e2", color: "#b91c1c", marginBottom: "12px" }}>FLASH SALE DEALS</span>
            <h2 style={{ fontSize: "32px", marginBottom: "8px" }}>Festive Lighting Sale</h2>
            <p>Hurry! Deals are changing rapidly. Save major bucks on shoes, clothes, and high speed gadgets.</p>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "20px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              zIndex: 3,
              color: "#ffffff"
            }}
          >
            <span style={{ fontSize: "11px", display: "flex", gap: "6px", alignItems: "center", textTransform: "uppercase", fontWeight: "700" }}>
              <Clock size={12} /> Time Left
            </span>
            <div style={{ display: "flex", gap: "12px", fontSize: "24px", fontWeight: "800" }}>
              <div>{timeLeft.hours.toString().padStart(2, "0")}h</div>
              <div>:</div>
              <div>{timeLeft.minutes.toString().padStart(2, "0")}m</div>
              <div>:</div>
              <div style={{ color: "var(--accent)" }}>{timeLeft.seconds.toString().padStart(2, "0")}s</div>
            </div>
          </div>
        </div>

        {/* Coupons Grid */}
        <section className="py-48">
          <h2 className="section-title mb-24" style={{ fontSize: "24px" }}>🎟️ Claim Active Discount Coupons</h2>
          <div className="grid-cols-2">
            {activeCoupons.map((coupon) => (
              <div key={coupon.code} className="card glass-card p-24 flex-between" style={{ padding: "20px", position: "relative" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <div className="add-cart-btn-circle" style={{ width: "44px", height: "44px", background: "rgba(37, 99, 235, 0.1)", color: "var(--primary)", cursor: "default" }}>
                    <Tag size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "18px", fontWeight: 800 }}>{coupon.code}</h3>
                    <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>{coupon.desc}</p>
                    <span style={{ fontSize: "11px", fontStyle: "italic", color: "var(--text-muted)" }}>{coupon.condition}</span>
                  </div>
                </div>

                <button
                  className="btn btn-secondary"
                  onClick={() => handleCopyCode(coupon.code)}
                  style={{ display: "flex", gap: "6px", fontSize: "12px", padding: "8px 14px" }}
                >
                  {copiedCode === coupon.code ? (
                    <>
                      <Check size={14} style={{ color: "#10b981" }} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy Code
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Highlight deals */}
        <section className="py-48" style={{ borderTop: "1px solid var(--border-color)" }}>
          <h2 className="section-title mb-24" style={{ fontSize: "24px" }}>🔥 Hot Promo Products</h2>
          <div className="grid-cols-4">
            {discountProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
