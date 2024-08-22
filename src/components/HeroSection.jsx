import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/DJCSI Technical Tasks.png"; // Correct path relative to the HeroSection.jsx file

function HeroSection() {
    return (
        <motion.div
            className="hero-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="hero-content"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <h1>Find your perfect place to stay</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
                <button
                    className="watch-video-btn"
                    onClick={() =>
                        window.open(
                            "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        )
                    }
                >
                    <span>&#9658;</span> Watch Video
                </button>
            </motion.div>
            <motion.div
                className="hero-image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <img src={heroImage} alt="House" />
            </motion.div>
        </motion.div>
    );
}

export default HeroSection;