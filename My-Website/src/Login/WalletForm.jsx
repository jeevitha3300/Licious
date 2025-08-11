import React from 'react';
import { useNavigate } from 'react-router-dom';


const WallletForm = () => {
  const navigate = useNavigate();

  return (
    <>
    
    <div className="container p-4">
      <h5>Upload Money</h5>
      <input type="text" className="form-control mb-3" placeholder="Enter the amount" />

      <div className="mb-3">
        <label className="me-3"><input type="radio" name="amount" /> ₹100</label>
        <label className="me-3"><input type="radio" name="amount" /> ₹500</label>
        <label><input type="radio" name="amount" /> ₹1000</label>
      </div>

      <div className="d-flex mb-3">
        <div className="me-4">
          <input type="radio" name="payment" defaultChecked /> Credit card / Debit card
        </div>
        <div>
          <input type="radio" name="payment" /> Net Banking
        </div>
      </div>

      <input type="text" className="form-control mb-2" placeholder="Card Number" />
      <input type="text" className="form-control mb-2" placeholder="Name on the card" />
      <div className="d-flex mb-2">
        <input type="text" className="form-control me-2" placeholder="Month" />
        <input type="text" className="form-control" placeholder="Year" />
      </div>
      <input type="text" className="form-control mb-3" placeholder="CVV" />

      <button className="btn btn-danger me-2">Submit</button>
      <button className="btn btn-secondary" onClick={() => navigate('/wallet')}>Cancel</button>
    </div>
    </>
  );
};

export default WallletForm;
