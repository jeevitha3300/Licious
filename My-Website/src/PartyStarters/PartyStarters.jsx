import React from 'react';
import './partystarters.css'
import Carousel from 'react-bootstrap/Carousel';
import partybanner1 from './PartyStartersImages/partybanner1.png';
import partybanner2 from './PartyStartersImages/partybanner2.png';
import partyAll from './PartyStartersImages/partyAll.webp'
import houseparties from './PartyStartersImages/houseparties.webp'
import matchtime from './PartyStartersImages/partymatchtime.webp'
import partybarbeque from './PartyStartersImages/partybarbeque.webp'
import { useNavigate } from 'react-router-dom';


const PartyStarters = () => {

  const navigate = useNavigate();
    const handlePartyAll = () => {
        navigate('/PartyAll')
  }
 const handlePartyHouse = () => {
        navigate('/PartyHouse')
  }
const handlePartyMatch = () => {
        navigate('/PartyMatch')
  }
    const handlePartyHome = () => {
        navigate('/PartyHome')
  }
  
   return (
    <>
      <div className="partyHouse-container">
        <nav className="breadcrumb">
          <a className="partyHome" href="/">
            <span>Home</span> <span className="separator">/</span>
          </a>
          <span className="current">Party Starters</span>
        </nav>
        <h1 className="heading">Party Starters</h1>
      </div>
<div className="partyhousehead2" >
      <div className="container ">
        <Carousel fade controls={true} indicators={false}  interval={null}>
          <Carousel.Item>
            <div className="div container partyhousediv">
            <img className=" partybanner1" src={partybanner1} alt="Kids Banner 1" />
           </div>
          </Carousel.Item>

          <Carousel.Item>
             <div className="div container partyhousediv">
            <img className=" partybanner1" src={partybanner2} alt="Kids Banner 2" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    


      <div className="container  mb-5">
        <div className="d-flex justify-content-center gap-5 flex-wrap partyhouse-cat">
          <div onClick={handlePartyAll} className="text-center">
            <a href="#">
              <img src={partyAll} className="partyimg1 active" alt="All" />
            </a>
            <div className="partytext active mb-3">All</div>
          </div>

          <div onClick={handlePartyHouse} className="text-center">
            <a href="#">
              <img src={houseparties} className="partyimg1" alt="Evening Snacks" />
            </a>
            <div className="partytext">House Parties</div>
          </div>

          <div onClick={handlePartyMatch} className="text-center">
            <a href="#">
              <img src={matchtime} className="partyimg1" alt="Breakfast Staples" />
            </a>
            <div className="partytext">Match time Munchies</div>
          </div>

          <div onClick={handlePartyHome} className="text-center">
            <a href="#">
              <img src={partybarbeque} className="partyimg1" alt="Yummy Tiffins" />
            </a>
            <div className="partytext">Barbeque at Home</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default PartyStarters;

