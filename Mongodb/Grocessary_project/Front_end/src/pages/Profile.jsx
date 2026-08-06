import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { ShoppingBag, Settings, LogOut, Save } from "lucide-react";
import { AppContext } from "../context/AppContext";
import api from "../api/api";

export default function Profile() {

  const navigate = useNavigate();

  const { addToast } = useContext(AppContext);

  const [user, setUser] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const [profileData, setProfileData] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await api.get("/auth/profile");

      setUser(data.user);

      setProfileData({
        name: data.user.name || "",
        phone: data.user.phone || "",
      });

    } catch (error) {

      addToast("Please Login Again", "error");

      localStorage.removeItem("userToken");

      navigate("/login");
    }
  };

  const handleLogout = async () => {

    try {
      await api.post("/auth/logout");
    } catch (err) { }

    localStorage.removeItem("userToken");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const handleSaveProfile = async (e) => {

    e.preventDefault();

    try {

      const { data } = await api.put("/auth/profile", {

        name: profileData.name,
        phone: profileData.phone

      });

      setUser(data.user);

      setIsEditing(false);

      addToast(data.message, "success");

    } catch (error) {

      addToast(
        error.response?.data?.message || "Update Failed",
        "error"
      );
    }

  };

  if (!user) {
    return (
      <div className="container py-80 text-center animate-fade">
        <div className="card glass-card p-24" style={{ maxWidth: "480px", margin: "0 auto" }}>
          <h2>Session Access Required</h2>
          <p style={{ color: "var(--text-muted)", margin: "16px 0 24px 0" }}>Please sign in to your SmartMall account to review your profile and order tracker.</p>
          <button className="btn btn-primary" onClick={() => navigate("/login")}>Go to Sign In</button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade">
      <Breadcrumb />

      <div className="container py-48">
        <div className="cart-layout">
          {/* User Details Form & Sidebar */}
          <div className="sidebar-filter-pane glass-card" style={{ width: "320px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="text-center">
              <img src={
                user.profileImage ||
                "https://via.placeholder.com/100"
              } alt={user.name} style={{ width: "90px", height: "90px", borderRadius: "50%", margin: "0 auto 12px auto", border: "3px solid var(--primary)", objectFit: "cover" }} />
              <h2 style={{ fontSize: "20px", fontWeight: "800" }}>{user.name}</h2>
              <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{user.email}</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <button className="btn btn-secondary" style={{ width: "100%", justifyContent: "flex-start", gap: "12px" }}>
                <ShoppingBag size={16} /> My Orders
              </button>
              <button className="btn btn-secondary" style={{ width: "100%", justifyContent: "flex-start", gap: "12px" }} onClick={() => setIsEditing(!isEditing)}>
                <Settings size={16} /> Account Settings
              </button>
              <button className="btn btn-secondary" onClick={handleLogout} style={{ width: "100%", justifyContent: "flex-start", gap: "12px", color: "#ef4444", borderColor: "rgba(239, 68, 68, 0.15)" }}>
                <LogOut size={16} /> Sign Out Session
              </button>
            </div>
          </div>

          {/* Main Console details */}
          <div className="store-content-pane">
            {isEditing ? (
              <div className="card glass-card p-24 animate-fade" style={{ marginBottom: "32px" }}>
                <h3 className="mb-24" style={{ fontSize: "20px", fontWeight: "800" }}>Edit Profile Details</h3>
                <form onSubmit={handleSaveProfile} className="auth-form">
                  <div>
                    <label className="form-group-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-group-label">Contact Phone</label>
                    <input
                      type="text"
                      className="form-input"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    />
                  </div>



                  <div style={{ display: "flex", gap: "12px" }}>
                    <button type="submit" className="btn btn-primary" style={{ gap: "6px" }}>
                      <Save size={14} /> Save Profile
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            ) : null}

            {/* Simulated Order Logs */}
            <div className="card p-24" style={{ border: "1px solid var(--border-color)" }}>
              <h3 className="mb-24" style={{ fontSize: "22px", fontWeight: "800" }}>Recent Shopping Orders</h3>

              <div className="text-center py-24">

                <h3>No Orders Found</h3>

                <p>
                  Your recent orders will appear here.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
