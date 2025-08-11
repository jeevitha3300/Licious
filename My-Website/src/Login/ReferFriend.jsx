import React from 'react';
import './ReferFriend.css';
import referfriendimg from './LoginImages/referfriendimg.svg'
const ReferFriend = () => {
  return (
    <div className="refer-container">
      <h4 className="refer-title">Refer a friend</h4>
      <div className="refer-content">
        <img
          src={referfriendimg}
          alt="Refer a Friend"
          className="refer-image"
        />
        <div className="refer-text">
          <h5><strong>Shop to Refer!</strong></h5>
          <p>
            It seems like you haven’t shopped with us yet! Make a purchase and refer!
          </p>
          <a href="/" className="refer-link">
            Continue Shopping &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReferFriend;
