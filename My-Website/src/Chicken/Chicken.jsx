import React from 'react';
import './chicken.css'
import Carousel from 'react-bootstrap/Carousel';
import chickenbanner1 from './ChickenImages/chickenbanner1.png'
import chickenbanner2 from './ChickenImages/chickenbanner2.png';
import chickenAll from './ChickenImages/chickenAll.webp';
import chickencurrycuts    from './ChickenImages/chickencurrycuts.webp';
import chickenboneless    from './ChickenImages/chickenboneless.webp';
import chickenspecialitycuts from './ChickenImages/chickenspecialitycuts.webp';
import chickenoffals      from './ChickenImages/chickenoffals.webp';
import { useNavigate } from 'react-router-dom';


const Chicken = () => {

  const navigate = useNavigate();
    const handleChickenAll = () => {
        navigate('/ChickenAll')
  }
 const handleChickenCurry = () => {
        navigate('/ChickenCurry')
  }
const handleChickenBoneless = () => {
        navigate('/ChickenBoneless')
  }
    const handleChickenSpeciality = () => {
        navigate('/ChickenSpeciality')
  }
 const  handleChickenOffals = () => {
        navigate('/ChickenOffals')
  }
   return (
    <>
      <div className="chicken-container">
        <nav className="breadcrumb">
          <a className="chicken" href="/">
            <span>Home</span> <span className="separator">/</span>
          </a>
          <span className="current">Mutton</span>
        </nav>
        <h1 className="heading">Mutton</h1>
      </div>
<div className="chickenhead2" >
      <div className="container ">
        <Carousel fade controls={true} indicators={false}  interval={null}>
          <Carousel.Item>
            <div className="div container chickendiv">
            <img className=" chickenbanner1" src={chickenbanner1} alt="Kids Banner 1" />
           </div>
          </Carousel.Item>

          <Carousel.Item>
             <div className="div container chickendiv">
            <img className=" chickenbanner1" src={chickenbanner2} alt="Kids Banner 2" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    


      <div className="container  mb-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap chicken-cat">
          <div onClick={handleChickenAll} className="text-center">
            <a href="#">
              <img src={chickenAll} className="chickenimg1 active" alt="All" />
            </a>
            <div className="chickentext active mb-3">All</div>
          </div>

          <div onClick={handleChickenCurry} className="chicken-center">
            <a href="#">
              <img src={chickencurrycuts} className="chickenimg1" alt="Evening Snacks" />
            </a>
            <div className="chickentext">Curry Cuts</div>
          </div>

          <div onClick={handleChickenBoneless} className="chicken-center">
            <a href="#">
              <img src={chickenboneless} className="chickenimg1" alt="Breakfast Staples" />
            </a>
            <div className="chickentext">Boneless & Mince</div>
          </div>

          <div onClick={handleChickenSpeciality} className="chicken-center">
            <a href="#">
              <img src={chickenspecialitycuts} className="chickenimg1" alt="Yummy Tiffins" />
            </a>
            <div className="chickentext">Speciality Cuts</div>
          </div>
             <div onClick={handleChickenOffals} className="chicken-center">
            <a href="#">
              <img src={chickenoffals} className="chickenimg1" alt="Yummy Tiffins" />
            </a>
            <div className="chickentext">Offals</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Chicken;