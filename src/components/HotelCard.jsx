import React from 'react';
import StarRating from './StarRating'; // Make sure to import the StarRating component

function HotelCard({ imageSrc, name, price, rating }) {
    return (
        <div className="hotel-card animate-scale-up">
            <img src={imageSrc} alt={name} />
            <div className="hotel-info" style={{marginLeft:'10px'}}>
                <h3>{name}</h3>
                <p>{price}</p>
                <div className="rating-container">
                    <StarRating rating={rating} />
                    <span className="rating-text">{rating}</span>
                </div>
            </div>
        </div>
    );
}

export default HotelCard;
