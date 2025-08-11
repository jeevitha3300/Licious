import React from 'react';
import './kidbreakfast.css';
import Kidsfavourite from './Kidsfavourite';
import { useCart } from '../CartContext';

import breakfastA1 from './KidfavImages/breakfastA1.webp';
import breakfastA2 from './KidfavImages/breakfastA2.webp';
import breakfastA3 from './KidfavImages/breakfastA3.webp';
import breakfastB1 from './KidfavImages/breakfastB1.webp';
import breakfastB2 from './KidfavImages/breakfastB2.webp';
import breakfastB3 from './KidfavImages/breakfastB3.webp';
import breakfastB4 from './KidfavImages/breakfastB4.webp';
import breakfastC1 from './KidfavImages/breakfastC1.webp';
import breakfastC2 from './KidfavImages/breakfastC2.webp';
import breakfastC3 from './KidfavImages/breakfastC3.webp';
import breakfastC4 from './KidfavImages/breakfastC4.webp';
import breakfastD1 from './KidfavImages/breakfastD1.webp';
import breakfastD2 from './KidfavImages/breakfastD2.webp';
import breakfastD3 from './KidfavImages/breakfastD3.webp';
import breakfastD4 from './KidfavImages/breakfastD4.webp';
import breakfastE1 from './KidfavImages/breakfastE1.webp';
import breakfastE2 from './KidfavImages/breakfastE2.webp';
import breakfastE3 from './KidfavImages/breakfastE3.webp';
import breakfastE4 from './KidfavImages/breakfastE4.webp';
import breakfastF1 from './KidfavImages/breakfastF1.webp';
import breakfastF2 from './KidfavImages/breakfastF2.webp';
import breakfastF3 from './KidfavImages/breakfastF3.webp';
const products = [
  {
    id: "Farm Fresh Classic Eggs",
    name: 'Farm Fresh Classic Eggs',
    desc: "For a daily dose of hearty goodness.",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [breakfastA1, 
             breakfastA2, 
             breakfastA3],
  },
  {
    id: "Classic Chicken Lyoner",
    name: 'Classic Chicken Lyoner',
    desc: 'Chicken Lyoners made with fresh chicken',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [breakfastB1, 
             breakfastB2,
             breakfastB3,
             breakfastB4],
  },
  {
    id: "Chunky Shawarma Chicken Spread",
    name: 'Chunky Shawarma Chicken Spread',
    desc: "Cooked chunks of chicken in a butter chicken base.",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [breakfastC1,
             breakfastC2, 
             breakfastC3, 
             breakfastC4],
  },
  {
    id: "Chunky Butter Chicken Spread",
    name: 'Chunky Butter Chicken Spread',
    desc: "Cooked chunks of chicken in a butter chicken base.",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [breakfastD1, 
             breakfastD2,
             breakfastD3,
             breakfastD4],
  },
  {
    id: "Classic Chicken Breakfast Sausage",
    name: 'Classic Chicken Breakfast Sausage',
    desc: 'Juicy, meaty Classic Chicken Sausages',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [breakfastE1,
             breakfastE2, 
             breakfastE3,
             breakfastE4],
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
    images: [breakfastF1,
             breakfastF2, 
             breakfastF3],
  },
];

function Kidbreakfast() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
      <Kidsfavourite />
      <div className="container">
        <div className="row breakfasthead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 breakfasthead1 mb-4" key={product.id}>
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
                          <img src={img} className="breakfastimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="breakfast-text">{product.name}</h5>
                    <p className="breakfast-text1">{product.desc}</p>
                    <div className="breakfast_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="breakfast-discount">{product.discount}</span>}
                    </p>
                    <p className="breakfast-time">{product.time}</p>

                    {quantity === 0 ? (
                      <button
                        className="btn btn-danger fw-bold px-3 py-1 "
                        // onClick={() => addToCart(product)}
                        onClick={() => addToCart({ ...product, image: product.images[0] })}

                      >
                        Add + <i className="bi bi-plus-lg ms-1"></i>
                      </button>
                    ) : (
                      <div className="quantity-control">
                        <button className="qty-btn" onClick={() => removeFromCart(product.id)}>−</button>
                        <span className="qty-count">{quantity}</span>
                        {/* <button className="qty-btn"  */}
                        {/* // onClick={() => addToCart(product)}>+ */}
                        {/* </button> */}
                          <button className="qty-btn" onClick={() => addToCart({ ...product, image: product.images[0] })}>+</button>

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

export default Kidbreakfast;
