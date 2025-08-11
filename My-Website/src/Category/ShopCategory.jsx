import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './shopcategory.css';

function ShopCategory() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  const handleCategoryClick = (catId) => {
    navigate(`/category/${catId}`);
  };

  return (
    <div className="container shopcategoryhead my-3">
      <h1 className="shoptitle">Shop by categories</h1>
      <h2 className="shoptext">Freshest meats and much more!</h2>
      <div className="row mt-3 shop1">
        {categories.map((cat, index) => (
          <div key={cat._id || index} className="col-2 my-4">
            <img
              crossOrigin="anonymous"
              src={cat.image}
              alt={cat.title}
              className="shopimg"
              style={{ cursor: 'pointer' }}
              onClick={() => handleCategoryClick(cat.id)} // Pass category.id
            />
            <div className="t1shop mt-3">{cat.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCategory;
