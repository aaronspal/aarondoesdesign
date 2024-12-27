import React, { useEffect, useState } from 'react';
import './gradientbackground.css';


const GradientBackground = ({ children }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // Add keyframe animation styles
        const style = document.createElement('style');
        style.textContent = `
      @keyframes gradients {
        0% { background-position: 0 0; }
        25% { background-position: 50% 0; }
        50% { background-position: 90% 0; }
        60% { background-position: 60%; }
        75% { background-position: 40%; }
        100% { background-position: 0 0; }
      }
    `;
        document.head.appendChild(style);

        const handleScroll = () => {
            const transitionDistance = window.innerHeight * 0.65;
            const scrollPosition = window.scrollY;
            const progress = Math.min(scrollPosition / transitionDistance, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);

        // Initial call to set initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="gradient-background-wrapper">
            <div
                className="gradient-background-layer gradient"
                style={{
                    opacity: 1 - scrollProgress,
                }}
            />
            <div
                className="gradient-background-layer solid"
                style={{
                    opacity: scrollProgress,
                }}
            />
            <div className="gradient-background-content">
                {children}
            </div>
        </div>
    );
};

export default GradientBackground;