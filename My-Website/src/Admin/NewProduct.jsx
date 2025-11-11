import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import './newproduct.css';
import Alert from 'react-bootstrap/Alert';
const NewProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state?.product || null;

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    subcategory: '',
    desc: '',
    weight: '',
    price: '',
    offerPrice: '',
    images: [''],
  });
  const [discount, setDiscount] = useState(0);
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  // Load categories
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);
  //  Auto calculate discount when price or offerPrice changes
  useEffect(() => {
    const { price, offerPrice } = formData;
    if (price && offerPrice && parseFloat(price) > 0) {
      const discountValue = (((price - offerPrice) / price) * 100).toFixed(1);
      setDiscount(discountValue);
    } else {
      setDiscount(0);
    }
  }, [formData.price, formData.offerPrice]);
  // Prefill if editing
  useEffect(() => {
    if (editData) {
      setFormData({
        ...editData,
        images: editData.images || []
      });
      const categoryObj = categories.find(cat => cat._id === editData.category);
      if (categoryObj) setSubcategories(categoryObj.subcategories || []);
    }
  }, [editData, categories]);

  const handleTextChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
    const updated = [...formData.images];
    updated[index] = file;
    setFormData({ ...formData, images: updated });
  };
  const addField = () => {
    setFormData({ ...formData, images: [...formData.images, ''] });
  };
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({ ...formData, category: selectedCategory, subcategory: '' });

    const categoryObj = categories.find(cat => cat._id === selectedCategory);
    if (categoryObj) setSubcategories(categoryObj.subcategories || []);
    else setSubcategories([]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEdit = !!editData;
    const url = isEdit
      ? `http://localhost:5000/api/products/${formData._id}`
      : `http://localhost:5000/api/products`;
    const method = isEdit ? 'PUT' : 'POST';
    try {
      const formDataToSend = new FormData();
      // Append fields
      for (const key in formData) {
        if (key === "images") {
          formData.images.forEach((file) => {
            if (file instanceof File) formDataToSend.append("images", file);
          });
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
      // Append numeric fields safely
      formDataToSend.set("price", parseFloat(formData.price));
      formDataToSend.set("offerPrice", parseFloat(formData.offerPrice || 0));
      formDataToSend.set("discount", parseFloat(discount || 0));
      const res = await fetch(url, { method, body: formDataToSend });
      const data = await res.json();
      if (res.ok) {
        setMessage(isEdit ? "Product updated successfully!" : "Product created successfully!");

        if (!isEdit) {
          setFormData({
            name: "",
            desc: "",
            category: "",
            subcategory: "",
            price: "",
            offerPrice: "",
            weight: "",
            images: [""],
          });
        }
        setTimeout(() => {
          setMessage("");
          if (isEdit) navigate("/manageproduct");
        }, 2000);
      } else {
        setMessage(`Error: ${data.message || "Failed to save."}`);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setMessage("Server error. Try again.");
    }
  };
  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className="newproduct-container">
        <div className="newproductheader">
          <h3 className="newform">{editData ? 'Edit Product' : 'New Product'}</h3>
        </div>
        <div className="product-form-container">
          <div className="form-box">
            {message && (
              <Alert
                style={{ border: "none", fontSize: "18px" }}
                className="text-success text-end bg-white"
                onClose={() => setMessage("")}
              >
                {message}
              </Alert>
            )}
            <form className="styled-form" onSubmit={handleSubmit}>
              {/* Category + Subcategory */}
              <div className="form-row">
                <div className="form-group">
                  <label>Category</label>
                  <select style={{ padding: "9px", borderRadius: "4px" }} value={formData.category} onChange={handleCategoryChange}>
                    <option value="">-- Select Category --</option>
                    {categories.map(cat => (
                      <option key={cat._id} value={cat._id}>{cat.category}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Subcategory</label>
                  <select
                    style={{ padding: "9px", borderRadius: "4px" }}
                    value={formData.subcategory}
                    onChange={(e) => handleTextChange(e, 'subcategory')}
                    disabled={!subcategories.length}
                  >
                    <option value="">-- Select SubCategory --</option>
                    {subcategories.map(sub => (
                      <option key={sub._id} value={sub.name}>{sub.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Name + Description */}
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" value={formData.name} onChange={(e) => handleTextChange(e, 'name')} required />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea style={{ borderRadius: "5px" }} value={formData.desc} onChange={(e) => handleTextChange(e, 'desc')} />
                </div>
              </div>
              {/* Weight + Prices */}
              <div className="form-row">
                <div className="form-group">
                  <label>Weight</label>
                  <input type="text" value={formData.weight} onChange={(e) => handleTextChange(e, 'weight')} />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input type="number" value={formData.price} onChange={(e) => handleTextChange(e, 'price')} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Offer Price</label>
                  <input type="number" value={formData.offerPrice} onChange={(e) => handleTextChange(e, 'offerPrice')} />
                </div>
                <div className="form-group">
                  <label>Images</label>
                  {formData.images.map((img, i) => (
                    <div key={i} style={{ marginBottom: '10px' }}>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, i)}
                        style={{ width: '100%' }}
                      />
                      {typeof img === 'string' && img !== '' && (
                        <img
                          src={img.startsWith('http') ? img : `http://localhost:5000${img}`}
                          alt={`product-${i}`}
                          style={{ width: '100px', height: 'auto', marginTop: '5px' }}
                        />
                      )}
                    </div>
                  ))}
                  <button
                    style={{ padding: "5px 0px" }}
                    className="Productadd-btn"
                    type="button"
                    onClick={() => addField('images')}
                  >
                    + Image
                  </button>
                </div>
              </div>
              <div className="form-buttons">
                <button type="button" className="cancelbtn" onClick={() => navigate('/manageproduct')}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {editData ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewProduct;




