import React from 'react';
import './spreadscold.css'
import Carousel from 'react-bootstrap/Carousel';
import spreadsbanner1 from './SpreadsColdImages/spreadsbanner1.jpeg';
import spreadsbanner2 from './SpreadsColdImages/spreadsbanner2.jpeg';
import spreadsAll from './SpreadsColdImages/spreadsAll.webp';
import spreads from './SpreadsColdImages/spreads.webp';
import sausage from './SpreadsColdImages/sausage.webp';
import frankfurters from './SpreadsColdImages/frankfurters.webp';
import salamis from './SpreadsColdImages/salamis.webp';
import { useNavigate } from 'react-router-dom';


const SpreadsCold = () => {

  const navigate = useNavigate();
    const handleSpreadAll = () => {
        navigate('/SpreadAll')
  }
 const handleSpreads = () => {
        navigate('/Spread')
  }
const handleSausage = () => {
        navigate('/SpreadSausage')
  }
    const handleFrankfurters = () => {
        navigate('/SpreadFrank')
  }
      const  handleSalamis = () => {
        navigate('/SpreadSalamis')
  }
 
   return (
    <>
      <div className="Spreadscold-container">
        <nav className="breadcrumb">
          <a className="spreadcold" href="/">
            <span>Home</span> <span className="separator">/</span>
          </a>
          <span className="current">Spreads &amp; Cold Cuts</span>
        </nav>
        <h1 className="heading">Spreads &amp; Cold Cuts</h1>
      </div>
<div className="spreadcoldhead2" >
      <div className="container ">
        <Carousel fade controls={true} indicators={false}  interval={null}>
          <Carousel.Item>
            <div className="div container spreadcolddiv">
            <img className=" spreadcoldbanner1" src={spreadsbanner1} alt="Kids Banner 1" />
           </div>
          </Carousel.Item>

          <Carousel.Item>
             <div className="div container partyhousediv">
            <img className=" spreadcoldbanner1" src={spreadsbanner2} alt="Kids Banner 2" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    


      <div className="container  mb-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap spreadcold-cat">
          <div onClick={handleSpreadAll} className="text-center">
            <a href="#">
              <img src={spreadsAll} className="spreadcoldimg1 active" alt="All" />
            </a>
            <div className="partytext active mb-3">All</div>
          </div>

          <div onClick={handleSpreads} className="text-center">
            <a href="#">
              <img src={spreads} className="spreadcoldimg1" alt="Evening Snacks" />
            </a>
            <div className="partytext">Spreads</div>
          </div>

          <div onClick={handleSausage} className="text-center">
            <a href="#">
              <img src={sausage} className="spreadcoldimg1" alt="Breakfast Staples" />
            </a>
            <div className="partytext">Sausage</div>
          </div>

          <div onClick={handleFrankfurters} className="text-center">
            <a href="#">
              <img src={frankfurters} className="spreadcoldimg1" alt="Yummy Tiffins" />
            </a>
            <div className="partytext">Frankfurters</div>
          </div>
             <div onClick={handleSalamis} className="text-center">
            <a href="#">
              <img src={salamis} className="spreadcoldimg1" alt="Yummy Tiffins" />
            </a>
            <div className="partytext">Salamis</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SpreadsCold;

