import React from 'react';
import './kidyummy.css';
import Kidsfavourite from './Kidsfavourite';
import { useCart } from '../CartContext';

import yummyA1 from './KidfavImages/yummyA1.webp'
import yummyA2 from './KidfavImages/yummyA2.webp'
import yummyA3 from './KidfavImages/yummyA3.webp'
import yummyB1 from './KidfavImages/yummyB1.webp'
import yummyB2 from './KidfavImages/yummyB2.webp'
import yummyB3 from './KidfavImages/yummyB3.webp'
import yummyB4 from './KidfavImages/yummyB4.webp'
import yummyC1 from './KidfavImages/yummyC1.webp'
import yummyC2 from './KidfavImages/yummyC2.webp'
import yummyC3 from './KidfavImages/yummyC3.webp'
import yummyC4 from './KidfavImages/yummyC4.webp'
import yummyD1 from './KidfavImages/yummyD1.webp'
import yummyD2 from './KidfavImages/yummyD2.webp'
import yummyD3 from './KidfavImages/yummyD3.webp'
import yummyD4 from './KidfavImages/yummyD4.webp'
import yummyE1 from './KidfavImages/yummyE1.webp'
import yummyE2 from './KidfavImages/yummyE2.webp'
import yummyE3 from './KidfavImages/yummyE3.webp'
import yummyE4 from './KidfavImages/yummyE4.webp'
import yummyF1 from './KidfavImages/yummyF1.webp'
import yummyF2 from './KidfavImages/yummyF2.webp'
import yummyF3 from './KidfavImages/yummyF3.webp'
import yummyF4 from './KidfavImages/yummyF4.webp'
const products = [
  {
    id: "Farm Fresh Classic Eggs-pack",
    name: 'Farm Fresh Classic Eggs - Pack of 12',
    desc: "For a daily dose of hearty goodness.",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [ yummyA1, 
              yummyA2, 
              yummyA3],
  },
  {
    id:"Chunky Shawarma Chicken Spread",
    name: 'Chunky Shawarma Chicken Spread',
    desc: 'Freshly roasted chicken in a creamy shawarma base.',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [ yummyB1, 
              yummyB2,
              yummyB3,
              yummyB4],
  },
  {
    id:"Chunky Continental Chicken Spread",
    name: 'Chunky Continental Chicken Spread',
    desc: "Freshly cooked chunks of chicken in a creamy base.",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [ yummyC1,
              yummyC2, 
              yummyC3, 
              yummyC4],
  },
  {
    id: "Classic Chicken Burger Patty",
    name: 'Classic Chicken Burger Patty',
    desc: "Build your own meaty, juicy treat for a mid meal snack",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [ yummyD1, 
              yummyD2,
              yummyD3,
              yummyD4],
  },
  {
    id:"Juicy, meaty Classic Chicken Sausages",
    name: 'Juicy, meaty Classic Chicken Sausages',
    desc: 'Crispy, juicy, nutty prawns, perfect for all cravings',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [ yummyE1,
              yummyE2, 
              yummyE3,
              yummyE4],
  },
  {
    id: "Classic Smoked Chicken Frankfurter",
    name: 'Classic Smoked Chicken Frankfurter',
    desc: 'Chicken Sausage smoked with fine oakwood.',
    weight: '200 g | 10-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [ yummyF1,
              yummyF2, 
              yummyF3,
              yummyF4],
  },
];

function Kidyummy() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
      <Kidsfavourite />
      <div className="container">
        <div className="row yummyhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 yummyhead1 mb-4" key={product.id}>
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
                          <img src={img} className="yummyimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="yummy-text">{product.name}</h5>
                    <p className="yummy-text1">{product.desc}</p>
                    <div className="yummy_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="yummyt-discount">{product.discount}</span>}
                    </p>
                    <p className="yummy-time">{product.time}</p>

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

export default Kidyummy;


