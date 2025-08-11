import React from 'react';
import "./chickenspeciality.css"
import { useCart } from '../CartContext';
import chickenspecialityA1 from './ChickenImages/chickenspecialityA1.webp'
import chickenspecialityA2 from './ChickenImages/chickenspecialityA2.webp'
import chickenspecialityA3 from './ChickenImages/chickenspecialityA3.webp'
import chickenspecialityB1 from './ChickenImages/chickenspecialityB1.webp'
import chickenspecialityB2 from './ChickenImages/chickenspecialityB2.webp'
import chickenspecialityB3 from './ChickenImages/chickenspecialityB3.webp'
import chickenspecialityC1 from './ChickenImages/chickenspecialityC1.webp'
import chickenspecialityC2 from './ChickenImages/chickenspecialityC2.webp'
import chickenspecialityC3 from './ChickenImages/chickenspecialityC3.webp'
import chickenspecialityD1 from './ChickenImages/chickenspecialityD1.webp'
import chickenspecialityD2 from './ChickenImages/chickenspecialityD2.webp'
import chickenspecialityD3 from './ChickenImages/chickenspecialityD3.webp'
import chickenspecialityE1 from './ChickenImages/chickenspecialityE1.webp'
import chickenspecialityE2 from './ChickenImages/chickenspecialityE2.webp'
import chickenspecialityE3 from './ChickenImages/chickenspecialityE3.webp'
import Chicken from './Chicken';

const products = [
  {
    id: "Chicken Drumstic-pack of 6",
    name: 'Chicken Drumstic-pack of 6',
    desc: "Juicy bone-in chicken drumstic,cut from the leg",
    weight: '6 pieces|6 pieces| Serves 2-3',
    price: 329,
    offerPrice: 277,
    discount: '16% off',
    time: 'Today 2PM - 5PM',
    images: [chickenspecialityA1, 
             chickenspecialityA2, 
             chickenspecialityA3],
  },
  {
    id: "Classic Chicken Soup Bones",
    name: "Classic Chicken Soup Bones",
    desc: 'cleanes chicken bones for a delicious,flavourful dtock',
    weight: '25g|11-12 Pieces',
    price:410,
    offerPrice: 399,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [chickenspecialityB1, 
             chickenspecialityB2,
             chickenspecialityB3],
  },
  {
    id: "Chicken Drumsticks-pack of 2(Mini pack)",
    name: 'Chicken Drumsticks-pack of 2(Mini pack)',
    desc: "Juicy bone-in chicken drumsticks,cut from the leg",
    weight: ' 2 pieces|2pieces|serves1-2',
    price:129,
    offerPrice:71,
    discount: '45% off',
    time: 'Today 2PM - 5PM',
    images: [chickenspecialityC1,
             chickenspecialityC2,
             chickenspecialityC3, 
             ]
  },
    {
    id: "Chicken Liver",
    name: 'Chicken Liver',
    desc: "Smooth,rich & meaty chicken Liver",
    weight: ' 350 g|7-9 pieces|serves 2-3',
    price:129,
    offerPrice:71,
    discount: '45% off',
    time: 'Today 2PM - 5PM',
    images: [chickenspecialityD1,
             chickenspecialityD2, 
             chickenspecialityD3, 
             ]
  },
   {
    id: "Chicken Wings with Skin",
    name: 'Chicken Wings with Skin',
    desc: "Cut & cleaned Chicken Wings with Skin",
    weight: ' 430 g|6 pieces|serves 3',
    price:129,
    offerPrice:71,
    discount: '45% off',
    time: 'Today 2PM - 5PM',
    images: [chickenspecialityE1,
             chickenspecialityE2, 
             chickenspecialityE3, 
             ]
  },
];

function ChickenSpeciality() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Chicken/>
      <div className="container">
        <div className="row chickenSpecialityhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 chickenSpecialityhead1 mb-4" key={product.id}>
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
                          <img src={img} className="chickenSpecialityimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="chickenSpeciality-text">{product.name}</h5>
                    <p className="chickenSpeciality-text1">{product.desc}</p>
                    <div className="chickenSpeciality_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="chickenSpeciality-discount">{product.discount}</span>}
                    </p>
                    <p className="chickenSpeciality-time">{product.time}</p>

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

export default ChickenSpeciality;

