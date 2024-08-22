import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-links">
                    <div className="footer-section">
                        <h3>Home</h3>
                        <a href="#">Booking</a>
                        <a href="#">Facilities</a>
                        <a href="#">Location</a>
                        <a href="#">Contact</a>
                    </div>
                    <div className="footer-section">
                        <h3>Help</h3>
                        <a href="#">About Us</a>
                        <a href="#">Help center</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">FAQs</a>
                    </div>
                    <div className="footer-section">
                        <h3>Get the app</h3>
                        <a href="#">iOS app</a>
                        <a href="#">Android app</a>
                    </div>
                </div>
                <p>&copy; 2024 Lorem Ipsum. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
