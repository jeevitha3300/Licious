import React, { useContext } from 'react';
import { BannerContext } from '../Admin/BannerContext';
import './banner.css';

const Banner = () => {
  const { banners, error } = useContext(BannerContext);

  // Filter only enabled banners
  const enabledBanners = banners.filter(banner => banner.enabled);

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="container banone mt-4">
        {enabledBanners.length === 0 ? (
          <p>No banners to display</p>
        ) : (
          enabledBanners.map((item, index) => (
            <img
              className="imgbannerf"
              key={index}
              src={item.image}
              alt={item.name}
              style={{ objectFit: 'cover' }}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Banner;
