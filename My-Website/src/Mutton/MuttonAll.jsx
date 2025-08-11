import React from 'react';
import "./muttonall.css"
import { useCart } from '../CartContext';
import muttoncurryA1 from './MuttonImages/muttoncurryA1.webp'
import muttoncurryA2 from './MuttonImages/muttoncurryA2.webp'
import muttoncurryA3 from './MuttonImages/muttoncurryA3.webp'
import muttoncurryB1 from './MuttonImages/muttoncurryB1.webp'
import muttoncurryB2 from './MuttonImages/muttoncurryB2.webp'
import muttoncurryB3 from './MuttonImages/muttoncurryB3.webp'
import muttoncurryC1 from './MuttonImages/muttoncurryC1.webp'
import muttoncurryC2 from './MuttonImages/muttoncurryC2.webp'
import muttoncurryC3 from './MuttonImages/muttoncurryC3.webp'
import muttoncurryD1 from './MuttonImages/muttoncurryD1.webp'
import muttoncurryD2 from './MuttonImages/muttoncurryD2.webp'
import muttoncurryD3 from './MuttonImages/muttoncurryD3.webp'
import muttonboneA1 from './MuttonImages/muttonboneA1.webp'
import muttonboneA2 from './MuttonImages/muttonboneA2.webp'
import muttonboneA3 from './MuttonImages/muttonboneA3.webp'
import muttonboneB1 from './MuttonImages/muttonboneB1.webp'
import muttonboneB2 from './MuttonImages/muttonboneB2.webp'
import muttonboneB3 from './MuttonImages/muttonboneB3.webp'
import muttonboneC1 from './MuttonImages/muttonboneC1.webp'
import muttonboneC2 from './MuttonImages/muttonboneC2.webp'
import muttonboneC3 from './MuttonImages/muttonboneC3.webp'
import muttonspecialityA1 from './MuttonImages/muttonspecialityA1.webp'
import muttonspecialityA2 from './MuttonImages/muttonspecialityA2.webp'
import muttonspecialityA3 from './MuttonImages/muttonspecialityA3.webp'
import muttonspecialityB1 from './MuttonImages/muttonspecialityB1.webp'
import muttonspecialityB2 from './MuttonImages/muttonspecialityB2.webp'
import muttonspecialityB3 from './MuttonImages/muttonspecialityB3.webp'
import muttonspecialityC1 from './MuttonImages/muttonspecialityC1.webp'
import muttonspecialityC2 from './MuttonImages/muttonspecialityC2.webp'
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
    id: "Goat Curry Cut",
    name: 'Goat Curry Cut',
    desc: "perfect balance of fat & meat,make rich curries",
    weight: '500g|13-17 Pieces | Serves 4',
    price: 675,
    offerPrice: 473,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttoncurryA1, 
             muttoncurryA2, 
             muttoncurryA3],
  },
  {
    id: "Premium Lamb (Mutton)-curry cut",
    name: "Premium Lamb (Mutton)-curry cut",
    desc: 'perfect balance of fat & meat for making rich curries',
    weight: '500g|10-13 Piece | serves 2-3',
    price: 675,
    offerPrice: 506,
    discount: '25% off',
    time: 'Today 2PM - 5PM',
    images: [muttoncurryB1, 
             muttoncurryB2,
             muttoncurryB3],
  },
  {
    id: "Goat Curry Cut/Kuzhambu Cut",
    name: 'Goat Curry Cut/Kuzhambu Cut',
    desc: "perfect balance of fat & meat for delicious curries",
    weight: ' 500g|16-20 Pieces |serves 2-4',
    price:675,
    offerPrice:605,
    discount: '10% off',
    time: 'Today 2PM - 5PM',
    images: [muttoncurryC1,
             muttoncurryC2, 
             muttoncurryC3]
  },
  {
    id: "Premium Goat Shoulder Curry Cut",
    name: 'Premium Goat Shoulder Curry Cut',
    desc: "The meatiest cut for fall off the bone Mutton curries",
    weight: '500g|9-12 pieces|serves 4',
    price:900,
    offerPrice:815 ,
    discount: '40% off',
    time: 'Today 2PM - 5PM',
    images: [muttoncurryD1,
             muttoncurryD2,
             muttoncurryD3
    ],
  },
    {
      id: "Pure Goat Mince(mini pack)",
      name: 'Pure Goat Mince(mini pack)',
      desc: "Finely ground goat mince for curries,kebabs & more",
      weight: '225g| Serves 1-2',
      price: 329,
      offerPrice: 246,
      discount: '25% off',
      time: 'Today 2PM - 5PM',
      images: [muttonboneA1, 
               muttonboneA2, 
               muttonboneA3],
    },
    {
      id: "Goat Boneless(mini-pack)",
      name: "Goat Boneless(mini-pack)",
      desc: 'Bbite-sized fat-trimmed cuts for pan-fried delicacies',
      weight: '250g|7-9 Piece | serves 2-3',
      price:410,
      offerPrice: 399,
      discount: '10% off',
      time: 'Today 2PM - 5PM',
      images: [muttonboneB1, 
               muttonboneB2,
               muttonboneB3],
    },
    {
      id: "Goat Boneless",
      name: 'Goat Boneless',
      desc: "Bite-sized fat-trimmed cuts for pan-fried delicacies",
      weight: ' 500g|14-16 Pieces |serves 4',
      price:675,
      offerPrice:605,
      discount: '10% off',
      time: 'Today 2PM - 5PM',
      images: [muttonboneC1,
               muttonboneC2, 
               muttonboneC3]
    },
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

function MuttonAll() {
  const { addToCart, removeFromCart, cartItems } = useCart();

  return (
    <>
       <Mutton/>
      <div className="container">
        <div className="row muttonallhead  d-flex">
          {products.map((product, index) => {
            const quantity = cartItems[product.id]?.quantity || 0;

            return (
              <div className="col-4 muttonallhead1 mb-4" key={product.id}>
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
                          <img src={img} className="muttonallimgA rounded-top-4" alt={`Slide ${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="muttonall-text">{product.name}</h5>
                    <p className="muttonall-text1">{product.desc}</p>
                    <div className="muttonall_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">₹{product.price}</span>{' '}
                      {product.discount && <span className="muttonall-discount">{product.discount}</span>}
                    </p>
                    <p className="muttonall-time">{product.time}</p>

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

export default MuttonAll;

