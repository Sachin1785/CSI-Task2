import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularHotels from './components/PopularHotels';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <PopularHotels />
            <Location />
            <Footer />
        </div>
    );
}

export default App;
