import React, { useEffect, useRef } from 'react';

const NoiseGradient = ({ children }) => {
    const noiseRef = useRef(null);
    const frameIdRef = useRef(null);

    useEffect(() => {
        const canvas = noiseRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const createNoise = () => {
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const data = imageData.data;

            for (let i = 0; i < data.length; i += 4) {
                const noise = Math.random() * 255;

                // Set RGB values
                data[i] = noise;     // R
                data[i + 1] = noise; // G
                data[i + 2] = noise; // B
                data[i + 3] = 15;    // A - very transparent
            }

            return imageData;
        };

        const animate = () => {
            ctx.putImageData(createNoise(), 0, 0);
            frameIdRef.current = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(frameIdRef.current);
        };
    }, []);

    return (
        <div className="gradient-background-wrapper">
            <div className="gradient-background-layer gradient" />
            <canvas
                ref={noiseRef}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    mixBlendMode: 'overlay',
                    zIndex: -1,
                }}
            />
            <div className="gradient-background-layer solid" />
            <div className="gradient-background-content">
                {children}
            </div>
        </div>
    );
};

export default NoiseGradient;