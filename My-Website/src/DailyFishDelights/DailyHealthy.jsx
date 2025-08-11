// import React from 'react'
//  import "./dailyhealthy.css"
// import dailyhealthyA1 from './DailyFishDelightImages/dailyhealthyA1.webp'
// import dailyhealthyA2 from './DailyFishDelightImages/dailyhealthyA2.webp'
// import dailyhealthyA3 from './DailyFishDelightImages/dailyhealthyA3.webp'
// import dailyhealthyA4 from './DailyFishDelightImages/dailyhealthyA4.webp'
// import dailyhealthyB1 from './DailyFishDelightImages/dailyhealthyB1.webp'
// import dailyhealthyB2 from './DailyFishDelightImages/dailyhealthyB2.webp'
// import dailyhealthyB3 from './DailyFishDelightImages/dailyhealthyB3.webp'
// import dailyhealthyB4 from './DailyFishDelightImages/dailyhealthyB4.webp'
// import dailyhealthyC1 from './DailyFishDelightImages/dailyhealthyC1.webp'
// import dailyhealthyC2 from './DailyFishDelightImages/dailyhealthyC2.webp'
// import dailyhealthyC3 from './DailyFishDelightImages/dailyhealthyC3.webp'
// import dailyhealthyD1 from './DailyFishDelightImages/dailyhealthyD1.webp'
// import dailyhealthyD2 from './DailyFishDelightImages/dailyhealthyD2.webp'
// import dailyhealthyD3 from './DailyFishDelightImages/dailyhealthyD3.webp'
// import dailyhealthyD4 from './DailyFishDelightImages/dailyhealthyD4.webp'
// import dailyhealthyE1 from './DailyFishDelightImages/dailyhealthyE1.webp'
// import dailyhealthyE2 from './DailyFishDelightImages/dailyhealthyE2.webp'
// import dailyhealthyE3 from './DailyFishDelightImages/dailyhealthyE3.webp'
// import dailyhealthyE4 from './DailyFishDelightImages/dailyhealthyE4.webp'
// import dailyhealthyF1 from './DailyFishDelightImages/dailyhealthyF1.webp'
// import dailyhealthyF2 from './DailyFishDelightImages/dailyhealthyF2.webp'
// import dailyhealthyF3 from './DailyFishDelightImages/dailyhealthyF3.webp'
// import dailyhealthyF4 from './DailyFishDelightImages/dailyhealthyF4.webp'
// import DailyFishDelight from './DailyFishDelight'
// function DailyHealthy() {

//   return (
//     <>
//       <DailyFishDelight/>
      
//       <div className="container">
//         <div className="row dailyhealthyhead ms-5  d-flex">

//           {/* Col 1*/}
//        <div className="col-4 dailyhealthyhead1 mb-5">
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
//           <img src={dailyhealthyA1} className=" dailyhealthyimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyA2} className=" dailyhealthyimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyA3} className=" dailyhealthyimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyA4} className="  dailyhealthyimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyhealthy-text">Tuna (Yellowfin) - Boneless Cubes</h5>
// <p className="dailyhealthy-text1">Kedar/Keerai/Poovan Choora</p>
//       <div class="dailyhealthy_weight">
//         <div class="dailyhealthy-pieces">250 g</div><div class="dailyhealthy_pieces2"> | 12Pieces </div>   <div className="dailyhealthy_pieces2">| Serves3-4</div></div>
//       <p className="fw-bold "> <span className='dailyhealthy-price1'> ₹189 </span> <span className="text-muted text-decoration-line-through ms-2">₹210</span>   <span className="dailyhealthy-discount">8% off</span></p>
     
// <p className="dailyhealthy-time">Today 2PM - 5PM</p>
// <button className="btn ">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//    {/* Col 2 */}

//        <div className="col-4 dailyhealthyhead1">
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
//           <img src={dailyhealthyB1} className="dailyhealthyimgA  rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyB2} className="dailyhealthyimgA  rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyB3} className="dailyhealthyimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyB4} className="dailyhealthyimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyhealthy-text">Nethili - Anchovy Medium - Whole, Cleaned</h5>
//       {/* <p className="eveningA-text1">Build your own meaty, juicy treat for a mid meal snack</p> */}
//       <div class="dailyhealthy_weight">
//         <div class="dailyhealthy-pieces">1 Piece </div><div class="dailyhealthy_pieces2"> | piece</div></div>
//       <p className="fw-bold ">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyhealthy-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// {/* col3 */}
// <div className="col-4 dailyhealthyhead1">
//   <div className="card shadow rounded-4">
//     <div id="carousel3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
//       <div className="carousel-indicators">
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
//         <button type="button" data-bs-target="#carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
//         </div>
//       <div className="carousel-inner rounded-top-4">
//         <div className="carousel-item active">
//           <img src={dailyhealthyC1} className="dailyhealthyimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyC2} className="dailyhealthyimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item active">
//           <img src={dailyhealthyC3} className="dailyhealthyimgA rounded-top-4" alt="Slide 3" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body  ">
//       <h5 className="dailyhealthy-text">Vellai Kendai - White Perch Extra Small Whole Cleaned</h5>
//      {/* <p className="dailycurries-text1">Pungus/Keluthi Meen/Assam Vala</p> */}
//      <div class="dailyhealthy_weight">
//       <div class="dailyhealthy_pieces2">1 piece</div><div class="dailyhealthy_pieces2"> |  1 Pieces </div></div>
//     <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyhealthy-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//   {/* col4 */}
// <div className="col-4 dailyhealthyhead1 mb-3">
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
//           <img src={dailyhealthyD1} className="dailyhealthyimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyD2} className="dailyhealthyimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyD3} className="dailyhealthyimgA rounded-top-4" alt="Slide 3" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyD4} className="dailyhealthyimgA rounded-top-4" alt="Instruction" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body ">
//       <h5 className="dailyhealthy-text">Iraal - Sea White Prawns (Large Sized)</h5>
// {/* <p className="dailycurries-text1">Jalebi/Jilapi/Thilopia</p> */}
//       <div class="dailyhealthy_weight">
//         <div class="dailyhealthy_pieces2">2 pieces</div><div class="dailyhealthy_pieces2"> |  2 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyhealthy-time">Today 2PM - 5PM</p>
//       <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
// {/* Column 5 */}
//         <div className="col-4 dailyhealthyhead1">
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
//           <img src={dailyhealthyE1} className="dailyhealthyimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyE2} className="dailyhealthyimgA rounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyE3} className="dailyhealthyimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyE4} className="dailyhealthyimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body  ">
//       <h5 className="dailyhealthy-text">Vanjaram - Seer - Boneless Cubes</h5>
//       {/* <p className="dailycurries-text1">Kannadi kendai/Reba/Rui</p> */}
//       <div class="dailyhealthy_weight">
//         <div class="dailyhealthy-pieces"></div><div class="dailyhealthy_pieces2"> |  8-12 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyhealthy-time">Today 2PM - 5PM</p>
//  <button className="btn">
//   Add +<i className="bi bi-plus-lg ms-1"></i>
// </button>
//     </div>
//   </div>
// </div>
//  {/* col 6 */}
// <div className="col-4 dailyhealthyhead1">
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
//           <img src={dailyhealthyF1} className="dailyhealthyimgA rounded-top-4" alt="Slide 1" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyF2} className="dailyhealthyimgArounded-top-4" alt="Slide 2" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyF3} className="dailyhealthyimgA rounded-top-4" alt="Instruction" />
//         </div>
//         <div className="carousel-item">
//           <img src={dailyhealthyF4} className="dailyhealthyimgA rounded-top-4" alt="Info" />
//         </div>
//       </div>
//     </div>
//     <div className="card-body">
//       <h5 className="dailyhealthy-text">Ayilai Meen - Mahi Mahi - Boneless Cubes</h5>
//       {/* <p className="eveningA-text1">Crispy &amp; juicy chicken tenders - a snack time treat</p> */}
//       <span class="LargeProductCard_product_desc__ZLIB8 text_1"></span>
//     <div class="dailyhealthy_weight"><div class="dailyhealthy-pieces">200 g</div><div class="dailyhealthy_pieces2"> |  10-12 Pieces </div></div>
//       <p className="fw-bold text-success">
//         ₹189 <span className="text-muted text-decoration-line-through ms-2">₹210</span>
//       </p>
//       <p className="dailyhealthy-time">Today 2PM - 5PM</p>
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
// export default DailyHealthy;
// ============================================================================================================================================
import React from 'react';
 import "./dailyhealthy.css"
import DailyFishDelight from './DailyFishDelight'
import { useCart } from '../CartContext';

import dailyhealthyA1 from './DailyFishDelightImages/dailyhealthyA1.webp'
import dailyhealthyA2 from './DailyFishDelightImages/dailyhealthyA2.webp'
import dailyhealthyA3 from './DailyFishDelightImages/dailyhealthyA3.webp'
import dailyhealthyA4 from './DailyFishDelightImages/dailyhealthyA4.webp'
import dailyhealthyB1 from './DailyFishDelightImages/dailyhealthyB1.webp'
import dailyhealthyB2 from './DailyFishDelightImages/dailyhealthyB2.webp'
import dailyhealthyB3 from './DailyFishDelightImages/dailyhealthyB3.webp'
import dailyhealthyB4 from './DailyFishDelightImages/dailyhealthyB4.webp'
import dailyhealthyC1 from './DailyFishDelightImages/dailyhealthyC1.webp'
import dailyhealthyC2 from './DailyFishDelightImages/dailyhealthyC2.webp'
import dailyhealthyC3 from './DailyFishDelightImages/dailyhealthyC3.webp'
import dailyhealthyD1 from './DailyFishDelightImages/dailyhealthyD1.webp'
import dailyhealthyD2 from './DailyFishDelightImages/dailyhealthyD2.webp'
import dailyhealthyD3 from './DailyFishDelightImages/dailyhealthyD3.webp'
import dailyhealthyD4 from './DailyFishDelightImages/dailyhealthyD4.webp'
import dailyhealthyE1 from './DailyFishDelightImages/dailyhealthyE1.webp'
import dailyhealthyE2 from './DailyFishDelightImages/dailyhealthyE2.webp'
import dailyhealthyE3 from './DailyFishDelightImages/dailyhealthyE3.webp'
import dailyhealthyE4 from './DailyFishDelightImages/dailyhealthyE4.webp'
import dailyhealthyF1 from './DailyFishDelightImages/dailyhealthyF1.webp'
import dailyhealthyF2 from './DailyFishDelightImages/dailyhealthyF2.webp'
import dailyhealthyF3 from './DailyFishDelightImages/dailyhealthyF3.webp'
import dailyhealthyF4 from './DailyFishDelightImages/dailyhealthyF4.webp'
const products = [
  {
    id: "Tuna (Yellowfin) - Boneless Cubes",
    name: 'Tuna (Yellowfin) - Boneless Cubes',
    desc: "Kedar/Keerai/Poovan Choora",
    weight: '250 g | 12 Pieces | Serves 3-4',
    price: 210,
    offerPrice: 189,
    discount: '8% off',
    time: 'Today 2PM - 5PM',
    images: [dailyhealthyA1, 
             dailyhealthyA2, 
             dailyhealthyA3,
             dailyhealthyA4],
  },
  {
    id: "Nethili - Anchovy Medium - Whole, Cleaned",
    name: "Nethili - Anchovy Medium - Whole, Cleaned",
    desc: '',
    weight: '1 Piece | piece',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyhealthyB1, 
             dailyhealthyB2,
             dailyhealthyB3,
             dailyhealthyB4],
  },
  {
    id: "Vellai Kendai - White Perch Extra Small Whole Cleaned",
    name: 'Vellai Kendai - White Perch Extra Small Whole Cleaned',
    desc: "",
    weight: '1 Piece | 1 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyhealthyC1,
             dailyhealthyC2,
             dailyhealthyC3 ],
  },
  {
    id: "Iraal - Sea White Prawns (Large Sized)",
    name: 'Iraal - Sea White Prawns (Large Sized)',
    desc: "",
    weight: '2 Pieces | 2 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyhealthyD1, 
             dailyhealthyD2,
             dailyhealthyD3,
             dailyhealthyD4],
  },
  {
    id: "Vanjaram - Seer - Boneless Cubes",
    name: 'Vanjaram - Seer - Boneless Cubes',
    desc: '',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyhealthyE1,
             dailyhealthyE2, 
             dailyhealthyE3,
             dailyhealthyE4,],
  },
    {
    id: "Ayilai Meen - Mahi Mahi - Boneless Cubes",
    name: 'Ayilai Meen - Mahi Mahi - Boneless Cubes',
    desc: '',
    weight: '8-12 Pieces',
    price: 210,
    offerPrice: 189,
    discount: '',
    time: 'Today 2PM - 5PM',
    images: [dailyhealthyF1,
             dailyhealthyF2, 
             dailyhealthyF3,
             dailyhealthyF4,  ],
  },
];

function DailyHealthy() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <DailyFishDelight/>
      <div className="container">
        <div className="row dailyhealthyhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 dailyhealthyhead1 mb-4" key={product.id}>
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
                          <img src={img} className="dailyhealthyimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="dailyhealthy-text">{product.name}</h5>
                    <p className="dailyhealthy-text1">{product.desc}</p>
                    <div className="dailyhealthy_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="dailyhealthy-discount">{product.discount}</span>}
                    </p>
                    <p className="dailyhealthy-time">{product.time}</p>

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

export default DailyHealthy;


