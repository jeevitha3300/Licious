import React, { useEffect } from 'react';
import './productdata.css'
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/images/shopimg1.png';
import img4 from '../assets/images/shopimg4.png';
import img6 from '../assets/images/shopimg6.png';
import img7 from '../assets/images/shopimg7.png';
import img9 from '../assets/images/shopimg9.png';
import img11 from '../assets/images/shopimg11.png';
import img13 from '../assets/images/shopimg13.png';
import img16 from '../assets/images/shopimg16.png';
import img17 from '../assets/images/shopimg17.png';
import img18 from '../assets/images/shopimg18.png';
import img19 from '../assets/images/shopimg19.png';
import img20 from '../assets/images/shopimg20.png';
function Productsdata() {
  const navigate = useNavigate();
const handlekidsClick = () => navigate('/kidsfavourite');
  const handleDailyFishDelightsClick = () => {
        navigate('/DailyFishDelight')
  }
    const handlePartyStartersClick = () => {
        navigate('/PartyStarters')
  }
     const handleSpreadsColdsClick = () => {
        navigate('/SpreadsCold')
  }
     const handleMuttonClick = () => {
        navigate('/Mutton')
  }
     const handleChickenClick = () => {
        navigate('/Chicken')
  }
       const handleSeawaterFishClick = () => {
        navigate('/SeawaterFish')
  }
       const handleFreshwaterFishClick = () => {
        navigate('/FreshwaterFish')
  }
  return (
    <div className="container shop ps-5 mt-2">
      <h1 className="title ps-4">Shop by categories</h1>
      <h2 className="text ps-4">Freshest meats and much more!</h2>
      <div className="row m-1 ps-2 shop1">
{/* img3 */}
        <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s1" onClick={handlekidsClick}>
          <img src={img17}  style={{cursor:"pointer"}} className="im" alt="" />
          <div className="t1" >Kids  <span className='A1'> Favourites</span> </div>
        </div>
        {/* img2 */}
          <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s2" onClick={handleDailyFishDelightsClick}> 
          <img src={img16}  className='im' alt="" />
          <div className="t2 ps-3">Daily Fish
            <div className="t2.1 ps-1">Delights</div>
          </div>
          
         </div>
         {/* img3 */}
 <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s3" onClick={handlePartyStartersClick}> 
          <img src={img18} className='im' alt="" />
          <div className="t3 ps-2">Party Starters</div>
        </div>
       {/* img4 */}
 <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s4" onClick={handleSpreadsColdsClick}> 
          <img src={img13} className='im' alt="" />
          <div className="t4">Spreads & <span className='t4a'>Cold</span> 
              <div className="t41 ps-4 ms-2">Cuts </div>    
          </div>
        
        </div>
       {/* img5 */}
  <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s5" onClick={handleMuttonClick}>
         <img src={img4} className='im' alt="" />
         <div className="t5 ps-4">Mutton</div>
         </div>
       {/* img6 */}
  <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s6"onClick={handleChickenClick}>
          <img src={img1}  className="im" alt="" />
          <div className="t6 ps-4">Chicken</div>
        </div>
       {/* img7 */}
<div className="col-3 col-md-2 col-xl-2  col-xxl-2 s7"onClick={handleSeawaterFishClick}>
        <img src={img19} className='im' alt="" />
        <div className="t7">Seawater <span className='t71'> Fish</span></div>
         </div>
       {/* img8 */}
       <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s8"onClick={handleFreshwaterFishClick}>
        <img src={img20} className='im' alt="" />
        <div className="t8">Freshwater <span className='t81'>Fish</span> </div>
         </div>
       {/* img9 */}
          <div className="col-3 col-md-2 col-xl-2 col-xxl-2  s9"> 
          <img src={img7}  className='im' alt="" />
          <div className="t9 ps-4">Eggs</div>
          </div>
       {/* img10 */}
         <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s10"> 
          <img src={img9} className='im' alt="" />
          <div className="t10">Cripsy Snacks</div>
         </div>
      {/* img11 */}
  <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s11 ">
        <img src={img6} className='im' alt="" />
        <div className="t11">Prawn & <span className='t11a'>Crabs</span></div>
        </div>
      {/* img12 */}
    <div className="col-3 col-md-2 col-xl-2 col-xxl-2 s12">
           <img src={img11} className='im' alt="" />
        <div className="t12 ps-2">Meat <span className='t12a'>Masala</span> </div>
        </div>
       </div>
    </div>
  );
}

export default Productsdata;
