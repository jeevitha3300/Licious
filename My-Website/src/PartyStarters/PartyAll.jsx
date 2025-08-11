import React from 'react';
import "./partyAll.css"
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

function PartyAll() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <PartyStarters/>
      <div className="container">
        <div className="row partyAllhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 partyAllhead1 mb-4" key={product.id}>
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
                          <img src={img} className="partyAllimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="partyAll-text">{product.name}</h5>
                    <p className="partyAll-text1">{product.desc}</p>
                    <div className="partyAll_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="partyAll-discount">{product.discount}</span>}
                    </p>
                    <p className="partyAll-time">{product.time}</p>

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

export default PartyAll;

