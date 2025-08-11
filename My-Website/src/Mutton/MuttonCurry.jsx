import React from 'react';
import "./muttoncurry.css"
import { useCart } from '../CartContext';
import muttoncurryA1 from './MuttonImages/muttoncurryA1.webp'
import muttoncurryA2 from './MuttonImages/muttoncurryA2.webp'
import muttoncurryA3 from './MuttonImages/muttoncurryA3.webp'
import muttoncurryB1 from './MuttonImages/muttoncurryB1.webp'
import muttoncurryB2 from './MuttonImages/muttoncurryB2.webp'
import muttoncurryB3 from './MuttonImages/muttoncurryB3.webp'
import muttoncurryC1 from './MuttonImages/muttoncurryC1.webp'
import muttoncurryC2 from './MuttonImages/muttoncurryC2.webp'
import muttoncurryC3 from './MuttonImages/muttoncurryC3.webp'
import muttoncurryD1 from './MuttonImages/muttoncurryD1.webp'
import muttoncurryD2 from './MuttonImages/muttoncurryD2.webp'
import muttoncurryD3 from './MuttonImages/muttoncurryD3.webp'
import Mutton from './Mutton';

const products = [
  {
    id: "Goat Curry Cut",
    name: 'Goat Curry Cut',
    desc: "perfect balance of fat & meat,make rich curries",
    weight: '500g|13-17 Pieces | Serves 4',
    price: 675,
    offerPrice: 473,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttoncurryA1, 
             muttoncurryA2, 
             muttoncurryA3],
  },
  {
    id: "Premium Lamb (Mutton)-curry cut",
    name: "Premium Lamb (Mutton)-curry cut",
    desc: 'perfect balance of fat & meat for making rich curries',
    weight: '500g|10-13 Piece | serves 2-3',
    price: 675,
    offerPrice: 506,
    discount: '25% off',
    time: 'Today 2PM - 5PM',
    images: [muttoncurryB1, 
             muttoncurryB2,
             muttoncurryB3],
  },
  {
    id: "Goat Curry Cut/Kuzhambu Cut",
    name: 'Goat Curry Cut/Kuzhambu Cut',
    desc: "perfect balance of fat & meat for delicious curries",
    weight: ' 500g|16-20 Pieces |serves 2-4',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttoncurryC1,
             muttoncurryC2, 
             muttoncurryC3]
  },
  {
    id: "Premium Goat Shoulder Curry Cut",
    name: 'Premium Goat Shoulder Curry Cut',
    desc: "The meatiest cut for fall off the bone Mutton curries",
    weight: '500g|9-12 pieces|serves 4',
    price:900,
    offerPrice:815 ,
    discount: '40% off',
    time: 'Today 2PM - 5PM',
    images: [muttoncurryD1,
             muttoncurryD2,
             muttoncurryD3
    ],
  }
];

function MuttonCurry() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Mutton/>
      <div className="container">
        <div className="row muttoncurryhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 muttoncurryhead1 mb-4" key={product.id}>
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
                          <img src={img} className="muttoncurryimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="muttoncurry-text">{product.name}</h5>
                    <p className="muttoncurry-text1">{product.desc}</p>
                    <div className="muttoncurry_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="muttoncurry-discount">{product.discount}</span>}
                    </p>
                    <p className="muttoncurry-time">{product.time}</p>

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

export default MuttonCurry;

