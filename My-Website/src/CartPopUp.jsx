import React from 'react';
import './cartpopup.css';
import * as bootstrap from 'bootstrap'; // Ensure this import is available

const CartPopUp = ({ show, onClose, product, subtotal, itemCount, onCheckout }) => {
  if (!show || !product) return null;

  const handleViewCart = () => {
    // Close popup first
    onClose();

    // Show Bootstrap offcanvas programmatically
    const cartOffcanvas = document.getElementById('cartOffcanvas');
    if (cartOffcanvas) {
      const bsOffcanvas = new bootstrap.Offcanvas(cartOffcanvas);
      bsOffcanvas.show();
    }
  };

  return (
    <div className="popup-backdrop">
      <div className="popup-box">
        <button className="popup-close" onClick={onClose}>×</button>

        <div className="popup-heading">Added to cart successfully. What is next?</div>

        <div className="popup-content">
          <div className="popup-left">
            <img src={product.image} alt={product.name} className="popup-product-image" />
            <div>
              <h5 className="popup-product-title">{product.name}</h5>
              <p className="popup-product-qty">2 × <span className='popup-product-qty1'>₹{product.price}</span></p>
            </div>
          </div>

          <div className="popup-right">
            <button className="btncheck btn-warning w-100 mb-2" onClick={onCheckout}>Checkout</button>
            <div className="popup-subtotal">Order subtotal</div>
            <div className="popup-total">₹{subtotal}</div>
            <div className="popup-items">Your cart contains {itemCount} items</div>
            <button className="btncontinue btn-secondary w-100 mt-3" onClick={onClose}>Continue shopping</button>
            <button className="btnview btn-dark w-100 mt-2" onClick={handleViewCart}>View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
