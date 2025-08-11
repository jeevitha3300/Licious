import React from 'react';
import "./seawatersalmons.css"
import { useCart } from '../CartContext';
import seawatersalmonsA1 from './SeawaterFishImages/seawatersalmonsA1.webp'
import seawatersalmonsA2 from './SeawaterFishImages/seawatersalmonsA2.webp'
import seawatersalmonsA3 from './SeawaterFishImages/seawatersalmonsA3.webp'
import seawatersalmonsA4 from './SeawaterFishImages/seawatersalmonsA4.webp'
import SeawaterFish from './SeawaterFish';

const products = [
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


];

function SeawaterSalmons() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <SeawaterFish/>
      <div className="container">
        <div className="row seawatersolmonshead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 seawatersolmonshead1 mb-4" key={product.id}>
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
                          <img src={img} className="seawatersolmonsimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="seawatersolmons-text">{product.name}</h5>
                    <p className="seawatersolmons-text1">{product.desc}</p>
                    <div className="seawatersolmons_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="seawatersolmons-discount">{product.discount}</span>}
                    </p>
                    <p className="seawatersolmons-time">{product.time}</p>

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

export default SeawaterSalmons;

