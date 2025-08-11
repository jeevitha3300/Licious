import React from 'react';
import "./seawaterall.css"
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
import seawatersalmonsA1 from './SeawaterFishImages/seawatersalmonsA1.webp'
import seawatersalmonsA2 from './SeawaterFishImages/seawatersalmonsA2.webp'
import seawatersalmonsA3 from './SeawaterFishImages/seawatersalmonsA3.webp'
import seawatersalmonsA4 from './SeawaterFishImages/seawatersalmonsA4.webp'
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
    {
      id: "Indian Salmon Medium-Fry Cut",
      name: 'Indian Salmon Medium-Fry Cut',
      desc: "Rawas/Gujarali/Thira Vaala/Kora",
      weight: '350g|4-10pieces| Serves 2-3',
      price: 1073,
      offerPrice: 762,
      discount: '29% off',
      time: 'Today 2PM - 5PM',
      images: [seawatersalmonsA1, 
               seawatersalmonsA2, 
               seawatersalmonsA3,
               seawatersalmonsA4],
    },
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

function SeawaterAll() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <SeawaterFish/>
      <div className="container">
        <div className="row seawaterallhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 seawaterallhead1 mb-4" key={product.id}>
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
                          <img src={img} className="seawaterallimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="seawaterall-text">{product.name}</h5>
                    <p className="seawaterall-text1">{product.desc}</p>
                    <div className="seawaterall_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="seawaterall-discount">{product.discount}</span>}
                    </p>
                    <p className="seawaterall-time">{product.time}</p>

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

export default SeawaterAll;

