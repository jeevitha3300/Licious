import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import './adminheader.css'
import { FaSignOutAlt, FaChevronDown } from "react-icons/fa";
const AdminHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
  const handleLogout = () => navigate('/Admin');
  const handleProfile = () => navigate('/dashboard');
  return (
    <>
      <div className="adminheader" onClick={toggleDropdown}>
        <div className="adminheader1">
          Admin <FaChevronDown style={{ marginLeft: "5px", fontSize: "12px" }} />
        </div>
        {dropdownVisible && (
          <div className="admin-drop">
            <div className="dropdown-item pb-3" onClick={handleProfile}>
              <FiUser style={{ marginRight: "10px" }} /> Profile
            </div>
            <div className="dropdown-item pb-3" onClick={handleLogout}>
              <FaSignOutAlt style={{ marginRight: "10px" }} /> Logout
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminHeader;
