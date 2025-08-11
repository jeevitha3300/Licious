import React from 'react';
import "./freshRohuCatla.css"
import { useCart } from '../CartContext';
import freshRohuA1 from './FreshWaterImages/freshRohuA1.webp'
import freshRohuA2 from './FreshWaterImages/freshRohuA2.webp'
import freshRohuA3 from './FreshWaterImages/freshRohuA3.webp'
import freshRohuA4 from './FreshWaterImages/freshRohuA4.webp'
import freshRohuB1 from './FreshWaterImages/freshRohuB1.webp'
import freshRohuB2 from './FreshWaterImages/freshRohuB2.webp'
import freshRohuB3 from './FreshWaterImages/freshRohuB3.webp'
import freshRohuB4 from './FreshWaterImages/freshRohuB4.webp'
import freshRohuC1 from './FreshWaterImages/freshRohuC1.webp'
import freshRohuC2 from './FreshWaterImages/freshRohuC2.webp'
import freshRohuC3 from './FreshWaterImages/freshRohuC3.webp'
import freshRohuC4 from './FreshWaterImages/freshRohuC4.webp'
import freshRohuD1 from './FreshWaterImages/freshRohuc1.webp'
import freshRohuD2 from './FreshWaterImages/freshRohuc2.webp'
import freshRohuD3 from './FreshWaterImages/freshRohuc3.webp'
import freshRohuD4 from './FreshWaterImages/freshRohuc4.webp'
import FreshwaterFish from './FreshwaterFish';

const products = [
  {
    id: "Rohu(1.4kg)-Bengali Cut,No Head",
    name: 'Rohu(1.4kg)-Bengali Cut,No Head',
    desc: "Kannadi kenadai/Reba/Rui",
    weight: '250g|14-18pieces| Serves 4',
    price: 299,
    offerPrice: 284,
    discount: '5% off',
    time: 'Today 2PM - 5PM',
    images: [freshRohuA1, 
             freshRohuA2, 
             freshRohuA3,
             freshRohuA4],
  },
  {
    id: "Catla(1.5kg)-Bengali Cut,No Head",
    name: "Catla(1.5kg)-Bengali Cut,No Head",
    desc: 'Theppu Meen/Kendai/ Thoppu Meen/ Kanavi/Katla',
    weight: '500g|6-9 pieces| serves3-4',
    price:339,
    offerPrice: 322,
    discount: '5% off',
    time: 'Today 2PM - 5PM',
    images: [freshRohuB1, 
             freshRohuB2,
             freshRohuB3,
             freshRohuB4],
  },
  {
    id: "Rohu(2.0g)-Bengali Cut,No Head",
    name: 'Rohu(2.0g)-Bengali Cut,No Head',
    desc: "Kannadi kenadai/Reba/Rui",
    weight: ' 500g|5-7 pieces|serves 2-4',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [freshRohuC1,
             freshRohuC2, 
             freshRohuC3,
             freshRohuC4]
  },
    {
    id: "Catla(2.5kg)-Bengali Cut,No Head",
    name: 'Catla(2.5kg)-Bengali Cut,No Head',
    desc: "Theppu Meen/Kendai/ Thoppu Meen/ Kanavi/Katla",
    weight: ' 500g|4-7pieces|serves 2-4',
    price:375,
    offerPrice:319,
    discount: '15% off',
    time: 'Today 2PM - 5PM',
    images: [freshRohuD1,
             freshRohuD2, 
             freshRohuD3,
             freshRohuD4]
  },

];

function FreshRohuCatla() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <FreshwaterFish/>
      <div className="container">
        <div className="row freshrohucatlahead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 freshrohucatlahead1 mb-4" key={product.id}>
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
                          <img src={img} className="freshrohucatlaimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="freshrohucatla-text">{product.name}</h5>
                    <p className="freshrohucatla-text1">{product.desc}</p>
                    <div className="freshrohucatla_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="freshrohucatla-discount">{product.discount}</span>}
                    </p>
                    <p className="freshrohucatla-time">{product.time}</p>

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

export default FreshRohuCatla;

