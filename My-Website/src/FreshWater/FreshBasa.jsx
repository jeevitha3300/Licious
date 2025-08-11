import React from 'react';
import "./freshbasa.css"
import { useCart } from '../CartContext';
import freshbasaA1 from './FreshWaterImages/freshbasaA1.webp'
import freshbasaA2 from './FreshWaterImages/freshbasaA2.webp'
import freshbasaB1 from './FreshWaterImages/freshbasaB1.webp'
import freshbasaB2 from './FreshWaterImages/freshbasaB2.webp'
import freshbasaB3 from './FreshWaterImages/freshbasaB3.webp'
import freshbasaC1 from './FreshWaterImages/freshbasaC1.webp'
import freshbasaC2 from './FreshWaterImages/freshbasaC2.webp'
import freshbasaC3 from './FreshWaterImages/freshbasaC3.webp'
import FreshwaterFish from './FreshwaterFish';

const products = [
  {
    id: "Basa Medium Fry Cut",
    name: 'Basa Medium Fry Cut',
    desc: "Pungus/Keluthu Meen/Assam Vala",
    weight: '250g|3-4pieces| Serves 1-2',
    price: 225,
    offerPrice: 214,
    discount: '5% off',
    time: 'Today 2PM - 5PM',
    images: [freshbasaA1, 
             freshbasaA2, 
        ],
  },
  {
    id: "Basa Medium Boneless Cubes",
    name: "Basa Medium Boneless Cubes",
    desc: 'Pungus/Keluthu Meen/Assam Vala Accepting Pre-Orderest!',
    weight: '400g|15-20 pieces| serves3-4',
    price:359,
    offerPrice: 341,
    discount: '5% off',
    time: 'Today 2PM - 5PM',
    images: [freshbasaB1, 
             freshbasaB2,
             freshbasaB3,
             ],
  },
  {
    id: "Basa Medium Fillet",
    name: 'Basa Medium Fillet',
    desc: "Pungus/Keluthu Meen/Assam Vala Accepting Pre-Orderest!",
    weight: ' 500g|5-7 pieces|serves 2-4',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [freshbasaC1,
             freshbasaC2, 
             freshbasaC3,
             ]
  },
    
];

function FreshBasa() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <FreshwaterFish/>
      <div className="container">
        <div className="row freshbasahead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 freshbasahead1 mb-4" key={product.id}>
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
                          <img src={img} className="freshbasaimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="freshbasa-text">{product.name}</h5>
                    <p className="freshbasa-text1">{product.desc}</p>
                    <div className="freshbasa_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="freshbasa-discount">{product.discount}</span>}
                    </p>
                    <p className="freshbasa-time">{product.time}</p>

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

export default FreshBasa;

