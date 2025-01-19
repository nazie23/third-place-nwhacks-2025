import React from 'react';
import '../styles/Complete.css';

const LoyaltyCard = ({ loyaltyData }) => {
  if (!loyaltyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="loyalty-card">
      <h2>Loyalty Card</h2>
      <div className="card-details">
        <p>Name: {loyaltyData.name}</p>
        <p>Points: {loyaltyData.points}</p>
        <div className="barcode">
          {/* Placeholder for barcode/QR code */}
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${loyaltyData.barcode}`}
            alt="QR Code"
          />
        </div>
        <div className="coupons">
          <h3>Available Coupons:</h3>
          <p>
            {loyaltyData.coupon} - {loyaltyData.coupon_points} points
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
