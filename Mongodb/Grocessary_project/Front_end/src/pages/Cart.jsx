import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Trash2, ShoppingCart, Percent, Tag, ArrowRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

export default function Cart() {
  const {
    cart,
    cartData,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    applyCoupon,
    removeCoupon,
    discount,
    finalAmount,
    appliedCoupon
  } = useContext(AppContext);
  const [couponCode, setCouponCode] = useState("");


  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();

    applyCoupon(couponCode);
  };

  // const handleCheckout = () => {
  //   setCheckoutSuccess(true);
  //   addToast("Order checkout processed successfully!", "success");
  //   setTimeout(() => {
  //     clearCart();
  //     setCheckoutSuccess(false);
  //     navigate("/profile");
  //   }, 2000);
  // };

  const handleCheckout = () => {
    navigate("/address");
  };

  // Calculations
  const subtotal = cart.reduce((sum, item) => {

    const price =
      item.product?.discountPrice > 0
        ? item.product.discountPrice
        : item.product?.price || 0;

    return sum + price * item.quantity;

  }, 0);

  const discountAmount = Math.min(
    Number(discount || 0),
    subtotal
  );

  const afterDiscount = Math.max(
    subtotal - discountAmount,
    0
  );

  const tax = afterDiscount * 0.08;

  const shipping =
    afterDiscount > 100 || afterDiscount === 0
      ? 0
      : 5.99;

  const total =
    afterDiscount + tax + shipping;

  const payable =
    finalAmount && Number(finalAmount) > 0
      ? Number(finalAmount) + tax + shipping
      : total;

  if (checkoutSuccess) {
    return (
      <div className="container py-80 text-center animate-fade">
        <div className="card glass-card p-24" style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div className="category-emoji" style={{ fontSize: "64px" }}>🎉</div>
          <h2 style={{ fontSize: "28px", margin: "16px 0 8px 0" }}>Order Placed Successfully!</h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
            Thank you for shopping at SmartMall. Your transaction ID is <b>TXN-{Math.floor(Math.random() * 900000) + 100000}</b>. Redirecting you to orders panel...
          </p>
          <div className="skeleton" style={{ width: "100%", height: "6px" }} />
        </div>
      </div>
    );
  }

  console.log(cart);

  return (
    <div className="animate-fade">
      <Breadcrumb />

      <div className="container py-48">
        <h1 className="mb-24" style={{ fontSize: "32px", fontWeight: "800" }}>Shopping Bag</h1>
        {cart.length > 0 ? (
          <div className="cart-layout">

            {/* Items */}
            <div className="cart-items-pane">

              {cart.map((item, idx) => {
                const price =
                  item.product?.discountPrice > 0
                    ? item.product.discountPrice
                    : item.product?.price || 0;

                return (
                  <div
                    key={`${item.product?._id}-${idx}`}
                    className="cart-card-item"
                  >
                    <img
                      src={item.product?.images?.[0]}
                      alt={item.product?.name}
                      className="cart-item-img"
                    />

                    <div className="cart-item-details">

                      <h3 className="cart-item-name">
                        <Link to={`/product/${item.product?._id}`}>
                          {item.product?.name}
                        </Link>
                      </h3>

                      <div className="cart-item-meta flex-wrap gap-8">
                        <span>
                          Brand : <b>{item.product?.brand}</b>
                        </span>

                        {item.selectedColor && (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            Color :
                            <span
                              style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: item.selectedColor,
                                display: "inline-block",
                              }}
                            />
                          </span>
                        )}

                        {item.selectedSize && (
                          <span>
                            Size : <b>{item.selectedSize}</b>
                          </span>
                        )}
                      </div>

                      <div className="cart-item-actions">

                        <div
                          className="qty-counter"
                          style={{ scale: "0.85" }}
                        >
                          <button
                            onClick={() =>
                              updateCartQuantity(
                                item.product._id,
                                item.quantity - 1
                              )
                            }
                          >
                            -
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              updateCartQuantity(
                                item.product._id,
                                item.quantity + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          className="cart-btn-remove"
                          title="Remove Product"
                          onClick={() =>
                            removeFromCart(item.product._id)
                          }
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>

                    </div>

                    <div className="cart-item-price">

                      <div>
                        ₹{(price * item.quantity).toLocaleString()}
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                        }}
                      >
                        ₹{price.toLocaleString()} each
                      </div>

                    </div>

                  </div>
                );
              })}
              <div className="flex-between mt-24">
                <Link to="/" className="btn btn-secondary">Continue Shopping</Link>
                <button className="btn btn-secondary" style={{ color: "#ef4444" }} onClick={clearCart}>
                  Clear Bag
                </button>
              </div>
            </div>

            {/* Calculations Summary Card */}
            <div className="cart-summary-pane card glass-card">

              <h3 className="summary-title">Receipt Details</h3>

{/* Coupon Section */}
<form
  onSubmit={handleApplyCoupon}
  style={{
    display: "flex",
    gap: "10px",
    margin: "20px 0",
    flexWrap: "wrap",
  }}
>
  {!appliedCoupon ? (
    <>
      <input
        type="text"
        placeholder="Enter Coupon Code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      />

      <button
        type="submit"
        className="btn btn-primary"
      >
        Apply
      </button>
    </>
  ) : (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        borderRadius: "8px",
        background: "#e8fff1",
      }}
    >
      <span>
        🎉 Coupon Applied :
        <strong>
          {" "}
          {appliedCoupon.code || appliedCoupon.coupon}
        </strong>
      </span>

      <button
        type="button"
        className="btn btn-secondary"
        onClick={removeCoupon}
      >
        Remove
      </button>
    </div>
  )}
</form>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>

              {discountAmount > 0 && (
                <div
                  className="summary-row"
                  style={{
                    color: "#10b981",
                    fontWeight: 600,
                  }}
                >
                  <span>Coupon Discount</span>

                  <span>
                    -₹{discountAmount.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              <div className="summary-row">
                <span>After Discount</span>

                <span>
                  ₹{afterDiscount.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="summary-row">
                <span>GST (8%)</span>

                <span>
                  ₹{tax.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="summary-row">
                <span>Shipping</span>

                <span>
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping.toFixed(2)}`}
                </span>
              </div>

              <hr />

              <div className="summary-row total">
                <span>Total Due</span>

                <span className="color-primary">
                  ₹{payable.toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              <button
                className="btn btn-primary mt-24"
                style={{ width: "100%" }}
                onClick={handleCheckout}
              >
                Proceed to Checkout
                <ArrowRight size={16} />
              </button>

            </div>
          </div>
        ) : (
          <div className="empty-illustration card glass-card">
            <div className="category-emoji" style={{ fontSize: "64px" }}>👜</div>
            <h2>Your shopping cart is currently empty</h2>
            <p>Looks like you haven't added any luxury goods to your cart yet.</p>
            <Link to="/" className="btn btn-primary">Start Shopping Now</Link>
          </div>
        )}
      </div>
    </div>
  );
}
