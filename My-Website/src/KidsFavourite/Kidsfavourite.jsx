import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './kidsfavourite.css';
import Carousel from 'react-bootstrap/Carousel';
import kidbanner1 from './KidfavImages/kidsbanner1.png';
import kidbanner2 from './KidfavImages/kidsbanner2.png';
import kidall from './KidfavImages/kidAll.webp';
import kidsnacks from './KidfavImages/kidsnacks.webp';
import kidbreakfast from './KidfavImages/kidbreakfast.webp';
import kidyummy from './KidfavImages/kidyummy.webp';

const Kidsfavourite = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState('all');
useEffect(() => {
  const path = location.pathname;

  if (path === '/kidsfavourite') {
    navigate('/kidAll', { replace: true }); // redirect to kidAll
    setActiveCategory('all');
  } else if (path.includes('/DailyAll')) {
    setActiveCategory('all');
  } else if (path.includes('/DailyCurries')) {
    setActiveCategory('dailycurries');
  } else if (path.includes('/DailyFirstEat')) {
    setActiveCategory('dailyfirsteat');
  } else if (path.includes('/DailyHealthy')) {
    setActiveCategory('dailyhealthy');
  }
}, [location.pathname, navigate]);
const handleClick = (category, route) => {
    setActiveCategory(category);
    navigate(route);
  };
return (
    <>
      <div className="kids-favourites-container">
        <nav className="breadcrumb">
          <a className="KidsHome" href="/">
            <span>Home</span> <span className="separator">/</span>
          </a>
          <span className="current">Kids Favourites</span>
        </nav>
        <h1 className="heading">Kids Favourites</h1>
      </div>

      <div className="kidfavhead2">
        <div className="container">
          <Carousel fade controls={true} indicators={false} interval={null}>
            <Carousel.Item>
              <div className="div container kiddiv">
                <img className="kidsbanner1" src={kidbanner1} alt="Kids Banner 1" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="div container kiddiv">
                <img className="kidsbanner1" src={kidbanner2} alt="Kids Banner 2" />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="container dhgsh mb-5">
          <div className="d-flex justify-content-center gap-5 flex-wrap kids-fav-cat">
            <div
              onClick={() => handleClick('all', '/kidAll')}
              className={`text-center ${activeCategory === 'all' ? 'active-category' : ''}`}
            >
              <img src={kidall} className="allimg1" alt="All" />
              <div className="kidtext">All</div>
            </div>

            <div
              onClick={() => handleClick('evening', '/kidevening')}
              className={`text-center ${activeCategory === 'evening' ? 'active-category' : ''}`}
            >
              <img src={kidsnacks} className="allimg1" alt="Evening Snacks" />
              <div className="kidtext">Evening Snacks</div>
            </div>

            <div
              onClick={() => handleClick('breakfast', '/kidbreakfast')}
              className={`text-center ${activeCategory === 'breakfast' ? 'active-category' : ''}`}
            >
              <img src={kidbreakfast} className="allimg1" alt="Breakfast Staples" />
              <div className="kidtext">Breakfast Staples</div>
            </div>

            <div
              onClick={() => handleClick('yummy', '/kidyummy')}
              className={`text-center ${activeCategory === 'yummy' ? 'active-category' : ''}`}
            >
              <img src={kidyummy} className="allimg1" alt="Yummy Tiffins" />
              <div className="kidtext">Yummy Tiffins</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kidsfavourite;

