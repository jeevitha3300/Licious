import React, { useState, useEffect } from 'react';
import './Addressstep.css';
import emptyhen from '../assets/images/emptyhen.svg';
import AddressModal from './AddressModal';
import TimeSlotModal from './TimeSlotModal';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';

const AddressStep = () => {
  const [showModal, setShowModal] = useState(false);
  const [savedAddress, setSavedAddress] = useState(null);
  const [selected, setSelected] = useState(false);
  const [currentStep, setCurrentStep] = useState('address');
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const { cartItems, calculateSubtotal, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  // ✅ Load logged-in user
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const subtotal = calculateSubtotal();
  const deliveryCharge = subtotal >= 499 ? 0 : 39;
  const total = subtotal + deliveryCharge;

  // ✅ Load saved address from localStorage
  useEffect(() => {
    if (user?.email) {
      const addressKey = `savedAddress_${user.email}`;
      const storedAddress = localStorage.getItem(addressKey);
      if (storedAddress) {
        setSavedAddress(JSON.parse(storedAddress));
        setSelected(true);
      }
    }
  }, [user?.email]);

  // ✅ Add / Edit address
  const handleAddAddressClick = () => setShowModal(true);

  const handleSaveAddress = (addressData) => {
    setSavedAddress(addressData);
    setSelected(true);
    setShowModal(false);

    if (user?.email) {
      localStorage.setItem(`savedAddress_${user.email}`, JSON.stringify(addressData));
    }
  };

  const handleSelectAddress = () => setSelected(true);

  const handleDeleteAddress = () => {
    if (user?.email) {
      localStorage.removeItem(`savedAddress_${user.email}`);
      setSavedAddress(null);
      setSelected(false);
    }
  };

  const handleEditAddress = () => setShowModal(true);

  // ✅ Place Order
  const handleClickPlaceOrder = async () => {
    if (!user || !user.email) {
      alert('Please log in to place an order.');
      return;
    }

    if (!savedAddress) {
      alert('Please add/select an address before placing the order.');
      return;
    }

    const newOrder = {
      userEmail: user.email,
      items: Object.values(cartItems).map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        offerPrice: item.offerPrice,
        quantity: item.quantity,
        image: item.image,
        weight: item.weight || 'Not specified', // ✅ ensure weight stored
      })),
      subtotal,
      deliveryCharge,
      total,
      address: savedAddress, // ✅ FIXED: replaced selectedAddress → savedAddress
      timeSlot: selectedSlot || 'Not selected',
      createdAt: new Date().toISOString(),
      status: "Pending", // initial status
    };

    // ✅ Save locally (for account history)
    const orderKey = `orderHistory_${user.email}`;
    const existingOrders = JSON.parse(localStorage.getItem(orderKey)) || [];
    existingOrders.push(newOrder);
    localStorage.setItem(orderKey, JSON.stringify(existingOrders));

    // ✅ Save to backend (MongoDB)
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder),
      });

      if (!response.ok) throw new Error('Failed to save order');
      console.log('✅ Order saved to MongoDB');
    } catch (err) {
      console.error('❌ Error saving order:', err);
    }

    // ✅ Clear cart and show success
    setCurrentStep('payment');
    setOrderSuccess(true);
    clearCart();
    setTimeout(() => navigate('/'), 3000);
  };

  return (
    <div className="checkout-container">
      <div className="address-panel">
        {/* ADDRESS STEP */}
        {currentStep === 'address' && (
          <>
            {savedAddress ? (
              <div className="saved-address">
                <h3 className="savehead">Saved Address</h3>
                <label className="custom-radio">
                  <input type="radio" checked={selected} onChange={handleSelectAddress} />
                  <span className="radiomark"></span>
                  <div className="address-details">
                    <h3 className="saveoption">🏠 {savedAddress.label}</h3>
                    <p>{savedAddress.fullAddress}</p>
                    <p>{savedAddress.city}</p>
                    <p>Mobile Number: {savedAddress.mobile}</p>
                  </div>
                </label>
                {selected && (
                  <div className="actions">
                    <button className="delete-btn" onClick={handleDeleteAddress}>Delete</button>
                    <button className="edit-btn" onClick={handleEditAddress}>Edit</button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <img src={emptyhen} alt="No address" className="address-image" />
                <p className="no-address-text">No address saved</p>
              </>
            )}

            <div className="button-group">
              <button className="add-address-btn" onClick={handleAddAddressClick}>
                {savedAddress ? 'Edit address' : 'Add new address'}
              </button>
              <button
                className={`proceed-btn-add ${selected ? 'active' : ''}`}
                disabled={!selected}
                onClick={() => selected && setCurrentStep('summary')}
              >
                Select & Proceed
              </button>
            </div>
          </>
        )}

        {/* DELIVERY SUMMARY STEP */}
        {currentStep === 'summary' && (
          <div className="summary-panel">
            <h3 className="deliverytime mb-3">
              {Object.keys(cartItems).length} item
              {Object.keys(cartItems).length > 1 ? 's' : ''} to arrive Today (
              {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })})
            </h3>

            <div className="summarydrop">
              <div className="time-slot-dropdown" onClick={() => setShowTimeSlotModal(true)}>
                {selectedSlot || 'Select a delivery slot'}
              </div>
            </div>

            {Object.values(cartItems).map((item) => (
              <div key={item.id} className="product-summary">
                <img
                  style={{ width: '65px', height: '62px' }}
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
                <div className="product-details">
                  <p className="productsummary1 mt-3"><strong>{item.name}</strong></p>
                  <p className="productsummary">
                    {item.weight}
                    <span className="price"> ₹{item.offerPrice}</span>
                    {item.price > item.offerPrice && <s className="ms-2">₹{item.price}</s>}
                    &nbsp;Qty: {item.quantity}
                    <span
                      className="remove"
                      onClick={() => removeFromCart(item.id)}
                      style={{ cursor: 'pointer' }}
                      title="Remove item"
                    >
                      X
                    </span>
                  </p>
                </div>
              </div>
            ))}

            <div className="billing-summary">
              <p>Subtotal: ₹{subtotal}</p>
              <p>
                Delivery Charge:{' '}
                {deliveryCharge === 0 ? <span className="text-success">Free</span> : `₹${deliveryCharge}`}
              </p>
              <p><strong>Total: ₹{total}</strong></p>
            </div>

            <button className="proceed-btn-summary active" onClick={handleClickPlaceOrder}>
              Place order
            </button>
          </div>
        )}

        {/* PAYMENT STEP */}
        {currentStep === 'payment' && (
          <div className="payment-step">
            {orderSuccess && (
              <div className="success-message mt-3">
                ✅ Your order has been placed successfully!
                <br />
              </div>
            )}
          </div>
        )}
      </div>

      {/* CHECKOUT STEPS */}
      <div className="checkout-steps">
        <div className={`step ${currentStep === 'address' ? 'active' : 'done'}`}>
          <div className="step-icon">{currentStep === 'address' ? '●' : '✓'}</div>
          <span>
            Choose Address{' '}
            <span className="change-link" onClick={() => setCurrentStep('address')}>
              Change
            </span>
          </span>
          {savedAddress && (
            <p className="step-description">
              {savedAddress.city}, {savedAddress.mobile}
            </p>
          )}
        </div>

        <div className={`step ${currentStep === 'summary' ? 'active' : currentStep === 'payment' ? 'done' : ''}`}>
          <div className="step-icon">●</div>
          <span>Delivery Summary</span>
          <p className="step-description">
            {Object.keys(cartItems).length} product(s) will be delivered in 1 shipment
          </p>
        </div>

        <div className={`step ${currentStep === 'payment' ? 'active' : ''}`}>
          <div className="step-icon">○</div>
          <span>Place Order</span>
        </div>
      </div>

      {/* MODALS */}
      {showModal && (
        <AddressModal onClose={() => setShowModal(false)} onSave={handleSaveAddress} existingAddress={savedAddress} />
      )}

      {showTimeSlotModal && (
        <TimeSlotModal
          onClose={() => setShowTimeSlotModal(false)}
          onSelectSlot={(slot) => {
            setSelectedSlot(slot);
            setShowTimeSlotModal(false);
          }}
        />
      )}
    </div>
  );
};

export default AddressStep;
