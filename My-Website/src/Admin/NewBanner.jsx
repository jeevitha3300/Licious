import React, { useState, useContext } from 'react';
import { BannerContext } from './BannerContext';
import { useNavigate } from 'react-router-dom';
import Adminsidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import './newbanner.css';
const NewBanner = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [imageName, setImageName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const { fetchBanners } = useContext(BannerContext);  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert('Please upload a banner image.');
      return;
    }
    if (!imageName.trim()) {
      alert('Please enter banner name.');
      return;
    }
   // Convert image file to base64 string
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
       try {
      const base64Image = await toBase64(imageFile);
      const response = await fetch('http://localhost:5000/api/banner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: imageName, image: base64Image }),
      });

      if (!response.ok) {
        throw new Error('Failed to save banner');
      }
      // Refresh banners list
      await fetchBanners();
      // Clear form inputs
      setImageName('');
      setImageFile(null);
     // Redirect to manage banner page
      navigate('/managebanner');
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  const handleCancel = () => {
    setImageName('');
    setImageFile(null);
  };

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      <AdminHeader />
      <Adminsidebar/>
    
<div className="newbanner-container">
      <div className="newbannerheader">
        <h3 className="newform">New Banner</h3>
      </div>

      <div className="banner-form-container">
        <div className="form-box">
          <h3>Add Banner</h3>
          <form onSubmit={handleSubmit}>
            <label>Banner Name</label>
            <input
            className='bannername'
              type="text"
              placeholder="Banner Name"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
            />

            <label>Upload Banner Image</label>
            <input
            className='bannerimage'
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
            />

            <div className="form-buttons">
              <button type="button" className="cancelbtn" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default NewBanner;
