import React from 'react';
import './mutton.css'
import Carousel from 'react-bootstrap/Carousel';
import muttonbanner1 from './MuttonImages/muttonbanner1.jpeg';
import muttonbanner2 from './MuttonImages/muttonbanner2.jpeg';
import muttonAll from './MuttonImages/muttonAll.webp';
import muttoncurrycuts    from './MuttonImages/muttoncurrycuts.webp';
import muttonboneless    from './MuttonImages/muttonboneless.webp';
import muttonspecialitycuts from './MuttonImages/muttonspecialitycuts.webp';
import muttonliver      from './MuttonImages/muttonliver.webp';
import { useNavigate } from 'react-router-dom';


const Mutton = () => {

  const navigate = useNavigate();
    const handleMuttondAll = () => {
        navigate('/MuttonAll')
  }
 const handleMuttonCurry = () => {
        navigate('/MuttonCurry')
  }
const handleMuttonBoneless = () => {
        navigate('/MuttonBoneless')
  }
    const handleMuttonSpeciality = () => {
        navigate('/MuttonSpeciality')
  }
 const  handleMuttonLiver = () => {
        navigate('/MuttonLiver')
  }
   return (
    <>
      <div className="mutton-container">
        <nav className="breadcrumb">
          <a className="mutton" href="/">
            <span>Home</span> <span className="separator">/</span>
          </a>
          <span className="current">Mutton</span>
        </nav>
        <h1 className="heading">Mutton</h1>
      </div>
<div className="muttonhead2" >
      <div className="container ">
        <Carousel fade controls={true} indicators={false}  interval={null}>
          <Carousel.Item>
            <div className="div container muttondiv">
            <img className=" muttonbanner1" src={muttonbanner1} alt="Kids Banner 1" />
           </div>
          </Carousel.Item>

          <Carousel.Item>
             <div className="div container muttondiv">
            <img className=" muttonbanner1" src={muttonbanner2} alt="Kids Banner 2" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    


      <div className="container  mb-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap mutton-cat">
          <div onClick={handleMuttondAll} className="text-center">
            <a href="#">
              <img src={muttonAll} className="muttonimg1 active" alt="All" />
            </a>
            <div className="partytext active mb-3">All</div>
          </div>

          <div onClick={handleMuttonCurry} className="text-center">
            <a href="#">
              <img src={muttoncurrycuts} className="muttonimg1" alt="Evening Snacks" />
            </a>
            <div className="partytext">Curry Cuts</div>
          </div>

          <div onClick={handleMuttonBoneless} className="text-center">
            <a href="#">
              <img src={muttonboneless} className="muttonimg1" alt="Breakfast Staples" />
            </a>
            <div className="partytext">Boneless & Mince</div>
          </div>

          <div onClick={handleMuttonSpeciality} className="text-center">
            <a href="#">
              <img src={muttonspecialitycuts} className="muttonimg1" alt="Yummy Tiffins" />
            </a>
            <div className="partytext">Speciality Cuts</div>
          </div>
             <div onClick={handleMuttonLiver} className="text-center">
            <a href="#">
              <img src={muttonliver} className="muttonimg1" alt="Yummy Tiffins" />
            </a>
            <div className="partytext">Liver & More</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Mutton;

