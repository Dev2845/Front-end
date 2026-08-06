import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import api from "../api/api";
import { useNavigate } from "react-router-dom";
// import "../css/admin/pyment.css"
import toast from "react-hot-toast";

function Payment() {
    const navigate = useNavigate();
    const [address, setAddress] = useState(null);
    const [paymentMethod, setPaymentMethod] = useState("COD");

    const handleCOD = async () => {
        try {
            const token = localStorage.getItem("userToken");

            if (!address) {
                toast.error("Please add delivery address");
                navigate("/address");
                return;
            }

            const { data } = await api.post(
                "/order/place",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (data.success) {
                toast.success("Order Placed Successfully");

                if (fetchCart) {
                    await fetchCart();
                }

                navigate("/orders");
            }
        } catch (err) {
            console.log(err);
            toast.error(
                err.response?.data?.message || "Something went wrong"
            );
        }
    };

    const fetchAddress = async () => {
        try {
            const token = localStorage.getItem("userToken");

            const { data } = await api.get("/address", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(data);

            if (data.success) {
                setAddress(data.addresses[0]);
            }

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchAddress();
    }, []);

    const {
        cart,
        cartData,
        fetchCart
    } = useContext(AppContext);

    const subtotal = cartData.totalPrice || 0;

    const discount = cartData.discount || 0;

    const afterDiscount =
        cartData.finalAmount || subtotal;

    const gst = afterDiscount * 0.08;

    const shipping =
        afterDiscount > 100 ? 0 : 40;

    const total =
        afterDiscount + gst + shipping;

      const key = import.meta.env.VITE_RAZORPAY_KEY;


    const handleRazorpay = async () => {
        try {
            const token = localStorage.getItem("userToken");

            const { data } = await api.post(
                "/payment/create-order",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const options = {
                key,

                amount: data.order.amount,

                currency: "INR",

                name: "SmartMall",

                description: "Order Payment",

                order_id: data.order.id,

                handler: async function (response) {
                    try {
                        const verify = await api.post(
                            "/payment/verify",
                            response,
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        );

                        if (verify.data.success) {
                            toast.success("Payment Successful");

                            if (fetchCart) {
                                await fetchCart();
                            }

                            navigate("/orders");
                        }
                    } catch (err) {
                        toast.error("Payment Verification Failed");
                    }
                },

                prefill: {
                    name: address?.fullName || "",
                    contact: address?.mobile || "",
                },

                theme: {
                    color: "#0f766e",
                },
            };

            const rzp = new window.Razorpay(options);

            rzp.open();
        } catch (err) {
            console.log(err);
            toast.error("Unable to start payment");
        }

        // const handlePlaceOrder = () => {
        //     if (paymentMethod === "COD") {
        //         handleCOD();
        //     } else {
        //         handleRazorpay();
        //     }
        // };
    };

    const handlePlaceOrder = () => {
    if (!address) {
        toast.error("Please add delivery address");
        navigate("/address");
        return;
    }

    if (paymentMethod === "COD") {
        handleCOD();
    } else {
        handleRazorpay();
    }
};

    return (
        <div className='container'>

            <div className="payment-address">

                <h3>Delivery Address</h3>

                {address ? (

                    <div>

                        <h4>{address.fullName}</h4>

                        <p>{address.mobile}</p>

                        <p>
                            {address.addressLine1}
                        </p>

                        {address.addressLine2 && (
                            <p>{address.addressLine2}</p>
                        )}

                        {address.landmark && (
                            <p>Landmark : {address.landmark}</p>
                        )}

                        <p>
                            {address.city}, {address.state}, {address.country}
                        </p>

                        <p>
                            PIN : {address.pincode}
                        </p>

                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate("/address")}
                        >
                            Change Address
                        </button>

                    </div>

                ) : (

                    <button
                        className="btn btn-primary"
                        onClick={() => navigate("/address")}
                    >
                        Add Address
                    </button>

                )}

            </div>

            <div className="payment-summary">

                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                </div>

                <div className="summary-row">
                    <span>Coupon</span>
                    <span>-₹{discount}</span>
                </div>

                <div className="summary-row">
                    <span>GST</span>
                    <span>₹{gst.toFixed(2)}</span>
                </div>

                <div className="summary-row">
                    <span>Shipping</span>

                    <span>
                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>

                </div>

                <hr />

                <div className="summary-row total">

                    <b>Total</b>

                    <b>
                        ₹{total.toFixed(2)}
                    </b>

                </div>

            </div>

            <div className="payment-method">

                <h3>Select Payment</h3>

                <label>

                    <input
                        type="radio"
                        value="COD"
                        checked={paymentMethod === "COD"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    Cash On Delivery

                </label>

                <label>

                    <input
                        type="radio"
                        value="RAZORPAY"
                        checked={paymentMethod === "RAZORPAY"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />

                    Razorpay

                </label>

            </div>

            <button
                className="btn btn-primary"
                style={{
                    width: "100%",
                    marginTop: "25px"
                }}
                onClick={handlePlaceOrder}
            >

                {
                    paymentMethod === "COD"
                        ?

                        "Place Order"

                        :

                        `Pay ₹${total.toFixed(2)}`
                }

            </button>
        </div>
    )
}

export default Payment