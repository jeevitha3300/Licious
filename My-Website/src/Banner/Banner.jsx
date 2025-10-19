import React, { useContext,useState,useEffect } from 'react';
import { BannerContext } from '../Admin/BannerContext';
import './banner.css';

const Banner = () => {
    const { error: contextError } = useContext(BannerContext);
   const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  //Fetch only home banners
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/banner/home");
        if (!res.ok) throw new Error("Failed to fetch banners");
        const data = await res.json();
        setBanners(data);
      } catch (err) {
        console.error("Error fetching banners:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) {
    return <p className="text-center my-4">Loading banners...</p>;
  }

  if (!banners.length) {
    return <p className="text-center my-4">No active home banners</p>;
  }
  if (contextError) {
    return <p style={{ color: 'red', textAlign: 'center' }}>{contextError}</p>;
  }
  return (
    <>

      <div className="container banone ">
        {banners
        .filter((b) => b.enabled) 
        .map((banner) => (
          <div className="banner-item" key={banner._id}>
            <img
             className="imgbannerf"
              src={banner.image}
              alt={banner.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;

