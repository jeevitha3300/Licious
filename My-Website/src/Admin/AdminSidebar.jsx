// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './adminsidebar.css';
// import {
//   FaHome, FaThList, FaBoxOpen, FaUser,
//   FaImage, FaComment, FaShoppingCart, FaCog,
//   FaChevronDown, FaChevronRight
// } from "react-icons/fa";
// import adminlogo from '../assets/images/logo.svg';
// import { useAuth } from "./AuthContext";

// const AdminSidebar = () => {
//   const [expandedMenu, setExpandedMenu] = useState(null);
//   const navigate = useNavigate();
//   const { adminInfo } = useAuth();

//   const permissions = adminInfo?.permissions || {}; // from login session

//   const handleMenuToggle = (menu) => {
//     setExpandedMenu(expandedMenu === menu ? null : menu);
//   };

//   return (
//     <div className="Adminslider">
//       <div className="Adminlogodiv">
//         <img src={adminlogo} className="adminlogo" alt="Admin Logo" />
//       </div>

//       <ul className="adminUl">
//         <li style={menuItemStyle} onClick={() => navigate("/dashboard")}>
//           <FaHome style={iconStyle} />
//           <span>Dashboard</span>
//         </li>

//         {/* USER */}
//         {permissions.User && (
//           <>
//             <li style={menuItemStyle} onClick={() => handleMenuToggle("user")}>
//               <FaUser style={iconStyle} />
//               <span>User {expandedMenu === "user" ? <FaChevronDown className="chevrondown"/> : <FaChevronRight className="chevronright"/>}</span>
//             </li>
//             {expandedMenu === "user" && (
//               <>
//                 <li style={submenuItemStyle} onClick={() => navigate("/newuser")}>New User</li>
//                 <li style={submenuItemStyle} onClick={() => navigate("/manageuser")}>Manage User</li>
//               </>
//             )}
//           </>
//         )}
//    {/* BANNER */}
//         {permissions.Banner && (
//           <>
//             <li style={menuItemStyle} onClick={() => handleMenuToggle("banner")}>
//               <FaImage style={iconStyle} />
//               <span>Banner {expandedMenu === "banner" ? <FaChevronDown className="chevrondown"/> : <FaChevronRight className="chevronright"/>}</span>
//             </li>
//             {expandedMenu === "banner" && (
//               <>
//                 <li style={submenuItemStyle} onClick={() => navigate("/newbanner")}>New Banner</li>
//                 <li style={submenuItemStyle} onClick={() => navigate("/managebanner")}>Manage Banner</li>
//               </>
//             )}
//           </>
//         )}
//         {/* CATEGORY */}
//         {permissions.Category && (
//           <>
//             <li style={menuItemStyle} onClick={() => handleMenuToggle("category")}>
//               <FaThList style={iconStyle} />
//               <span>Category {expandedMenu === "category" ? <FaChevronDown className="chevrondown" /> : <FaChevronRight className="chevronright"/>}</span>
//             </li>
//             {expandedMenu === "category" && (
//               <>
//                 <li style={submenuItemStyle} onClick={() => navigate("/newcategory")}>New Category</li>
//                 <li style={submenuItemStyle} onClick={() => navigate("/managecategory")}>Manage Category</li>
//               </>
//             )}
//           </>
//         )}

//         {/* PRODUCT */}
//         {permissions.Product && (
//           <>
//             <li style={menuItemStyle} onClick={() => handleMenuToggle("product")}>
//               <FaBoxOpen style={iconStyle} />
//               <span>Product {expandedMenu === "product" ? <FaChevronDown  className="chevrondown"/> : <FaChevronRight className="chevronright" />}</span>
//             </li>
//             {expandedMenu === "product" && (
//               <>
//                 <li style={submenuItemStyle} onClick={() => navigate("/newproduct")}>New Product</li>
//                 <li style={submenuItemStyle} onClick={() => navigate("/manageproduct")}>Manage Product</li>
//               </>
//             )}
//           </>
//         )}

//     {/* CUSTOMER */}
//         {permissions.Customer && (
//           <>
//             <li style={menuItemStyle} onClick={() => handleMenuToggle("customer")}>
//               <FaUser style={iconStyle} />
//               <span>Customer {expandedMenu === "customer" ? <FaChevronDown className="chevrondown"/> : <FaChevronRight className="chevronright"/>}</span>
//             </li>
//             {expandedMenu === "customer" && (
//               <li style={submenuItemStyle} onClick={() => navigate("/managecustomer")}>Manage Customer</li>
//             )}
//           </>
//         )}

//         {/* ORDER */}
//          {permissions.Order && (
//           <>
//         <li style={menuItemStyle} onClick={() => handleMenuToggle("order")}>
//           <FaShoppingCart style={iconStyle} />
//           <span>Order {expandedMenu === "order" ? <FaChevronDown className="chevrondown"/> : <FaChevronRight className="chevronright" />}</span>
//         </li>
//         {expandedMenu === "order" && (
//       <>
//           <li style={submenuItemStyle} onClick={() => navigate("/orders")}>Order List</li>
//         </>
//            )}
//           </>
//         )}

//         {/* TESTIMONIAL */}
//         {permissions.Testimonial && (
//           <>
//             <li style={menuItemStyle} onClick={() => handleMenuToggle("testimonial")}>
//               <FaComment style={iconStyle} />
//               <span>Testimonial {expandedMenu === "testimonial" ? <FaChevronDown className="chevrondown"/> : <FaChevronRight className="chevronright"/>}</span>
//             </li>
//             {expandedMenu === "testimonial" && (
//               <>
//                 <li style={submenuItemStyle} onClick={() => navigate("/newtestimonial")}>New Testimonial</li>
//                 <li style={submenuItemStyle} onClick={() => navigate("/managetestimonial")}>Manage Testimonial</li>
//               </>
//             )}
//           </>
//         )}

//         {/* SETTING */}
//           {permissions.Setting && (
//           <>
//         <li style={menuItemStyle} onClick={() => handleMenuToggle("setting")}>
//           <FaCog style={iconStyle} />
//           <span>Setting {expandedMenu === "setting" ? <FaChevronDown className="chevrondown"/> : <FaChevronRight className="chevronright"/>}</span>
//         </li>
//        {expandedMenu === "setting" && (
//         <>
//       <li style={submenuItemStyle} onClick={() => navigate("/settings")}>Update Setting</li>
//         </>
//           )}
//           </>
//         )}
      
//       </ul>
//     </div>
//   );
// };

// const menuItemStyle = {
//   padding: "12px 20px",
//   color: "#fff",
//   cursor: "pointer",
//   display: "flex",
//   alignItems: "center",
// };

// const submenuItemStyle = {
//   padding: "8px 40px",
//   color: "#fff",
//   fontSize: "14px",
//   cursor: "pointer",
// };

// const iconStyle = {
//   marginRight: "10px",
// };

// export default AdminSidebar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  FaChevronRight
} from "react-icons/fa";
import adminlogo from '../assets/images/logo.svg';
import { useAuth } from "./AuthContext";

const AdminSidebar = () => {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const navigate = useNavigate();
  const { adminInfo } = useAuth();
  const permissions = adminInfo?.permissions || {}; // from login session

  const handleMenuToggle = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div className="Adminslider">
      <div className="Adminlogodiv">
        <img src={adminlogo} className="adminlogo" alt="Admin Logo" />
      </div>
      <ul className="adminUl">
        {/* Dashboard */}
        <li style={menuItemStyle} onClick={() => navigate("/dashboard")}>
          <FaHome style={iconStyle} />
          <span>Dashboard</span>
        </li>

        {/* USER */}
        {permissions.User && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("user")}>
              <FaUser style={iconStyle} />
              <span>
                User{" "}
                {expandedMenu === "user" ? (
                  <FaChevronDown className="chevrondown" />
                ) : (
                  <FaChevronRight className="chevronright" />
                )}
              </span>
            </li>
            {expandedMenu === "user" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newuser")}>
                  New User
                </li>
                <li style={submenuItemStyle} onClick={() => navigate("/manageuser")}>
                  Manage User
                </li>
              </>
            )}
          </>
        )}

        {/* BANNER */}
        {permissions.Banner && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("banner")}>
              <FaImage style={iconStyle} />
              <span>
                Banner{" "}
                {expandedMenu === "banner" ? (
                  <FaChevronDown className="chevrondown" />
                ) : (
                  <FaChevronRight className="chevronright" />
                )}
              </span>
            </li>
            {expandedMenu === "banner" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newbanner")}>
                  New Banner
                </li>
                <li style={submenuItemStyle} onClick={() => navigate("/managebanner")}>
                  Manage Banner
                </li>
              </>
            )}
          </>
        )}

        {/* CATEGORY */}
        {permissions.Category && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("category")}>
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
            {expandedMenu === "category" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newcategory")}>
                  New Category
                </li>
                <li style={submenuItemStyle} onClick={() => navigate("/managecategory")}>
                  Manage Category
                </li>
              </>
            )}
          </>
        )}


        {/* PRODUCT */}
        {permissions.Product && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("product")}>
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
            {expandedMenu === "product" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newproduct")}>
                  New Product
                </li>
                <li style={submenuItemStyle} onClick={() => navigate("/manageproduct")}>
                  Manage Product
                </li>
              </>
            )}
          </>
        )}

        {/* CUSTOMER */}
        {permissions.Customer && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("customer")}>
              <FaUser style={iconStyle} />
              <span>
                Customer{" "}
                {expandedMenu === "customer" ? (
                  <FaChevronDown className="chevrondown" />
                ) : (
                  <FaChevronRight className="chevronright" />
                )}
              </span>
            </li>
            {expandedMenu === "customer" && (
              <li style={submenuItemStyle} onClick={() => navigate("/managecustomer")}>
                Manage Customer
              </li>
            )}
          </>
        )}

        {/* ORDER */}
        {permissions.Order && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("order")}>
              <FaShoppingCart style={iconStyle} />
              <span>
                Order{" "}
                {expandedMenu === "order" ? (
                  <FaChevronDown className="chevrondown" />
                ) : (
                  <FaChevronRight className="chevronright" />
                )}
              </span>
            </li>
            {expandedMenu === "order" && (
              <li style={submenuItemStyle} onClick={() => navigate("/orders")}>
                Order List
              </li>
            )}
          </>
        )}

        {/* TESTIMONIAL */}
        {permissions.Testimonial && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("testimonial")}>
              <FaComment style={iconStyle} />
              <span>
                Testimonial{" "}
                {expandedMenu === "testimonial" ? (
                  <FaChevronDown className="chevrondown" />
                ) : (
                  <FaChevronRight className="chevronright" />
                )}
              </span>
            </li>
            {expandedMenu === "testimonial" && (
              <>
                <li style={submenuItemStyle} onClick={() => navigate("/newtestimonial")}>
                  New Testimonial
                </li>
                <li style={submenuItemStyle} onClick={() => navigate("/managetestimonial")}>
                  Manage Testimonial
                </li>
              </>
            )}
          </>
        )}

        {/* SETTING */}
        {permissions.Setting && (
          <>
            <li style={menuItemStyle} onClick={() => handleMenuToggle("setting")}>
              <FaCog style={iconStyle} />
              <span>
                Setting{" "}
                {expandedMenu === "setting" ? (
                  <FaChevronDown className="chevrondown" />
                ) : (
                  <FaChevronRight className="chevronright" />
                )}
              </span>
            </li>
            {expandedMenu === "setting" && (
              <li style={submenuItemStyle} onClick={() => navigate("/settings")}>
                Update Setting
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

const menuItemStyle = {
  padding: "12px 20px",
  color: "#fff",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
};

const submenuItemStyle = {
  padding: "8px 40px",
  color: "#fff",
  fontSize: "14px",
  cursor: "pointer",
};

const iconStyle = {
  marginRight: "10px",
};

export default AdminSidebar;
