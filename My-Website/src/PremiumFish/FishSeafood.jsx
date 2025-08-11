import React, { useEffect, useRef, useState } from "react";
import "./fishseafood.css";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import CartPopUp from "../CartPopUp";

const FishSeafood = () => {
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
        const res = await fetch("http://localhost:5000/api/premiumfood");
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

  const handleFishSeafoodAll = () => {
    navigate("/FishSeafoodAll");
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

      <div className="container premiumhead mt-3 position-relative">
        <h2 className="textf1">Premium fish & seafood selection</h2>
        <p className="textf2">Same-day catch: fresh & flavourful</p>

        <button className="arrow arrowleft outside-left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="carousel-wrapper">
          <div className="premium-slider" ref={scrollRef}>
            {/* {products.map((product, index) => { */}
              {products.slice(0, 5).map((product, index) => {
              const cartItem = cartItems[product.id];
              const quantity = cartItem?.quantity || 0;
              const available = product.time?.toLowerCase() !== "out of stock";

              return (
                <div
                  className="premium-card"
                  key={product.id}
                  ref={index === 0 ? cardRef : null}
                >
                  <div className="image-wrapper">
                    <img
                      className="premium1"
                      src={product.images?.[0] || ""}
                      alt={product.name}
                      onError={(e) => {
                        e.target.src = "/placeholder.png"; 
                      }}
                    />

                    {available ? (
                      quantity > 0 ? (
                        <div className="quantityControl-premium">
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

                  <h4 className="premiumtextf3">{product.name}</h4>
                  <p className="premium-meta">
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

            <div className="premium-card view-all-card" onClick={handleFishSeafoodAll}>
              <p className="view-all-text">View All</p>
            </div>
          </div>
        </div>

        <button className="arrow arrowright outside-right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </>
  );
};

export default FishSeafood;
