import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">LOREM IPSUM</div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#">Booking</a></li>
                    <li><a href="#">Facilities</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="login-btn">Login</button>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
