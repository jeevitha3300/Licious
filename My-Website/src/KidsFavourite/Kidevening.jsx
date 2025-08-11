import React, { useState } from 'react';
import './kidevening.css';
import Kidsfavourite from './Kidsfavourite';
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import CartPopUp from '../CartPopUp';

import eveningA1 from './KidfavImages/eveningA1.webp';
import eveningA2 from './KidfavImages/eveningA2.webp';
import eveningA3 from './KidfavImages/eveningA3.webp';
import eveningA4 from './KidfavImages/eveningA4.webp';
import eveningA5 from './KidfavImages/eveningA5.webp';
import eveningB1 from './KidfavImages/eveningB1.webp';
import eveningB2 from './KidfavImages/eveningB2.webp';
import eveningB3 from './KidfavImages/eveningB3.webp';
import eveningB4 from './KidfavImages/eveningB4.webp';
import eveningB5 from './KidfavImages/eveningB5.webp';
import eveningC1 from './KidfavImages/eveningC1.webp';
import eveningC2 from './KidfavImages/eveningC2.webp';
import eveningC3 from './KidfavImages/eveningC3.webp';
import eveningC4 from './KidfavImages/eveningC4.webp';
import eveningD1 from './KidfavImages/eveningD1.webp';
import eveningD2 from './KidfavImages/eveningD2.webp';
import eveningD3 from './KidfavImages/eveningD3.webp';
import eveningD4 from './KidfavImages/eveningD4.webp';
import eveningD5 from './KidfavImages/eveningD5.webp';
import eveningE1 from './KidfavImages/eveningE1.webp';
import eveningE2 from './KidfavImages/eveningE2.webp';
import eveningE3 from './KidfavImages/eveningE3.webp';
import eveningE4 from './KidfavImages/eveningE4.webp';
import eveningE5 from './KidfavImages/eveningE5.webp';
import eveningF1 from './KidfavImages/eveningF1.webp';
import eveningF2 from './KidfavImages/eveningF2.webp';
import eveningF3 from './KidfavImages/eveningF3.webp';
import eveningF4 from './KidfavImages/eveningF4.webp';
import eveningF5 from './KidfavImages/eveningF5.webp';

function Kidevening() {
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const { addToCart, removeFromCart, cartItems, getTotalQuantity } = useCart();
  const navigate = useNavigate();

  const handleAdd = (product) => {
    const productWithImage = {
      ...product,
      image: product.images[0], // use first image for cart display
    };
    addToCart(productWithImage);
    setAddedProduct(productWithImage);
    setShowPopup(true);
  };

  const subtotal = Object.values(cartItems).reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );

  const products = [
    {
      id: 'Crispy Chicken Nuggets',
      name: 'Crispy Chicken Nuggets',
      desc: "Juicy & meaty snack for your kiddos' evening cravings",
      weight: '250 g | 12 Pieces | Serves 3-4',
      price: 210,
      offerPrice: 189,
      discount: '8% off',
      time: 'Today 2PM - 5PM',
      images: [eveningA1, eveningA2, eveningA3, eveningA4, eveningA5],
    },
    {
      id: 'Classic Chicken Burger Patty',
      name: 'Classic Chicken Burger Patty',
      desc: 'Build your own meaty, juicy treat for a mid meal snack',
      weight: '1 Piece | piece',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningB1, eveningB2, eveningB3, eveningB4, eveningB5],
    },
    {
      id: 'Crispy Chicken Wings',
      name: 'Crispy Chicken Wings',
      desc: "Juicy & meaty snack for your kiddos' evening cravings",
      weight: '1 Piece | 1 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningC1, eveningC2, eveningC3, eveningC4],
    },
    {
      id: 'Crispy Fish Fingers',
      name: 'Crispy Fish Fingers',
      desc: "A crunchy, juicy & tasty pick for your kiddos' snack",
      weight: '2 Pieces | 2 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningD1, eveningD2, eveningD3, eveningD4, eveningD5],
    },
    {
      id: 'Crispy Prawns',
      name: 'Crispy Prawns',
      desc: 'Crispy, juicy, nutty prawns, perfect for all cravings',
      weight: '8-12 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningE1, eveningE2, eveningE3, eveningE4, eveningE5],
    },
    {
      id: 'Crispy Chicken Supreme',
      name: 'Crispy Chicken Supreme',
      desc: 'Crispy & juicy chicken tenders - a snack time treat',
      weight: '200 g | 10-12 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningF1, eveningF2, eveningF3, eveningF4, eveningF5],
    },
  ];

  return (
    <>
      <CartPopUp
        show={showPopup}
        product={addedProduct}
        subtotal={subtotal}
        itemCount={getTotalQuantity()}
        onClose={() => setShowPopup(false)}
        onCheckout={() => {
          setShowPopup(false);
          navigate('/checkout');
        }}
        onViewCart={() => {
          setShowPopup(false);
          navigate('/cart');
        }}
      />
      <Kidsfavourite />
      <div className="container">
        <div className="row eveninghead d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 eveninghead1 mb-4" key={product.id}>
                <div className="card shadow rounded-4">
                  <div
                    id={`carousel${index}`}
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      {product.images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          data-bs-target={`#carousel${index}`}
                          data-bs-slide-to={i}
                          className={i === 0 ? 'active' : ''}
                          aria-current={i === 0 ? 'true' : undefined}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="carousel-inner rounded-top-4">
                      {product.images.map((img, i) => (
                        <div
                          className={`carousel-item ${i === 0 ? 'active' : ''}`}
                          key={i}
                        >
                          <img
                            src={img}
                            className="eveningimgA rounded-top-4"
                            alt={`${product.name} slide ${i + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="evening-text">{product.name}</h5>
                    <p className="evening-text1">{product.desc}</p>
                    <div className="evening_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">
                        ₹{product.price}
                      </span>{' '}
                      {product.discount && (
                        <span className="evening-discount">{product.discount}</span>
                      )}
                    </p>
                    <p className="evening-time">{product.time}</p>

                    {quantity === 0 ? (
                      <button
                        className="btn btn-danger fw-bold px-3 py-1"
                        onClick={() => handleAdd(product)}
                      >
                        Add + <i className="bi bi-plus-lg ms-1"></i>
                      </button>
                    ) : (
                      <div className="quantity-control">
                        <button
                          className="qty-btn"
                          onClick={() => removeFromCart(product.id)}
                        >
                          −
                        </button>
                        <span className="qty-count">{quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => handleAdd(product)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Kidevening;
