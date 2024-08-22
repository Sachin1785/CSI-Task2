import React from 'react';

function StarRating({ rating }) {
    const filledStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStar;

    return (
        <div className="star-rating">
            {Array.from({ length: filledStars }, (_, i) => (
                <span key={i} className="filled-star">★</span>
            ))}
            {halfStar === 1 && <span className="half-star">★</span>}
            {Array.from({ length: emptyStars }, (_, i) => (
                <span key={i + filledStars + halfStar} className="empty-star">☆</span>
            ))}
        </div>
    );
}

export default StarRating;
