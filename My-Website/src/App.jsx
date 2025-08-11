import React from 'react';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header.jsx';
import Banner from './Banner/Banner.jsx';
import Location from './Location/Location.jsx';
import Customersay from './Customer say/Customersay.jsx';
import Flavour from './Flavour/Flavour.jsx';
import FlavourAll from './Flavour/FlavourAll.jsx';
import ShopCategory from './Category/ShopCategory.jsx';
import Category from './Category/Category.jsx';
import Bestseller from './Bestseller/Bestseller.jsx';
import BestsellerAll from './Bestseller/BestsellerAll.jsx';
import FishSeafood from './PremiumFish/FishSeafood.jsx';
import FishSeafoodAll from './PremiumFish/FishSeafoodAll.jsx';
import Promise from './Footer/Promise.jsx'
import Account from './Login/Account.jsx';
import Reward from './Login/Reward.jsx';
import Wallet from './Login/Wallet.jsx';
import ReferFriend from './Login/ReferFriend.jsx';
import WalletInfo from './Login/WalletInfo.jsx';
import EditProfile from './Login/EditProfile.jsx';
import AddressStep from './Header/Addressstep.jsx';
import AdminLogin from './Admin/AdminLogin.jsx';

import UserTable from './Admin/UserTable.jsx';
// import AdminHome from './Admin/AdminHome.jsx';
import Dashboard from './Admin/DashBoard.jsx';


function Home() {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }
 return (
   <>
    <Header />
      <Banner />
      < Bestseller/>
      <ShopCategory/>
     <FishSeafood/>
       <Flavour/>
        <Customersay/>
       <Promise/>
 
  </>
  );
}
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/Admin" element={<AdminLogin/>} />
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/user-list" element={<UserTable/>} />
 <Route path="/category/:id" element={<Category />} />
<Route path="/checkout" element={<AddressStep/>} />
<Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/categories" element={<ShopCategory />} />
        <Route path="/FlavourAll" element={<FlavourAll/>}/>
         <Route path="/BestsellerAll" element={<BestsellerAll/>}/>
         <Route path="/FishSeafoodAll" element={<FishSeafoodAll/>}/>
        {/* login */}
              <Route path="/Account" element={<Account/>}/>
               <Route path="/Reward" element={<Reward/>}/>
               <Route path="/Wallet" element={<Wallet/>}/>
               <Route path="/ReferFriend" element={<ReferFriend/>}/>
               <Route path="/wallet-info" element={<WalletInfo/>}/>
               <Route path="/EditProfile" element={<EditProfile/>}/>
 </Routes>
    </Router>
  );
}

export default App;