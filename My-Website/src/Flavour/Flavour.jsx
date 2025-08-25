
// import React, { useRef, useState } from "react";
// import "./flavour.css";
// import fav1 from './FlavourImages/fav1.webp';
// import fav2 from './FlavourImages/fav2.webp';
// import fav3 from './FlavourImages/fav3.webp';
// import fav4 from './FlavourImages/fav4.webp';
// import fav5 from './FlavourImages/fav5.webp';
// import { useCart } from '../CartContext'; 
// import { useNavigate } from 'react-router-dom';
// import CartPopUp from '../CartPopUp';

// const products = [
//   {
//     id: 1,
//     name: "Crispy Chicken Nuggets",
//     gram: 250,
//     pieces: "12 Pieces",
//     serves: "Serves 3-4",
//     price: 210,
//     offerPrice: 189,
//     discount: "10% off",
//     timing: "Today 2PM - 5PM",
//     image: fav1,
//     available: true,
//   },
//   {
//     id: 2,
//     name: "Afghani Murgh Seekh Kebab",
//     pieces: "4 Pieces",
//     price: 279,
//     offerPrice: 257,
//     discount: "8% off",
//     timing: "Today 2PM - 5PM",
//     image: fav2,
//     available: true,
//   },
//   {
//     id: 3,
//     name: "Chicken Seekh Kebab",
//     pieces: "4 Pieces",
//     price: 199,
//     offerPrice: 189,
//     discount: "5% off",
//     timing: "Today 2PM - 5PM",
//     image: fav3,
//     available: true,
//   },
//   {
//     id: 4,
//     name: "Chicken Tangdi Kebab",
//     pieces: "3 Pieces",
//     price: 319,
//     offerPrice: 271,
//     discount: "15% off",
//     timing: "Out of stock",
//     image: fav4,
//     available: true,
//   },
//   {
//     id: 5,
//     name: "Peppery Chicken Salami",
//     gram: 200,
//     pieces: "10-14 Pieces",
//     price: 325,
//     offerPrice: 309,
//     discount: "5% off",
//     timing: "Out of stock",
//     image: fav5,
//     available: true,
//   },
// ];

// const Flavour = () => {
//   const scrollRef = useRef(null);
//   const cardRef = useRef(null);
//   const { addToCart, removeFromCart, cartItems, getTotalQuantity } = useCart();
//   const [showPopup, setShowPopup] = useState(false);
//   const [addedProduct, setAddedProduct] = useState(null);
//   const navigate = useNavigate();

//   const scroll = (direction) => {
//     if (scrollRef.current && cardRef.current) {
//       const cardWidth = cardRef.current.offsetWidth + 20;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -cardWidth * 3 : cardWidth * 3,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleIncrement = (product) => {
//     const updatedProduct = {
//       id: product.id,
//       name: product.name,
//       price: product.offerPrice,
//       offerPrice: product.offerPrice,
//       image: product.image,
//     };
//     addToCart(updatedProduct);
//     setAddedProduct(updatedProduct);
//     setShowPopup(true);
//   };

//   const handleDecrement = (product) => {
//     removeFromCart(product.id);
//   };

//   const subtotal = Object.values(cartItems).reduce(
//     (sum, item) => sum + item.offerPrice * item.quantity,
//     0
//   );

//   const handleFlavourAll = () => {
//     navigate('/FlavourAll');
//   };

//   return (
//     <>
//       <CartPopUp
//         show={showPopup}
//         product={addedProduct}
//         subtotal={subtotal}
//         itemCount={getTotalQuantity()}
//         onClose={() => setShowPopup(false)}
//         onCheckout={() => {
//           setShowPopup(false);
//           navigate('/checkout');
//         }}
//         onViewCart={() => {
//           setShowPopup(false);
//           navigate('/cart');
//         }}
//       />

//       <div className="container Flavourhead mt-3 position-relative">
//         <h2 className="textf1">Meals in Minutes</h2>
//         <p className="textf2">Juicy bites, Ready in no time!</p>

//         <button className="arrow arrowleft outside-left" onClick={() => scroll("left")}>
//           ‹
//         </button>

//         <div className="carousel-wrapper">
//           <div className="Flavour-slider" ref={scrollRef}>
//             {products.map((product, index) => {
//               const cartItem = cartItems[product.id];
//               const quantity = cartItem?.quantity || 0;

//               return (
//                 <div
//                   className="Flavour-card"
//                   key={product.id}
//                   ref={index === 0 ? cardRef : null}
//                 >
//                   <div className="image-wrapper">
//                     <img className="fav1" src={product.image} alt={product.name} />

//                     {product.available ? (
//                       quantity > 0 ? (
//                         <div className="quantityControl">
//                           <button className="quantityControlbutton" onClick={() => handleDecrement(product)}>-</button>
//                           <span>{quantity}</span>
//                           <button className="quantityControlbutton" onClick={() => handleIncrement(product)}>+</button>
//                         </div>
//                       ) : (
//                         <button
//                           className="add-btn"
//                           title="Add to cart"
//                           onClick={() => handleIncrement(product)}
//                         >
//                           +
//                         </button>
//                       )
//                     ) : (
//                       <span className="out-of-stock-label">Out of Stock</span>
//                     )}
//                   </div>

//                   <h4 className="textf3">{product.name}</h4>
//                   <p className="Flavour-meta">
//                     {product.gram && <span>{product.gram}g</span>}
//                     {product.pieces && (
//                       <>
//                         {product.gram && " | "}
//                         <span>{product.pieces}</span>
//                       </>
//                     )}
//                     {product.serves && <> | <span>{product.serves}</span></>}
//                   </p>
//                   <div className="price-info">
//                     <span className="offer-price">₹{product.offerPrice}</span>
//                     <span className="original-price">₹{product.price}</span>
//                     <span className="discount">{product.discount}</span>
//                   </div>
//                   <p className={`timing ${!product.available ? "out-of-stock" : ""}`}>
//                     {product.available ? product.timing : "Out of stock"}
//                   </p>
//                 </div>
//               );
//             })}

//             <div className="Flavour-card view-all-card" onClick={handleFlavourAll}>
//               <p className="view-all-text">View All</p>
//             </div>
//           </div>
//         </div>

//         <button className="arrow arrowright outside-right" onClick={() => scroll("right")}>
//           ›
//         </button>
//       </div>
//     </>
//   );
// };

// export default Flavour;





import React, { useEffect, useRef, useState } from "react";
import "./flavour.css";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import CartPopUp from "../CartPopUp";

const Flavour = () => {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);
  const { addToCart, removeFromCart, cartItems, getTotalQuantity } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //Fetch flavour data from backend
  useEffect(() => {
    const fetchFlavours = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/flavours");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch flavours:", err);
      }
    };
    fetchFlavours();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 20;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth * 3 : cardWidth * 3,
        behavior: "smooth",
      });
    }
  };

  const handleIncrement = (product) => {
    const updatedProduct = {
      id: product.id,
      name: product.name,
      price: product.offerPrice,
      offerPrice: product.offerPrice,
      image: product.images?.[0] || "", // Use first image
    };
    addToCart(updatedProduct);
    setAddedProduct(updatedProduct);
    setShowPopup(true);
  };

  const handleDecrement = (product) => {
    removeFromCart(product.id);
  };

  const subtotal = Object.values(cartItems).reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );

  const handleFlavourAll = () => {
    navigate("/FlavourAll");
  };

  return (
    <>
      <CartPopUp
        show={showPopup}
        product={addedProduct}
        subtotal={subtotal}
        itemCount={getTotalQuantity()}
        onClose={() => setShowPopup(false)}
        onCheckout={() => {
          setShowPopup(false);
          navigate("/checkout");
        }}
        onViewCart={() => {
          setShowPopup(false);
          navigate("/cart");
        }}
      />

      <div className="container Flavourhead mt-3 position-relative">
        <h2 className="textf1">Meals in Minutes</h2>
        <p className="textf2">Juicy bites, Ready in no time!</p>

        <button className="arrow arrowleft outside-left" onClick={() => scroll("left")}>
         <span >‹</span> 
        </button>

        <div className="carousel-wrapper">
          <div className="Flavour-slider" ref={scrollRef}>
            {/* {products.map((product, index) => { */}
              {products.slice(0, 5).map((product, index) => {
              const cartItem = cartItems[product.id];
              const quantity = cartItem?.quantity || 0;
              const available = product.time?.toLowerCase() !== "out of stock";

              return (
                <div
                  className="Flavour-card"
                  key={product.id}
                  ref={index === 0 ? cardRef : null}
                >
                  <div className="image-wrapper">
                    <img
                      className="fav1"
                      src={product.images?.[0] || ""}
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = "/placeholder.png"; // fallback image
                      }}
                    />

                    {available ? (
                      quantity > 0 ? (
                        <div className="quantityControl-flavor">
                          <button
                            className="quantityControlbutton"
                            onClick={() => handleDecrement(product)}
                          >
                            -
                          </button>
                          <span>{quantity}</span>
                          <button
                            className="quantityControlbutton"
                            onClick={() => handleIncrement(product)}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="add-btn"
                          title="Add to cart"
                          onClick={() => handleIncrement(product)}
                        >
                          +
                        </button>
                      )
                    ) : (
                      <span className="out-of-stock-label">Out of Stock</span>
                    )}
                  </div>

                  <h4 className="textf3">{product.name}</h4>
                  <p className="Flavour-meta">
                    {/* {product.desc && <span> | {product.desc}</span>} */}
                    {product.weight && <span>{product.weight}</span>}
                  </p>
                  <div className="price-info">
                    <span className="offer-price">₹{product.offerPrice}</span>
                    <span className="original-price">₹{product.price}</span>
                    {product.discount && <span className="discount">{product.discount}</span>}
                  </div>
                  <p className={`timing ${!available ? "out-of-stock" : ""}`}>
                    {available ? product.time : "Out of stock"}
                  </p>
                </div>
              );
            })}

            <div className="Flavour-card view-all-card" onClick={handleFlavourAll}>
              <p className="view-all-text">View All</p>
            </div>
          </div>
        </div>

        <button className="arrow arrowright outside-right" onClick={() => scroll("right")}>
       <span > ›</span>   
        </button>
      </div>
    </>
  );
};

export default Flavour;
