import React from 'react';
import "./spreadAll.css"
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
import sausageA1 from './SpreadsColdImages/sausageA1.webp'
import sausageA2 from './SpreadsColdImages/sausageA2.webp'
import sausageA3 from './SpreadsColdImages/sausageA3.webp'
import sausageA4 from './SpreadsColdImages/sausageA4.webp'
import sausageB1 from './SpreadsColdImages/sausageB1.webp'
import sausageB2 from './SpreadsColdImages/sausageB2.webp'
import sausageB3 from './SpreadsColdImages/sausageB3.webp'
import sausageB4 from './SpreadsColdImages/sausageB4.webp'
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
import salamisA1 from './SpreadsColdImages/salamisA1.webp'
import salamisA2 from './SpreadsColdImages/salamisA2.webp'
import salamisA3 from './SpreadsColdImages/salamisA3.webp'
import salamisA4 from './SpreadsColdImages/salamisA4.webp'
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
      },
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

function SpreadAll() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <SpreadsCold/>
      <div className="container">
        <div className="row spreadAllhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 spreadAllhead1 mb-4" key={product.id}>
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
                          <img src={img} className="spreadAllimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="spreadAll-text">{product.name}</h5>
                    <p className="spreadAll-text1">{product.desc}</p>
                    <div className="spreadAll_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="spreadAll-discount">{product.discount}</span>}
                    </p>
                    <p className="spreadAll-time">{product.time}</p>

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

export default SpreadAll;

