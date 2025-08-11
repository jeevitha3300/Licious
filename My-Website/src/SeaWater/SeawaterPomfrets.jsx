import React from 'react';
import "./seawaterpomfrets.css"
import { useCart } from '../CartContext';
import seawaterpomfretsA1 from './SeawaterFishImages/seawaterpomfretsA1.webp'
import seawaterpomfretsA2 from './SeawaterFishImages/seawaterpomfretsA2.webp'
import seawaterpomfretsA3 from './SeawaterFishImages/seawaterpomfretsA3.webp'
import seawaterpomfretsA4 from './SeawaterFishImages/seawaterpomfretsA4.webp'
import seawaterpomfretsB1 from './SeawaterFishImages/seawaterpomfretsB1.webp'
import seawaterpomfretsB2 from './SeawaterFishImages/seawaterpomfretsB2.webp'
import seawaterpomfretsB3 from './SeawaterFishImages/seawaterpomfretsB3.webp'
import seawaterpomfretsB4 from './SeawaterFishImages/seawaterpomfretsB4.webp'
import seawaterpomfretsC1 from './SeawaterFishImages/seawaterpomfretsC1.webp'
import seawaterpomfretsC2 from './SeawaterFishImages/seawaterpomfretsC2.webp'
import seawaterpomfretsC3 from './SeawaterFishImages/seawaterpomfretsC3.webp'
import seawaterpomfretsC4 from './SeawaterFishImages/seawaterpomfretsC4.webp'
import SeawaterFish from './SeawaterFish';

const products = [
{
    id: "White Pomfret Small-Whole,Cleaned",
    name: 'White Pomfret Small-Whole,Cleaned',
    desc: "Aavoli/Paplet/Vavval/Vellai Vaaval/Machan",
    weight: '300g|2-5pieces| Serves 2-3',
    price: 1073,
    offerPrice: 762,
    discount: '29% off',
    time: 'Today 2PM - 5PM',
    images: [seawaterpomfretsA1, 
             seawaterpomfretsA2, 
             seawaterpomfretsA3,
             seawaterpomfretsA4],
  },
  {
    id: "White Pomfret Medium-Whole,Cleaned",
    name: "White Pomfret Medium-Whole,Cleaned",
    desc: 'Aavoli/Paplet/Vavval/Vellai Vaaval/Machan',
    weight: '450g|2-4pieces| serves2-3',
    price:410,
    offerPrice: 399,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [seawaterpomfretsB1, 
             seawaterpomfretsB2,
             seawaterpomfretsB3,
             seawaterpomfretsB4],
  },
  {
    id: "White Pomfret Large Curry Cut Head",
    name: 'White Pomfret Large Curry Cut Head',
    desc: "Aavoli/Paplet/Vavval/Vellai Vaaval/Machan",
    weight: ' 250g|7-10 pieces|serves2-3',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [seawaterpomfretsC1,
             seawaterpomfretsC2, 
             seawaterpomfretsC3,
             seawaterpomfretsC4]
  },

];

function SeawaterPomfrets() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <SeawaterFish/>
      <div className="container">
        <div className="row seawaterpomfretshead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 seawaterpomfretshead1 mb-4" key={product.id}>
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
                          <img src={img} className="seawaterpomfretsimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="seawaterpomfrets-text">{product.name}</h5>
                    <p className="seawaterpomfrets-text1">{product.desc}</p>
                    <div className="seawaterpomfrets_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="seawaterpomfrets-discount">{product.discount}</span>}
                    </p>
                    <p className="seawaterpomfrets-time">{product.time}</p>

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

export default SeawaterPomfrets;

