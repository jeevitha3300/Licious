import React, { useState, useEffect } from 'react';
import './editProfile.css';

const EditProfile = ({ initialProfileData }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [preview, setPreview] = useState(initialProfileData?.profileImage || null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  // Populate formData on mount
  useEffect(() => {
    if (initialProfileData) {
      setFormData({
        firstName: initialProfileData.firstName || '',
        lastName: initialProfileData.lastName || '',
        email: initialProfileData.email || '',
        phone: initialProfileData.phone || ''
      });
    }
  }, [initialProfileData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfilePic(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    alert('Profile updated!');
    console.log('Form Data:', formData);
    console.log('Profile Image:', profilePic);
  };

  return (
    <div
      className="offcanvas offcanvas-end show edit-profile-offcanvas"
      tabIndex="-1"
      id="editProfileCanvas"
      aria-labelledby="editProfileLabel"
      style={{ visibility: 'visible', position: 'fixed' }}
    >
      <div className="offcanvas-header">
        <h5 id="editProfileLabel">Edit Profile</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <form onSubmit={handleSubmit} className="edit-profile-form">
          <div className="image-upload">
            <label htmlFor="profileImage" className="profile-image-label">
              {preview ? (
                <img src={preview} alt="Preview" className="profile-preview" />
              ) : (
                <div className="placeholder-img">Upload Image</div>
              )}
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
          </div>
           <input
          className='edit-input'
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
         <input
          className='edit-input'
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
         <input
          className='edit-input'
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
         <input
          className='edit-input'
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
       <button type="submit" className="editprofilebtn mt-3">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
