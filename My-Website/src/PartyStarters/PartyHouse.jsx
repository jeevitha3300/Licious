import React from 'react';
import "./partyhouse.css"
import PartyStarters from './PartyStarters'
import { useCart } from '../CartContext';

import partyhouseA1 from './PartyStartersImages/partyhouseA1.webp'
import partyhouseA2 from './PartyStartersImages/partyhouseA2.webp'
import partyhouseA3 from './PartyStartersImages/partyhouseA3.webp'
import partyhouseA4 from './PartyStartersImages/partyhouseA4.webp'
import partyhouseB1 from './PartyStartersImages/partyhouseB1.webp'
import partyhouseB2 from './PartyStartersImages/partyhouseB2.webp'
import partyhouseB3 from './PartyStartersImages/partyhouseB3.webp'
import partyhouseC1 from './PartyStartersImages/partyhouseC1.webp'
import partyhouseC2 from './PartyStartersImages/partyhouseC2.webp'
import partyhouseC3 from './PartyStartersImages/partyhouseC3.webp'
import partyhouseC4 from './PartyStartersImages/partyhouseC4.webp'
import partyhouseD1 from './PartyStartersImages/partyhouseD1.webp'
import partyhouseD2 from './PartyStartersImages/partyhouseD2.webp'
import partyhouseD3 from './PartyStartersImages/partyhouseD3.webp'
import partyhouseD4 from './PartyStartersImages/partyhouseD4.webp'
import partyhouseD5 from './PartyStartersImages/partyhouseD5.webp'
import partyhouseE1 from './PartyStartersImages/partyhouseE1.webp'
import partyhouseE2 from './PartyStartersImages/partyhouseE2.webp'
import partyhouseE3 from './PartyStartersImages/partyhouseE3.webp'
import partyhouseE4 from './PartyStartersImages/partyhouseE4.webp'
import partyhouseE5 from './PartyStartersImages/partyhouseE5.webp'
import partyhouseF1 from './PartyStartersImages/partyhouseF1.webp'
import partyhouseF2 from './PartyStartersImages/partyhouseF2.webp'
import partyhouseF3 from './PartyStartersImages/partyhouseF3.webp'
import partyhouseF4 from './PartyStartersImages/partyhouseF4.webp'
import partyhouseF5 from './PartyStartersImages/partyhouseF5.webp'
const products = [
  {
    id: "Sichuan Chilli Chicken (Mini)",
    name: 'Sichuan Chilli Chicken (Mini)',
    desc: "Spicy &amp; delicious, a delightful way to amp up mealtimes",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [partyhouseA1, 
             partyhouseA2, 
             partyhouseA3,
             partyhouseA4],
  },
  {
    id: "Frank's Buffalo Chicken Wings",
    name: "Frank's Buffalo Chicken Wings",
    desc: 'A tangy, juicy, meaty solution for your snack time',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhouseB1, 
             partyhouseB2,
             partyhouseB3,],
  },
  {
    id: "Teriyaki Chicken Wings",
    name: 'Teriyaki Chicken Wings',
    desc: "A succulent, delicious, smoky &amp; nutty treat",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhouseC1,
             partyhouseC2,
             partyhouseC3,
             partyhouseC4],
  },
  {
    id: "Peri Peri Chicken | Ready to Cook",
    name: 'Peri Peri Chicken | Ready to Cook',
    desc: "Peppery, spicy, juicy delight; spice up a weekday meal",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhouseD1, 
             partyhouseD2,
             partyhouseD3,
             partyhouseD4,
             partyhouseD5],
  },
  {
    id: "Amritsari Achari Murg (Mini)",
    name: 'Amritsari Achari Murg (Mini)',
    desc: 'Add hot, spicy &amp; tangy flavours to your mealtimes',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhouseE1,
             partyhouseE2, 
             partyhouseE3,
             partyhouseE4,
             partyhouseE5],
  },
  {
    id: "Sunday Whole Roast Chicken",
    name: 'Sunday Whole Roast Chicken',
    desc: 'Perfect chicken roast for a family feast',
    weight: '200 g | 10-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [partyhouseF1,
             partyhouseF2, 
             partyhouseF3,
             partyhouseF4,
             partyhouseF5],
  },
];

function PartyHouse() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <PartyStarters/>
      <div className="container">
        <div className="row partyhousehead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 partyhousehead1 mb-4" key={product.id}>
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
                          <img src={img} className="partyhouseimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="partyhouse-text">{product.name}</h5>
                    <p className="partyhouse-text1">{product.desc}</p>
                    <div className="partyhouse_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="partyhouse-discount">{product.discount}</span>}
                    </p>
                    <p className="partyhouse-time">{product.time}</p>

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

export default PartyHouse;

