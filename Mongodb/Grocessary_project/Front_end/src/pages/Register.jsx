import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import api from "../api/api";

const Chrome = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 12h9" />
    <path d="M12 12l6.3-7.7" />
    <path d="M12 12l-6.3 7.7" />
  </svg>
);

const Github = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Register() {
  const { addToast } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

 const handleSubmit = async (e) => {

    e.preventDefault();

    const newErrors = {};

    if (!name.trim())
        newErrors.name = "Full name is required.";

    if (!email.trim())
        newErrors.email = "Email is required.";

    if (password.length < 6)
        newErrors.password = "Password must be at least 6 characters.";

    if (!agreeTerms)
        newErrors.agree = "Accept Terms";

    if (Object.keys(newErrors).length > 0) {

        setErrors(newErrors);

        addToast("Please correct the form", "error");

        return;

    }

    try {

        const { data } = await api.post("/auth/register", {

            name,
            email,
            password

        });

        localStorage.setItem("userToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        addToast("Registration Successful", "success");

        navigate("/profile");

    } catch (error) {

        addToast(
            error.response?.data?.message || "Registration Failed",
            "error"
        );

    }

};

  return (
    <div className="auth-page-wrapper">
      <div className="card glass-card auth-card animate-fade">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-subtitle">Join SmartMall and unlock premium coupon values</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label className="form-group-label">Full Name</label>
            <div className="search-input-wrapper" style={{ padding: "4px 12px" }}>
              <User size={16} style={{ color: "var(--text-muted)" }} />
              <input
                type="text"
                placeholder="Julian Sterling"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                style={{ width: "100%", background: "none" }}
              />
            </div>
            {errors.name && <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 600 }}>{errors.name}</span>}
          </div>

          <div>
            <label className="form-group-label">Email Address</label>
            <div className="search-input-wrapper" style={{ padding: "4px 12px" }}>
              <Mail size={16} style={{ color: "var(--text-muted)" }} />
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                style={{ width: "100%", background: "none" }}
              />
            </div>
            {errors.email && <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 600 }}>{errors.email}</span>}
          </div>

          <div>
            <label className="form-group-label">Account Password</label>
            <div className="search-input-wrapper" style={{ padding: "4px 12px" }}>
              <Lock size={16} style={{ color: "var(--text-muted)" }} />
              <input
                type="password"
                placeholder="Min 6 characters"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                style={{ width: "100%", background: "none" }}
              />
            </div>
            {errors.password && <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 600 }}>{errors.password}</span>}
          </div>

          <div>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked);
                  if (errors.agree) setErrors({ ...errors, agree: "" });
                }}
              />
              <span>I accept all SmartMall Terms & Conditions</span>
            </label>
            {errors.agree && <span style={{ fontSize: "11px", color: "#ef4444", display: "block", fontWeight: 600 }}>{errors.agree}</span>}
          </div>

          <button type="submit" className="btn btn-primary mt-8" style={{ width: "100%" }}>
            <UserPlus size={16} /> Sign Up Now
          </button>
        </form>

        <div className="social-login-grid">
          <button className="social-login-btn" onClick={() => addToast("Google registration UI only", "info")}>
            <Chrome size={14} /> Google
          </button>
          <button className="social-login-btn" onClick={() => addToast("GitHub registration UI only", "info")}>
            <Github size={14} /> GitHub
          </button>
        </div>

        <p style={{ textAlign: "center", fontSize: "13px", color: "var(--text-muted)", marginTop: "24px" }}>
          Already have an account? <Link to="/login" style={{ color: "var(--primary)", fontWeight: 600 }}>Sign In</Link>
        </p>
      </div>
    </div>
  );
}
