import React, { createContext, useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const navigate = useNavigate()
  // Theme state
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  // Cart state
  const [cart, setCart] = useState([]);

  const [cartData, setCartData] = useState({
    items: [],
    totalPrice: 0,
    discount: 0,
    finalAmount: 0,
    coupon: null
  });
  // address
  const [addresses, setAddresses] = useState([]);

  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // User state (Simulated)
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Toasts state
  const [toasts, setToasts] = useState([]);

  const [discount, setDiscount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState("");

  // Sync state with localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem("userToken");

    if (token) {
      fetchCart();
    } else {
      setCart([]);
    }
  }, [user]);

  // Toast Management
  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  // Theme Action
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    addToast(`Switched to ${theme === "light" ? "Dark" : "Light"} Mode`, "info");
  };

  // Cart Actions
  const addToCart = async (productId, quantity = 1) => {
    try {
      const token = localStorage.getItem("userToken");

      if (!token) {
        addToast("Please login first", "warning");
        return;
      }

      const res = await api.post(
        "/cart",
        {
          productId,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("ADD CART RESPONSE:", res.data);

      if (res.data.success) {
        setCart(res.data.cart?.items || []);

        addToast("Product added to cart", "success");

        // Backend latest cart fetch
        await fetchCart();
      }

    } catch (error) {
      console.error(
        "ADD TO CART ERROR:",
        error.response?.data || error.message
      );

      addToast(
        error.response?.data?.message || "Unable to add product",
        "error"
      );
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const token = localStorage.getItem("userToken");

      await api.delete(`/cart/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const updateCartQuantity = async (productId, quantity) => {
    try {
      const token = localStorage.getItem("userToken");

      await api.put(
        "/cart/update",
        {
          productId,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchCart();
      toast.success("Quantity updated");
    } catch (err) {
      console.log(err);
      toast.error(
        err.response?.data?.message || "Unable to update quantity"
      );
    }
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem("userToken");

      await api.delete("/cart/clear/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart([]);

      setCartData({
        items: [],
        totalPrice: 0,
        discount: 0,
        finalAmount: 0,
        coupon: null,
      });


      addToast("Cleared shopping cart", "info");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("userToken");

      if (!token) {
        setCart([]);
        return;
      }

      const res = await api.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("CART API RESPONSE:", res.data);

      setCart(res.data?.cart?.items || []);


      setCartData({
        items: res.data?.cart?.items || [],
        totalPrice: res.data?.cart?.totalPrice || 0,
        discount: res.data?.cart?.discount || 0,
        finalAmount: res.data?.cart?.finalAmount || 0,
        coupon: res.data?.cart?.coupon || null,
      });

    } catch (error) {
      console.error(
        "FETCH CART ERROR:",
        error.response?.data || error.message
      );

      setCart([]);
    }
  };
  const applyCoupon = async (code) => {
    try {

      const token = localStorage.getItem("userToken");

      const { data } = await api.post(
        "/coupon/apply",
        { code },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(data.message);

      fetchCart();

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Coupon Failed"
      );

    }
  };

  const removeCoupon = async () => {
    try {

      const token = localStorage.getItem("userToken");

      await api.delete("/coupon/remove", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Coupon Removed");

      fetchCart();

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Unable to remove coupon"
      );

    }
  };

  const fetchAddresses = async () => {
    try {
      const token = localStorage.getItem("userToken");

      const { data } = await api.get("/address", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setAddresses(data.addresses);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addAddress = async (address) => {
    try {
      const token = localStorage.getItem("userToken");

      const { data } = await api.post(
        "/address",
        address,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        toast.success("Address Added");
        fetchAddresses();
      }

    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };



  const updateAddress = async (id, address) => {
    try {
      const token = localStorage.getItem("userToken");

      const { data } = await api.put(
        `/address/${id}`,
        address,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (data.success) {
        toast.success("Address Updated");
        fetchAddresses();
      }

    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  const deleteAddress = async (id) => {
    try {
      const token = localStorage.getItem("userToken");

      await api.delete(`/address/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Address Deleted");

      fetchAddresses();

    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };



  // Wishlist Actions
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isFav = prevWishlist.some((item) => item.id === product.id);
      if (isFav) {
        addToast(`Removed ${product.name} from Wishlist`, "warning");
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        addToast(`Added ${product.name} to Wishlist`, "success");
        return [...prevWishlist, product];
      }
    });
  };

  // Auth Actions
  const login = (email, password) => {
    // Simple mock authentication
    if (email && password.length >= 6) {
      const mockUser = {
        name: email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1),
        email: email,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        phone: "+1 (555) 019-2834",
        address: "123 Smart Mall Way, Metro City, NY 10001",
        orders: [
          {
            id: "ORD-98742",
            date: "2026-07-10",
            total: 1248.99,
            status: "Delivered",
            items: [
              { name: "Titanium Phone 15 Pro Max", qty: 1, price: 1199.99 },
              { name: "Organic Cold Brew Coffee (1L)", qty: 7, price: 6.99 }
            ]
          },
          {
            id: "ORD-92841",
            date: "2026-07-14",
            total: 219.98,
            status: "In Transit",
            items: [
              { name: "Ultraboost Running Shoes", qty: 1, price: 179.99 },
              { name: "Wool Knit Turtleneck Sweater", qty: 1, price: 39.99 }
            ]
          }
        ]
      };
      setUser(mockUser);
      addToast("Successfully logged in", "success");
      return true;
    }
    addToast("Login failed. Password must be 6+ characters.", "error");
    return false;
  };

  const register = (name, email, password) => {
    if (name && email && password.length >= 6) {
      const mockUser = {
        name: name,
        email: email,
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
        phone: "",
        address: "",
        orders: []
      };
      setUser(mockUser);
      addToast("Account created successfully!", "success");
      return true;
    }
    addToast("Registration failed. Please fill all fields.", "error");
    return false;
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userToken");

    setUser(null);
    setCart([]);

    setCartData({
      items: [],
      totalPrice: 0,
      discount: 0,
      finalAmount: 0,
      coupon: null,
    });
    setWishlist([]);
    addToast("Logged out successfully", "success");
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        cart,
        cartData,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        wishlist,
        toggleWishlist,
        user,
        setUser,
        login,
        register,
        logout,
        searchQuery,
        setSearchQuery,
        toasts,
        addToast,
        discount: cartData?.discount || 0,
        finalAmount: cartData?.finalAmount || 0,
        appliedCoupon: cartData?.coupon || null,

        applyCoupon,
        removeCoupon,
        addresses,
        fetchAddresses,
        addAddress,
        updateAddress,
        deleteAddress,
        fetchCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
