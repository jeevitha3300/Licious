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
import Dashboard from './Admin/DashBoard.jsx';
import CustomerTable from './Admin/CustomerTable.jsx';
import NewUser from './Admin/NewUser.jsx';
import ManageUser from './Admin/ManageUser.jsx';
import NewBanner from './Admin/NewBanner.jsx';

import { BannerProvider } from './Admin/BannerContext.jsx';
import ManageBanner from './Admin/ManageBanner.jsx';

function Home() {
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
    <>
  <BannerProvider>
    <Router>
    <Routes>
      <Route path="/Admin" element={<AdminLogin/>} />
      <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/managecustomer" element={<CustomerTable/>} />
        <Route path="/newuser" element={<NewUser/>} />
         <Route path="/manageuser" element={<ManageUser />} />
           <Route path="/newbanner" element={<NewBanner />} />
           <Route path="/managebanner" element={<ManageBanner />} />
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
  </BannerProvider>  
    </>
  );
}

export default App;