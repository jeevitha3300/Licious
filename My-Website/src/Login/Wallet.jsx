import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './wallet.css';
import creditdebit from './LoginImages/creditdebit.png';
import netbank from './LoginImages/netbank.png';

const Wallet = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const renderTransactions = () => (
    <div className="text-center mt-4">
      <h6>No Transaction History</h6>
      <p>You have not made any Transactions Yet</p>
    </div>
  );

  const renderUploadForm = () => (
    <div className="upload-form p-4">
      <h6>Enter the amount</h6>
      <input type="text" className="form-amount mb-3 rounded" placeholder="Enter the amount" />

      <div className="mb-3">
        <label className="me-3 amount1">
          <input type="radio" name="amount" /> ₹100
        </label>
        <label className="me-3 amount1">
          <input type="radio" name="amount" /> ₹500
        </label>
        <label className="me-3 amount1">
          <input type="radio" name="amount" /> ₹1000
        </label>
      </div>

      <div className="mb-3 d-flex payment-options">
        <label className="me-4 d-flex align-items-center payment-option">
          <input type="radio" name="payment" defaultChecked />
          <img src={creditdebit} className="creditdebitimg" alt="Credit/Debit card" />
          <span className="ms-2">Credit card / Debit card</span>
        </label>

        <label className="d-flex align-items-center payment-option">
          <input type="radio" name="payment" />
          <img src={netbank} className="creditdebitimg" alt="Net Banking" />
          <span className="ms-2">Net Banking</span>
        </label>
      </div>

      <input type="text" className="form-control mb-2" placeholder="Card Number" />
      <input type="text" className="form-control mb-2" placeholder="Name on the card" />
      <div className="d-flex mb-2">
        <input type="text" className="form-control me-2" placeholder="Month" />
        <input type="text" className="form-control" placeholder="Year" />
      </div>
      <input type="text" className="form-control mb-3" placeholder="CVV" />

      <button className="sub-btn me-2">Submit</button>
      <button className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
    </div>
  );

  return (
    <div className="container wallet-container py-5">
      {!showForm ? (
        <>
          <h6 className="mb-3 ms-2">Info</h6>
          <h6 className="mb-3 ms-2">Balance</h6>

          <div className="d-flex gap-4">
            <div className="wallet-box">
              <div className="wallet-balance">0</div>
              <div className="wallet-label">Licious Cash</div>
            </div>

            <div className="wallet-box">
              <div className="wallet-balance">0</div>
              <div className="wallet-label">Licious Cash+</div>
            </div>
          </div>

          <p
            className="text-danger text-w mb-3"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/wallet-info')}
          >
            How Licious cash and Licious cash+ works?
          </p>

          <button className="btn-wallet bg-danger mb-4" onClick={() => setShowForm(true)}>
            Upload Money
          </button>

          <div className="wallet-tabs d-flex justify-content-around border-bottom mb-3">
            {['All', 'Credited', 'Debited'].map((tab) => (
              <span
                key={tab}
                className={`wallet-tab ${activeTab === tab ? 'active-wallet-tab' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>

          {renderTransactions()}
        </>
      ) : (
        renderUploadForm()
      )}
    </div>
  );
};

export default Wallet;
