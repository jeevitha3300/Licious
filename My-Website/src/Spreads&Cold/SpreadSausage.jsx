import React from 'react';
import "./spreadsausage.css"
import { useCart } from '../CartContext';
import sausageA1 from './SpreadsColdImages/sausageA1.webp'
import sausageA2 from './SpreadsColdImages/sausageA2.webp'
import sausageA3 from './SpreadsColdImages/sausageA3.webp'
import sausageA4 from './SpreadsColdImages/sausageA4.webp'
import sausageB1 from './SpreadsColdImages/sausageB1.webp'
import sausageB2 from './SpreadsColdImages/sausageB2.webp'
import sausageB3 from './SpreadsColdImages/sausageB3.webp'
import sausageB4 from './SpreadsColdImages/sausageB4.webp'
import SpreadsCold from './SpreadsCold';

const products = [
  {
    id: "Chicken Sausage with Pimento & Cheese",
    name: 'Chicken Sausage with Pimento & Cheese',
    desc: "Chicken Sausage blended with Pimento & cheese",
    weight: '4 Pieces | 4 Pieces',
    price: 229,
    offerPrice: 206,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [sausageA1, 
             sausageA2, 
             sausageA3,
             sausageA4],
  },
  {
    id: "Classic Chicken Breakfast Sausage",
    name: "Classic Chicken Breakfast Sausage",
    desc: 'Juicy,meatty Classic Chicken Sausage',
    weight: '4 Piece |4 piece',
    price: 275,
    offerPrice: 261,
    discount: '5% off',
    time: 'Today 2PM - 5PM',
    images: [sausageB1, 
             sausageB2,
             sausageB3,
             sausageB4],
  },
];

function SpreadSausage() {
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

export default SpreadSausage;

