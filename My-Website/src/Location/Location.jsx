import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './location.css'
import locate from '../assets/images/Locate.svg';
import searchIcon from '../assets/images/search.svg';
const locations = [
  { city: 'Bangalore', address: '4/143, Indiranagar, 12th Main Road, HAL 2nd Stage', lat: 12.97, lng: 77.59 },
  { city: 'Chennai', address: '5/235, T Nagar, Pondy Bazaar, Thyaga raya Road', lat: 13.08, lng: 80.27 },
  { city: 'Coimbatore', address: '22, MM Complex, Avinashi Road, Peelamedu', lat: 11.02, lng: 76.96 },
  { city: 'Mumbai', address: '101, Andheri West, Lokhandwala, Lokhandwala Complex', lat: 19.13, lng: 72.84 },
  { city: 'Delhi', address: '12A, Connaught Place, Block A, Rajiv Chowk', lat: 28.63, lng: 77.22 },
  { city: 'Hyderabad', address: '8-2-293, Madhapur, Hitech City, Near Cyber Towers', lat: 17.44, lng: 78.38 },
];
function Location() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const navigate = useNavigate();

  // Haversine formula to calculate distance
  const getDistance = (lat1, lng1, lat2, lng2) => {
    const toRad = (val) => (val * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Find nearest location from JSON data
        let nearest = locations[0];
        let minDist = getDistance(latitude, longitude, nearest.lat, nearest.lng);

        for (let loc of locations) {
          const dist = getDistance(latitude, longitude, loc.lat, loc.lng);
          if (dist < minDist) {
            nearest = loc;
            minDist = dist;
          }
        }

        localStorage.setItem('selectedCity', nearest.city);
        localStorage.setItem('selectedAddress', nearest.address);

        window.dispatchEvent(new Event('locationChanged'));
        navigate('/');
      },
      (error) => {
        console.error('Geolocation error:', error);
        alert('Unable to retrieve your location. Please check permissions.');
      }
    );
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    const filtered = locations.filter(loc =>
      loc.city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredLocations(filtered);
  };

  const handleSelectLocation = (city, address) => {
    localStorage.setItem('selectedCity', city);
    localStorage.setItem('selectedAddress', address);

    window.dispatchEvent(new Event('locationChanged'));
    navigate('/');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      localStorage.setItem('selectedCity', searchQuery);
      localStorage.setItem('selectedAddress', `${searchQuery} - Searched City`);
      window.dispatchEvent(new Event('locationChanged'));
      navigate('/');
    }
  };

  return (
    <div className="container-md container-md-fluid locationhead">
      <form onSubmit={handleSearchSubmit}>
        <div className="row mt-4 ms-3 locationhead1 mb-1 position-relative">
          <div className="col searchlocate col-md-6 col-12">
            <img src={searchIcon} className='searchLoc' alt="Search" style={{ height: '18px', marginBottom: '4px' }} />
            <input
              type="text"
              placeholder="Search for your location"
              value={searchQuery}
              onChange={handleSearchChange}
              className="ms-2 locationcol1placeholder"
              style={{ border: 'none', outline: 'none', fontSize: '15px', width: '90%' }}
            />
            {filteredLocations.length > 0 && (
              <ul style={{
                listStyle: 'none',
                padding: '10px',
                background: '#fff',
                border: '1px solid #ccc',
                position: 'absolute',
                zIndex: 999,
                top: '40px',
                left: '0',
                width: '100%',
                maxHeight: '200px',
                overflowY: 'auto',
                borderRadius: '4px',
              }}>
                {filteredLocations.map((loc, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelectLocation(loc.city, loc.address)}
                    style={{ padding: '5px 0', cursor: 'pointer' }}
                  >
                    <strong>{loc.city}</strong> – {loc.address}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="col col-md-6 pt-1 currentlocate text-end">
            <button
              type="button"
              onClick={handleUseCurrentLocation}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <img src={locate} alt="Locate" className="currentlocate2" />
              <span className="currentlocate3" style={{ color: '#0d0d0e', fontSize: '15px', marginLeft: '5px' }}>
                Use current location
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Location;



