import React from 'react';
import "./muttonspeciality.css"
import { useCart } from '../CartContext';
import muttonspecialityA1 from './MuttonImages/muttonspecialityA1.webp'
import muttonspecialityA2 from './MuttonImages/muttonspecialityA2.webp'
import muttonspecialityA3 from './MuttonImages/muttonspecialityA3.webp'
import muttonspecialityB1 from './MuttonImages/muttonspecialityB1.webp'
import muttonspecialityB2 from './MuttonImages/muttonspecialityB2.webp'
import muttonspecialityB3 from './MuttonImages/muttonspecialityB3.webp'
import muttonspecialityC1 from './MuttonImages/muttonspecialityC1.webp'
import muttonspecialityC2 from './MuttonImages/muttonspecialityC2.webp'
import Mutton from './Mutton';

const products = [
  {
    id: "Goat Biriyani Cut",
    name: 'Goat Biriyani Cut',
    desc: "Fat-rich cuts excluively for flavourable biriyanis",
    weight: '500g|7-8pieces| Serves 1-2',
    price: 665,
    offerPrice: 622,
    discount: '6% off',
    time: 'Today 2PM - 5PM',
    images: [muttonspecialityA1, 
             muttonspecialityA2, 
             muttonspecialityA3],
  },
  {
    id: "Premium Goat Shoulder Curry Cut",
    name: "Premium Goat Shoulder Curry Cut",
    desc: 'The meatiest cut for fall off the bone Mutton curries',
    weight: '500g|9-12 Pieces | serves 4',
    price:410,
    offerPrice: 399,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttonspecialityB1, 
             muttonspecialityB2,
             muttonspecialityB3],
  },
  {
    id: "Goat Chops",
    name: 'Goat Chops',
    desc: "Includes only fat-rich Ribs & T-bone steaks",
    weight: ' 200g',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttonspecialityC1,
             muttonspecialityC2, 
             ]
  },

];

function MuttonSpeciality() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Mutton/>
      <div className="container">
        <div className="row MuttonSpecialityhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 MuttonSpecialityhead1 mb-4" key={product.id}>
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
                          <img src={img} className="MuttonSpecialityimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="MuttonSpeciality-text">{product.name}</h5>
                    <p className="MuttonSpeciality-text1">{product.desc}</p>
                    <div className="MuttonSpeciality_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="MuttonSpeciality-discount">{product.discount}</span>}
                    </p>
                    <p className="MuttonSpeciality-time">{product.time}</p>

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

export default MuttonSpeciality;

