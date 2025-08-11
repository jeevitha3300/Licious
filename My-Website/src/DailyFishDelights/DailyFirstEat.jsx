// import React from 'react'
//  import "./dailyfirsteat.css"
// import dailyfirstA1 from './DailyFishDelightImages/dailyfirstA1.webp'
// import dailyfirstA2 from './DailyFishDelightImages/dailyfirstA2.webp'
// import dailyfirstA3 from './DailyFishDelightImages/dailyfirstA3.webp'
// import dailyfirstA4 from './DailyFishDelightImages/dailyfirstA4.webp'
// import dailyfirstB1 from './DailyFishDelightImages/dailyfirstB1.webp'
// import dailyfirstB2 from './DailyFishDelightImages/dailyfirstB2.webp'
// import dailyfirstB3 from './DailyFishDelightImages/dailyfirstB3.webp'
// import dailyfirstB4 from './DailyFishDelightImages/dailyfirstB4.webp'
// import dailyfirstC1 from './DailyFishDelightImages/dailyfirstC1.webp'
// import dailyfirstC2 from './DailyFishDelightImages/dailyfirstC2.webp'
// import dailyfirstC3 from './DailyFishDelightImages/dailyfirstC3.webp'
// import dailyfirstC4 from './DailyFishDelightImages/dailyfirstC4.webp'
// import dailyfirstD1 from './DailyFishDelightImages/dailyfirstD1.webp'
// import dailyfirstD2 from './DailyFishDelightImages/dailyfirstD2.webp'
// import dailyfirstD3 from './DailyFishDelightImages/dailyfirstD3.webp'
// import dailyfirstD4 from './DailyFishDelightImages/dailyfirstD4.webp'
// import dailyfirstE1 from './DailyFishDelightImages/dailyfirstE1.webp'
// import dailyfirstE2 from './DailyFishDelightImages/dailyfirstE2.webp'

// import DailyFishDelight from './DailyFishDelight'
// function DailyFirstEat() {

//   return (
//     <>
//       <DailyFishDelight/>
      
//       <div className="container">
//         <div className="row dailyfirsthead ms-5  d-flex">

//           {/* Col 1*/}
//        <div className="col-4 dailyfirsthead1 mb-5">
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
//           <img src={dailyfirstA1} className=" dailyfirstimgA  rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstA2} className=" dailyfirstimgA  rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstA3} className=" dailyfirstimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstA4} className="  dailyfirstimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyfirst-text">Kanava - Squid - Rings</h5>
// {/* <p className="dailyfish-text1">Juicy &amp; meaty snack for your kiddos' evening cravings</p> */}
//       <div className="dailyfirst_weight">
//         <div className="dailyfirst-pieces">250 g</div><div className="dailyfirst_pieces2"> | 12Pieces </div>   <div className="dailyfirst_pieces2">| Serves3-4</div></div>
//       <p className="fw-bold "> <span className='dailyfirst-price1'> ₹189 </span> <span className="text-muted text-decoration-line-through ms-2">₹210</span>   <span className="dailyfirst-discount">8% off</span></p>
     
// <p className="dailyfirst-time">Today 2PM - 5PM</p>
// <button className="btn ">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//    {/* Col 2 */}

//        <div className="col-4 dailyfirsthead1">
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
//           <img src={dailyfirstB1} className="dailyfirstimgA  rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstB2} className="dailyfirstimgA  rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstB3} className="dailyfirstimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstB4} className="dailyfirstimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyfirst-text">Iraal - Sea White Prawns (Medium Sized)</h5>
//       {/* <p className="dailyfish-text1">Build your own meaty, juicy treat for a mid meal snack</p> */}
//       <div className="dailyfirst_weight">
//         <div className="dailyfirst-pieces">1 Piece </div><div className="dailyfirst_pieces2"> | piece</div></div>
//       <p className="fw-bold ">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfirst-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// {/* col3 */}
// <div className="col-4 dailyfirsthead1">
//   <div className="card shadow rounded-4">
//     <div id="carousel3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
//          <button type="button" data-bs-target="#carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
//           <button type="button" data-bs-target="#carousel3" data-bs-slide-to="3" aria-label="Slide 4"></button>
//         </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailyfirstC1} className="dailyfirstimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstC2} className="dailyfirstimgA rounded-top-4" alt="Slide 2" />
//         </div>
//          <div className="carousel-item active">
//           <img src={dailyfirstC3} className="dailyfirstimgA rounded-top-4" alt="Slide 3" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstC4} className="dailyfirstimgA rounded-top-4" alt="Slide " />
//         </div>
//       </div>
//     </div>
//     <div className="card-body  ">
//       <h5 className="dailyfirst-text">Vatta - Trevally Large - Steaks</h5>
//      {/* <p className="dailyfish-text1">Pungus/Keluthi Meen/Assam Vala</p> */}
//      <div className="dailyfirst_weight">
//       <div className="dailyfirst_pieces2">1 piece</div><div className="dailyfirst_pieces2"> |  1 Pieces </div></div>
//     <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfirst-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//   {/* col4 */}
// <div className="col-4 dailyfirsthead1 mb-3">
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
//           <img src={dailyfirstD1} className="dailyfirstimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstD2} className="dailyfirstimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstD3} className="dailyfirstimgA rounded-top-4" alt="Slide 3" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstD4} className="dailyfirstimgA rounded-top-4" alt="Instruction" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyfirst-text">Vatta - Trevally Medium - Steaks</h5>
//       {/* <p className="dailyfish-text1">River Pomfret/Yeri Vaval/Pirana Avoli</p> */}
//       <div className="dailyfirst_weight">
//         <div className="dailyfirst_pieces2">2 pieces</div><div className="dailyfirst_pieces2"> |  2 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfirst-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// {/* Column 5 */}
//         <div className="col-4 dailyfirsthead1">
//   <div className="card shadow rounded-4">
//     <div id="carousel5" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel5" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel5" data-bs-slide-to="1" aria-label="Slide 2"></button>
//       </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailyfirstE1} className="dailyfirstimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyfirstE2} className="dailyfirstimgA rounded-top-4" alt="Slide 2" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body  ">
//       <h5 className="dailyfirst-text">Mullan - Silver Biddy Small Whole Cleaned</h5>
//       {/* <p className="dailyfish-text1">Theppu Meen/Kendai/ Thoppu Meen/ Kanavi/Katla</p> */}
//       <div className="dailyfirst_weight">
//         <div className="dailyfirst-pieces"></div><div className="dailyfirst_pieces2"> |  8-12 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyfirst-time">Today 2PM - 5PM</p>
//  <button className="btn">
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
// export default DailyFirstEat;
// ====================================================================================================================================

import React from 'react';
import "./dailyfirsteat.css"
import DailyFishDelight from './DailyFishDelight'
import { useCart } from '../CartContext';

import dailyfirstA1 from './DailyFishDelightImages/dailyfirstA1.webp'
import dailyfirstA2 from './DailyFishDelightImages/dailyfirstA2.webp'
import dailyfirstA3 from './DailyFishDelightImages/dailyfirstA3.webp'
import dailyfirstA4 from './DailyFishDelightImages/dailyfirstA4.webp'
import dailyfirstB1 from './DailyFishDelightImages/dailyfirstB1.webp'
import dailyfirstB2 from './DailyFishDelightImages/dailyfirstB2.webp'
import dailyfirstB3 from './DailyFishDelightImages/dailyfirstB3.webp'
import dailyfirstB4 from './DailyFishDelightImages/dailyfirstB4.webp'
import dailyfirstC1 from './DailyFishDelightImages/dailyfirstC1.webp'
import dailyfirstC2 from './DailyFishDelightImages/dailyfirstC2.webp'
import dailyfirstC3 from './DailyFishDelightImages/dailyfirstC3.webp'
import dailyfirstC4 from './DailyFishDelightImages/dailyfirstC4.webp'
import dailyfirstD1 from './DailyFishDelightImages/dailyfirstD1.webp'
import dailyfirstD2 from './DailyFishDelightImages/dailyfirstD2.webp'
import dailyfirstD3 from './DailyFishDelightImages/dailyfirstD3.webp'
import dailyfirstD4 from './DailyFishDelightImages/dailyfirstD4.webp'
import dailyfirstE1 from './DailyFishDelightImages/dailyfirstE1.webp'
import dailyfirstE2 from './DailyFishDelightImages/dailyfirstE2.webp'
const products = [
  {
    id: "Kanava - Squid - Rings",
    name: 'Kanava - Squid - Rings',
    desc: "",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [dailyfirstA1, 
             dailyfirstA2, 
             dailyfirstA3,
             dailyfirstA4],
  },
  {
    id: "Iraal - Sea White Prawns (Medium Sized) ",
    name: "Iraal - Sea White Prawns (Medium Sized)",
    desc: '',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfirstB1, 
             dailyfirstB2,
             dailyfirstB3,
             dailyfirstB4],
  },
  {
    id: "Vatta - Trevally Large - Steaks",
    name: 'Vatta - Trevally Large - Steaks',
    desc: "",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfirstC1,
             dailyfirstC2,
             dailyfirstC3,
             dailyfirstC4 ],
  },
  {
    id: "Vatta - Trevally Medium - Steaks",
    name: 'Vatta - Trevally Medium - Steaks',
    desc: "",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfirstD1, 
             dailyfirstD2,
             dailyfirstD3,
             dailyfirstD4],
  },
  {
    id: "Mullan - Silver Biddy Small Whole Cleaned",
    name: 'Mullan - Silver Biddy Small Whole Cleaned',
    desc: '',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyfirstE1,
             dailyfirstE2, 
             ],
  },
];

function DailyCurries() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <DailyFishDelight/>
      <div className="container">
        <div className="row dailyfirsthead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 dailyfirsthead1 mb-4" key={product.id}>
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
                          <img src={img} className="dailyfirstimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="dailyfirst-text">{product.name}</h5>
                    <p className="dailyfirst-text1">{product.desc}</p>
                    <div className="dailyfirst_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="dailyfirst-discount">{product.discount}</span>}
                    </p>
                    <p className="dailyfirst-time">{product.time}</p>

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


