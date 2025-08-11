import React from 'react';
import './dailyfishdelight.css'
import Carousel from 'react-bootstrap/Carousel';
import dailybanner1 from './DailyFishDelightImages/dailybanner1.png';
import dailybanner2 from './DailyFishDelightImages/dailybanner2.png';
import dailyAll     from './DailyFishDelightImages/dailyAll.webp'
import dailycurries from './DailyFishDelightImages/dailycurries.webp'
import dailyfishfries from './DailyFishDelightImages/dailyfishfries.webp'
import dailyfirstEat from './DailyFishDelightImages/dailyfirstEat.webp'
import dailyHealthy from './DailyFishDelightImages/dailyHealthy.webp'
import { useNavigate } from 'react-router-dom';


const DailyFishDelight = () => {

  const navigate = useNavigate();
    const handleDailyAll = () => {
        navigate('/DailyAll')
  }
 const handleDailycurries = () => {
        navigate('/DailyCurries')
  }
const handleDailyFishFries = () => {
        navigate('/DailyFishFries')
  }
    const handleDailyfirsteat = () => {
        navigate('/DailyFirstEat')
  }
    const handleDailyHealthy = () => {
        navigate('/DailyHealthy')
  }
   return (
    <>
      <div className="Daily-Fish-container">
        <nav className="breadcrumb">
          <a className="DailyFisHome" href="/">
            <span>Home</span> <span className="separator">/</span>
          </a>
          <span className="current">Daily Fish Delights</span>
        </nav>
        <h1 className="heading">Daily Fish Delights</h1>
      </div>
<div className="dailyfishhead2" >
      <div className="container ">
        <Carousel fade controls={true} indicators={false}  interval={null}>
          <Carousel.Item>
            <div className="div container Dailyfishdiv">
            <img className=" dailybanner1" src={dailybanner1} alt="Kids Banner 1" />
           </div>
          </Carousel.Item>

          <Carousel.Item>
             <div className="div container Dailyfishdiv">
            <img className=" dailybanner1" src={dailybanner2} alt="Kids Banner 2" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    


      <div className="container  mb-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap Daily-fish-cat">
          <div onClick={handleDailyAll} className="text-center">
            <a href="#">
              <img src={dailyAll} className="Dailyimg1 active" alt="All" />
            </a>
            <div className="kidtext active mb-3">All</div>
          </div>

          <div onClick={handleDailycurries} className="text-center">
            <a href="#">
              <img src={dailycurries} className="Dailyimg1" alt="Evening Snacks" />
            </a>
            <div className="kidtext">For Curries</div>
          </div>

          <div onClick={handleDailyFishFries} className="text-center">
            <a href="#">
              <img src={dailyfishfries} className="Dailyimg1" alt="Breakfast Staples" />
            </a>
            <div className="kidtext">For Fish Fries</div>
          </div>

          <div onClick={handleDailyfirsteat} className="text-center">
            <a href="#">
              <img src={dailyfirstEat} className="Dailyimg1" alt="Yummy Tiffins" />
            </a>
            <div className="kidtext">First Time Eats</div>
          </div>
          
          <div onClick={handleDailyHealthy}  className="text-center">
            <a href="#">
              <img src={dailyHealthy} className="Dailyimg1" alt="Yummy Tiffins" />
            </a>
            <div className="kidtext">For Healthy Bites</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default DailyFishDelight;





