import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useCart } from "../CartContext";
import "./category.css";
import { Carousel } from "react-bootstrap";
import CartPopUp from "../CartPopUp";

const Category = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cartItems, getTotalQuantity } = useCart();

  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);
  const [headData, setHeadData] = useState(null);
  const [activeSub, setActiveSub] = useState("all");
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);

  const normalize = (str) =>
    str?.toLowerCase().replace(/\s+/g, "").trim();

  const backgroundColors = {
    kidsfavourite: "rgb(255, 250, 223)",
    dailyfishdelights: "rgb(143, 177, 210)",
    partystarters: "rgb(236, 233, 250)",
    "spreads&coldcuts": "rgb(255, 233, 240)",
    mutton: "rgb(255, 202, 202)",
    chicken: "rgb(255, 233, 240)",
    "fish&seafood": "rgb(217, 236, 255)",
    "heat&eat": "rgb(217, 236, 255)",
    eggs: "rgb(255, 229, 191)",
    crispysnacks: "rgb(255, 220, 217)",
    "prawn&crabs": "rgb(255, 229, 217)",
  };

  //  Increment / Decrement
  const handleIncrement = (product) => {
    const imageUrl = product.images?.[0]
      ? product.images[0].startsWith("http")
        ? product.images[0]
        : `http://localhost:5000${product.images[0]}`
      : "/default-product.png";

    const updatedProduct = {
      id: product._id,
      name: product.name,
      weight:product.weight,
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

  const subtotal = Object.values(cartItems || {}).reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );

  //  Fetch category and sub from URL
  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:5000/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHeadData(data);
        const params = new URLSearchParams(location.search);
        const subParam = params.get("sub");
        setActiveSub(subParam || "all");
      })
      .catch((err) => console.error("Category fetch error:", err));
  }, [id, location.search]);

  // Fetch enabled products
  useEffect(() => {
    if (!headData?.category) return;
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (p) =>
            p.enabled &&
            normalize(p.category?.category || p.category) ===
              normalize(headData.category)
        );
        setProducts(filtered);
      })
      .catch((err) => console.error("Product fetch error:", err));
  }, [headData?.category]);

  //  Fetch banners
  useEffect(() => {
    if (!headData?.category) return;
    const normalizedCategory = normalize(headData.category);
    fetch("http://localhost:5000/api/banner/category")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (b) => b.enabled && normalize(b.name) === normalizedCategory
        );
        setBanners(filtered);
      })
      .catch((err) => console.error("Banner fetch error:", err));
  }, [headData?.category]);

  if (!headData) return <p style={{ padding: "2rem" }}>Loading...</p>;

  const normalizedCategory = normalize(headData.category);
  const backgroundColor = backgroundColors[normalizedCategory] || "#fff";

  const displayedProducts =
    activeSub === "all"
      ? products
      : products.filter(
          (p) => normalize(p.subcategory) === normalize(activeSub)
        );

  return (
    <>
      <Header />

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

      {/*  Category Header */}
      <div className="categorycontainer" style={{ backgroundColor }}>
        <div className="breadcrumb">
          <span
            style={{ cursor: "pointer", paddingRight: "5px" }}
            onClick={() => navigate("/")}
          >
            Home
          </span>
          / <span className="text-danger ps-2">{headData.category}</span>
        </div>

        <div className="breadcrumb1">
          <h1 className="categoryhead mt-3">{headData.category}</h1>
        </div>

        {/* Banner Carousel */}
        <div className="categorybanner1">
          <Carousel indicators={false} controls interval={3000}>
            {banners.length > 0 ? (
              banners.map((banner) => (
                <Carousel.Item key={banner._id}>
                  <img
                    className="categorybannerimg"
                    src={banner.image}
                    alt={banner.name}
                  />
                </Carousel.Item>
              ))
            ) : (
              <Carousel.Item>
                <div
                  style={{
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <p>No active category banner</p>
                </div>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </div>

      {/* Subcategory Tabs */}
      <div className="catogoryhead2" style={{ backgroundColor }}>
        {/* All Tab */}
        <div
          className={`imgcategorydiv ${
            activeSub === "all" ? "active-category" : ""
          }`}
          onClick={() => {
            setActiveSub("all");
            navigate(`/category/${id}`);
          }}
          style={{
            borderBottom: activeSub === "all" ? "2px solid red" : "none",
            cursor: "pointer",
          }}
        >
          <div className="subimg">
            <img
              className="imgcategory mb-2"
              src={headData.image || "/default-category.png"}
              alt="All"
            />
            <p className="subname">All</p>
          </div>
        </div>

        {/*  Subcategories */}
        {headData.subcategories?.map((sub) => (
          <div
            key={sub._id || sub.name}
            className={`imgcategorydiv ${
              activeSub === sub.name ? "active-category" : ""
            }`}
            onClick={() => {
              setActiveSub(sub.name);
              navigate(`/category/${id}?sub=${encodeURIComponent(sub.name)}`);
            }}
            style={{
              borderBottom:
                activeSub === sub.name ? "2px solid red" : "none",
              cursor: "pointer",
            }}
          >
            <div className="subimg">
              <img
                className="imgcategory mb-2"
                src={sub.image || "/default-subcategory.png"}
                alt={sub.name}
              />
              <p className="subname">{sub.name}</p>
            </div>
          </div>
        ))}
      </div>
 {/* Product Grid */}
      <div className="container mt-5">
        <div className="row breakfasthead d-flex">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product, index) => {
              const quantity = cartItems?.[product._id]?.quantity || 0;

              return (
                <div className="col-md-4 breakfasthead1 mb-4" key={product._id}>
                  <div className="card shadow rounded-4">
                    {/* Product Images Carousel */}
                    <div id={`carousel${index}`} className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        {product.images?.map((_, i) => (
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
                        {product.images?.map((img, i) => (
                          <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                            <img
                              src={img.startsWith('http') ? img : `http://localhost:5000${img}`}
                              className="breakfastimgA rounded-top-4"
                              alt={`Slide ${i + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="card-body ">
                      <h5 className="breakfast-text">{product.name}</h5>
                      <p className="breakfast-text1">{product.desc}</p>
                      <div className="breakfast_weight">{product.weight}</div>
                      <p className="fw-bold ">
                        ₹{product.offerPrice}{' '}
                        <span className="text-muted text-decoration-line-through ms-2">
                          ₹{product.price}
                        </span>{' '}
                        {product.discount && (
                          <span className="breakfast-discount">{product.discount} % OFF</span>
                        )}
                      </p>
                      <p className="breakfast-time">{product.time}</p>

                      {quantity === 0 ? (
                        <button
                          className="addbtn btn-danger fw-bold "
                          title="Add to cart"
                          onClick={() => handleIncrement(product)}
                        >
                          Add + <i className="bi bi-plus-lg ms-1"></i>
                        </button>
                      ) : (
                        <div className="quantity-control">
                          <button
                            className="qty-btn"
                            onClick={() => handleDecrement(product)}
                          >
                            −
                          </button>
                          <span className="qty-count">{quantity}</span>
                          <button
                            className="qty-btn"
                            onClick={() => handleIncrement(product)}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center mt-4">No products available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
