import React from 'react';

function Location() {
    return (
        <section className="location">
            <div className="container">
                <h2 className="animate-slide-up">Location of our Hotels</h2>
                <p className="animate-fade-in">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="map animate-slide-in">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7112589640604!2d-122.41941828468199!3d37.7749292797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085817d8b8d8d8d%3A0xabc1234567890!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1595627318390!5m2!1sen!2sus"
                        title="Map" 
                        style={{ border: 0, width: '100%', height: '400px' }} 
                        allowFullScreen 
                        aria-hidden="false" 
                        tabIndex="0">
                    </iframe>
                </div>
                <div class=" IGiveUp">
                    <div style={{flex:'1'}}>
                        <h1 class=" IGiveUp2">Location of our Hotels</h1>
                        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's</p>
                    </div>
                    <div style={{flex:'1'}}>
                        <form className="email-form animate-slide-up">
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">Contact</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Location;
