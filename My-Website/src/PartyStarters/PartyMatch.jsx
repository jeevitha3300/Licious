import React from 'react';
   import "./partymatch.css"
import PartyStarters from './PartyStarters'
import { useCart } from '../CartContext';

import partymatchA1 from './PartyStartersImages/partymatchA1.webp'
import partymatchA2 from './PartyStartersImages/partymatchA2.jpeg'
import partymatchA3 from './PartyStartersImages/partymatchA3.webp'
import partymatchA4 from './PartyStartersImages/partymatchA4.webp'
import partymatchA5 from './PartyStartersImages/partymatchA5.webp'
import partymatchB1 from './PartyStartersImages/partymatchB1.webp'
import partymatchB2 from './PartyStartersImages/partymatchB2.webp'
import partymatchB3 from './PartyStartersImages/partymatchB3.webp'
import partymatchB4 from './PartyStartersImages/partymatchB4.webp'
import partymatchB5 from './PartyStartersImages/partymatchB5.webp'
import partymatchC1 from './PartyStartersImages/partymatchC1.webp'
import partymatchC2 from './PartyStartersImages/partymatchC2.webp'
import partymatchC3 from './PartyStartersImages/partymatchC3.webp'
import partymatchC4 from './PartyStartersImages/partymatchC4.webp'
import partymatchC5 from './PartyStartersImages/partymatchC5.webp'
import partymatchD1 from './PartyStartersImages/partymatchD1.webp'
import partymatchD2 from './PartyStartersImages/partymatchD2.webp'
import partymatchD3 from './PartyStartersImages/partymatchD3.webp'
import partymatchD4 from './PartyStartersImages/partymatchD4.webp'
import partymatchD5 from './PartyStartersImages/partymatchD5.webp'
import partymatchE1 from './PartyStartersImages/partymatchE1.webp'
import partymatchE2 from './PartyStartersImages/partymatchE2.jpeg'
import partymatchE3 from './PartyStartersImages/partymatchE3.webp'
import partymatchE4 from './PartyStartersImages/partymatchE4.webp'
import partymatchE5 from './PartyStartersImages/partymatchE5.webp'
import partymatchF1 from './PartyStartersImages/partymatchF1.webp'
import partymatchF2 from './PartyStartersImages/partymatchF2.webp'
import partymatchF3 from './PartyStartersImages/partymatchF3.webp'
import partymatchF4 from './PartyStartersImages/partymatchF4.webp'

const products = [
  {
    id: "Honey Chilli Garlic Chicken Wings",
    name: 'Honey Chilli Garlic Chicken Wings',
    desc: "A meaty hot &amp; sweet snack to stir up your work week",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [partymatchA1, 
             partymatchA2, 
             partymatchA3,
             partymatchA4,
             partymatchA5],
  },
  {
    id: "Afghani Murgh Seekh Kebab",
    name: "Afghani Murgh Seekh Kebab",
    desc: 'Subtly spiced meaty kebabs for a fulfilling meal',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partymatchB1, 
             partymatchB2,
             partymatchB3,
             partymatchB4,
             partymatchB5],
  },
  {
    id: "Purani Dilli ki Mutton Seekh Kebab",
    name: 'Purani Dilli ki Mutton Seekh Kebab',
    desc: "Make your everyday meals extra meaty, juicy &amp; delicious",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partymatchC1,
             partymatchC2,
             partymatchC3,
             partymatchC4,
             partymatchC5],
  },
  {
    id: "Goan Prawn Curry",
    name: 'Goan Prawn Curry',
    desc: "Freshwater Prawns in a flavourful coconut-based gravy.",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partymatchD1, 
             partymatchD2,
             partymatchD3,
             partymatchD4,
             partymatchD5],
  },
  {
    id: "Creamy Afghani Chicken (Mini)",
    name: 'Creamy Afghani Chicken (Mini)',
    desc: 'A tangy, smoky &amp; meaty snack for an indulgent treat',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partymatchE1,
             partymatchE2, 
             partymatchE3,
             partymatchE4,
             partymatchE5],
  },
  {
    id: "Tangy Chilli Chicken Wings",
    name: 'Tangy Chilli Chicken Wings',
    desc: 'A tangy, smoky &amp; meaty snack for an indulgent treat',
    weight: '200 g | 10-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partymatchF1,
             partymatchF2, 
             partymatchF3,
             partymatchF4],
  },
];

function PartyMatch() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <PartyStarters/>
      <div className="container">
        <div className="row partymatchhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 partymatchhead1 mb-4" key={product.id}>
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
                          <img src={img} className="partymatchimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="partymatch-text">{product.name}</h5>
                    <p className="partymatch-text1">{product.desc}</p>
                    <div className="partymatch_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="partymatch-discount">{product.discount}</span>}
                    </p>
                    <p className="partymatch-time">{product.time}</p>

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

export default PartyMatch;
