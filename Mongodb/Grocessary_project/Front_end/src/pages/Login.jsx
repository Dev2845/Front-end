import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Mail, Lock, LogIn } from "lucide-react";
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

export default function Login() {
  const { addToast,setUser  } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email.trim() || !password.trim()) {
    addToast("Please fill in all email and password fields.", "error");
    return;
  }

  try {

    const { data } = await api.post("/auth/login", {
      email,
      password,
    });

    // Save JWT Token
    localStorage.setItem("userToken", data.token);

    // Save User Details
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user); 

    addToast("Login Successful", "success");

    navigate("/profile");

  } catch (error) {

    addToast(
      error.response?.data?.message || "Login Failed",
      "error"
    );

  }
};
  return (
    <div className="auth-page-wrapper">
      <div className="card glass-card auth-card animate-fade">
        <h1 className="auth-title">Welcome Back</h1>
        <p className="auth-subtitle">Sign in to claim coupons and track logistics</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div>
            <label className="form-group-label">Email Address</label>
            <div className="search-input-wrapper" style={{ padding: "4px 12px" }}>
              <Mail size={16} style={{ color: "var(--text-muted)" }} />
              <input
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", background: "none" }}
              />
            </div>
          </div>

          <div>
            <label className="form-group-label">Account Password</label>
            <div className="search-input-wrapper" style={{ padding: "4px 12px" }}>
              <Lock size={16} style={{ color: "var(--text-muted)" }} />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", background: "none" }}
              />
            </div>
          </div>

          <div className="auth-footer-actions">
            <label className="checkbox-label" style={{ marginBottom: 0 }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
           <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn btn-primary mt-8" style={{ width: "100%" }}>
            <LogIn size={16} /> Sign In
          </button>
        </form>

        <div className="social-login-grid">
          <button className="social-login-btn" onClick={() => addToast("Google authentication UI only", "info")}>
            <Chrome size={14} /> Google
          </button>
          <button className="social-login-btn" onClick={() => addToast("GitHub authentication UI only", "info")}>
            <Github size={14} /> GitHub
          </button>
        </div>

        <p style={{ textAlign: "center", fontSize: "13px", color: "var(--text-muted)", marginTop: "24px" }}>
          New to SmartMall? <Link to="/register" style={{ color: "var(--primary)", fontWeight: 600 }}>Create an account</Link>
        </p>
      </div>
    </div>
  );
}
