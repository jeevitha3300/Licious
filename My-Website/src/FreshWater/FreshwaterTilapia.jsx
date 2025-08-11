import React from 'react';
import "./freshwatertilapia.css"
import { useCart } from '../CartContext';
import freshtilapiaA1 from './FreshWaterImages/freshtilapiaA1.webp'
import freshtilapiaA2 from './FreshWaterImages/freshtilapiaA2.webp'
import freshtilapiaA3 from './FreshWaterImages/freshtilapiaA3.webp'
import freshtilapiaA4 from './FreshWaterImages/freshtilapiaA4.webp'
import freshtilapiaB1 from './FreshWaterImages/freshtilapiaB1.webp'
import freshtilapiaB2 from './FreshWaterImages/freshtilapiaB2.webp'
import freshtilapiaB3 from './FreshWaterImages/freshtilapiaB3.webp'
import freshtilapiaB4 from './FreshWaterImages/freshtilapiaB4.webp'
import FreshwaterFish from './FreshwaterFish';

const products = [
  {
    id: "Tilapia-Fillet",
    name: 'Tilapia-Fillet',
    desc: "Jalebi/Jilapi/Thilopia",
    weight: '250g|2-5pieces| Serves 2-3',
    price: 225,
    offerPrice: 214,
    discount: '5% off',
    time: 'Today 2PM - 5PM',
    images: [freshtilapiaA1, 
             freshtilapiaA2, 
             freshtilapiaA3, 
             freshtilapiaA4,],
  },
  {
    id: "Tilapia Medium-Fillet",
    name: "Tilapia Medium-Fillet",
    desc: 'Jalebi/Jilapi/Thilopia',
    weight: '250g|3-6 pieces| serves2-3',
    price:199,
    offerPrice: 169,
    discount: '15% off',
    time: 'Today 2PM - 5PM',
    images: [freshtilapiaB1, 
             freshtilapiaB2,
             freshtilapiaB3,
             freshtilapiaB4],
  },
    
];

function FreshwaterTilapia() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <FreshwaterFish/>
      <div className="container">
        <div className="row freshtilapiahead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 freshtilapiahead1 mb-4" key={product.id}>
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
                          <img src={img} className="freshtilapiaimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="freshtilapia-text">{product.name}</h5>
                    <p className="freshtilapia-text1">{product.desc}</p>
                    <div className="freshtilapia_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="freshtilapia-discount">{product.discount}</span>}
                    </p>
                    <p className="freshtilapia-time">{product.time}</p>

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

export default FreshwaterTilapia;

