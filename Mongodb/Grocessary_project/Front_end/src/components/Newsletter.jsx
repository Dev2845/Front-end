import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Mail, Send } from "lucide-react";

export default function Newsletter() {
  const { addToast } = useContext(AppContext);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      addToast(`Thank you! subscribed ${email} for smart updates.`, "success");
      setEmail("");
    }
  };

  return (
    <div className="card glass-card p-24 text-center" style={{ margin: "48px 0", padding: "40px 24px" }}>
      <div className="flex-center" style={{ marginBottom: "16px" }}>
        <div className="add-cart-btn-circle" style={{ width: "56px", height: "56px", cursor: "default" }}>
          <Mail size={24} />
        </div>
      </div>
      <h2 style={{ fontSize: "24px", fontWeight: "800", marginBottom: "8px" }}>Subscribe to our Smart Catalog</h2>
      <p style={{ color: "var(--text-muted)", fontSize: "14px", maxWidth: "500px", margin: "0 auto 24px auto" }}>
        Join our subscription list to receive alerts on VIP coupons, price drops, and seasonal fashion catalogs directly in your inbox.
      </p>
      <form onSubmit={handleSubscribe} style={{ display: "flex", maxWidth: "480px", margin: "0 auto", gap: "8px" }}>
        <input
          type="email"
          placeholder="Type your email here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
          style={{ borderRadius: "50px", padding: "12px 20px" }}
        />
        <button type="submit" className="btn btn-primary" style={{ borderRadius: "50px", flexShrink: 0 }}>
          <Send size={14} /> Subscribe
        </button>
      </form>
    </div>
  );
}
