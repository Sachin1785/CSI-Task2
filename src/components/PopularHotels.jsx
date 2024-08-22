import React from 'react';
import HotelCard from './HotelCard';

function PopularHotels() {
    return (
        <section className="popular-hotels">
            <div className="container">
                <h2 className="animate-slide-up">Our most popular Hotels</h2>
                <p className="animate-fade-in">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="view-all-btn">View All</button>
                <div className="hotels-grid" style={{ display: 'flex', marginTop: '40px' }}>
                    <HotelCard
                        imageSrc="src\assets\DJCSI Technical Tasks (1).png"
                        name="Danubius Hotel Regents Park"
                        price="$200 Per Night"
                        rating={4}
                    />
                    <HotelCard
                        imageSrc="src\assets\DJCSI Technical Tasks (2).png"
                        name="The Resident Soho"
                        price="$200 Per Night"
                        rating={3.8}
                    />
                    <HotelCard
                        imageSrc="src\assets\DJCSI Technical Tasks (3).png"
                        name="London Bridge Hotel"
                        price="$200 Per Night"
                        rating={4.7}
                    />
                </div>
            </div>
        </section>
    );
}

export default PopularHotels;
