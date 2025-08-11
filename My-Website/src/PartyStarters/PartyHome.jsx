import React from 'react';
import "./partyhome.css"
import PartyStarters from './PartyStarters'
import { useCart } from '../CartContext';

import partyhomeA1 from './PartyStartersImages/partyhomeA1.webp'
import partyhomeA2 from './PartyStartersImages/partyhomeA2.webp'
import partyhomeA3 from './PartyStartersImages/partyhomeA3.webp'
import partyhomeA4 from './PartyStartersImages/partyhomeA4.webp'
import partyhomeA5 from './PartyStartersImages/partyhomeA5.webp'
import partyhomeB1 from './PartyStartersImages/partyhomeB1.webp'
import partyhomeB2 from './PartyStartersImages/partyhomeB2.webp'
import partyhomeB3 from './PartyStartersImages/partyhomeB3.webp'
import partyhomeB4 from './PartyStartersImages/partyhomeB4.webp'
import partyhomeB5 from './PartyStartersImages/partyhomeB5.webp'
import partyhomeC1 from './PartyStartersImages/partyhomeC1.webp'
import partyhomeC2 from './PartyStartersImages/partyhomeC2.webp'
import partyhomeC3 from './PartyStartersImages/partyhomeC3.webp'
import partyhomeC4 from './PartyStartersImages/partyhomeC4.webp'
import partyhomeC5 from './PartyStartersImages/partyhomeC5.webp'
import partyhomeD1 from './PartyStartersImages/partyhomeD1.webp'
import partyhomeD2 from './PartyStartersImages/partyhomeD2.webp'
import partyhomeD3 from './PartyStartersImages/partyhomeD3.webp'
import partyhomeD4 from './PartyStartersImages/partyhomeD4.webp'
import partyhomeD5 from './PartyStartersImages/partyhomeD5.webp'
import partyhomeE1 from './PartyStartersImages/partyhomeE1.webp'
import partyhomeE2 from './PartyStartersImages/partyhomeE2.webp'
import partyhomeE3 from './PartyStartersImages/partyhomeE3.webp'
import partyhomeE4 from './PartyStartersImages/partyhomeE4.webp'
import partyhomeE5 from './PartyStartersImages/partyhomeE5.webp'
import partyhomeF1 from './PartyStartersImages/partyhomeF1.webp'
import partyhomeF2 from './PartyStartersImages/partyhomeF2.webp'
import partyhomeF3 from './PartyStartersImages/partyhomeF3.webp'
import partyhomeF4 from './PartyStartersImages/partyhomeF4.webp'
import partyhomeF5 from './PartyStartersImages/partyhomeF5.webp'
const products = [
  {
    id: "Chicken Tikka (Mini)",
    name: 'Chicken Tikka (Mini)',
    desc: "Tangy, meaty &amp; smoky, give your dinner a spicy twist",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [partyhomeA1, 
             partyhomeA2, 
             partyhomeA3,
             partyhomeA4,
             partyhomeA5],
  },
  {
    id: "BBQ Chicken Wings",
    name: "BBQ Chicken Wings",
    desc: 'A sweet n spicy solution for your 5pm cravings',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhomeB1, 
             partyhomeB2,
             partyhomeB3,
             partyhomeB4,
             partyhomeB5,],
  },
  {
    id: "Chicken Malai Tikka",
    name: 'Chicken Malai Tikka',
    desc: "Juicy, creamy and smoky delight to go with your meals",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhomeC1,
             partyhomeC2,
             partyhomeC3,
             partyhomeC4,
             partyhomeC5],
  },
  {
    id: "meaty Kebabs to spice",
    name: 'Peri Peri Chicken | Ready to Cook',
    desc: "Juicy &amp; meaty Kebabs to spice up your everyday meals",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhomeD1, 
             partyhomeD2,
             partyhomeD3,
             partyhomeD4,
             partyhomeD5],
  },
  {
    id: "Lucknowi Mutton Galouti Kebab",
    name: 'Lucknowi Mutton Galouti Kebab',
    desc: 'A melt-in-the-mouth treat to spice up your meals',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhomeE1,
             partyhomeE2, 
             partyhomeE3,
             partyhomeE4,
             partyhomeE5],
  },
  {
    id: "Hariyali Murgh Tikka",
    name: 'Hariyali Murgh Tikka',
    desc: 'Herby and juicy tikka that goes well with Indian breads',
    weight: '200 g | 10-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhomeF1,
             partyhomeF2, 
             partyhomeF3,
             partyhomeF4,
             partyhomeF5],
  },
];

function PartyHome() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <PartyStarters/>
      <div className="container">
        <div className="row partyhomehead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 partyhomehead1 mb-4" key={product.id}>
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
                          <img src={img} className="partyhomeimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="partyhome-text">{product.name}</h5>
                    <p className="partyhome-text1">{product.desc}</p>
                    <div className="partyhome_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="partyhome-discount">{product.discount}</span>}
                    </p>
                    <p className="partyhome-time">{product.time}</p>

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

export default PartyHome;

