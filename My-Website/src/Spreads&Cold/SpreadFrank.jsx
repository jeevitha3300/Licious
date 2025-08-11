import React from 'react';
import "./spreadfrank.css"
import { useCart } from '../CartContext';
import frankA1 from './SpreadsColdImages/frankA1.webp'
import frankA2 from './SpreadsColdImages/frankA2.webp'
import frankA3 from './SpreadsColdImages/frankA3.webp'
import frankA4 from './SpreadsColdImages/frankA4.webp'
import frankB1 from './SpreadsColdImages/frankB1.webp'
import frankB2 from './SpreadsColdImages/frankB2.webp'
import frankB3 from './SpreadsColdImages/frankB3.webp'
import frankB4 from './SpreadsColdImages/frankB4.webp'
import frankC1 from './SpreadsColdImages/frankC1.webp'
import frankC2 from './SpreadsColdImages/frankc2.webp'
import frankC3 from './SpreadsColdImages/frankc3.webp'
import frankc4 from './SpreadsColdImages/frankC4.webp'
import SpreadsCold from './SpreadsCold';

const products = [
  {
    id: "Classic Smocked Chicken Frankfurter",
    name: 'Classic Smocked Chicken Frankfurter',
    desc: "Chicken Sausage smocked with fine oakwoood",
    weight: '4 Pieces | 4 Pieces',
    price: 279,
    offerPrice: 265,
    discount: '5% off',
    time: '',
    images: [frankA1, 
             frankA2, 
             frankA3,
             frankA4],
  },
  {
    id: "Chicken Frankfurter With Paprika & Cheese",
    name: "Chicken Frankfurter With Paprika & Cheese",
    desc: 'Chicken Sausage SEasoned with paprika & cheese',
    weight: '4 Piece |4 piece',
    price: 299,
    offerPrice: 271,
    discount: '5% off',
    time: '',
    images: [frankB1, 
             frankB2,
             frankB3,
             frankB4],
  },
    {
    id: "Chicken Chorizo Frankfurter",
    name: "Chicken Chorizo Frankfurter",
    desc: 'Chicken Sausage SEasoned with Chorizo spice mix',
    weight: '4 Piece |4 piece',
    price: 299,
    offerPrice: 271,
    discount: '5% off',
    time: '',
    images: [frankC1, 
             frankC2,
             frankC3,
             frankc4],
  },
];

function SpreadFrank() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <SpreadsCold/>
      <div className="container">
        <div className="row frankhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 frankhead1 mb-4" key={product.id}>
                <div className="card shadow rounded-4">
                  <div id={`carousel${index}`} className="carousel slide" data-bs-ride="carousel">
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
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner rounded-top-4">
                      {product.images.map((img, i) => (
                        <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                          <img src={img} className="frankimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="frank-text">{product.name}</h5>
                    <p className="frank-text1">{product.desc}</p>
                    <div className="frank_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="frank-discount">{product.discount}</span>}
                    </p>
                    <p className="frank-time">{product.time}</p>

                    {quantity === 0 ? (
                      <button
                        className="btn btn-danger fw-bold px-3 py-1 "
                        onClick={() => addToCart(product)}
                      >
                        Add + <i className="bi bi-plus-lg ms-1"></i>
                      </button>
                    ) : (
                      <div className="quantity-control">
                        <button className="qty-btn" onClick={() => removeFromCart(product.id)}>−</button>
                        <span className="qty-count">{quantity}</span>
                        <button className="qty-btn" onClick={() => addToCart(product)}>+</button>
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

export default SpreadFrank;

