import React from 'react';
import "./muttonboneless.css"
import { useCart } from '../CartContext';
import muttonboneA1 from './MuttonImages/muttonboneA1.webp'
import muttonboneA2 from './MuttonImages/muttonboneA2.webp'
import muttonboneA3 from './MuttonImages/muttonboneA3.webp'
import muttonboneB1 from './MuttonImages/muttonboneB1.webp'
import muttonboneB2 from './MuttonImages/muttonboneB2.webp'
import muttonboneB3 from './MuttonImages/muttonboneB3.webp'
import muttonboneC1 from './MuttonImages/muttonboneC1.webp'
import muttonboneC2 from './MuttonImages/muttonboneC2.webp'
import muttonboneC3 from './MuttonImages/muttonboneC3.webp'
import Mutton from './Mutton';

const products = [
  {
    id: "Pure Goat Mince(mini pack)",
    name: 'Pure Goat Mince(mini pack)',
    desc: "Finely ground goat mince for curries,kebabs & more",
    weight: '225g| Serves 1-2',
    price: 329,
    offerPrice: 246,
    discount: '25% off',
    time: 'Today 2PM - 5PM',
    images: [muttonboneA1, 
             muttonboneA2, 
             muttonboneA3],
  },
  {
    id: "Goat Boneless(mini-pack)",
    name: "Goat Boneless(mini-pack)",
    desc: 'Bbite-sized fat-trimmed cuts for pan-fried delicacies',
    weight: '250g|7-9 Piece | serves 2-3',
    price:410,
    offerPrice: 399,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttonboneB1, 
             muttonboneB2,
             muttonboneB3],
  },
  {
    id: "Goat Boneless",
    name: 'Goat Boneless',
    desc: "Bite-sized fat-trimmed cuts for pan-fried delicacies",
    weight: ' 500g|14-16 Pieces |serves 4',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttonboneC1,
             muttonboneC2, 
             muttonboneC3]
  },

];

function MuttonBoneless() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Mutton/>
      <div className="container">
        <div className="row muttonbonehead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 muttonbonehead1 mb-4" key={product.id}>
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
                          <img src={img} className="muttonboneimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="muttonbone-text">{product.name}</h5>
                    <p className="muttonbone-text1">{product.desc}</p>
                    <div className="muttonbone_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="muttonbone-discount">{product.discount}</span>}
                    </p>
                    <p className="muttonbone-time">{product.time}</p>

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

export default MuttonBoneless;

