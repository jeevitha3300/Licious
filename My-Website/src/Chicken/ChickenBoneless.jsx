import React from 'react';
import "./Chickenboneless.css"
import { useCart } from '../CartContext';
import chickenboneA1 from './ChickenImages/chickenboneA1.webp'
import chickenboneA2 from './ChickenImages/chickenboneA2.webp'
import chickenboneA3 from './ChickenImages/chickenboneA3.webp'
import chickenboneB1 from './ChickenImages/chickenboneB1.webp'
import chickenboneB2 from './ChickenImages/chickenboneB2.webp'
import chickenboneB3 from './ChickenImages/chickenboneB3.webp'
import chickenboneC1 from './ChickenImages/chickenboneC1.webp'
import chickenboneC2 from './ChickenImages/chickenboneC2.webp'
import chickenboneC3 from './ChickenImages/chickenboneC3.webp'
import chickenboneD1 from './ChickenImages/chickenboneD1.webp'
import chickenboneD2 from './ChickenImages/chickenboneD2.webp'
import chickenboneD3 from './ChickenImages/chickenboneD3.webp'
import chickenboneE1 from './ChickenImages/chickenboneE1.webp'
import chickenboneE2 from './ChickenImages/chickenboneE2.webp'
import chickenboneE3 from './ChickenImages/chickenboneE3.webp'
import Chicken from './Chicken';

const products = [
  {
    id: "Chicken Breast-Boneless",
    name: 'Chicken Breast-Boneless',
    desc: "Enjoy tender pieces of juicy chicken breast",
    weight: '450g|2-4pieces| Serves 1-2',
    price: 325,
    offerPrice: 244,
    discount: '25% off',
    time: 'Today 2PM - 5PM',
    images: [chickenboneA1, 
             chickenboneA2, 
             chickenboneA3],
  },
  {
    id: "Premium Chicken Thigh Boneless",
    name: "Premium Chicken Thigh Boneless",
    desc: 'Meaty,tender boneless chicken things',
    weight: '450g|3-5 Piece | serves 5',
    price:369,
    offerPrice: 276,
    discount: '25% off',
    time: 'Today 2PM - 5PM',
    images: [chickenboneB1, 
             chickenboneB2,
             chickenboneB3],
  },
  {
    id: "Chicken Tikka (Mini)",
    name: 'Chicken Tikka (Mini)',
    desc: "Tangy,meaty & smoky,give youer dinner a spicy twist",
    weight: ' 225g|8-10 Pieces ',
    price:199,
    offerPrice:179,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [chickenboneC1,
             chickenboneC2, 
             chickenboneC3]
  },
    {
    id: "Chicken Boneless-Mini Bites",
    name: 'Chicken Boneless-Mini Bites',
    desc: "Juicy,tender goodness of Chicken in a mouthful",
    weight: ' 250g|20-25 Pieces ',
    price:199,
    offerPrice:179,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [chickenboneD1,
             chickenboneD2, 
             chickenboneD3]
  },
   {
    id: "Chicken Mince(Keema)",
    name: 'Chicken Mince(Keema)',
    desc: "For mouth-watering meatballs,keema & more Accepting",
    weight: ' 250g|20-25 Pieces ',
    price:199,
    offerPrice:179,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [chickenboneE1,
             chickenboneE2, 
             chickenboneE3]
  }

];

function ChickenBoneless() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Chicken/>
      <div className="container">
        <div className="row chickenbonehead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 chickenbonehead1 mb-4" key={product.id}>
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
                          <img src={img} className="chickenboneimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="chickenbone-text">{product.name}</h5>
                    <p className="chickenbone-text1">{product.desc}</p>
                    <div className="chickenbone_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="chickenbone-discount">{product.discount}</span>}
                    </p>
                    <p className="chickenbone-time">{product.time}</p>

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

export default ChickenBoneless;

