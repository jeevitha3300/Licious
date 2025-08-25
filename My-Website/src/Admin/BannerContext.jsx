import React, { createContext, useState, useEffect } from 'react';

export const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  const fetchBanners = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/banner');
      if (!res.ok) throw new Error('Failed to fetch banners');
      const data = await res.json();
      setBanners(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <BannerContext.Provider value={{ banners, fetchBanners, error }}>
      {children}
    </BannerContext.Provider>
  );
};
