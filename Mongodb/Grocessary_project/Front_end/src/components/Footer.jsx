import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Send } from "lucide-react";

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const { addToast } = useContext(AppContext);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      addToast(`Subscribed successfully with ${email}!`, "success");
      setEmail("");
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top">
          {/* Brand Col */}
          <div className="footer-column">
            <h3 className="logo-gradient" style={{ fontWeight: 800, fontSize: "24px", marginBottom: "16px" }}>SmartMall</h3>
            <p className="mb-16">
              Experience the ultimate destination for luxury, convenience, and modern shopping. From fresh daily greens to high-speed hardware gadgets, we offer it all in one immersive portal.
            </p>
            <div className="footer-social-row">
              <a href="https://facebook.com" className="social-circle-link" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://twitter.com" className="social-circle-link" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="https://instagram.com" className="social-circle-link" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://linkedin.com" className="social-circle-link" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/about">Our Company Story</Link></li>
              <li><Link to="/contact">Help & Support Desk</Link></li>
              <li><Link to="/offers">Latest Coupon Codes</Link></li>
              <li><Link to="/profile">My Order History</Link></li>
              <li><Link to="/login">Account Sign In</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-column">
            <h4>Categories</h4>
            <ul className="footer-links-list">
              <li><Link to="/grocery">Fruits & Vegetables</Link></li>
              <li><Link to="/electronics">Smartphones & Laptops</Link></li>
              <li><Link to="/fashion">Jewelry & Accessories</Link></li>
              <li><Link to="/clothes">Designer Outfits</Link></li>
              <li><Link to="/shoes">Athletic Shoes</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column">
            <h4>Join Our Newsletter</h4>
            <p className="mb-16">Subscribe to receive notifications about exclusive flash sales, new catalog drops, and festive discount coupons.</p>
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe"><Send size={16} /></button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 SmartMall Inc. All Rights Reserved. Designed for premium styling and responsive UX.</p>
          <div className="payment-gateways-row">
            <span title="Visa">💳</span>
            <span title="Mastercard">🪙</span>
            <span title="PayPal">🅿️</span>
            <span title="Apple Pay">🍎</span>
            <span title="Google Pay">📱</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
