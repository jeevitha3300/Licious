import React, { useState, useEffect } from 'react';
import './account.css';
import Wallet from './Wallet';
import ReferFriend from './ReferFriend';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const [activeTab, setActiveTab] = useState('Order History');
  const [orderHistory, setOrderHistory] = useState([]);
  const navigate = useNavigate();

  // Get user data from localStorage
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : {};

  // Load order history on component mount
  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrderHistory(orders);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'Order History':
        if (orderHistory.length === 0) {
          return <p className="text-center">No Order History</p>;
        }
        return (
          <div className="order-history-list">
            {orderHistory
              .slice()
              .reverse()
              .map((order) => (
                <div key={order.id} className="order-card mb-3 p-3 border rounded">
                  <h6>Order #{order.id}</h6>
                  <p><strong>Date:</strong> {order.date}</p>
                  <p><strong>Delivery Slot:</strong> {order.timeSlot}</p>
                  <p><strong>Address:</strong> {order.address?.label}, {order.address?.fullAddress}, {order.address?.city}</p>
                  <p><strong>Items:</strong></p>
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.id}>
                            <img 
        src={item.image} 
        alt={item.name} 
        style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px' }} 
      />
                       {item.name} - Qty: {item.quantity} - ₹{item.offerPrice} each
                      </li>
                    ))}
                  </ul>
                  <p>
                    <strong>Subtotal:</strong> ₹{order.subtotal} | <strong>Delivery:</strong>{' '}
                    {order.deliveryCharge === 0 ? 'Free' : `₹${order.deliveryCharge}`} | <strong>Total:</strong> ₹{order.total}
                  </p>
                </div>
              ))}
          </div>
        );

      case 'Saved Address':
        return <p className="text-center">No Address Saved</p>;

      case 'Licious Wallet':
        return <Wallet />;

      case 'Refer a Friend':
        return <ReferFriend />;

      default:
        return null;
    }
  };

  const handleTabClick = (tab) => {
    if (tab === 'Rewards') {
      navigate('/Reward'); // Direct route to Reward component
    } else {
      setActiveTab(tab);
    }
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    navigate('/EditProfile'); // Navigate to EditProfile
  };

  return (
    <div className="container pt-5 account-container">
      {/* Profile Header */}
      <div className="mb-4">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 style={{ fontSize: '28px' }}>
              {user.firstName || 'null'} {user.lastName || 'null'}
            </h5>
            <p className="text-muted m-0">
              {user.mobile} | {user.email}
              <a
                href="#"
                className="text-danger ps-3"
                onClick={handleEditProfile}
                style={{ fontWeight: '500', fontSize: '14px', textDecoration: 'none' }}
              >
                Edit profile
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="row">
        <div className="col-md-3 border-end accountHead">
          <ul className="nav flex-column account-tabs">
            {['Order History', 'Rewards', 'Saved Address', 'Licious Wallet', 'Refer a Friend'].map((tab) => (
              <li
                key={tab}
                className={`nav-link py-3 px-4 ${activeTab === tab ? 'active-tab' : ''}`}
                onClick={() => handleTabClick(tab)}
                style={{ cursor: 'pointer' }}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-9 py-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Account;
