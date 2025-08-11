import React from 'react';
import './kidAll.css';
import Kidsfavourite from './Kidsfavourite';
import { useCart } from '../CartContext';
import eveningA1 from './KidfavImages/eveningA1.webp'
import eveningA2 from './KidfavImages/eveningA2.webp'
import eveningA3 from './KidfavImages/eveningA3.webp'
import eveningA4 from './KidfavImages/eveningA4.webp'
import eveningA5 from './KidfavImages/eveningA5.webp'
import eveningB1 from './KidfavImages/eveningB1.webp'
import eveningB2 from './KidfavImages/eveningB2.webp'
import eveningB3 from './KidfavImages/eveningB3.webp'
import eveningB4 from './KidfavImages/eveningB4.webp'
import eveningB5 from './KidfavImages/eveningB5.webp'
import eveningC1 from './KidfavImages/eveningC1.webp'
import eveningC2 from './KidfavImages/eveningC2.webp'
import eveningC3 from './KidfavImages/eveningC3.webp'
import eveningC4 from './KidfavImages/eveningC4.webp'
import eveningD1 from './KidfavImages/eveningD1.webp'
import eveningD2 from './KidfavImages/eveningD2.webp'
import eveningD3 from './KidfavImages/eveningD3.webp'
import eveningD4 from './KidfavImages/eveningD4.webp'
import eveningD5 from './KidfavImages/eveningD5.webp'
import eveningE1 from './KidfavImages/eveningE1.webp'
import eveningE2 from './KidfavImages/eveningE2.webp'
import eveningE3 from './KidfavImages/eveningE3.webp'
import eveningE4 from './KidfavImages/eveningE4.webp'
import eveningE5 from './KidfavImages/eveningE5.webp'
import eveningF1 from './KidfavImages/eveningF1.webp'
import eveningF2 from './KidfavImages/eveningF2.webp'
import eveningF3 from './KidfavImages/eveningF3.webp'
import eveningF4 from './KidfavImages/eveningF4.webp'
import eveningF5 from './KidfavImages/eveningF5.webp'
import breakfastA1 from './KidfavImages/breakfastA1.webp';
import breakfastA2 from './KidfavImages/breakfastA2.webp';
import breakfastA3 from './KidfavImages/breakfastA3.webp';
import breakfastB1 from './KidfavImages/breakfastB1.webp';
import breakfastB2 from './KidfavImages/breakfastB2.webp';
import breakfastB3 from './KidfavImages/breakfastB3.webp';
import breakfastB4 from './KidfavImages/breakfastB4.webp';
import breakfastC1 from './KidfavImages/breakfastC1.webp';
import breakfastC2 from './KidfavImages/breakfastC2.webp';
import breakfastC3 from './KidfavImages/breakfastC3.webp';
import breakfastC4 from './KidfavImages/breakfastC4.webp';
import breakfastD1 from './KidfavImages/breakfastD1.webp';
import breakfastD2 from './KidfavImages/breakfastD2.webp';
import breakfastD3 from './KidfavImages/breakfastD3.webp';
import breakfastD4 from './KidfavImages/breakfastD4.webp';
import breakfastE1 from './KidfavImages/breakfastE1.webp';
import breakfastE2 from './KidfavImages/breakfastE2.webp';
import breakfastE3 from './KidfavImages/breakfastE3.webp';
import breakfastE4 from './KidfavImages/breakfastE4.webp';
import breakfastF1 from './KidfavImages/breakfastF1.webp';
import breakfastF2 from './KidfavImages/breakfastF2.webp';
import breakfastF3 from './KidfavImages/breakfastF3.webp';
import yummyA1 from './KidfavImages/yummyA1.webp'
import yummyA2 from './KidfavImages/yummyA2.webp'
import yummyA3 from './KidfavImages/yummyA3.webp'
import yummyB1 from './KidfavImages/yummyB1.webp'
import yummyB2 from './KidfavImages/yummyB2.webp'
import yummyB3 from './KidfavImages/yummyB3.webp'
import yummyB4 from './KidfavImages/yummyB4.webp'
import yummyC1 from './KidfavImages/yummyC1.webp'
import yummyC2 from './KidfavImages/yummyC2.webp'
import yummyC3 from './KidfavImages/yummyC3.webp'
import yummyC4 from './KidfavImages/yummyC4.webp'
import yummyD1 from './KidfavImages/yummyD1.webp'
import yummyD2 from './KidfavImages/yummyD2.webp'
import yummyD3 from './KidfavImages/yummyD3.webp'
import yummyD4 from './KidfavImages/yummyD4.webp'
import yummyE1 from './KidfavImages/yummyE1.webp'
import yummyE2 from './KidfavImages/yummyE2.webp'
import yummyE3 from './KidfavImages/yummyE3.webp'
import yummyE4 from './KidfavImages/yummyE4.webp'
import yummyF1 from './KidfavImages/yummyF1.webp'
import yummyF2 from './KidfavImages/yummyF2.webp'
import yummyF3 from './KidfavImages/yummyF3.webp'
import yummyF4 from './KidfavImages/yummyF4.webp'
const products = [
   {
      id: "Z",
      // id: "Crispy Chicken Nuggets",
      name: 'Crispy Chicken Nuggets',
      desc: "Juicy & meaty snack for your kiddos' evening cravings",
      weight: '250 g | 12 Pieces | Serves 3-4',
      price: 210,
      offerPrice: 189,
      discount: '8% off',
      time: 'Today 2PM - 5PM',
      images: [eveningA1, 
               eveningA2, 
               eveningA3,
               eveningA4, 
               eveningA5],
    },
    {
      id: "Y",
      // id: "Classic Chicken Burger Patty",
      name: 'Classic Chicken Burger Patty',
      desc: 'Build your own meaty, juicy treat for a mid meal snack',
      weight: '1 Piece | piece',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningB1, 
               eveningB2,
               eveningB3,
               eveningB4,
               eveningB5],
    },
    {
      id: "X",
      // id: "Crispy Chicken Wings",
      name: 'Crispy Chicken Wings',
      desc: "Juicy & meaty snack for your kiddos' evening cravings",
      weight: '1 Piece | 1 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningC1,
               eveningC2, 
               eveningC3, 
               eveningC4],
    },
    {
      id: "W",
      // id: "Crispy Fish Fingers",
      name: 'Crispy Fish Fingers',
      desc: "A crunchy, juicy & tasty pick for your kiddos' snack",
      weight: '2 Pieces | 2 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningD1, 
               eveningD2,
               eveningD3,
               eveningD4,
               eveningD5],
    },
    {
      id: "V",
      // id: "Crispy Prawns",
      name: 'Crispy Prawns',
      desc: 'Crispy, juicy, nutty prawns, perfect for all cravings',
      weight: '8-12 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningE1,
               eveningE2, 
               eveningE3,
               eveningE4,
               eveningE5],
    },
    {
      id: "U",
      // id: "Crispy Chicken Supreme",
      name: 'Crispy Chicken Supreme',
      desc: 'Crispy & juicy chicken tenders - a snack time treat',
      weight: '200 g | 10-12 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [eveningF1,
               eveningF2, 
               eveningF3,
               eveningF4,
               eveningF5],
    },
   {
      id: "T",
      // id: "Farm Fresh Classic Eggs",
      name: 'Farm Fresh Classic Eggs',
      desc: "For a daily dose of hearty goodness.",
      weight: '250 g | 12 Pieces | Serves 3-4',
      price: 210,
      offerPrice: 189,
      discount: '8% off',
      time: 'Today 2PM - 5PM',
      images: [breakfastA1, 
               breakfastA2, 
               breakfastA3],
    },
    {
      id: "S",
      // id: "Classic Chicken Lyoner",
      name: 'Classic Chicken Lyoner',
      desc: 'Chicken Lyoners made with fresh chicken',
      weight: '1 Piece | piece',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [breakfastB1, 
               breakfastB2,
               breakfastB3,
               breakfastB4],
    },
    {
      id: "R",
      // id: "Chunky Shawarma Chicken Spread",
      name: 'Chunky Shawarma Chicken Spread',
      desc: "Cooked chunks of chicken in a butter chicken base.",
      weight: '1 Piece | 1 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [breakfastC1,
               breakfastC2, 
               breakfastC3, 
               breakfastC4],
    },
    {
      id: "Q",
      // id: "Chunky Butter Chicken Spread",
      name: 'Chunky Butter Chicken Spread<',
      desc: "Cooked chunks of chicken in a butter chicken base.",
      weight: '2 Pieces | 2 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [breakfastD1, 
               breakfastD2,
               breakfastD3,
               breakfastD4],
    },
    {
      id: "P",
      // id: "Classic Chicken Breakfast Sausage",
      name: 'Classic Chicken Breakfast Sausage',
      desc: 'Juicy, meaty Classic Chicken Sausages',
      weight: '8-12 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [breakfastE1,
               breakfastE2, 
               breakfastE3,
               breakfastE4],
    },
    {
      id: "O",
      // id: "Classic Smoked Chicken Frankfurter",
      name: 'Classic Smoked Chicken Frankfurter',
      desc: 'Chicken Sausage smoked with fine oakwood.',
      weight: '200 g | 10-12 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [breakfastF1,
               breakfastF2, 
               breakfastF3],
    },
   {
      id: "N",
      // id: "Farm Fresh Classic Eggs-pack",
      name: 'Farm Fresh Classic Eggs - Pack of 12',
      desc: "For a daily dose of hearty goodness.",
      weight: '250 g | 12 Pieces | Serves 3-4',
      price: 210,
      offerPrice: 189,
      discount: '8% off',
      time: 'Today 2PM - 5PM',
      images: [ yummyA1, 
                yummyA2, 
                yummyA3],
    },
    {
      id:"M",
      // id:"Chunky Shawarma Chicken Spread",
      name: 'Chunky Shawarma Chicken Spread',
      desc: 'Freshly roasted chicken in a creamy shawarma base.',
      weight: '1 Piece | piece',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [ yummyB1, 
                yummyB2,
                yummyB3,
                yummyB4],
    },
    {
      id:"L",
      // id:"Chunky Continental Chicken Spread",
      name: 'Chunky Continental Chicken Spread',
      desc: "Freshly cooked chunks of chicken in a creamy base.",
      weight: '1 Piece | 1 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [ yummyC1,
                yummyC2, 
                yummyC3, 
                yummyC4],
    },
    {
      id: "K",
      // id: "Classic Chicken Burger Patty",
      name: 'Classic Chicken Burger Patty',
      desc: "Build your own meaty, juicy treat for a mid meal snack",
      weight: '2 Pieces | 2 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [ yummyD1, 
                yummyD2,
                yummyD3,
                yummyD4],
    },
    {
      id:"J",
      // id:"Juicy, meaty Classic Chicken Sausages",
      name: 'Juicy, meaty Classic Chicken Sausages',
      desc: 'Crispy, juicy, nutty prawns, perfect for all cravings',
      weight: '8-12 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [ yummyE1,
                yummyE2, 
                yummyE3,
                yummyE4],
    },
    {
      id: "I",
      // id: "Classic Smoked Chicken Frankfurter",
      name: 'Classic Smoked Chicken Frankfurter',
      desc: 'Chicken Sausage smoked with fine oakwood.',
      weight: '200 g | 10-12 Pieces',
      price: 210,
      offerPrice: 189,
      discount: '',
      time: 'Today 2PM - 5PM',
      images: [ yummyF1,
                yummyF2, 
                yummyF3,
                yummyF4],
    }
];

function KidAll() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
      <Kidsfavourite />
      <div className="container">
        <div className="row kidallhead d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 kidallhead1 mb-4" key={product.id}>
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
                          <img src={img} className="kidallimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="kidall-text">{product.name}</h5>
                    <p className="kidall-text1">{product.desc}</p>
                    <div className="kidall_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="kidall-discount">{product.discount}</span>}
                    </p>
                    <p className="kidall-time">{product.time}</p>

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

export default KidAll;



