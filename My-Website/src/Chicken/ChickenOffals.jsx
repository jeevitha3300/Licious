import React from 'react';
import "./chickenoffals.css"
import { useCart } from '../CartContext';
import chickenoffalsA1 from './ChickenImages/chickenoffalsA1.webp'
import chickenoffalsA2 from './ChickenImages/chickenoffalsA2.webp'
import chickenoffalsA3 from './ChickenImages/chickenoffalsA3.webp'
import chickenoffalsB1 from './ChickenImages/chickenoffalsB1.webp'
import chickenoffalsB2 from './ChickenImages/chickenoffalsB2.webp'
import chickenoffalsB3 from './ChickenImages/chickenoffalsB3.webp'

import Chicken from './Chicken';

const products = [
  {
    id: "Chicken Liver",
    name: 'Chicken Liver',
    desc: "smooth,rich & meaty chicken Liver",
    weight: '350g|7-9pieces| Serves 2-3',
    price: 665,
    offerPrice: 622,
    discount: '6% off',
    time: 'Today 2PM - 5PM',
    images: [chickenoffalsA1, 
             chickenoffalsA2, 
             chickenoffalsA3],
  },
  {
    id: "Chicken Gizzard",
    name: "Chicken Gizzard",
    desc: 'Rich,savoury & full of meaty chicken flavours',
    weight: '300g|14-16 pieces| serves1-2',
    price:410,
    offerPrice: 399,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [chickenoffalsB1, 
             chickenoffalsB2,
             chickenoffalsB3],
  },

];

function ChickenOffals() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Chicken/>
      <div className="container">
        <div className="row chickenoffalshead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 chickenoffalshead1 mb-4" key={product.id}>
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
                          <img src={img} className="chickenoffalsimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="chickenoffals-text">{product.name}</h5>
                    <p className="chickenoffals-text1">{product.desc}</p>
                    <div className="chickenoffals_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="chickenoffals-discount">{product.discount}</span>}
                    </p>
                    <p className="chickenoffalsr-time">{product.time}</p>

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

export default ChickenOffals;

