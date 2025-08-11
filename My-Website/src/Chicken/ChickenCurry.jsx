import React from 'react';
import "./chickencurry.css"
import { useCart } from '../CartContext';
import chickencurryA1 from './ChickenImages/chickencurryA1.webp'
import chickencurryA2 from './ChickenImages/chickencurryA2.webp'
import chickencurryA3 from './ChickenImages/chickencurryA3.webp'
import chickencurryB1 from './ChickenImages/chickencurryB1.webp'
import chickencurryB2 from './ChickenImages/chickencurryB2.webp'
import chickencurryB3 from './ChickenImages/chickencurryB3.webp'
import chickencurryC1 from './ChickenImages/chickencurryC1.webp'
import chickencurryC2 from './ChickenImages/chickencurryC2.webp'
import chickencurryC3 from './ChickenImages/chickencurryC3.webp'
import chickencurryD1 from './ChickenImages/chickencurryD1.webp'
import chickencurryD2 from './ChickenImages/chickencurryD2.webp'
import chickencurryD3 from './ChickenImages/chickencurryD3.webp'
import chickencurryE1 from './ChickenImages/chickencurryE1.webp'
import chickencurryE2 from './ChickenImages/chickencurryE2.webp'
import chickencurryE3 from './ChickenImages/chickencurryE3.webp'
import Chicken from './Chicken';

const products = [
  {
    id: "Chicken Curry Cut-Small pieces",
    name: 'Chicken Curry Cut-Small piece',
    desc: "Juice bone-in & boneless chicken for delectable curries",
    weight: '500g|12-18 Pieces | Serves 4',
    price: 199,
    offerPrice: 149,
    discount: '25%% off',
    time: 'Today 2PM - 5PM',
    images: [chickencurryA1, 
             chickencurryA2, 
             chickencurryA3],
  },
  {
    id: "Classic Chicken Biriyani Cut",
    name: "Classic Chicken Biriyani Cut",
    desc: '5 juice pieces for delicious biriyanis',
    weight: '5 pieces|10-13 Piece | serves 2-3',
    price: 219,
    offerPrice: 199,
    discount: '15% off',
    time: 'Today 2PM - 5PM',
    images: [chickencurryB1, 
             chickencurryB2,
             chickencurryB3],
  },
  {
    id: "Country Chicken Curry Cut",
    name: 'Country Chicken Curry Cut',
    desc: "The start of a flavour,meaty curry",
    weight: ' 550g|13-17Pieces |serves 4',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [chickencurryC1,
             chickencurryC2, 
             chickencurryC3]
  },
  {
    id: "Chicken Curry Cut-Large piesces",
    name: 'Premium Goat Shoulder Curry Cut',
    desc: "The meatiest cut for fall off the bone Mutton curries",
    weight: '500g|9-12 pieces|serves 4',
    price:900,
    offerPrice:815 ,
    discount: '40% off',
    time: 'Today 2PM - 5PM',
    images: [chickencurryD1,
             chickencurryD2,
             chickencurryD3
    ],
  },

    {
    id: "Premium Chicken Leg Curry Cut",
    name: 'Premium Chicken Leg Curry Cut',
    desc: "Juice bone-in leg pieces for delicious Curries or Biriyanis Acc",
    weight: '300g|4-6 pieces|serves 2-3',
    price:225,
    offerPrice:210,
    discount: '10% off',

    time: 'Today 2PM - 5PM',
    images: [chickencurryE1,
             chickencurryE2,
             chickencurryE3
    ],
  }
];

function ChickenCurry() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Chicken/>
      <div className="container">
        <div className="row chickencurryhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 chickencurryhead1 mb-4" key={product.id}>
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
                          <img src={img} className="chickencurryimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="chickencurry-text">{product.name}</h5>
                    <p className="chickencurry-text1">{product.desc}</p>
                    <div className="chickencurry_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="chickencurry-discount">{product.discount}</span>}
                    </p>
                    <p className="chickencurry-time">{product.time}</p>

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

export default ChickenCurry;

