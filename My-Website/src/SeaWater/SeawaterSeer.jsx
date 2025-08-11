import React from 'react';
import "./seawaterseer.css"
import { useCart } from '../CartContext';
import seawaterseerA1 from './SeawaterFishImages/seawaterseerA1.webp'
import seawaterseerA2 from './SeawaterFishImages/seawaterseerA2.webp'
import seawaterseerA3 from './SeawaterFishImages/seawaterseerA3.webp'
import seawaterseerA4 from './SeawaterFishImages/seawaterseerA4.webp'
import seawaterseerB1 from './SeawaterFishImages/seawaterseerB1.webp'
import seawaterseerB2 from './SeawaterFishImages/seawaterseerB2.webp'
import seawaterseerB3 from './SeawaterFishImages/seawaterseerB3.webp'
import seawaterseerB4 from './SeawaterFishImages/seawaterseerB4.webp'
import seawaterseerC1 from './SeawaterFishImages/seawaterseerC1.webp'
import seawaterseerC2 from './SeawaterFishImages/seawaterseerC2.webp'
import seawaterseerC3 from './SeawaterFishImages/seawaterseerC3.webp'
import seawaterseerC4 from './SeawaterFishImages/seawaterseerC4.webp'
import SeawaterFish from './SeawaterFish';

const products = [
  {
    id: "Seer-Thin Slices",
    name: 'Seer-Thin Slices',
    desc: "Anjal/Vanjaram/Nei Meen",
    weight: '300g|2-5pieces| Serves 2-3',
    price: 1073,
    offerPrice: 762,
    discount: '29% off',
    time: 'Today 2PM - 5PM',
    images: [seawaterseerA1, 
             seawaterseerA2, 
             seawaterseerA3,
             seawaterseerA4],
  },
  {
    id: "Seer-Steaks",
    name: "Seer-Steaks",
    desc: 'Anjal/Vanjaram/Nei Meen',
    weight: '300g|3-5pieces| serves2-3',
    price:410,
    offerPrice: 399,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [seawaterseerB1, 
             seawaterseerB2,
             seawaterseerB3,
             seawaterseerB4],
  },
  {
    id: "Seer Large-Steaks",
    name: 'Seer Large-Steaks',
    desc: "Anjal/Vanjaram/Nei Meen",
    weight: ' 500g|3-4 pieces|serves2-3',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [seawaterseerC1,
             seawaterseerC2, 
             seawaterseerC3,
             seawaterseerC4]
  },

];

function SeawaterSeer() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <SeawaterFish/>
      <div className="container">
        <div className="row seawaterseerhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 seawaterseerhead1 mb-4" key={product.id}>
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
                          <img src={img} className="seawaterseerimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="seawaterseer-text">{product.name}</h5>
                    <p className="seawaterseer-text1">{product.desc}</p>
                    <div className="seawaterseer_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="seawaterseer-discount">{product.discount}</span>}
                    </p>
                    <p className="seawaterseer-time">{product.time}</p>

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

export default SeawaterSeer;

