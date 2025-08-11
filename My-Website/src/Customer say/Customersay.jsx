import React, { useEffect, useState } from 'react';
import './customersay.css';

const Customersay = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchCustomerSay = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/customersay');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error('Failed to fetch customer images:', error);
      }
    };

    fetchCustomerSay();
  }, []);

  return (
    <div className="container customerhead">
      <div className="d-flex ms-5 w-25" style={{ gap: '15px', padding: '30px 0px'}}>
        {images.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={`customer-${index}`}
             className="customer-image"
            style={{ width: '67%', height: 'auto' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Customersay;
