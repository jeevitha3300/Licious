import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import login from '../assets/images/login.svg';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const handleAccountClick = () => {
    navigate('/Account');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowDropdown(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(formData.email)) newErrors.email = "Enter a valid email address.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.city.trim()) newErrors.city = "City is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage("Registration successful!");
      setLoggedIn(true);

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", JSON.stringify(formData));
     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(formData);
      localStorage.setItem("users", JSON.stringify(existingUsers));

      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          password: "",
          confirmPassword: "",
          city: ""
        });
        setSuccessMessage("");

        const loginCanvas = document.getElementById('offcanvasLogin');
        if (loginCanvas) {
          const offcanvasInstance = bootstrap.Offcanvas.getInstance(loginCanvas);
          if (offcanvasInstance) {
            offcanvasInstance.hide();
          }
        }

        navigate('/');
      }, 2000);
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".profile-dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* Login/Profile Button */}
      {!loggedIn ? (
        <button
          type="button"
          className="bg-transparent border-0 p-0 d-flex align-items-center"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasLogin"
          aria-controls="offcanvasLogin"
          style={{ cursor: "pointer" }}
        >
          <img src={login} alt="Login" className="loginimg" />
          <span className="ps-2 logintext">Login</span>
        </button>
      ) : (
        <div className="position-relative profile-dropdown">
          <button
            type="button"
            className="bg-transparent border-0 p-0 d-flex align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img src={login} alt="Profile" className="loginimg" />
            <span className="ps-2 logintext">My Profile</span>
          </button>

          {showDropdown && (
            <div className="position-absolute end-0 mt-2 bg-white shadow rounded" style={{ zIndex: 9999, minWidth: '180px' }}>
              <ul className="list-unstyled m-0">
                <li className="border-bottom px-3 py-2" onClick={handleAccountClick} style={{ cursor: 'pointer' }}>Account</li>
                <li className="px-3 py-2 text-danger" style={{ cursor: 'pointer' }} onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Registration Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasLogin"
        aria-labelledby="offcanvasLoginLabel"
      >
        <div className="d-flex align-items-center ms-2 mt-4">
          <img src={login} style={{ height: "16px" }} alt="Login Icon" className="me-2" />
          <span className="logintext" style={{ color: "black", fontWeight: "500" }}>
            Licious
          </span>
        </div>

        <div className="login-offcanvas-header ms-4">
          <h5 className="d-flex align-items-center" id="offcanvasLoginLabel" style={{ fontSize: "18px", fontWeight: "bold" }}>
            Sign In/Sign Up
          </h5>
        </div>

        <div className="offcanvas-body">
          <form onSubmit={handleSubmit}>
            {successMessage && (
              <div className="alert alert-success text-center py-2" style={{ fontSize: "15px", borderRadius: "4px", marginBottom: "20px" }}>
                {successMessage}
              </div>
            )}

            {/* Dynamic Input Fields */}
            {[
              "firstName",
              "lastName",
              "mobile",
              "email",
              "city",
              "password",
              "confirmPassword"
            ].map((field) => (
              <div className="mb-3" key={field}>
                <input
                  type={
                    field.includes("password")
                      ? "password"
                      : field === "email"
                      ? "email"
                      : field === "mobile"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  className={`form-control ${errors[field] ? "is-invalid" : ""}`}
                  placeholder={
                    field.charAt(0).toUpperCase() +
                    field.slice(1).replace(/([A-Z])/g, " $1")
                  }
                  value={formData[field]}
                  onChange={handleChange}
                  maxLength={field === "mobile" ? 10 : undefined}
                />
                {errors[field] && (
                  <div className="invalid-feedback d-block">
                    {errors[field]}
                  </div>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="login-proceed-btn w-100"
              style={{ backgroundColor: "#dc3545", color: "white", cursor: "pointer" }}
            >
              Register
            </button>

            <p className="mt-3 text-center small">
              By signing up, you agree to our{" "}
              <span className="text-danger">terms and conditions</span>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
