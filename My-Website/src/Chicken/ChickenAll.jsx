import React from 'react';
import "./chickenall.css"
import { useCart } from '../CartContext';
import chickencurryA1 from './ChickenImages/chickencurryA1.webp'
import chickencurryA2 from './ChickenImages/chickencurryA2.webp'
import chickencurryA3 from './ChickenImages/chickencurryA3.webp'
import chickencurryB1 from './ChickenImages/chickencurryB1.webp'
import chickencurryB2 from './ChickenImages/chickencurryB2.webp'
import chickencurryB3 from './ChickenImages/chickencurryB3.webp'
import chickencurryC1 from './ChickenImages/chickencurryC1.webp'
import chickencurryC2 from './ChickenImages/chickencurryC2.webp'
import chickencurryC3 from './ChickenImages/chickencurryC3.webp'
import chickencurryD1 from './ChickenImages/chickencurryD1.webp'
import chickencurryD2 from './ChickenImages/chickencurryD2.webp'
import chickencurryD3 from './ChickenImages/chickencurryD3.webp'
import chickencurryE1 from './ChickenImages/chickencurryE1.webp'
import chickencurryE2 from './ChickenImages/chickencurryE2.webp'
import chickencurryE3 from './ChickenImages/chickencurryE3.webp'
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
import chickenoffalsA1 from './ChickenImages/chickenoffalsA1.webp'
import chickenoffalsA2 from './ChickenImages/chickenoffalsA2.webp'
import chickenoffalsA3 from './ChickenImages/chickenoffalsA3.webp'
import chickenoffalsB1 from './ChickenImages/chickenoffalsB1.webp'
import chickenoffalsB2 from './ChickenImages/chickenoffalsB2.webp'
import chickenoffalsB3 from './ChickenImages/chickenoffalsB3.webp'
import Chicken from './Chicken';

const products = [
  {
    id: "Chicken Curry Cut-Small pieces",
    name: 'Chicken Curry Cut-Small piece',
    desc: "Juice bone-in & boneless chicken for delectable curries",
    weight: '500g|12-18 Pieces | Serves 4',
    price: 199,
    offerPrice: 149,
    discount: '25%% off',
    time: 'Today 2PM - 5PM',
    images: [chickencurryA1, 
             chickencurryA2, 
             chickencurryA3],
  },
  {
    id: "Classic Chicken Biriyani Cut",
    name: "Classic Chicken Biriyani Cut",
    desc: '5 juice pieces for delicious biriyanis',
    weight: '5 pieces|10-13 Piece | serves 2-3',
    price: 219,
    offerPrice: 199,
    discount: '15% off',
    time: 'Today 2PM - 5PM',
    images: [chickencurryB1, 
             chickencurryB2,
             chickencurryB3],
  },
  {
    id: "Country Chicken Curry Cut",
    name: 'Country Chicken Curry Cut',
    desc: "The start of a flavour,meaty curry",
    weight: ' 550g|13-17Pieces |serves 4',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [chickencurryC1,
             chickencurryC2, 
             chickencurryC3]
  },
  {
    id: "Chicken Curry Cut-Large piesces",
    name: 'Premium Goat Shoulder Curry Cut',
    desc: "The meatiest cut for fall off the bone Mutton curries",
    weight: '500g|9-12 pieces|serves 4',
    price:900,
    offerPrice:815 ,
    discount: '40% off',
    time: 'Today 2PM - 5PM',
    images: [chickencurryD1,
             chickencurryD2,
             chickencurryD3
    ],
  },

    {
    id: "Premium Chicken Leg Curry Cut",
    name: 'Premium Chicken Leg Curry Cut',
    desc: "Juice bone-in leg pieces for delicious Curries or Biriyanis Acc",
    weight: '300g|4-6 pieces|serves 2-3',
    price:225,
    offerPrice:210,
    discount: '10% off',

    time: 'Today 2PM - 5PM',
    images: [chickencurryE1,
             chickencurryE2,
             chickencurryE3
    ],
  },
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
    },
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
      {
          id: "Chicken Liver",
          name: 'Chicken Liver',
          desc: "smooth,rich & meaty chicken Liver",
          weight: '350g|7-9pieces| Serves 2-3',
          price: 665,
          offerPrice: 622,
          discount: '6% off',
          time: 'Today 2PM - 5PM',
          images: [chickenoffalsA1, 
                   chickenoffalsA2, 
                   chickenoffalsA3],
        },
        {
          id: "Chicken Gizzard",
          name: "Chicken Gizzard",
          desc: 'Rich,savoury & full of meaty chicken flavours',
          weight: '300g|14-16 pieces| serves1-2',
          price:410,
          offerPrice: 399,
          discount: '10% off',
          time: 'Today 2PM - 5PM',
          images: [chickenoffalsB1, 
                   chickenoffalsB2,
                   chickenoffalsB3],
        },
];

function ChickenAll() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Chicken/>
      <div className="container">
        <div className="row chickenallhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 chickenallhead1 mb-4" key={product.id}>
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
                          <img src={img} className="chickenallimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="chickenall-text">{product.name}</h5>
                    <p className="chickenall-text1">{product.desc}</p>
                    <div className="chickenall_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="chickenall-discount">{product.discount}</span>}
                    </p>
                    <p className="chickenall-time">{product.time}</p>

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

export default ChickenAll;

