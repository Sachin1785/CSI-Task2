import React from 'react';
import HotelCard from './HotelCard';
import hotel1 from "../assets/DJCSI Technical Tasks (1).png";
import hotel2 from "../assets/DJCSI Technical Tasks (2).png";
import hotel3 from "../assets/DJCSI Technical Tasks (3).png";

function PopularHotels() {
    return (
        <section className="popular-hotels">
            <div className="container">
                <h2 className="animate-slide-up">Our most popular Hotels</h2>
                <p className="animate-fade-in">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="view-all-btn">View All</button>
                <div className="hotels-grid" style={{ display: 'flex', marginTop: '40px' }}>
                    <HotelCard
                        imageSrc={hotel1}
                        name="Danubius Hotel Regents Park"
                        price="$200 Per Night"
                        rating={4}
                    />
                    <HotelCard
                        imageSrc={hotel2}
                        name="The Resident Soho"
                        price="$200 Per Night"
                        rating={3.8}
                    />
                    <HotelCard
                        imageSrc={hotel3}
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
