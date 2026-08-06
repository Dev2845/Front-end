import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppContext, AppProvider } from "./context/AppContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ChatButton from "./components/ChatButton";

// Pages
import UserProtectedRoute from "./routes/UserProtectedRoute";
import Home from "./pages/Home";
import Grocery from "./pages/Grocery";
import Electronics from "./pages/Electronics";
import Fashion from "./pages/Fashion";
import Clothes from "./pages/Clothes";
import Shoes from "./pages/Shoes";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Offers from "./pages/Offers";
import About from "./pages/About";
import Address from "./pages/Address";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";



// Admin Pages
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Category from "./pages/admin/Category";
import SubCategory from "./pages/admin/SubCategory";
import Product from "./pages/admin/Product";
import Orders from "./pages/admin/Orders";
import Users from "./pages/admin/Users";

// Protected Route
import AdminProtectedRoute from "./routes/AdminProtectedRoute";
import Payment from "./pages/Payment";

function AppContent() {
  const { toasts } = useContext(AppContext);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="app-layout">
      {/* Auto-scroll helper */}
      <ScrollToTop />

      {/* Sticky Header */}
      {!isAdminRoute && <Navbar />}

      {/* Central View routing container */}
      <main className="main-content" style={{ minHeight: "80vh" }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/address" element={<Address />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/profile"
            element={
              <UserProtectedRoute>
                <Profile />
              </UserProtectedRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/verify-otp" element={<VerifyOtp />} />

          <Route path="/reset-password" element={<ResetPassword />} />
          

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin Dashboard */}
          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute>
                <Dashboard />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/category"
            element={
              <AdminProtectedRoute>
                <Category />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/subcategory"
            element={
              <AdminProtectedRoute>
                <SubCategory />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/product"
            element={
              <AdminProtectedRoute>
                <Product />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <AdminProtectedRoute>
                <Orders />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <AdminProtectedRoute>
                <Users />
              </AdminProtectedRoute>
            }
          />

        </Routes>
      </main>

      {/* Footer */}
      {!isAdminRoute && <Footer />}

      {/* Floating AI Chat Assistant */}
      {!isAdminRoute && <ChatButton />}

      {/* Global Slide-In Toast Notification Portal */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            <span>
              {toast.type === "success" && "✅"}
              {toast.type === "warning" && "⚠️"}
              {toast.type === "info" && "ℹ️"}
              {toast.type === "error" && "❌"}
            </span>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
