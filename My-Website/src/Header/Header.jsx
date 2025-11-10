import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as bootstrap from 'bootstrap';
import './header.css';
import logo from '../assets/images/logo.svg';
import label from '../assets/images/label.svg';
import search from '../assets/images/search.svg';
import category from '../assets/images/category.svg';
import cart from '../assets/images/cart.svg';
import chevron from '../assets/images/chevron.svg';
import Location from '../Location/Location';
import Drop from '../Category dropdown/Drop';
import Login from '../Login/Login';
import {useCart} from '../CartContext'

function Header() {
  const { cartItems, addToCart, removeFromCart,deleteFromCart, getTotalQuantity } = useCart();
  const navigate = useNavigate();
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const locationRef = useRef(null);
  const categoryRef = useRef(null);
   

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity') || 'Select Location';
    const storedAddress = localStorage.getItem('selectedAddress') || '';
    setCity(storedCity);
    setAddress(storedAddress);

    const handleLocationChange = () => {
      setCity(localStorage.getItem('selectedCity') || 'Select Location');
      setAddress(localStorage.getItem('selectedAddress') || '');
    };

    window.addEventListener('locationChanged', handleLocationChange);
    return () => window.removeEventListener('locationChanged', handleLocationChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = (showLocationPopup || showCategoryPopup) ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showLocationPopup, showCategoryPopup]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLocationPopup && locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationPopup(false);
      }
      if (showCategoryPopup && categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategoryPopup(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLocationPopup, showCategoryPopup]);

  const handleSearchClick = () => navigate('/search');



  const calculateSubtotal = () =>
    // Object.values(cartItems).reduce((sum, item) => sum + item.price * item.quantity, 0);
    Object.values(cartItems).reduce((sum, item) => sum + item.offerPrice * item.quantity, 0);
  const savedAmount = Object.values(cartItems).reduce((sum, item) => {
    // return sum + (item.originalPrice - item.price) * item.quantity;
         return sum + (item.price - item.offerPrice) * item.quantity;
  }, 0);

  const deliveryCharge = calculateSubtotal() >= 499 ? 0 : 39;
  const total = calculateSubtotal() + deliveryCharge;


  return (
    <div className="header">
      <div className="container head">
        <div className="row">
          <div className="col pt-1 mt-3 d-none d-lg-inline">
            <a href="/"><img src={logo} alt="logo" className="logo" /></a>
          </div>

          <div className="col locate" onClick={() => setShowLocationPopup(true)} style={{ cursor: 'pointer' }}>
            <img src={label} alt="label" className="label" />
            <span className="location">{city}</span>
            <img src={chevron} alt="chevron" className="ps-1 chevron" />
            <p className="address">{address}</p>
          </div>

          {showLocationPopup && (
            <div className="popup-overlay" style={overlayStyle}>
              <div className="popup-content" ref={locationRef} style={popupStyle}>
                <button onClick={() => setShowLocationPopup(false)} style={closeButtonStyle}>×</button>
                <Location />
              </div>
            </div>
          )}

          <div className="col-3 mt-2 d-none d-lg-inline search" onClick={handleSearchClick} style={{ cursor: 'pointer' }}>
            <input type="search" className="searchinput ps-3" placeholder="Search for any delicious product" />
            <img src={search} alt="Search" className="searchicon" />
          </div>

          <div className="col mt-3 pt-0 d-none ms-5 ps-3 d-lg-inline categoriesdiv" style={{ cursor: 'pointer' }}>
            <img className="categoryimg" src={category} alt="category" onClick={() => setShowCategoryPopup(true)} />
            <span className="categorytext ps-2" onClick={() => setShowCategoryPopup(true)}>Categories</span>
          </div>

          {showCategoryPopup && (
            <div className="overlay" style={categoryoverlayStyle}>
              <div className="content" ref={categoryRef} style={popupStyle}>
                <button onClick={() => setShowCategoryPopup(false)} style={closeButtonStyle}>×</button>
                <Drop />
              </div>
            </div>
          )}

          <div className="col mt-3 pt-0 d-none logindiv ms-5 d-lg-inline">
            <Login />
          </div>

          {/* Cart Icon (Triggers Bootstrap Offcanvas) */}
          <div className="col mt-3 d-none cartdiv d-lg-inline  ">
            <img
              className="cartimg"
              src={cart}
              alt="cart"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
              aria-controls="cartOffcanvas"
            />
            <span
              className="carttext ps-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
              aria-controls="cartOffcanvas"
            >
              Cart ({getTotalQuantity()})
            </span>
          </div>

          {/* Offcanvas Cart Summary */}
          <div className="offcanvas offcanvas-end " tabIndex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
            <div className="offcanvas-header1">
              <h5 className="offcanvas-title" id="cartOffcanvasLabel">Order Summary</h5>
              <button type="button" className="btn-closeA" data-bs-dismiss="offcanvas" aria-label="Close"><span className='closebuttonB'>x</span></button>
            </div>

            <div className="offcanvas-body d-flex flex-column justify-content-between p-0">
              <div>
                <div className="bg-success text-white text-center py-2 fw-semibold">
                  Free delivery on all orders above ₹499
                </div>

                {savedAmount > 0 && (
                  <div className="text-success border border-success rounded m-3 py-2 px-3 fw-semibold text-center">
                    Congratulations! You've saved ₹{savedAmount}
                  </div>
                )}

                <ul  className="list-group px-3" >
                  {Object.values(cartItems).map((item) => (
                    <li key={item.id} className="list-group-item border-0 px-0 pb-3">
                      <div className="d-flex justify-content-between align-items-start border border-black  p-2 rounded">
                        <div className="flex-grow-1">
                               <img
                            src={item.image}
                            alt={item.name}
                            className="cart-item-image mb-2"
                            style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
                          />
                          <div className="fw-bold">{item.name}</div>
                          <div className="  py-1 d-inline-block my-2">{item.weight}</div>
                          {/* <div> */}
                            {/* <span className="fw-bold text-danger">₹{item.price} {item.offerprice}    {item.discount}</span>
                            {item.offerprice && (
                              <span className="text-muted text-decoration-line-through ps-2">₹{item.discount}</span> */}
                           <span className="fw-bold text-danger">₹{item.offerPrice}</span>                          {item.price > item.offerPrice && (
                              <span className="text-muted text-decoration-line-through ps-2">₹{item.price}</span>
                            )}
                             {/* {item.discount && (
                              <span className="text-success ps-2">{item.discount}</span>
                            )} */}
                          </div>
                           <div>
                        </div>
                        <div className="d-flex align-items-center AddSub  ">
                          <button className="cart-btn btn-cart " onClick={() => removeFromCart(item.id)}>−</button>
                          <span className="px-2 fw-bold">{item.quantity}</span>
                          <button className="cart-btn btn-cart  " onClick={() => addToCart(item)}>+</button>
                   
                
                   
                        </div>
                         {/* .. */}
                    <button
                      className="cart-btn btn-cart-remove"
                      onClick={() => deleteFromCart(item.id)}
                      title="Remove item"
                    >
                     ×
                     </button>
                        {/* .. */}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-top mt-3 px-3 pt-3">
                  <h6 className="fw-bold">Bill Details</h6>
                  <div className="d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>₹{calculateSubtotal()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Delivery Charge</span>
                    <span>{deliveryCharge === 0 ? <span className="text-success">Free</span> : `₹${deliveryCharge}`}</span>
                  </div>
             
                  <div className="d-flex justify-content-between fw-bold mt-2">
                    <span>Total</span>
                    <span className="text-danger">₹{total}</span>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center border-top mt-3 px-3 py-3">
                <div className="fw-bold">Total : ₹{total}</div>
                {/* <button className="btn-proceed " onClick={() => navigate('/checkout')}>
                  Proceed to Checkout
                </button> */}

                
       

<button
  className="btn-proceed"
  onClick={() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";


      // Hide Cart Offcanvas if open
      const cartCanvasElement = document.getElementById('cartOffcanvas');
      if (cartCanvasElement) {
        const cartOffcanvasInstance = bootstrap.Offcanvas.getInstance(cartCanvasElement);
        if (cartOffcanvasInstance) {
          cartOffcanvasInstance.hide();
        }
      }
    if (isLoggedIn) {
      navigate('/checkout');
    } else {
      localStorage.setItem("redirectToCheckout", "true");
      // Show Login Offcanvas
      const loginOffcanvasElement = document.getElementById('offcanvasLogin');
      if (loginOffcanvasElement) {
        const loginOffcanvasInstance = new bootstrap.Offcanvas(loginOffcanvasElement);
        loginOffcanvasInstance.show();
      }
    }
  }}
>
  Proceed to Checkout
</button>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Header;

// Inline styles
const overlayStyle = {
  position: 'fixed',
  top: 72,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1000,
};
const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '15px',
  background: 'none',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
};
const categoryoverlayStyle = {
  position: 'fixed',
  top: 72,
  left: 0,
  zIndex: 1000,
};
const popupStyle = {
  borderRadius: '10px',
};
// ...................................................................
