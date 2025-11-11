import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext";
import CartPopUp from "../CartPopUp";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const FlavourAll = () => {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const { cartItems, addToCart, removeFromCart, getTotalQuantity } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKidsProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();

        // ✅ Filter only kids products
        const kidsProducts = data.filter(
          (p) =>
            p.enabled &&
            p.category &&
            p.category.category?.toLowerCase().includes("kid")
        );

        setProducts(kidsProducts);
      } catch (err) {
        console.error("Error fetching Kids products:", err);
      }
    };
    fetchKidsProducts();
  }, []);

  const handleIncrement = (product) => {
    const imageUrl = product.images?.[0]
      ? product.images[0].startsWith("http")
        ? product.images[0]
        : `http://localhost:5000${product.images[0]}`
      : "/placeholder.png";

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

  return (
    <>
      <Header />
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

        <div className="row bestsellerAllhead d-flex">
          <h1 className="bestsellerAll-tittle mb-4">Meals in Minutes</h1>
          {products.map((product) => {
            const quantity = cartItems[product._id]?.quantity || 0;
            const available = product.time?.toLowerCase() !== "out of stock";

            return (
              <div
                className="col-12 col-sm-6 col-md-4 bestsellerAllhead1 mb-4"
                key={product._id}
              >
                <div className="card shadow rounded-4 h-100">
                  <img
                    src={
                      product.images?.[0]
                        ? product.images[0].startsWith("http")
                          ? product.images[0]
                          : `http://localhost:5000${product.images[0]}`
                        : "/placeholder.png"
                    }
                    className="bestsellerAllimgA rounded-top-4"
                    alt={product.name}
                    onError={(e) => (e.target.src = "/placeholder.png")}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="bestsellerAll-text">{product.name}</h5>
                      <p className="bestsellerAll-text1">{product.desc}</p>
                      <div className="bestsellerAll_weight">
                        {product.weight}
                      </div>
                      <p className="fw-bold">
                        ₹{product.offerPrice}
                        <span className="text-muted text-decoration-line-through ms-2">
                          ₹{product.price}
                        </span>
                        {product.discount && (
                          <span className="bestsellerAll-discount ms-2">
                            {product.discount}% OFF
                          </span>
                        )}
                      </p>
                      <p
                        className={`bestsellerAll-time ${
                          !available ? "text-danger" : ""
                        }`}
                      >
                        {available ? product.time : "Out of Stock"}
                      </p>
                    </div>

                    {available ? (
                      quantity > 0 ? (
                        <div
                          className="quantityControl-btn"
                          style={{ marginTop: "10%" }}
                        >
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
    </>
  );
};

export default FlavourAll;
