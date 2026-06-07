import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";

function Aheader() {
  const adminName = localStorage.getItem("Aname");
  const redirect = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const logout = () => {
    localStorage.removeItem("Aid");
    localStorage.removeItem("Aname");
    redirect("/");
  };

  return (
    <section id="header">
      <nav
        className="navbar navbar-expand-md navbar-light shadow_box px-3"
        id="navbar_sticky"
      >
        <div className="container-fluid">
          {/* Logo */}
          <NavLink className="col_voilet p-0 navbar-brand fw-bold" to="/dash">
            Dashboard
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
  className="collapse navbar-collapse"
  id="navbarSupportedContent"
>
  {/* Menu */}
  <ul className="navbar-nav ms-auto align-items-center gap-3 mb-0">

    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        data-bs-toggle="dropdown"
      >
        Package
      </a>
      <ul className="dropdown-menu">
        <li>
          <NavLink className="dropdown-item" to="/PackMange">
            Package Manage
          </NavLink>
        </li>
        <li>
          <NavLink className="dropdown-item" to="/packadd">
            Package Add
          </NavLink>
        </li>
      </ul>
    </li>

    <li className="nav-item">
      <NavLink className="nav-link" to="/Servicemana">
        Services
      </NavLink>
    </li>

    <li className="nav-item">
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
    </li>

    <li className="nav-item">
      <NavLink className="nav-link" to="/contact">
        Contact
      </NavLink>
    </li>

    {/* Admin Name */}
    <li className="nav-item position-relative ms-4">
      <h6
        className="mb-0"
        style={{ cursor: "pointer" }}
        onClick={() => setShowLogout(!showLogout)}
      >
        Hello, {adminName} 👋
      </h6>

      {showLogout && (
        <div
          className="position-absolute bg-white p-2 rounded shadow"
          style={{
            top: "35px",
            right: "0",
            zIndex: 1000
          }}
        >
          <MDBBtn color="danger" size="sm" onClick={logout}>
            Logout
          </MDBBtn>
        </div>
      )}
    </li>
  </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Aheader;