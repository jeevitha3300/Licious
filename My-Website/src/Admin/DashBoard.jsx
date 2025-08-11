// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaHome,
//   FaThList,
//   FaBoxOpen,
//   FaUser,
//   FaImage,
//   FaComment,
//   FaShoppingCart,
//   FaCog,
//   FaChevronDown,
//   FaSignOutAlt,
//   FaChevronRight,
// } from "react-icons/fa";
// import adminlogo from '../assets/images/logo.svg';
// import './dashboard.css';
// import { FiUser } from "react-icons/fi";
// import UserTable from "./UserTable";

// const Dashboard = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [expandedMenu, setExpandedMenu] = useState(null);
//    const [activeContent, setActiveContent] = useState("dashboard"); 
// const navigate = useNavigate();
//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   // Toggle submenu (for example, Category)
//   const handleMenuToggle = (menu) => {
//     setExpandedMenu(expandedMenu === menu ? null : menu);
//   };
//     const handleLogout = () => {
//     navigate('/Admin');
//   };

//   const handleProfile = () => {
//     navigate('/dashboard');
//   };

//  const stats = [
//     { title: "Total Order", value: 1188 },
//     { title: "Total Banner", value: 4 },
//     { title: "Total User", value: 1226 },
//     { title: "Total Category", value: 10 },
//     { title: "Total Product", value: 16 },
//     { title: "Total Testimonial", value: 3 },
//   ];

//   return (
//     <div style={{ display: "flex",cursor:"pointer" }}>
//       {/* Sidebar */}
//       <div className="Adminslider">
//         <div className="Adminlogodiv">
//           <img src={adminlogo} className="adminlogo" alt="" />
//         </div>

//         <ul className="adminUl">
//             <li style={menuItemStyle} onClick={() => setActiveContent("dashboard")}>
//             <FaHome style={iconStyle} />
//             <span>Dashboard</span>
//           </li>
//  {/* Category Menu with Toggle */}
//           <li
//             style={menuItemStyle}
//             onClick={() => handleMenuToggle("category")}
//           >
//             <FaThList style={iconStyle} />
//             <span>
//               Category{" "}
//               {expandedMenu === "category" ? (
//                 <FaChevronDown className="chevrondown" />
//               ) : (
//                 <FaChevronRight className="chevronright" />
//               )}
//             </span>
//           </li>
//           {/* Submenu for Category */}
//           {expandedMenu === "category" && (
//             <li style={submenuItemStyle}>Add/Update Category</li>
//           )}
//          {/* Product */}
//           <li
//             style={menuItemStyle}
//             onClick={() => handleMenuToggle("product")}
//           >
//             <FaBoxOpen style={iconStyle} />
//             <span>
//               Product{" "}
//               {expandedMenu === "product" ? (
//                 <FaChevronDown className="chevrondown" />
//               ) : (
//                 <FaChevronRight className="chevronright" />
//               )}
//             </span>
//           </li>
//         {/* Submenu for Product*/}
//           {expandedMenu === "product" && (
//             <li style={submenuItemStyle}>Add/Update Product</li>
//           )}
//           {/* User */}
//           <li style={menuItemStyle}
//           onClick={() => handleMenuToggle("user")}
//           >
//           <FaUser style={iconStyle} />
//             <span>
//               User {" "} 
//                 {expandedMenu === "user" ? (
//                 <FaChevronDown className="chevrondown" />
//               ) : (
//                 <FaChevronRight className="chevronright" />
//               )}
//             </span>
//           </li>
//        {/* Submenu for User*/}
//           {expandedMenu === "user" && (
//               <li style={submenuItemStyle} onClick={() => setActiveContent("userList")}>
//               User List
//             </li>
//           )}

//     {/* Banner */}
//           <li style={menuItemStyle}
//            onClick={() => handleMenuToggle("banner")}
//           >
//             <FaImage style={iconStyle} />
//             <span>
//               Banner {""}
//                  {expandedMenu === "banner" ? (
//                 <FaChevronDown className="chevrondown" />
//               ) : (
//                 <FaChevronRight className="chevronright" />
//               )}
//             </span>
//           </li>
//   {/* Submenu for Banner*/}
//           {expandedMenu === "banner" && (
//             <li style={submenuItemStyle}>Add/Update Banner</li>
//           )}
//           {/* Testimonial */}
//           <li style={menuItemStyle}
//             onClick={() => handleMenuToggle("testimonial")}
//           >
//             <FaComment style={iconStyle} />
//             <span>
//               Testimonial {""}
//                   {expandedMenu === "testimonial" ? (
//                 <FaChevronDown className="chevrondown" />
//               ) : (
//                 <FaChevronRight className="chevronright" />
//               )}
//             </span>
//           </li>
//           {/* Submenu for Testimonial*/}
//           {expandedMenu === "testimonial" && (
//             <li style={submenuItemStyle}>Add/Update Testimonial</li>
//           )}
//        {/* Order */}
//           <li style={menuItemStyle}
//            onClick={() => handleMenuToggle("order")}
//           >
//             <FaShoppingCart style={iconStyle} />
//             <span>
//               Order {""}
//                   {expandedMenu === "order" ? (
//                 <FaChevronDown className="chevrondown" />
//               ) : (
//                 <FaChevronRight className="chevronright" />
//               )}
// </span>
//           </li>
//   {/* Submenu for Banner*/}
//           {expandedMenu === "order" && (
//             <li style={submenuItemStyle}>Order List</li>
//           )}
//           {/* Setting */}
//           <li style={menuItemStyle}
//           onClick={() => handleMenuToggle("setting")}
//           >
//           <FaCog style={iconStyle} />
//             <span>
//               Setting {""}
//                  Order {""}
//                   {expandedMenu === "setting" ? (
//                 <FaChevronDown className="chevrondown" />
//               ) : (
//                 <FaChevronRight className="chevronright" />
//               )}
//             </span>
//           </li>
//            {/* Submenu for Banner*/}
//           {expandedMenu === "setting" && (
//             <li style={submenuItemStyle}>Update Setting</li>
//           )}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div
//       className="adminmain">
//         {/* Header with Admin Dropdown */}
//         <div className="adminheader" onClick={toggleDropdown}>
//           <div className="adminheader1">
//             Admin{" "}
//             <FaChevronDown style={{ marginLeft: "5px", fontSize: "12px" }} />
//           </div>

//           {dropdownVisible && (
//             <div className="admin-drop">
//               <div className="dropdown-item pb-3" onClick={handleProfile}>
//                 <FiUser style={{ marginRight: "10px" }} /> Profile
//               </div>
//               <div className="dropdown-item pb-3" onClick={handleLogout}>
//                 <FaSignOutAlt style={{ marginRight: "10px" }} /> Logout
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Dashboard Cards */}
//         <div className="admindash-cards">
//           {activeContent === "dashboard" &&
//      stats.map((stat, index) => (
//             <div
//             className="admindash-cards1"
//               key={index}>
//               <h3 className="dashboardtext1">
//                 {stat.value}
//               </h3>
//               <p className="dashboardtext2">{stat.title}</p>
//             </div>
//           ))}
//               {activeContent === "userList" && <UserTable />}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const menuItemStyle = {
//   padding: "12px 20px",
//   color: "#555",
//   cursor: "pointer",
//   display: "flex",
//   alignItems: "center",
// };

// const submenuItemStyle = {
//   padding: "8px 40px",
//   color: "#888",
//   fontSize: "14px",
// };

// const iconStyle = {
//   marginRight: "10px",
// };

// export default Dashboard;

// ==================================================================================
import React, { useState } from "react";
import UserTable from "./UserTable";
import './dashboard.css';
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
const DashBoard = () => {
    const [activeContent, setActiveContent] = useState("dashboard");

    const stats = [
        { title: "Total Order", value: 1188 },
        { title: "Total Banner", value: 4 },
        { title: "Total User", value: 1226 },
        { title: "Total Category", value: 10 },
        { title: "Total Product", value: 16 },
        { title: "Total Testimonial", value: 3 },
    ];

    return (
        <div style={{ display: "flex", cursor: "pointer" }}>
            <AdminSidebar setActiveContent={setActiveContent} />
            <div className="adminmain">
                <AdminHeader />
                <div className="admindash-cards">
                    {activeContent === "dashboard" &&
                        stats.map((stat, index) => (
                            <div className="admindash-cards1" key={index}>
                                <h3 className="dashboardtext1">{stat.value}</h3>
                                <p className="dashboardtext2">{stat.title}</p>
                            </div>
                        ))}
                    {activeContent === "userList" && <UserTable />}
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
