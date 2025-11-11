import React, { createContext, useState } from "react";
export const BannerContext = createContext();
export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);
  const fetchBanners = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/banner");
      const data = await res.json();
      setBanners(data);
    } catch (err) {
      console.error("Error fetching banners", err);
    }
  };
  return (
    <BannerContext.Provider value={{ banners, fetchBanners }}>
      {children}
    </BannerContext.Provider>
  );
};
