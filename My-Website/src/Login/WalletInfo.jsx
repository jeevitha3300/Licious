import React from 'react';
import { useNavigate } from 'react-router-dom';
import infoimg from './LoginImages/infoimg.jpeg'

const WalletInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="container   text-center" style={{marginLeft:'10%'}}>
      <img
        src={infoimg}
        alt="Licious Wallet Explanation"
        className="img-fluid rounded border"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <button className="btn btn-outline-danger mt-4" onClick={() => navigate(-1)}>
        ← Back to Wallet
      </button>
    </div>
  );
};

export default WalletInfo;
