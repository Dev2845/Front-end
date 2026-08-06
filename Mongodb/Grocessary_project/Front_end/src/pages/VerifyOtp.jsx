import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";

export default function VerifyOtp() {

  const navigate = useNavigate();

  const email = localStorage.getItem("resetEmail");

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const { data } = await api.post("/auth/verify-otp", {
        email,
        otp,
      });

      toast.success(data.message);

      navigate("/reset-password");

    } catch (error) {

      toast.error(
        error.response?.data?.message || "Invalid OTP"
      );

    }
  };

  return (
    <div className="auth-page-wrapper">
      <div
        className="card glass-card auth-card"
        style={{
          maxWidth: "420px",
          margin: "70px auto",
          padding: "35px",
          borderRadius: "15px",
          boxShadow: "0 8px 25px rgba(0,0,0,.1)"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "#2563eb"
          }}
        >
          Verify OTP
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "25px"
          }}
        >
          Enter the OTP sent to your email
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter 6 Digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
            style={{
              width: "100%",
              padding: "12px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "20px",
              fontSize: "16px",
              outline: "none"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600"
            }}
          >
            Verify OTP
          </button>

        </form>

      </div>
    </div>
  );
}