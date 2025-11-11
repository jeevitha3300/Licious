import React, { useEffect, useRef, useState } from "react";
import "./bestseller.css";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import CartPopUp from "../CartPopUp";

const Bestseller = () => {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);
  const { addToCart, removeFromCart, cartItems, getTotalQuantity } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChickenProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();

        // Filter only 'Chicken' category products
        const chickenProducts = data.filter(
          (p) =>
            p.enabled &&
            p.category &&
            p.category.category?.toLowerCase().includes("chicken")
        );

        setProducts(chickenProducts);
      } catch (error) {
        console.error("Error fetching chicken products:", error);
      }
    };

    fetchChickenProducts();
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
    const imageUrl = product.images?.[0]
      ? product.images[0].startsWith("http")
        ? product.images[0]
        : `http://localhost:5000${product.images[0]}`
      : "/default-product.png";

    const updatedProduct = {
      id: product._id,
      name: product.name,
      weight: product.weight,
      price: product.offerPrice,
      offerPrice: product.offerPrice,
      image: imageUrl,
    };

    addToCart(updatedProduct);
    setAddedProduct(updatedProduct);
    setShowPopup(true);
  };

  const handleDecrement = (product) => {
    removeFromCart(product._id);
  };

  const subtotal = Object.values(cartItems).reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );

const handleViewAll = () => {
  navigate("/BestsellerAll");
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

      <div className="container Bestsellerhead mt-3 position-relative">
        <h2 className="besttextf1">Bestsellers</h2>
        <p className="besttextf2">Most popular Chicken products near you!</p>

        <button className="arrow outside-left new1" onClick={() => scroll("left")}>
          <span style={{ position: "relative", bottom: "4px" }}>‹</span>
        </button>

        <div className="carousel-wrapper">
          <div className="Bestseller-slider" ref={scrollRef}>
            {products.slice(0, 5).map((product, index) => {
              const cartItem = cartItems[product._id];
              const quantity = cartItem?.quantity || 0;
              const available = product.time?.toLowerCase() !== "out of stock";

              return (
                <div
                  className="Bestseller-card"
                  key={product._id}
                  ref={index === 0 ? cardRef : null}
                >
                  <div className="image-wrapper">
                    <img
                      className="besstsellerimg1"
                      src={
                        product.images?.[0]
                          ? product.images[0].startsWith("http")
                            ? product.images[0]
                            : `http://localhost:5000${product.images[0]}`
                          : "/default-product.png"
                      }
                      alt={product.name}
                    />

                    {available ? (
                      quantity > 0 ? (
                        <div className="quantityControl-best">
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

                  <h4 className="besttextf3">{product.name}</h4>
                  <p className="Bestseller-meta">{product.weight}</p>
                  <div className="price-info">
                    <span className="offer-price">₹{product.offerPrice}</span>
                    <span className="original-price">₹{product.price}</span>
                    {product.discount && (
                      <span className="discount">{product.discount}% OFF</span>
                    )}
                  </div>
                  <p className={`timing ${!available ? "out-of-stock" : ""}`}>
                    {available ? product.time : "Out of stock"}
                  </p>
                </div>
              );
            })}

            <div className="Bestseller-card view-all-card" onClick={handleViewAll}>
              <p className="view-all-text">View All</p>
            </div>
          </div>
        </div>

        <button className="arrow arrowright outside-right" onClick={() => scroll("right")}>
          <span style={{ position: "relative", bottom: "4px" }}>›</span>
        </button>
      </div>
    </>
  );
};

export default Bestseller;
