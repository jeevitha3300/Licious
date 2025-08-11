import React, { useState, useEffect } from 'react';
import './addressmodel.css';

const locations = [
  { city: 'Bangalore', pincode: '560001' },
  { city: 'Chennai', pincode: '600001' },
  { city: 'Coimbatore', pincode: '641001' },
  { city: 'Mumbai', pincode: '400001' },
  { city: 'Delhi', pincode: '110001' },
  { city: 'Hyderabad', pincode: '500001' },
];

const AddressModal = ({ onClose, onSave, existingAddress }) => {
  const [street, setStreet] = useState('');
  const [landmark, setLandmark] = useState('');
  const [mobile, setMobile] = useState('');
  const [saveAs, setSaveAs] = useState('');
  const [city, setCity] = useState('Hyderabad');
  const [pincode, setPincode] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const selected = locations.find(loc => loc.city === city);
    setPincode(selected?.pincode || '');
  }, [city]);

  useEffect(() => {
    if (existingAddress) {
      setStreet(existingAddress.street || '');
      setLandmark(existingAddress.landmark || '');
      setMobile(existingAddress.mobile || '');
      setSaveAs(existingAddress.label || '');
      const cityParts = existingAddress.city?.split(',') || [];
      setCity(cityParts[0]?.trim() || 'Hyderabad');
    }
  }, [existingAddress]);

  const validate = () => {
    const newErrors = {};
    if (!street.trim()) newErrors.street = 'Street address is required';
    if (!landmark.trim()) newErrors.landmark = 'Landmark is required';
    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(mobile.trim())) {
      newErrors.mobile = 'Enter a valid 10-digit number';
    }
    if (!pincode.trim()) newErrors.pincode = 'Pin code is required';
    if (!saveAs) newErrors.saveAs = 'Please select a label';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const formatted = {
        label: saveAs,
        fullAddress: `${street}, ${landmark}`,
        city: `${city}, ${pincode}`,
        mobile,
        street,
        landmark,
      };
      onSave(formatted);
      onClose();
    }
  };

  const handleCitySelect = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>{existingAddress ? 'Edit Address' : 'Add New Address'}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="address-form" style={{fontSize:"14px"}}>
<label htmlFor="" className='local'>Search For area /Locality</label>
            <select value={city} onChange={handleCitySelect} placeholder="Search For area /Locality">
              {locations.map((loc) => (
                <option key={loc.city} value={loc.city}>
                  {loc.city}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Flat no / Building / Street name"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            {errors.street && <span className="error">{errors.street}</span>}

            <input
              type="text"
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
            {errors.landmark && <span className="error">{errors.landmark}</span>}
{/* 
            <input
              type="text"
              placeholder="Pin Code"
              value={pincode}
              readOnly
            />
            {errors.pincode && <span className="error">{errors.pincode}</span>} */}

            <input
              type="text"
              placeholder="Mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}

            <div className="save-as-group">
              <label>Save As:</label>
              <div className="save-options">
                {['Home', 'Work', 'Other'].map((option) => (
                  <button
                    key={option}
                    className={saveAs === option ? 'selected' : ''}
                    type="button"
                    onClick={() => setSaveAs(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {errors.saveAs && <span className="error">{errors.saveAs}</span>}
            </div>

            <button
              className="save-proceed-btn"
              onClick={handleSubmit}
              disabled={Object.keys(validate()).length > 0}
            >
              Save & Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
