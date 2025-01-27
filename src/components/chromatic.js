import React, { useState, useEffect } from 'react';

const ChromaticAberration = ({ children, threshold = 50 }) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = Math.abs(currentScrollY - lastScrollY);

            if (scrollDelta > threshold) {
                setIsGlitching(true);
                // Calculate offset based on scroll speed
                const maxOffset = Math.min(scrollDelta / 100, 3);
                setOffset({
                    x: (Math.random() * 2 - 1) * maxOffset,
                    y: (Math.random() * 2 - 1) * maxOffset
                });

                // Reset glitch effect after a short delay
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    setIsGlitching(false);
                    setOffset({ x: 0, y: 0 });
                }, 150);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [lastScrollY, threshold]);

    const containerStyle = {
        position: 'relative',
        overflow: 'hidden'
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1
    };

    const createGlitchLayer = (color, offset) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        mixBlendMode: 'screen',
        pointerEvents: 'none',
        transition: isGlitching ? 'none' : 'transform 0.3s ease',
        filter: `opacity(0.5) brightness(150%)`,
        color: color
    });

    return (
        <div className="relative" style={containerStyle}>
            {isGlitching && (
                <>
                    <div style={createGlitchLayer('#00a7cf', { x: offset.x * -1, y: offset.y * -1 })}>
                        {children}
                    </div>
                    <div style={createGlitchLayer('#054f7d', { x: offset.x, y: offset.y })}>
                        {children}
                    </div>
                </>
            )}
            <div style={contentStyle}>
                {children}
            </div>
        </div>
    );
};

export default ChromaticAberration;