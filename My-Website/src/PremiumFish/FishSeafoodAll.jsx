import React, { useEffect, useState } from "react";
import "./fishseafoodAll.css"; 
import { useCart } from "../CartContext";
import CartPopUp from "../CartPopUp";
import { useNavigate } from "react-router-dom";

const FishSeafoodAll = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const { cartItems, addToCart, removeFromCart, getTotalQuantity } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/premiumfood");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchProducts();
  }, []);

  const handleIncrement = (product) => {
    const updatedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      offerPrice: product.offerPrice,
      image: product.images?.[0] || "/placeholder.png",
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

  return (
    <div className="container mt-4">
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

      <div className="row falavourAllhead d-flex">
        <h1 className="favAll-tittle mb-4">Meals in Minutes</h1>
        {products.map((product) => {
          const quantity = cartItems[product.id]?.quantity || 0;
          const available = product.time?.toLowerCase() !== "out of stock";

          return (
            <div className="col-12 col-sm-6 col-md-4 falavourAllhead1 mb-4" key={product.id}>
              <div className="card shadow rounded-4 h-100">
                <img
                  src={product.images?.[0] || "/placeholder.png"}
                  className="falavourAllimgA rounded-top-4"
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = "/placeholder.png";
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="falavourAll-text">{product.name}</h5>
                    <p className="falavourAll-text1">{product.desc}</p>
                    <div className="falavourAll_weight">{product.weight}</div>
                    <p className="fw-bold">
                      ₹{product.offerPrice}
                      <span className="text-muted text-decoration-line-through ms-2">
                        ₹{product.price}
                      </span>
                      {product.discount && (
                        <span className="falavourAll-discount ms-2">{product.discount}</span>
                      )}
                    </p>
                    <p className={`falavourAll-time ${!available ? "text-danger" : ""}`}>
                      {available ? product.time : "Out of Stock"}
                    </p>
                  </div>
                  {available ? (
  quantity > 0 ? (
    <div className="quantityControl-btn" style={{marginTop:"10%"}}>
      <button
        className="quantityControlbutton"
        onClick={() => handleDecrement(product)}
      >
        −
      </button>
      <span className="quantity-count">{quantity}</span>
      <button
        className="quantityControlbutton"
        onClick={() => handleIncrement(product)}
      >
        +
      </button>
    </div>
  ) : (
    <button
      className="btn-fav"
      title="Add to cart"
      onClick={() => handleIncrement(product)}
    >
      Add +
    </button>
  )
) : (
  <span className="out-of-stock-label">Out of Stock</span>
)}

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FishSeafoodAll;
