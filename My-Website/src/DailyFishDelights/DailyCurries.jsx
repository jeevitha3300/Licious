// import React from 'react'
//  import "./dailycurries.css"
// import dailycurriesA1 from './DailyFishDelightImages/dailycurriesA1.webp'
// import dailycurriesA2 from './DailyFishDelightImages/dailycurriesA2.webp'
// import dailycurriesA3 from './DailyFishDelightImages/dailycurriesA3.webp'
// import dailycurriesA4 from './DailyFishDelightImages/dailycurriesA4.webp'
// import dailycurriesB1 from './DailyFishDelightImages/dailycurriesB1.webp'
// import dailycurriesB2 from './DailyFishDelightImages/dailycurriesB2.webp'
// import dailycurriesB3 from './DailyFishDelightImages/dailycurriesB3.webp'
// import dailycurriesB4 from './DailyFishDelightImages/dailycurriesB4.webp'
// import dailycurriesC1 from './DailyFishDelightImages/dailycurriesC1.webp'
// import dailycurriesC2 from './DailyFishDelightImages/dailycurriesC2.webp'
// import dailycurriesD1 from './DailyFishDelightImages/dailycurriesD1.webp'
// import dailycurriesD2 from './DailyFishDelightImages/dailycurriesD2.webp'
// import dailycurriesD3 from './DailyFishDelightImages/dailycurriesD3.webp'
// import dailycurriesD4 from './DailyFishDelightImages/dailycurriesD4.webp'
// import dailycurriesE1 from './DailyFishDelightImages/dailycurriesE1.webp'
// import dailycurriesE2 from './DailyFishDelightImages/dailycurriesE2.webp'
// import dailycurriesE3 from './DailyFishDelightImages/dailycurriesE3.webp'
// import dailycurriesE4 from './DailyFishDelightImages/dailycurriesE4.webp'
// import dailycurriesF1 from './DailyFishDelightImages/dailycurriesF1.webp'
// import dailycurriesF2 from './DailyFishDelightImages/dailycurriesF2.webp'
// import dailycurriesF3 from './DailyFishDelightImages/dailycurriesF3.webp'
// import dailycurriesF4 from './DailyFishDelightImages/dailycurriesF4.webp'
// import DailyFishDelight from './DailyFishDelight'
// function DailyCurries() {

//   return (
//     <>
//       <DailyFishDelight/>
      
//       <div className="container">
//         <div className="row dailycurriesAhead ms-5  d-flex">

//           {/* Col 1*/}
//        <div className="col-4 dailycurriesAhead1 mb-5">
//   <div className="card shadow rounded-4">
//     <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         <button type="button" data-bs-target="#carousel1" data-bs-slide-to="3" aria-label="Slide 4"></button>
//       </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailycurriesA1} className=" dailycurriesimgA  rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesA2} className=" dailycurriesimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesA3} className=" dailycurriesimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesA4} className="  dailycurriesimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailycurries-text">Iraal - Freshwater Prawns (Medium Sized) - Cleaned &amp; Deveined</h5>
// {/* <p className="eveningA-text1">Juicy &amp; meaty snack for your kiddos' evening cravings</p> */}
//       <div class="dailycurries_weight">
//         <div class="dailycurries-pieces">250 g</div><div class="dailycurries_pieces2"> | 12Pieces </div>   <div className="dailycurries_pieces2">| Serves3-4</div></div>
//       <p className="fw-bold "> <span className='dailycurries-price1'> ₹189 </span> <span className="text-muted text-decoration-line-through ms-2">₹210</span>   <span className="dailycurries-discount">8% off</span></p>
     
// <p className="dailycurries-time">Today 2PM - 5PM</p>
// <button className="btn ">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//    {/* Col 2 */}

//        <div className="col-4 dailycurriesAhead1">
//   <div className="card shadow rounded-4">
//     <div id="carousel2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         <button type="button" data-bs-target="#carousel2" data-bs-slide-to="3" aria-label="Slide 4"></button>
//       </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailycurriesB1} className="dailycurriesimgA  rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesB2} className="dailycurriesimgA  rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesB3} className="dailycurriesimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesB4} className="dailycurriesimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailycurries-text">Iraal - Freshwater Prawns (Small Sized) - Cleaned and Deveined </h5>
//       {/* <p className="eveningA-text1">Build your own meaty, juicy treat for a mid meal snack</p> */}
//       <div class="dailycurries_weight">
//         <div class="dailycurries-pieces">1 Piece </div><div class="dailycurries_pieces2"> | piece</div></div>
//       <p className="fw-bold ">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailycurries-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// {/* col3 */}
// <div className="col-4 dailycurriesAhead1">
//   <div className="card shadow rounded-4">
//     <div id="carousel3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailycurriesC1} className="dailycurriesimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesC2} className="dailycurriesimgA rounded-top-4" alt="Slide 2" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body  ">
//       <h5 className="dailycurries-text">Basa Medium Fry Cut</h5>
//      <p className="dailycurries-text1">Pungus/Keluthi Meen/Assam Vala</p>
//      <div class="dailycurries_weight">
//       <div class="dailycurries_pieces2">1 piece</div><div class="dailycurries_pieces2"> |  1 Pieces </div></div>
//     <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailycurries-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//   {/* col4 */}
// <div className="col-4 dailycurriesAhead1 mb-3">
//   <div className="card shadow rounded-4">
//     <div id="carousel4" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel4" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carousel4" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         <button type="button" data-bs-target="#carousel4" data-bs-slide-to="3" aria-label="Slide 4"></button>
//       </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailycurriesD1} className="dailycurriesimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesD2} className="dailycurriesimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesD3} className="dailycurriesimgA rounded-top-4" alt="Slide 3" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesD4} className="dailycurriesimgA rounded-top-4" alt="Instruction" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailycurries-text">Tilapia Medium - Fillet</h5>
//       <p className="dailycurries-text1">Jalebi/Jilapi/Thilopia</p>
//       <div class="dailycurries_weight">
//         <div class="dailycurries_pieces2">2 pieces</div><div class="dailycurries_pieces2"> |  2 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailycurries-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// {/* Column 5 */}
//         <div className="col-4 dailycurriesAhead1">
//   <div className="card shadow rounded-4">
//     <div id="carousel5" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel5" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel5" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carousel5" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         <button type="button" data-bs-target="#carousel5" data-bs-slide-to="3" aria-label="Slide 4"></button>
//       </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailycurriesE1} className="dailycurriesimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesE2} className="dailycurriesimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesE3} className="dailycurriesimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesE4} className="dailycurriesimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body  ">
//       <h5 className="dailycurries-text">Rohu (1.4kg) - Bengali Cut, No Head</h5>
//       <p className="dailycurries-text1">
// 
// 
// </p>
//       <div class="dailycurries_weight">
//         <div class="dailycurries-pieces"></div><div class="dailycurries_pieces2"> |  8-12 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailycurries-time">Today 2PM - 5PM</p>
//  <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//  {/* col 6 */}
// <div className="col-4 dailycurriesAhead1">
//   <div className="card ">
//     <div id="carousel6" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel6" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carousel6" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         <button type="button" data-bs-target="#carousel6" data-bs-slide-to="3" aria-label="Slide 4"></button>
//       </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailycurriesF1} className="dailycurriesimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesF2} className="dailycurriesimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesF3} className="dailycurriesimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailycurriesF4} className="dailycurriesimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body">
//       <h5 className="dailycurries-text">Semparuthi - Red Snapper Steaks</h5>
//       {/* <p className="eveningA-text1">Crispy &amp; juicy chicken tenders - a snack time treat</p> */}
//       <span class="LargeProductCard_product_desc__ZLIB8 text_1"></span>
//     <div class="dailycurries_weight"><div class="dailycurries-pieces">200 g</div><div class="dailycurries_pieces2"> |  10-12 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailycurries-time">Today 2PM - 5PM</p>
//     <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </>
//   );
// }
// export default DailyCurries;
// ================================================================================================================================================

import React from 'react';
import "./dailycurries.css"
 import DailyFishDelight from './DailyFishDelight'
import { useCart } from '../CartContext';

import dailycurriesA1 from './DailyFishDelightImages/dailycurriesA1.webp'
import dailycurriesA2 from './DailyFishDelightImages/dailycurriesA2.webp'
import dailycurriesA3 from './DailyFishDelightImages/dailycurriesA3.webp'
import dailycurriesA4 from './DailyFishDelightImages/dailycurriesA4.webp'
import dailycurriesB1 from './DailyFishDelightImages/dailycurriesB1.webp'
import dailycurriesB2 from './DailyFishDelightImages/dailycurriesB2.webp'
import dailycurriesB3 from './DailyFishDelightImages/dailycurriesB3.webp'
import dailycurriesB4 from './DailyFishDelightImages/dailycurriesB4.webp'
import dailycurriesC1 from './DailyFishDelightImages/dailycurriesC1.webp'
import dailycurriesC2 from './DailyFishDelightImages/dailycurriesC2.webp'
import dailycurriesD1 from './DailyFishDelightImages/dailycurriesD1.webp'
import dailycurriesD2 from './DailyFishDelightImages/dailycurriesD2.webp'
import dailycurriesD3 from './DailyFishDelightImages/dailycurriesD3.webp'
import dailycurriesD4 from './DailyFishDelightImages/dailycurriesD4.webp'
import dailycurriesE1 from './DailyFishDelightImages/dailycurriesE1.webp'
import dailycurriesE2 from './DailyFishDelightImages/dailycurriesE2.webp'
import dailycurriesE3 from './DailyFishDelightImages/dailycurriesE3.webp'
import dailycurriesE4 from './DailyFishDelightImages/dailycurriesE4.webp'
import dailycurriesF1 from './DailyFishDelightImages/dailycurriesF1.webp'
import dailycurriesF2 from './DailyFishDelightImages/dailycurriesF2.webp'
import dailycurriesF3 from './DailyFishDelightImages/dailycurriesF3.webp'
import dailycurriesF4 from './DailyFishDelightImages/dailycurriesF4.webp'
const products = [
  {
    id: "Farm Fresh Classic Eggs",
    name: 'Iraal - Freshwater Prawns (Medium Sized)',
    desc: "Juicy &amp; meaty snack for your kiddos' evening cravings",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [dailycurriesA1, 
             dailycurriesA2, 
             dailycurriesA3,
             dailycurriesA4],
  },
  {
    id: "Iraal - Freshwater Prawns (Small Sized) ",
    name: "Iraal - Freshwater Prawns (Small Sized)",
    desc: 'Build your own meaty, juicy treat for a mid meal snack',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailycurriesB1, 
             dailycurriesB2,
             dailycurriesB3,
             dailycurriesB4],
  },
  {
    id: "Basa Medium Fry Cut",
    name: 'Basa Medium Fry Cut',
    desc: "Pungus/Keluthi Meen/Assam Vala",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailycurriesC1,
             dailycurriesC2 ],
  },
  {
    id: "Tilapia Medium - Fillet",
    name: 'Tilapia Medium - Fillet',
    desc: "Jalebi/Jilapi/Thilopia",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailycurriesD1, 
             dailycurriesD2,
             dailycurriesD3,
             dailycurriesD4],
  },
  {
    id: "Rohu (1.4kg) - Bengali Cut, No Head",
    name: 'Classic Chicken Breakfast Sausage',
    desc: '',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailycurriesE1,
             dailycurriesE2, 
             dailycurriesE3,
             dailycurriesE4],
  },
  {
    id: "Semparuthi - Red Snapper Steaks",
    name: 'Classic Smoked Chicken Frankfurter',
    desc: 'Crispy &amp; juicy chicken tenders - a snack time treat',
    weight: '200 g | 10-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailycurriesF1,
             dailycurriesF2, 
             dailycurriesF3,
             dailycurriesF4],
  },
];

function DailyCurries() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <DailyFishDelight/>
      <div className="container">
        <div className="row dailycurrieshead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 dailycurrieshead1 mb-4" key={product.id}>
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
                          <img src={img} className="dailycurriesimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="dailycurries-text">{product.name}</h5>
                    <p className="dailycurries-text1">{product.desc}</p>
                    <div className="dailycurries_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="dailycurries-discount">{product.discount}</span>}
                    </p>
                    <p className="dailycurries-time">{product.time}</p>

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

export default DailyCurries;

