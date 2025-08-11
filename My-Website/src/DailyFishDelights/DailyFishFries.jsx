// import React from 'react'
//  import "./dailyfishfries.css"
// import dailyfishA1 from './DailyFishDelightImages/dailyfishA1.webp'
// import dailyfishA2 from './DailyFishDelightImages/dailyfishA2.webp'
// import dailyfishA3 from './DailyFishDelightImages/dailyfishA3.webp'
// import dailyfishA4 from './DailyFishDelightImages/dailyfishA4.webp'
// import dailyfishB1 from './DailyFishDelightImages/dailyfishB1.webp'
// import dailyfishB2 from './DailyFishDelightImages/dailyfishB2.webp'
// import dailyfishB3 from './DailyFishDelightImages/dailyfishB3.webp'
// import dailyfishB4 from './DailyFishDelightImages/dailyfishB4.webp'
// import dailyfishC1 from './DailyFishDelightImages/dailyfishC1.webp'
// import dailyfishC2 from './DailyFishDelightImages/dailyfishC2.webp'
// import dailyfishC3 from './DailyFishDelightImages/dailyfishC3.webp'
// import dailyfishC4 from './DailyFishDelightImages/dailyfishC4.webp'
// import dailyfishD1 from './DailyFishDelightImages/dailyfishD1.webp'
// import dailyfishD2 from './DailyFishDelightImages/dailyfishD2.webp'
// import dailyfishD3 from './DailyFishDelightImages/dailyfishD3.webp'
// import dailyfishD4 from './DailyFishDelightImages/dailyfishD4.webp'
// import dailyfishE1 from './DailyFishDelightImages/dailyfishE1.webp'
// import dailyfishE2 from './DailyFishDelightImages/dailyfishE2.webp'
// import dailyfishE3 from './DailyFishDelightImages/dailyfishE3.webp'
// import dailyfishE4 from './DailyFishDelightImages/dailyfishE4.webp'
// import dailyfishF1 from './DailyFishDelightImages/dailyfishF1.webp'
// import dailyfishF2 from './DailyFishDelightImages/dailyfishF2.webp'
// import dailyfishF3 from './DailyFishDelightImages/dailyfishF3.webp'
// import dailyfishF4 from './DailyFishDelightImages/dailyfishF4.webp'
// import DailyFishDelight from './DailyFishDelight'
// function DailyFishFries() {

//   return (
//     <>
//       <DailyFishDelight/>
      
//       <div className="container">
//         <div className="row dailyfishhead ms-5  d-flex">

//           {/* Col 1*/}
//        <div className="col-4 dailyfishhead1 mb-5">
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
//           <img src={dailyfishA1} className=" dailyfishimgA  rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishA2} className=" dailyfishimgA  rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishA3} className=" dailyfishimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishA4} className="  dailyfishimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyfish-text">Sankara Meen - Pink Perch Medium</h5>
// {/* <p className="dailyfish-text1">Juicy &amp; meaty snack for your kiddos' evening cravings</p> */}
//       <div className="dailyfish_weight">
//         <div className="dailyfish-pieces">250 g</div><div class="dailyfish_pieces2"> | 12Pieces </div>   <div className="dailyfish_pieces2">| Serves3-4</div></div>
//       <p className="fw-bold "> <span className='dailyfish-price1'> ₹189 </span> <span className="text-muted text-decoration-line-through ms-2">₹210</span>   <span className="dailyfish-discount">8% off</span></p>
     
// <p className="dailyfish-time">Today 2PM - 5PM</p>
// <button className="btn ">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//    {/* Col 2 */}

//        <div className="col-4 dailyfishhead1">
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
//           <img src={dailyfishB1} className="dailyfishimgA  rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishB2} className="dailyfishimgA  rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishB3} className="dailyfishimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishB4} className="dailyfishimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyfish-text">Vanjaram - Seer - Thin Slices</h5>
//       {/* <p className="dailyfish-text1">Build your own meaty, juicy treat for a mid meal snack</p> */}
//       <div class="dailyfish_weight">
//         <div class="dailyfish-pieces">1 Piece </div><div class="dailyfish_pieces2"> | piece</div></div>
//       <p className="fw-bold ">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfish-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// {/* col3 */}
// <div className="col-4 dailyfishhead1">
//   <div className="card shadow rounded-4">
//     <div id="carousel3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
//                 <button type="button" data-bs-target="#carousel3" data-bs-slide-to="3" aria-label="Slide 4"></button>
//         </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailyfishC1} className="dailyfishimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishC2} className="dailyfishimgA rounded-top-4" alt="Slide 2" />
//         </div>
//          <div className="carousel-item active">
//           <img src={dailyfishC3} className="dailyfishimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishC4} className="dailyfishimgA rounded-top-4" alt="Slide 2" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body  ">
//       <h5 className="dailyfish-text">Kanangeluthi - Mackerel Medium </h5>
//      {/* <p className="dailyfish-text1">Pungus/Keluthi Meen/Assam Vala</p> */}
//      <div className="dailyfish_weight">
//       <div className="dailyfish_pieces2">1 piece</div><div class="dailyfish_pieces2"> |  1 Pieces </div></div>
//     <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfish-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//   {/* col4 */}
// <div className="col-4 dailyfishhead1 mb-3">
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
//           <img src={dailyfishD1} className="dailyfishimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishD2} className="dailyfishimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishD3} className="dailyfishimgA rounded-top-4" alt="Slide 3" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishD4} className="dailyfishimgA rounded-top-4" alt="Instruction" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyfish-text">Roopchand Medium - Fry Cut</h5>
//       <p className="dailyfish-text1">River Pomfret/Yeri Vaval/Pirana Avoli</p>
//       <div className="dailyfish_weight">
//         <div className="dailyfish_pieces2">2 pieces</div><div class="dailyfish_pieces2"> |  2 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfish-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// {/* Column 5 */}
//         <div className="col-4 dailyfishhead1">
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
//           <img src={dailyfishE1} className="dailyfishimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishE2} className="dailyfishimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishE3} className="dailyfishimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishE4} className="dailyfishimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body  ">
//       <h5 className="dailyfish-text">Catla (1.5kg) - Bengali Cut, No Head</h5>
//       <p className="dailyfish-text1">Theppu Meen/Kendai/ Thoppu Meen/ Kanavi/Katla</p>
//       <div className="dailyfish_weight">
//         <div className="dailyfish-pieces"></div><div class="dailyfish_pieces2"> |  8-12 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfish-time">Today 2PM - 5PM</p>
//  <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//  {/* col 6 */}
// <div className="col-4 dailyfishhead1">
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
//           <img src={dailyfishF1} className="dailyfishimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishF2} className="dailyfishimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishF3} className="dailyfishimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfishF4} className="dailyfishimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body">
//       <h5 className="dailyfish-text">Bombil - Bombay Duck Medium - Whole, Cleaned</h5>
//       {/* <p className="eveningA-text1">Crispy &amp; juicy chicken tenders - a snack time treat</p> */}
//       <span className="LargeProductCard_product_desc__ZLIB8 text_1"></span>
//     <div className="dailyfish_weight"><div class="dailyfish-pieces">200 g</div><div class="dailyfish_pieces2"> |  10-12 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfish-time">Today 2PM - 5PM</p>
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
// export default DailyFishFries;
// ===================================================================================================================================

import React from 'react';
import "./dailyfishfries.css"
 import DailyFishDelight from './DailyFishDelight'
import { useCart } from '../CartContext';

import dailyfishA1 from './DailyFishDelightImages/dailyfishA1.webp'
import dailyfishA2 from './DailyFishDelightImages/dailyfishA2.webp'
import dailyfishA3 from './DailyFishDelightImages/dailyfishA3.webp'
import dailyfishA4 from './DailyFishDelightImages/dailyfishA4.webp'
import dailyfishB1 from './DailyFishDelightImages/dailyfishB1.webp'
import dailyfishB2 from './DailyFishDelightImages/dailyfishB2.webp'
import dailyfishB3 from './DailyFishDelightImages/dailyfishB3.webp'
import dailyfishB4 from './DailyFishDelightImages/dailyfishB4.webp'
import dailyfishC1 from './DailyFishDelightImages/dailyfishC1.webp'
import dailyfishC2 from './DailyFishDelightImages/dailyfishC2.webp'
import dailyfishC3 from './DailyFishDelightImages/dailyfishC3.webp'
import dailyfishC4 from './DailyFishDelightImages/dailyfishC4.webp'
import dailyfishD1 from './DailyFishDelightImages/dailyfishD1.webp'
import dailyfishD2 from './DailyFishDelightImages/dailyfishD2.webp'
import dailyfishD3 from './DailyFishDelightImages/dailyfishD3.webp'
import dailyfishD4 from './DailyFishDelightImages/dailyfishD4.webp'
import dailyfishE1 from './DailyFishDelightImages/dailyfishE1.webp'
import dailyfishE2 from './DailyFishDelightImages/dailyfishE2.webp'
import dailyfishE3 from './DailyFishDelightImages/dailyfishE3.webp'
import dailyfishE4 from './DailyFishDelightImages/dailyfishE4.webp'
import dailyfishF1 from './DailyFishDelightImages/dailyfishF1.webp'
import dailyfishF2 from './DailyFishDelightImages/dailyfishF2.webp'
import dailyfishF3 from './DailyFishDelightImages/dailyfishF3.webp'
import dailyfishF4 from './DailyFishDelightImages/dailyfishF4.webp'
const products = [
  {
    id: "Sankara Meen - Pink Perch Medium",
    name: 'Sankara Meen - Pink Perch Medium',
    desc: "",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [dailyfishA1, 
             dailyfishA2, 
             dailyfishA3,
             dailyfishA4],
  },
  {
    id: "Vanjaram - Seer - Thin Slices",
    name: "Vanjaram - Seer - Thin Slices",
    desc: '',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfishB1, 
             dailyfishB2,
             dailyfishB3,
             dailyfishB4],
  },
  {
    id: "Kanangeluthi - Mackerel Medium ",
    name: 'Kanangeluthi - Mackerel Medium ',
    desc: "",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfishC1,
             dailyfishC2,
             dailyfishC3,
             dailyfishC4],
  },
  {
    id: "Roopchand Medium - Fry Cut",
    name: 'Roopchand Medium - Fry Cut',
    desc: "River Pomfret/Yeri Vaval/Pirana Avoli",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfishD1, 
             dailyfishD2,
             dailyfishD3,
             dailyfishD4],
  },
  {
    id: "Catla (1.5kg) - Bengali Cut, No Head",
    name: 'Catla (1.5kg) - Bengali Cut, No Head',
    desc: 'Theppu Meen/Kendai/ Thoppu Meen/ Kanavi/Katla',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfishE1,
             dailyfishE2, 
             dailyfishE3,
             dailyfishE4],
  },
  {
    id: "Bombil - Bombay Duck Medium - Whole, Cleaned",
    name: 'Bombil - Bombay Duck Medium - Whole, Cleaned',
    desc: '',
    weight: '200 g | 10-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfishF1,
             dailyfishF2, 
             dailyfishF3,
             dailyfishF4],
  },
];

function DailyFishFries() {
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

export default DailyFishFries;


