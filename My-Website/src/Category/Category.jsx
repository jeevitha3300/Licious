import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './category.css';
import CartPopUp from '../CartPopUp';
import { useCart } from '../CartContext';
const Category = () => {
  const { id } = useParams();
  const [headData, setHeadData] = useState(null);
  const [activeSub, setActiveSub] = useState('all');
  const [activeCategory, setActiveCategory] = useState('all');
  const [items, setItems] = useState([]);
  const [addedProduct, setAddedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isFirstHovered, setIsFirstHovered] = useState(false);
  const navigate = useNavigate();
  const { addToCart, removeFromCart, cartItems, getTotalQuantity, calculateSubtotal } = useCart();
  const backgroundColors = {
    shopcategory1: 'rgb(255, 250, 223)',
    shopcategory2: 'rgb(143, 177, 210)',
    shopcategory3: 'rgb(236, 233, 250)',
    shopcategory4: 'rgb(255, 233, 240)',
    shopcategory5: 'rgb(255, 202, 202)',
    shopcategory6: 'rgb(255, 233, 240)',
    shopcategory7: 'rgb(217, 236, 255)',
    shopcategory8: 'rgb(217, 236, 255)',
    shopcategory9: 'rgb(255, 229, 191)',
    shopcategory10: 'rgb(255, 220, 217)',
    shopcategory11: 'rgb(255, 229, 217)',
  };

  const backgroundColor = backgroundColors[id] || '#fff';

  // Fetch header info
  useEffect(() => {
    fetch(`http://localhost:5000/api/head/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHeadData(data);
        setActiveSub('all');
        setActiveCategory('all');
      })
      .catch((err) => console.error('Header fetch error:', err));
  }, [id]);

  // Fetch products based on category/subcategory
  useEffect(() => {
    if (!headData) return;

    const query = `category=${encodeURIComponent(id)}${
      activeSub !== 'all' ? `&subcategory=${encodeURIComponent(activeSub)}` : ''
    }`;

    fetch(`http://localhost:5000/api/products?${query}`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => {
        console.error(err);
        setItems([]);
      });
  }, [headData, activeSub, id]);

  const handleIncrement = (product) => {
    const updatedProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      offerPrice: product.offerPrice,
      image: product.images?.[0] || '',
    };
    addToCart(updatedProduct);
    setAddedProduct(updatedProduct);
    setShowPopup(true);
  };

 
  const handleDecrement = (productId) => {
    removeFromCart(productId);
  };

  if (!headData) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <>
      {/* Category Header */}
      <div className="categorycontainer" style={{ backgroundColor }}>
        <nav className="categorynav" style={{ fontSize: '14px' }}>
          {headData.breadcrumb.map((crumb, idx) => (
            <span
              key={idx}
              onClick={() => crumb === 'Home' && navigate('/')}
              onMouseEnter={() => idx === 0 && setIsFirstHovered(true)}
              onMouseLeave={() => idx === 0 && setIsFirstHovered(false)}
              style={{
                cursor: 'pointer',
                color: idx === 0 ? (isFirstHovered ? '#d11243' : 'black') : '#d11243',
                marginLeft: idx !== 0 ? '5px' : '0',
              }}
            >
              {crumb}
              {idx < headData.breadcrumb.length - 1 && <span style={{ margin: '0 5px' }}>/</span>}
            </span>
          ))}
        </nav>

        <h1 className="categoryhead mt-3">{headData.heading}</h1>

        <Carousel fade controls indicators={false} interval={null}>
          {headData.carouselImages.map((item, i) => (
            <Carousel.Item key={i}>
              <img
                className="categorybanner1"
                src={item.src.startsWith('http') ? item.src : `http://localhost:5000${item.src}`}
                alt={item.alt || ''}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Subcategories */}
      <div className="catogoryhead2" style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', backgroundColor }}>
        {headData.categories.map((cat) => (
          <div
            key={cat.key}
            className={`imgcategorydiv ${activeCategory === cat.key ? 'active-category' : ''}`}
            onClick={() => {
              setActiveSub(cat.key);
              setActiveCategory(cat.key);
            }}
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              padding: '0.5rem',
              borderBottom: activeCategory === cat.key ? '2px solid red' : '',
            }}
          >
            <img
              className="imgcategory"
              src={cat.image.startsWith('http') ? cat.image : `http://localhost:5000${cat.image}`}
              alt={cat.alt || ''}
              crossOrigin="anonymous"
            />
            <p>{cat.label}</p>
          </div>
        ))}
      </div>

      {/* Filter Info */}
      <div className="container mt-3">
    {/* Product List */}
      <div className="container">
        <div className="row container eveninghead mt-4">
          {items.length === 0 && <p>No products found</p>}
          {items.map((item, index) => {
              const quantity = cartItems[item.id]?.quantity || 0;
            return (
              <div className="col-4 eveninghead1 mb-4" key={item.id}>
                <div className="card shadow rounded-4">
                  <div id={`carousel${index}`} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      {item.images.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          data-bs-target={`#carousel${index}`}
                          data-bs-slide-to={i}
                          className={i === 0 ? 'active' : ''}
                          aria-current={i === 0 ? 'true' : undefined}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="carousel-inner rounded-top-4">
                      {item.images.map((img, i) => {
                        const imageUrl = img.startsWith('http')
                          ? img
                          : `http://localhost:5000/uploads/${img}`;
                        return (
                          <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                            <img src={imageUrl} alt={item.name} className="d-block w-100" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="card-body">
                    <h5 className="evening-text">{item.name}</h5>
                    <p className="evening-text1">{item.desc}</p>
                    <div className="evening_weight">{item.weight}</div>
                    <p className="fw-bold">
                      ₹{item.offerPrice}{' '}
                      <span className="text-muted text-decoration-line-through ms-2">
                        ₹{item.price}
                      </span>{' '}
                      {item.discount && (
                        <span className="evening-discount">{item.discount}</span>
                      )}
                    </p>
                    <p className="evening-time">{item.time}</p>

                    {quantity === 0 ? (
                      <button className="btn btn-danger fw-bold px-3 py-1" onClick={() => handleIncrement(item)}>
                        Add + <i className="bi bi-plus-lg ms-1"></i>
                      </button>
                    ) : (
                      <div className="quantity-control">
                        <button className="qty-btn" onClick={() => handleDecrement(item.id)}>−</button>
                        <span className="qty-count">{quantity}</span>
                        <button className="qty-btn" onClick={() => handleIncrement(item)}>+</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cart Popup */}
        {addedProduct && (
          <CartPopUp
            show={showPopup}
            product={addedProduct}
           subtotal={calculateSubtotal()}
            itemCount={getTotalQuantity()}
            onClose={() => setShowPopup(false)}
            onCheckout={() => {
              setShowPopup(false);
              navigate('/checkout');
            }}
            onViewCart={() => {
              setShowPopup(false);
              navigate('/cart');
            }}
          />
        )}
      </div>
       </div>
    </>
  );
};

export default Category;



