import React, { useEffect, useState } from 'react';
import './banner.css'
const BannerList = () => {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/banner')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch banners');
        }
        return response.json();
      })
      .then(data => {
        // console.log("Fetched banners:", data);
        setBanners(data);
      })
      .catch(err => setError(err.message));
  }, []);
  return (
    <>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className=' container banone mt-4'
      //  style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
       >
        {banners.map((item, index) => (
          <img
          className='imgbanner'
            key={index}
            src={item.image}
            alt={`Banner ${index}`}
            style={{ height: 'auto', objectFit: 'cover' }}
          />
        ))}
      </div>
    </>
  );
};

export default BannerList;
