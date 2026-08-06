import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";

export default function ResetPassword() {

  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail");

  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {

      const { data } = await api.post("/auth/reset-password", {
        email,
        otp,
        newPassword: password,
      });

      toast.success(data.message);

      localStorage.removeItem("resetEmail");

      navigate("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Password Reset Failed"
      );

    }
  };

  return (
    <div className="auth-page-wrapper">
      <div
        className="card glass-card auth-card"
        style={{
          maxWidth: "430px",
          margin: "70px auto",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,.1)"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "10px"
          }}
        >
          Reset Password
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "25px"
          }}
        >
          Enter OTP and New Password
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
            style={{
              width:"100%",
              padding:"12px",
              marginBottom:"15px",
              border:"1px solid #ddd",
              borderRadius:"8px"
            }}
          />

          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            style={{
              width:"100%",
              padding:"12px",
              marginBottom:"15px",
              border:"1px solid #ddd",
              borderRadius:"8px"
            }}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
            style={{
              width:"100%",
              padding:"12px",
              marginBottom:"20px",
              border:"1px solid #ddd",
              borderRadius:"8px"
            }}
          />

          <button
            type="submit"
            style={{
              width:"100%",
              padding:"12px",
              background:"#2563eb",
              color:"#fff",
              border:"none",
              borderRadius:"8px",
              cursor:"pointer",
              fontWeight:"600",
              fontSize:"16px"
            }}
          >
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
}