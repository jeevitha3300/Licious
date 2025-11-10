// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./drop.css"; // make sure you have this file for styling

// function Drop() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [menuItems, setMenuItems] = useState([]);
//   const navigate = useNavigate();

//   // ✅ Fetch categories dynamically
//   useEffect(() => {
//     fetch("http://localhost:5000/api/categories/enabled")
//       .then((res) => res.json())
//       .then((data) => {
//         // each category can have a submenu (optional)
//         const formatted = data.map((item) => ({
//           name: item.category,
//           image: item.image,
//           id: item._id,
//           subMenu: item.subcategories?.map((sub) => sub.name) || [],
//         }));
//         setMenuItems(formatted);
//       })
//       .catch((err) => console.error("Category fetch error:", err));
//   }, []);

//   return (
//     <div className="container drop">
//       <div
//         className="menu-wrapper"
//         onMouseLeave={() => setActiveIndex(null)}
//       >
//         <div className="menu-scroll">
//           <ul className="menu-list">
//             {menuItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`menu-item ${activeIndex === index ? "active" : ""}`}
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onClick={() => {
//                   setActiveIndex(index);
//                   navigate(`/category/${item.id}`); // ✅ Navigate to Category page
//                 }}
//               >
//                 <img src={item.image} alt={item.name} className="menu-icon" />
//                 <span className="menu-text">{item.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* ✅ Optional: show subcategories when hovered */}
//         {activeIndex !== null && menuItems[activeIndex]?.subMenu?.length > 0 && (
//           <div className="submenu-container">
//             {menuItems[activeIndex].subMenu.map((subItem, subIndex) => (
//               <div
//                 key={subIndex}
//                 className="submenu-item"
//                 onClick={() => {
//                   navigate(`/category/${menuItems[activeIndex].id}`);
//                 }}
//               >
//                 {subItem}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Drop;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./drop.css";

function Drop() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  // ✅ Fetch categories dynamically
  useEffect(() => {
    fetch("http://localhost:5000/api/categories/enabled")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          name: item.category,
          image: item.image,
          id: item._id,
          subMenu: item.subcategories?.map((sub) => ({
            name: sub.name,
            image: sub.image,
          })) || [],
        }));
        setMenuItems(formatted);
      })
      .catch((err) => console.error("Category fetch error:", err));
  }, []);

  return (
    <div className="container drop">
      <div
        className="menu-wrapper"
        onMouseLeave={() => setActiveIndex(null)}
      >
        <div className="menu-scroll">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`menu-item ${activeIndex === index ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <img src={item.image} alt={item.name} className="menu-icon" />
                <span
                  className="menu-text"
                  onClick={() => navigate(`/category/${item.id}`)}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Subcategory dropdown */}
        {activeIndex !== null &&
          menuItems[activeIndex]?.subMenu?.length > 0 && (
            <div className="submenu-container">
              {menuItems[activeIndex].subMenu.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="submenu-item"
                  onClick={() =>
                    navigate(
                      `/category/${menuItems[activeIndex].id}?sub=${encodeURIComponent(
                        subItem.name
                      )}`
                    )
                  }
                >
                  {subItem.name}
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
}

export default Drop;
