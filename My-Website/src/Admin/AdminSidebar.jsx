import React, { useState } from "react";
import './adminsidebar.css';
import {
  FaHome,
  FaThList,
  FaBoxOpen,
  FaUser,
  FaImage,
  FaComment,
  FaShoppingCart,
  FaCog,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import adminlogo from '../assets/images/logo.svg';

const AdminSidebar = ({ setActiveContent }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const handleMenuToggle = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (

    <div className="Adminslider">
      <div className="Adminlogodiv">
        <img src={adminlogo} className="adminlogo" alt="" />
      </div>

      <ul className="adminUl">
        <li style={menuItemStyle} onClick={() => setActiveContent("dashboard")}>
          <FaHome style={iconStyle} />
          <span>Dashboard</span>
        </li>
        {/* Category Menu with Toggle */}
        <li
          style={menuItemStyle}
          onClick={() => handleMenuToggle("category")}
        >
          <FaThList style={iconStyle} />
          <span>
            Category{" "}
            {expandedMenu === "category" ? (
              <FaChevronDown className="chevrondown" />
            ) : (
              <FaChevronRight className="chevronright" />
            )}
          </span>
        </li>
        {/* Submenu for Category */}
        {expandedMenu === "category" && (
          <li style={submenuItemStyle}>Add/Update Category</li>
        )}
        {/* Product */}
        <li
          style={menuItemStyle}
          onClick={() => handleMenuToggle("product")}
        >
          <FaBoxOpen style={iconStyle} />
          <span>
            Product{" "}
            {expandedMenu === "product" ? (
              <FaChevronDown className="chevrondown" />
            ) : (
              <FaChevronRight className="chevronright" />
            )}
          </span>
        </li>
        {/* Submenu for Product*/}
        {expandedMenu === "product" && (
          <li style={submenuItemStyle}>Add/Update Product</li>
        )}
        {/* User */}
        <li style={menuItemStyle}
          onClick={() => handleMenuToggle("user")}
        >
          <FaUser style={iconStyle} />
          <span>
            User {" "}
            {expandedMenu === "user" ? (
              <FaChevronDown className="chevrondown" />
            ) : (
              <FaChevronRight className="chevronright" />
            )}
          </span>
        </li>
        {/* Submenu for User*/}
        {expandedMenu === "user" && (
          <li style={submenuItemStyle} onClick={() => setActiveContent("userList")}>
            User List
          </li>
        )}

        {/* Banner */}
        <li style={menuItemStyle}
          onClick={() => handleMenuToggle("banner")}
        >
          <FaImage style={iconStyle} />
          <span>
            Banner {""}
            {expandedMenu === "banner" ? (
              <FaChevronDown className="chevrondown" />
            ) : (
              <FaChevronRight className="chevronright" />
            )}
          </span>
        </li>
        {/* Submenu for Banner*/}
        {expandedMenu === "banner" && (
          <li style={submenuItemStyle}>Add/Update Banner</li>
        )}
        {/* Testimonial */}
        <li style={menuItemStyle}
          onClick={() => handleMenuToggle("testimonial")}
        >
          <FaComment style={iconStyle} />
          <span>
            Testimonial {""}
            {expandedMenu === "testimonial" ? (
              <FaChevronDown className="chevrondown" />
            ) : (
              <FaChevronRight className="chevronright" />
            )}
          </span>
        </li>
        {/* Submenu for Testimonial*/}
        {expandedMenu === "testimonial" && (
          <li style={submenuItemStyle}>Add/Update Testimonial</li>
        )}
        {/* Order */}
        <li style={menuItemStyle}
          onClick={() => handleMenuToggle("order")}
        >
          <FaShoppingCart style={iconStyle} />
          <span>
            Order {""}
            {expandedMenu === "order" ? (
              <FaChevronDown className="chevrondown" />
            ) : (
              <FaChevronRight className="chevronright" />
            )}
          </span>
        </li>
        {/* Submenu for Banner*/}
        {expandedMenu === "order" && (
          <li style={submenuItemStyle}>Order List</li>
        )}
        {/* Setting */}
        <li style={menuItemStyle}
          onClick={() => handleMenuToggle("setting")}
        >
          <FaCog style={iconStyle} />
          <span>
            Setting {""}
            Order {""}
            {expandedMenu === "setting" ? (
              <FaChevronDown className="chevrondown" />
            ) : (
              <FaChevronRight className="chevronright" />
            )}
          </span>
        </li>
        {/* Submenu for Banner*/}
        {expandedMenu === "setting" && (
          <li style={submenuItemStyle}>Update Setting</li>
        )}
      </ul>
    </div>

  );
};

const menuItemStyle = {
  padding: "12px 20px",
  color: "#555",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};

const submenuItemStyle = {
  padding: "8px 40px",
  color: "#888",
  fontSize: "14px",
};

const iconStyle = {
  marginRight: "10px",
};

export default AdminSidebar;
