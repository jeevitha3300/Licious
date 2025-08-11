import React, { useState } from "react";
import './drop.css'
import Kidfavimg from     "../assets/images/shopimg17.png";
import Dailyimg from      "../assets/images/shopimg16.png";
import partyimg from      "../assets/images/shopimg18.png";
import spreadsimg from    "../assets/images/shopimg13.png";
import muttonimg from     "../assets/images/shopimg4.png";
import chickenimg from    "../assets/images/shopimg1.png";
import seawaterimg from   "../assets/images/seaimg.webp";
import freshwaterimg from "../assets/images/freshfishimg.webp";
import eggimg from        "../assets/images/shopimg7.png";
import crispyimg from     "../assets/images/shopimg9.png";
import prawnimg from      "../assets/images/shopimg6.png";
import meatmasalaimg from "../assets/images/shopimg11.png";
import liverimg from      "../assets/images/shopimg5.png";
import combosimg from     "../assets/images/shopimg10.png";
import readycookimg from  "../assets/images/shopimg14.png";
import fishimg from       "../assets/images/shopimg2.png";

const menuItems = [
  {
    name: "Kids Favourites",
    image: Kidfavimg,
    subMenu: ["Evening Snacks", "Breakfast Staples", "Yummy Tiffins"],
  },
  {
    name: "Daily Fish Delights",
    image: Dailyimg,
    subMenu: ["For curries", "For Fish Fries", "For Time Eats", "For Healthy Bites"],
  },
  {
    name: "Party Starters",
    image: partyimg,
    subMenu: ["House Parties", "Lunch Time Munchies", "Barbique At Home"],
  },
 
  {
    name: "Spreads & Cold Cuts",
    image: spreadsimg,
    subMenu: ["Spreades", "Sausage", "Frankfruters", "Salamis"],
  },
  {
    name: "Mutton",
    image: muttonimg,
    subMenu: ["Curry cuts", "Bonless & Mince", "Speciality cuts", "Liver & More"],
  },
  {
    name: "Chicken",
    image: chickenimg,
    subMenu: ["Curry cuts", "Bonless & Mince", "Speciality cuts", "Offals"],
  },
  {
    name: "Seawater Fish",
    image: seawaterimg,
    subMenu: [
      "Seer", "Salmons", "Pomfrets", "Anchovy & sardine", "Mackerel", "Pink Perch",
      "Tuna", "Trevally", "Red Snapper", "exotic catch",
    ],
  },
  {
    name: "Freshwater Fish",
    image: freshwaterimg,
    subMenu: [
      "Rohu & Cutla", "Basa", "Thilapia", "Roopchand", "River sol & Murrel",
      "Sea Bass", "Exotic catch", "Trevally", "Red Snapper", "Freshwater Prawns",
    ],
  },
  {
    name: "Eggs",
    image: eggimg,
    subMenu: ["Clasic Eggs", "Speciality", "Combos"],
  },
  {
    name: "Crispy Snacks",
    image: crispyimg,
    subMenu: ["Chicken", "Fish & SeaFood"],
  },
  {
    name: "Prawns & Crabs",
    image: prawnimg,
    subMenu: ["Crabs", "Small Prawns", "Medium Prawns", "Large Prawns"],
  },
  {
    name: "Meat Masala",
    image: meatmasalaimg,
    subMenu: ["Chicken", "Mutton", "Fish", "All Purpose"],
  },
  {
    name: "Liver & More",
    image: liverimg,
    subMenu: ["Mutton", "Chicken"],
  },
  {
    name: "Combos",
    image: combosimg,
    subMenu: ["Combo 1", "Combo 2"],
  },
  {
    name: "Ready to Cook",
    image: readycookimg,
    subMenu: [
      "Crispy snacks", "Wings", "Global Flavours", "Kebabs & Tikkas",
      "Local Favourites", "Biriyani", "Curries", "Burger Cutlets",
    ],
  },
  {
    name: "Fish & SeaFood",
    image: fishimg,
    subMenu: ["FreshWater", "Seawater", "Prawns & Crabs", "Curated Exclusive!"],
  },
];

function Drop() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="container drop ">
    <div className="menu-wrapper" onMouseLeave={() => setActiveIndex(null)}>
      <div className="menu-scroll">
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu-item ${activeIndex === index ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <img src={item.image} alt={item.name} className="menu-icon" />
              <span className="menu-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {activeIndex !== null && (
        <div className="submenu-container">
          {menuItems[activeIndex].subMenu.map((subItem, subIndex) => (
            <div key={subIndex} className="submenu-item">
              {subItem}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
export default Drop;