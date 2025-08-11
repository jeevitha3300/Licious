import React from 'react';
import './freshwaterfish.css'
import Carousel from 'react-bootstrap/Carousel';
import freshwaterbanner1 from './FreshWaterImages/freshwaterbanner1.jpeg';
import freshwaterbanner2 from './FreshWaterImages/freshwaterbanner2.jpeg';
import freshwaterfishAll from './FreshWaterImages/freshwaterfishAll.webp';
import freshwaterRohu    from './FreshWaterImages/freshwaterRohu.webp';
import freshwaterbasa    from './FreshWaterImages/freshwaterbasa.webp';
import freshwatertilapia from './FreshWaterImages/freshwatertilapia.webp';
import { useNavigate } from 'react-router-dom';


const FreshwaterFish = () => {

  const navigate = useNavigate();
    const handleFreshwaterAll = () => {
        navigate('/FreshwaterAll')
  }
 const handleFreshRohuCatla = () => {
        navigate('/FreshRohuCatla')
  }
const handleFreshbasa = () => {
        navigate('/FreshBasa')
  }
    const handleFreshwaterTilapia = () => {
        navigate('/FreshwaterTilapia')
  }

   return (
    <>
      <div className="freshwaterfish-container">
        <nav className="breadcrumb">
          <a className="seawaterfish" href="/">
            <span>Home</span> <span className="separator">/</span>
          </a>
          <span className="current">Freshwater Fish</span>
        </nav>
        <h1 className="heading">Freshwater Fish</h1>
      </div>
<div className="freshwaterfishhead2" >
      <div className="container ">
        <Carousel fade controls={true} indicators={false}  interval={null}>
          <Carousel.Item>
            <div className="div container freshwaterfishdiv">
            <img className=" freshwaterfishbanner1" src={freshwaterbanner1} alt="Kids Banner 1" />
           </div>
          </Carousel.Item>

          <Carousel.Item>
             <div className="div container freshwaterfishdiv">
            <img className=" freshwaterfishbanner1" src={freshwaterbanner2} alt="Kids Banner 2" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    


      <div className="container  mb-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap freshwaterfish-cat">
          <div onClick={handleFreshwaterAll} className="text-center">
            <a href="#">
              <img src={freshwaterfishAll} className="freshwaterfishimg1 active" alt="All" />
            </a>
            <div className="freshwaterfishtext active mb-3">All</div>
          </div>

          <div onClick={handleFreshRohuCatla} className="text-center">
            <a href="#">
              <img src={freshwaterRohu} className="freshwaterfishimg1" alt="Evening Snacks" />
            </a>
            <div className="freshwaterfishtext">Rohu & Catla</div>
          </div>
    <div onClick={handleFreshbasa} className="text-center">
            <a href="#">
              <img src={freshwaterbasa} className="freshwaterfishimg1" alt="Yummy Tiffins" />
            </a>
            <div className="freshwaterfishtext">Basa</div>
          </div>
             <div onClick={handleFreshwaterTilapia} className="text-center">
            <a href="#">
              <img src={freshwatertilapia} className="freshwaterfishimg1" alt="Yummy Tiffins" />
            </a>
            <div className="freshwaterfishtext">Tilapia</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default FreshwaterFish;

