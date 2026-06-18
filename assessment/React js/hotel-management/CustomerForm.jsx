import React, { useState } from "react";

class CustomerFormHandler {
  validateForm(data) {
    const errors = {};
 
    if (data.fullName.trim().length < 3) {
      errors.fullName = "Name must be at least 3 characters";
    }

    if (!/^\d{10}$/.test(data.phone)) {
      errors.phone = "Phone must be exactly 10 digits";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
      errors.email = "Invalid Email";
    }

    if (!data.address.trim()) {
      errors.address = "Address is required";
    }

    if (!/^\d{12}$/.test(data.aadhar)) {
      errors.aadhar = "Aadhar must be 12 digits";
    }

    const today = new Date().toISOString().split("T")[0];

    if (data.checkIn <= today) {
      errors.checkIn = "Check-In must be future date";
    }

    if (data.checkOut <= data.checkIn) {
      errors.checkOut =
        "Check-Out must be after Check-In";
    }

    if (
      !data.adults ||
      isNaN(data.adults) ||
      data.adults < 1
    ) {
      errors.adults = "Enter valid number";
    }

    if (!data.purpose.trim()) {
      errors.purpose = "Purpose is required";
    }

    return errors;
  }

  saveToLocalStorage(data) {
    const customers =
      JSON.parse(localStorage.getItem("customers")) ||
      [];

    customers.push(data);

    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }

  clearForm(setForm) {
    setForm({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      aadhar: "",
      checkIn: "",
      checkOut: "",
      adults: "",
      purpose: "",
    });
  }
}

const handler = new CustomerFormHandler();

function CustomerForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    aadhar: "",
    checkIn: "",
    checkOut: "",
    adults: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);

    const validationErrors =
      handler.validateForm(updatedForm);

    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
      handler.validateForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setMessage("Please fix errors.");
      return;
    }

    handler.saveToLocalStorage(form);

    setMessage("Customer Registered Successfully");

    handler.clearForm(setForm);

    setErrors({});
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">
        Hotel Guest Registration
      </h2>

      {message && (
        <div className="alert alert-info">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-md-6 mb-3">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={form.fullName}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.fullName}
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={form.phone}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.phone}
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.email}
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label>Aadhar Number</label>
            <input
              type="text"
              name="aadhar"
              className="form-control"
              value={form.aadhar}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.aadhar}
            </small>
          </div>

          <div className="col-md-12 mb-3">
            <label>Address</label>
            <textarea
              name="address"
              className="form-control"
              value={form.address}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.address}
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label>Check In</label>
            <input
              type="date"
              name="checkIn"
              className="form-control"
              value={form.checkIn}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.checkIn}
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label>Check Out</label>
            <input
              type="date"
              name="checkOut"
              className="form-control"
              value={form.checkOut}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.checkOut}
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label>No. of Adults</label>
            <input
              type="number"
              name="adults"
              className="form-control"
              value={form.adults}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.adults}
            </small>
          </div>

          <div className="col-md-6 mb-3">
            <label>Purpose of Visit</label>
            <textarea
              name="purpose"
              className="form-control"
              value={form.purpose}
              onChange={handleChange}
            />
            <small className="text-danger">
              {errors.purpose}
            </small>
          </div>

        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CustomerForm;