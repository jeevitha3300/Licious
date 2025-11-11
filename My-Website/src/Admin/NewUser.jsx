import "./newuser.css";
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import Alert from 'react-bootstrap/Alert';
const Newuser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editingUser = location.state?.user;
  const initialFormState = {
    name: "",
    email: "",
    contact: "",
    designation: "",
    password: "",
    confirmPassword: "",
    permissions: {
      User: false,
      Banner: false,
      Category: false,
      Subcategory: false,
      Product: false,
      Customer: false,
      Testimonial: false,
      Order: false,
      Setting: false,
    },
  };
  const [form, setForm] = useState(() => {
    if (editingUser) {
      return {
        ...editingUser,
        password: "",
        confirmPassword: "",
        permissions: {
          ...initialFormState.permissions,
          ...editingUser.permissions,
        },
      };
    }
    return initialFormState;
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    if (editingUser) {
      setForm({
        ...editingUser,
        password: "",
        confirmPassword: "",
        permissions: {
          ...initialFormState.permissions,
          ...editingUser.permissions,
        },
      });
    }
  }, [editingUser]);
  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    else if (form.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email.trim()))
      newErrors.email = "Enter a valid email address";
    if (!form.contact.trim()) newErrors.contact = "Contact number is required";
    else if (!/^\d{10}$/.test(form.contact.trim()))
      newErrors.contact = "Contact must be a 10-digit number";
    if (!form.designation.trim())
      newErrors.designation = "Designation is required";
    if (!editingUser || form.password || form.confirmPassword) {
      if (!form.password) newErrors.password = "Password is required";
      else if (form.password.length < 6)
        newErrors.password = "Password must be at least 6 characters";
      if (!form.confirmPassword)
        newErrors.confirmPassword = "Please confirm your password";
      else if (form.password !== form.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
    }
    const isAnyPermissionSelected = Object.values(form.permissions).some(
      (val) => val === true
    );
    if (!isAnyPermissionSelected) {
      newErrors.permissions = "Please select at least one permission";
    }
    return newErrors;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [name]: checked,
      },
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    let url = "http://localhost:5000/api/manageuser";
    let method = "POST";
    if (editingUser) {
      url = `http://localhost:5000/api/manageuser/${editingUser._id}`;
      method = "PUT";
    }
    const payload = { ...form };
    if (editingUser && (!form.password && !form.confirmPassword)) {
      delete payload.password;
      delete payload.confirmPassword;
    }
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSuccessMessage(
          editingUser ? "User updated successfully!" : "User created successfully!"
        );
        setErrors({});
        if (!editingUser) {
          setForm(initialFormState);
        }
        setTimeout(() => {
          setSuccessMessage("");
          if (editingUser) {
            navigate("/manageuser"); //redirect after update
          }
        }, 2000);
      } else {
        const data = await response.json();
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Failed to submit form: " + error.message);
    }
  };
  const handleReset = () => {
    if (editingUser) {
      // Edit mode → redirect back to table
      navigate("/manageuser");
    } else {
      // Create mode → clear form
      setForm(initialFormState);
      setErrors({});
      setSuccessMessage("");
    }
  };
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="newuser-container">
        <div className="newuserheader">
          <h3 className="newform">{editingUser ? "Edit User" : "New User"}</h3>
        </div>
        <div className="form-container">
          {successMessage && (
            <Alert
              style={{ border: "none", fontSize: "18px" }}
              className="text-success text-end bg-white"
              onClose={() => setMessage("")}
            >
              {successMessage}
            </Alert>
          )}
          <form className="styled-form" onSubmit={handleSubmit}>
            {/* Row 1 */}
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                />
                {errors.name && <small className="error">{errors.name}</small>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <small className="error">{errors.email}</small>
                )}
              </div>
            </div>
            {/* Row 2 */}
            <div className="form-row">
              <div className="form-group">
                <label>Contact</label>
                <input
                  name="contact"
                  value={form.contact}
                  onChange={handleInputChange}
                />
                {errors.contact && (
                  <small className="error">{errors.contact}</small>
                )}
              </div>
              <div className="form-group">
                <label>Designation</label>
                <input
                  name="designation"
                  value={form.designation}
                  onChange={handleInputChange}
                />
                {errors.designation && (
                  <small className="error">{errors.designation}</small>
                )}
              </div>
            </div>
            {/* Permissions */}
            <div className="permissions-section">
              <label>Permissions</label>
              <div className="checkbox-grid">
                {Object.keys(form.permissions).map((key) => (
                  <label key={key} className="checkbox-label">
                    <input
                      className="inputf"
                      type="checkbox"
                      name={key}
                      checked={form.permissions[key]}
                      onChange={handleCheckboxChange}
                    />
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                ))}
              </div>
              {errors.permissions && (
                <small className="error">{errors.permissions}</small>
              )}
            </div>
            {/* Passwords */}
            <div className="form-row">
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <small className="error">{errors.password}</small>
                )}
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && (
                  <small className="error">{errors.confirmPassword}</small>
                )}
              </div>
            </div>
            {/* Actions */}
            <div className="form-actions">
              <button
                type="button"
                className="usercancel-btn"
                onClick={handleReset}
              >
                Cancel
              </button>
              <button type="submit" className="usersubmit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Newuser;
