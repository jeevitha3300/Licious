import React from 'react';
import "./spreadfrank.css"
import { useCart } from '../CartContext';
import salamisA1 from './SpreadsColdImages/salamisA1.webp'
import salamisA2 from './SpreadsColdImages/salamisA2.webp'
import salamisA3 from './SpreadsColdImages/salamisA3.webp'
import salamisA4 from './SpreadsColdImages/salamisA4.webp'
import SpreadsCold from './SpreadsCold';

const products = [
  {
    id: "Pepper Chicken Salami(mini)",
    name: 'Pepper Chicken Salami(mini)',
    desc: "Meaty & juice,apt for cold sandwiches",
    weight: '125g | 4 Pieces',
    price: 199,
    offerPrice: 189,
    discount: '5% off',
    time: '',
    images: [salamisA1, 
             salamisA2, 
             salamisA3,
             salamisA4],
  },
 
];

function SpreadSalamis() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <SpreadsCold/>
      <div className="container">
        <div className="row sausagehead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 sausagehead1 mb-4" key={product.id}>
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
                          <img src={img} className="sausageimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="sausage-text">{product.name}</h5>
                    <p className="sausage-text1">{product.desc}</p>
                    <div className="sausage_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="sausage-discount">{product.discount}</span>}
                    </p>
                    <p className="sausage-time">{product.time}</p>

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

export default SpreadSalamis;

