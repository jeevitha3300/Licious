import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shopcategory.css";

function ShopCategory() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/categories/enabled")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container shopcategoryhead my-3">
      <h1 className="shoptitle">Shop by categories</h1>
      <h2 className="shoptext">Freshest meats and much more!</h2>

      <div className="shop-grid">
        {categories.map((cat) => (
          <div
            key={cat._id}
            className="shop-item"
            onClick={() => navigate(`/category/${cat._id}`)}
          >
            <img src={cat.image} alt={cat.category} className="shopimg" />
            <div className="t1shop mt-2">{cat.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
