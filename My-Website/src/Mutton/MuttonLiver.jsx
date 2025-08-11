import React from 'react';
import "./muttonliver.css"
import { useCart } from '../CartContext';
import muttonliverA1 from './MuttonImages/muttonliverA1.webp'
import muttonliverA2 from './MuttonImages/muttonliverA2.webp'
import muttonliverA3 from './MuttonImages/muttonliverA3.webp'
import muttonliverB1 from './MuttonImages/muttonliverB1.webp'
import muttonliverB2 from './MuttonImages/muttonliverB2.webp'
import muttonliverB3 from './MuttonImages/muttonliverB3.webp'
import muttonliverC1 from './MuttonImages/muttonliverC1.webp'
import muttonliverC2 from './MuttonImages/muttonliverC2.webp'
import muttonliverC3 from './MuttonImages/muttonliverC3.webp'
import Mutton from './Mutton';

const products = [
  {
    id: "Mutton Live-Chunks",
    name: 'Mutton Live-Chunks',
    desc: "Cut & cleaned Mutton Liver for pan-fried dishes",
    weight: '250g|14-18pieces| Serves 4',
    price: 665,
    offerPrice: 622,
    discount: '6% off',
    time: 'Today 2PM - 5PM',
    images: [muttonliverA1, 
             muttonliverA2, 
             muttonliverA3],
  },
  {
    id: "Mutton Liver(Small pack)",
    name: "Mutton Liver(Small pack)",
    desc: 'Cut & cleaned Mutton Liver for pan-fried dishes',
    weight: '100g| serves1-2',
    price:410,
    offerPrice: 399,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttonliverB1, 
             muttonliverB2,
             muttonliverB3],
  },
  {
    id: "Mutton Soup Bones",
    name: 'Mutton Soup Bones',
    desc: "Cleanes Mutton bones fro meaty stews & soups",
    weight: ' 200g|9-13 pieces|serves 4',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttonliverC1,
             muttonliverC2, 
             muttonliverC3,
             ]
  },

];

function MuttonLiver() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Mutton/>
      <div className="container">
        <div className="row muttonliverhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 muttonliverhead1 mb-4" key={product.id}>
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
                          <img src={img} className="muttonliverimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="muttonliver-text">{product.name}</h5>
                    <p className="muttonliver-text1">{product.desc}</p>
                    <div className="muttonliver_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="muttonliver-discount">{product.discount}</span>}
                    </p>
                    <p className="muttonliver-time">{product.time}</p>

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

export default MuttonLiver;

