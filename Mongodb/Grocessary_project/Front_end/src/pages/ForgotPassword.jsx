import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const { data } = await api.post("/auth/forgot-password", {
  //       email,
  //     });

  //     toast.success(data.message);

  //     localStorage.setItem("resetEmail", email);

  //     navigate("/verify-otp");

  //   } catch (error) {
  //     toast.error(
  //       error.response?.data?.message || "Failed"
  //     );
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const { data } = await api.post("/auth/forgot-password", { email });

    if (data.success) {
      toast.success(data.message);
      localStorage.setItem("resetEmail", email);
      navigate("/verify-otp");
    }
  } catch (error) {
    if (error.code === "ECONNABORTED") {
      toast.error("Server is starting. Please wait a few seconds and try again.");
    } else {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }
};  
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4"
        style={{ width: "420px" }}
      >
        <div className="text-center mb-4">
          <h2 className="fw-bold text-primary">Forgot Password</h2>
          <p className="text-muted mb-0">
            Enter your registered email to receive OTP
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 fw-bold"
          >
            Send OTP
          </button>
        </form>

        <div className="text-center mt-3">
          <button
            className="btn btn-link text-decoration-none"
            onClick={() => navigate("/login")}
          >
            ← Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}