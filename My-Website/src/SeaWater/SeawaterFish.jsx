import React from 'react';
import './seawaterfish.css'
import Carousel from 'react-bootstrap/Carousel';
import seawaterbanner1 from './SeawaterFishImages/seawaterbanner1.jpeg';
import seawaterbanner2 from './SeawaterFishImages/seawaterbanner2.jpeg';
import seawaterall from './SeawaterFishImages/seawaterall.webp';
import seawaterseer    from './SeawaterFishImages/seawaterseer.webp';
import seawatersalmons from './SeawaterFishImages/seawatersalmons.webp';
import seawaterpomfrets      from './SeawaterFishImages/seawaterpomfrets.webp';
import { useNavigate } from 'react-router-dom';


const SeawaterFish = () => {

  const navigate = useNavigate();
    const handleSeawaterAll = () => {
        navigate('/SeawaterAll')
  }
 const handleSeawaterSeer = () => {
        navigate('/SeawaterSeer')
  }
const handleSeawaterSalmons = () => {
        navigate('/SeawaterSalmons')
  }
    const handleSeawaterPomfrets = () => {
        navigate('/SeawaterPomfrets')
  }

   return (
    <>
      <div className="seawaterfish-container">
        <nav className="breadcrumb">
          <a className="seawaterfish" href="/">
            <span>Home</span> <span className="separator">/</span>
          </a>
          <span className="current">Seawater Fish</span>
        </nav>
        <h1 className="heading">Seawater Fish</h1>
      </div>
<div className="seawaterfishhead2" >
      <div className="container ">
        <Carousel fade controls={true} indicators={false}  interval={null}>
          <Carousel.Item>
            <div className="div container seawaterfishdiv">
            <img className=" seawaterfishbanner1" src={seawaterbanner1} alt="Kids Banner 1" />
           </div>
          </Carousel.Item>

          <Carousel.Item>
             <div className="div container seawaterfishdiv">
            <img className=" seawaterfishbanner1" src={seawaterbanner2} alt="Kids Banner 2" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    


      <div className="container  mb-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap seawaterfish-cat">
          <div onClick={handleSeawaterAll} className="text-center">
            <a href="#">
              <img src={seawaterall} className="seawaterfishimg1 active" alt="All" />
            </a>
            <div className="seawaterfishtext active mb-3">All</div>
          </div>

          <div onClick={handleSeawaterSeer} className="text-center">
            <a href="#">
              <img src={seawaterseer} className="seawaterfishimg1" alt="Evening Snacks" />
            </a>
            <div className="seawaterfishtext">Seer</div>
          </div>
    <div onClick={handleSeawaterSalmons} className="text-center">
            <a href="#">
              <img src={seawatersalmons} className="seawaterfishimg1" alt="Yummy Tiffins" />
            </a>
            <div className="seawaterfishtext">Salmons</div>
          </div>
             <div onClick={handleSeawaterPomfrets} className="text-center">
            <a href="#">
              <img src={seawaterpomfrets} className="seawaterfishimg1" alt="Yummy Tiffins" />
            </a>
            <div className="seawaterfishtext">Pomfrets</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SeawaterFish;

