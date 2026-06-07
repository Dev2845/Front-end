import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const adminId = localStorage.getItem("Aid");

  if (!adminId) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;