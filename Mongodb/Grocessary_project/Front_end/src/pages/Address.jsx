import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export default function Address() {
    const {
        addresses,
        fetchAddresses,
        addAddress,
        updateAddress,
        deleteAddress,
    } = useContext(AppContext);

    const [editingId, setEditingId] = useState(null);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        mobile: "",
        alternateMobile: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        city: "",
        state: "",
        country: "India",
        pincode: "",
        addressType: "Home",
        isDefault: false,
    });

    useEffect(() => {
        fetchAddresses();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editingId) {
            await updateAddress(editingId, form);
            setEditingId(null);
        } else {
            await addAddress(form);
        }

        setForm({
            fullName: "",
            mobile: "",
            alternateMobile: "",
            addressLine1: "",
            addressLine2: "",
            landmark: "",
            city: "",
            state: "",
            country: "India",
            pincode: "",
            addressType: "Home",
            isDefault: false,
        });
    };

    const handleEdit = (address) => {
        setEditingId(address._id);
        setForm({
            fullName: address.fullName,
            mobile: address.mobile,
            alternateMobile: address.alternateMobile,
            addressLine1: address.addressLine1,
            addressLine2: address.addressLine2,
            landmark: address.landmark,
            city: address.city,
            state: address.state,
            country: address.country,
            pincode: address.pincode,
            addressType: address.addressType,
            isDefault: address.isDefault,
        });
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>

            <Breadcrumb />

            <div className="container py-5">

                <h2 className="fw-bold mb-4">
                    My Addresses
                </h2>

                {/* Address Form */}

                <div className="card shadow-sm mb-4">

                    <div className="card-body">

                        <h5 className="mb-3">

                            {editingId ? "Update Address" : "Add New Address"}

                        </h5>

                        <form onSubmit={handleSubmit}>

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="Full Name"
                                        name="fullName"
                                        value={form.fullName}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="Mobile"
                                        name="mobile"
                                        value={form.mobile}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="House / Flat No"
                                        name="addressLine1"
                                        value={form.addressLine1}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="Area"
                                        name="addressLine2"
                                        value={form.addressLine2}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="Landmark"
                                        name="landmark"
                                        value={form.landmark}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="City"
                                        name="city"
                                        value={form.city}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="State"
                                        name="state"
                                        value={form.state}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <input
                                        className="form-control"
                                        placeholder="Pincode"
                                        name="pincode"
                                        value={form.pincode}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-6 mb-3">

                                    <select
                                        className="form-select"
                                        name="addressType"
                                        value={form.addressType}
                                        onChange={handleChange}
                                    >

                                        <option>Home</option>

                                        <option>Office</option>

                                    </select>

                                </div>

                            </div>

                            <button
                                className="btn btn-primary"
                            >
                                {editingId ? "Update Address" : "Add Address"}
                            </button>

                        </form>

                    </div>

                </div>

                {/* Address List */}

                <div className="row">

                    {addresses.length === 0 && (

                        <div className="text-center">

                            No Address Found

                        </div>

                    )}

                    {addresses.map((address) => (

                        <div
                            className="col-md-6 mb-4"
                            key={address._id}
                        >

                            <div className="card h-100 shadow-sm">

                                <div className="card-body">

                                    <span className="badge bg-primary mb-2">

                                        {address.addressType}

                                    </span>

                                    <h5>

                                        {address.fullName}

                                    </h5>

                                    <p>

                                        {address.mobile}

                                    </p>

                                    <p>
                                        {address.addressLine1},
                                        {address.addressLine2},

                                        {address.landmark},

                                        {address.city},

                                        {address.state},

                                        {address.pincode}

                                    </p>

                                    <button
                                        className="btn btn-warning me-2"
                                        onClick={() => handleEdit(address)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            deleteAddress(address._id)
                                        }
                                    >
                                        Delete
                                    </button>

                                    {/* Continue Button */}
                                    {addresses.length > 0 && (
                                        <div className="text-end mt-4">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => navigate("/payment")}
                                            >
                                                Continue to Payment
                                            </button>
                                        </div>
                                    )}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}