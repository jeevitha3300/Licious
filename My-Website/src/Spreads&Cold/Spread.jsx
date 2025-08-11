import React from 'react';
import "./spread.css"
import { useCart } from '../CartContext';
import spreadA1 from './SpreadsColdImages/spreadA1.webp'
import spreadA2 from './SpreadsColdImages/spreadA2.webp'
import spreadA3 from './SpreadsColdImages/spreadA3.webp'
import spreadA4 from './SpreadsColdImages/spreadA4.webp'
import spreadB1 from './SpreadsColdImages/spreadB1.webp'
import spreadB2 from './SpreadsColdImages/spreadB2.webp'
import spreadB3 from './SpreadsColdImages/spreadB3.webp'
import spreadB4 from './SpreadsColdImages/spreadB4.webp'
import spreadC1 from './SpreadsColdImages/spreadC1.webp'
import spreadC2 from './SpreadsColdImages/spreadC2.webp'
import spreadC3 from './SpreadsColdImages/spreadC3.webp'
import spreadC4 from './SpreadsColdImages/spreadC4.webp'
import spreadD1 from './SpreadsColdImages/spreadD1.webp'
import spreadE1 from './SpreadsColdImages/spreadE1.webp'
import SpreadsCold from './SpreadsCold';

const products = [
  {
    id: "Chunky Butter Chicken Spread",
    name: 'Chunky Butter Chicken Spread',
    desc: "Cooked chunks of chicken in a butter chicken base.",
    weight: '1 Pieces | 1 Pieces',
    price: 229,
    offerPrice: 206,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [spreadA1, 
             spreadA2, 
             spreadA3,
             spreadA4],
  },
  {
    id: "Chunky Continental Chicken Spread",
    name: "Chunky Continental Chicken Spread",
    desc: 'Freshly cooked chunks of chicken in a creamy base.',
    weight: '1 Piece | piece',
    price: 229,
    offerPrice: 206,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [spreadB1, 
             spreadB2,
             spreadB3,
             spreadB4],
  },
  {
    id: "Chunky Shawarma Chicken Spread",
    name: 'Chunky Shawarma Chicken Spread',
    desc: "Freshly roasted chicken in a creamy shawarma base.",
    weight: '1 Pieces | 1 Pieces',
    price: 229,
    offerPrice:206,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [spreadC1,
             spreadC2, 
             spreadC3,
             spreadC4,]
  },
  {
    id: "Chunky Shawarma Chicken Spread-400g",
    name: 'Chunky Shawarma Chicken Spread-400g',
    desc: "For Salads & Snacks,this is the combo you need.",
    weight: '',
    price: 229,
    offerPrice: 206,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [spreadD1],
  },
  {
    id: "Chuncky Butter Chicken Spread-400g",
    name: 'Chuncky Butter Chicken Spread-400g',
    desc: 'For Salads & snacks,this is the combo you need',
    weight: '',
    price: 450,
    offerPrice: 375,
    discount: '15% off',
    time: 'Today 2PM - 5PM',
    images: [spreadE1],
  }
];

function Spread() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <SpreadsCold/>
      <div className="container">
        <div className="row spreadhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 spreadhead1 mb-4" key={product.id}>
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
                          <img src={img} className="spreadimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="spread-text">{product.name}</h5>
                    <p className="spread-text1">{product.desc}</p>
                    <div className="spread_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="spread-discount">{product.discount}</span>}
                    </p>
                    <p className="spread-time">{product.time}</p>

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

export default Spread;

