import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import Breadcrumb from "../components/Breadcrumb";
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, Check } from "lucide-react";

export default function Contact() {
  const { addToast } = useContext(AppContext);

  // Form State
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // FAQ Active State
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How long does shipping take?", a: "Grocery items are delivered within 4-12 hours in Metro zones. Electronics, fashion, and shoes are shipped via express courier and arrive in 2 business days." },
    { q: "What is your refund policy?", a: "We provide a 30-day no-questions-asked refund policy. Return requests can be triggered easily through your profile order panel." },
    { q: "Do you offer international shipping?", env: "Yes! SmartMall ships to over 50 countries. International transit speeds generally range from 5 to 9 business days." },
    { q: "How do I apply coupon codes?", a: "When viewing your Cart details page, enter code SAVE20 in the coupon input field to immediately apply discounts before final payment checkout." }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // clear error on type
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please specify a valid email.";
    }
    if (!formData.msg.trim()) newErrors.msg = "Message body cannot be empty.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      addToast("Please resolve validation errors in the form.", "error");
    } else {
      setSubmitted(true);
      addToast("Support request sent successfully!", "success");
      setFormData({ name: "", email: "", msg: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="animate-fade">
      <Breadcrumb />
      
      <div className="container py-48">
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: "800" }}>Contact Support</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "16px", marginTop: "8px" }}>We're here to assist you 24/7 with orders, returns, and coupons.</p>
        </div>

        <div className="grid-cols-2" style={{ gap: "48px", marginBottom: "48px" }}>
          {/* Contact Details & Info */}
          <div>
            <h2 className="mb-16" style={{ fontSize: "22px" }}>Get In Touch</h2>
            <p className="mb-24" style={{ color: "var(--text-muted)", fontSize: "14px" }}>
              Have custom queries about electronics warranties, fashion returns, or fresh bulk orders? Drop us a support message and our digital concierge representative will reply shortly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div className="add-cart-btn-circle" style={{ width: "44px", height: "44px", cursor: "default" }}>
                  <Phone size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700" }}>Direct Call Support</h4>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>+1 (555) 019-2834 (Toll-Free)</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div className="add-cart-btn-circle" style={{ width: "44px", height: "44px", cursor: "default" }}>
                  <Mail size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700" }}>Email Correspondence</h4>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>support@smartmall.com</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <div className="add-cart-btn-circle" style={{ width: "44px", height: "44px", cursor: "default" }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: "700" }}>Physical Office Location</h4>
                  <span style={{ fontSize: "13px", color: "var(--text-muted)" }}>123 Smart Mall Way, Metro City, NY 10001</span>
                </div>
              </div>
            </div>

            {/* Google Map Mock box */}
            <div className="card glass-card mt-24 overflow-hidden" style={{ height: "200px", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, backgroundColor: "#e2e8f0" }}>
                {/* Standard grid background layout placeholder */}
                <div style={{ width: "100%", height: "100%", backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)", backgroundSize: "20px 20px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px" }}>
                  <MapPin size={32} color="var(--primary)" />
                  <span style={{ fontSize: "12px", fontWeight: "700", color: "#334155" }}>Map Coordinates (123 Smart Mall Way)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Input Form */}
          <div className="card glass-card p-24" style={{ padding: "32px" }}>
            <h2 className="mb-24" style={{ fontSize: "22px" }}>Send A Support Message</h2>
            
            {submitted ? (
              <div className="text-center py-48 animate-fade" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                <div className="add-cart-btn-circle" style={{ width: "56px", height: "56px", background: "#dcfce7", color: "#166534", cursor: "default" }}>
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 800 }}>Message Transmitted!</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>Thank you! Your ticket query has been routed. We will contact you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="auth-form">
                <div>
                  <label className="form-group-label">Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter name"
                  />
                  {errors.name && <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 600 }}>{errors.name}</span>}
                </div>

                <div>
                  <label className="form-group-label">Your Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="email@example.com"
                  />
                  {errors.email && <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 600 }}>{errors.email}</span>}
                </div>

                <div>
                  <label className="form-group-label">Message Details</label>
                  <textarea
                    name="msg"
                    rows="4"
                    value={formData.msg}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Type your questions here..."
                    style={{ resize: "none", fontFamily: "inherit" }}
                  />
                  {errors.msg && <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 600 }}>{errors.msg}</span>}
                </div>

                <button type="submit" className="btn btn-primary mt-8">
                  <Send size={16} /> Send Ticket
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs collapse accordion list */}
        <section className="py-48" style={{ borderTop: "1px solid var(--border-color)", marginTop: "48px" }}>
          <div className="section-header text-center">
            <h2 className="section-title">Frequently Answered Queries</h2>
            <p className="section-subtitle">Get immediate clarifications to standard shopping questions</p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="card" style={{ overflow: "hidden" }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="flex-between"
                  style={{ width: "100%", padding: "20px", textLeft: "left", cursor: "pointer", fontWeight: 700, fontSize: "14px", color: "var(--text-main)", background: "var(--bg-card)" }}
                >
                  <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <HelpCircle size={16} className="color-primary" /> {faq.q}
                  </span>
                  <ChevronDown size={16} style={{ transition: "all 0.3s", transform: activeFaq === idx ? "rotate(180deg)" : "rotate(0deg)" }} />
                </button>
                {activeFaq === idx && (
                  <div style={{ padding: "0 20px 20px 46px", fontSize: "13px", color: "var(--text-muted)", background: "var(--bg-card)", lineHeight: 1.6 }} className="animate-fade">
                    {faq.a || faq.env}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
