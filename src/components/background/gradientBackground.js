import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const GradientBackground = ({ children }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const noiseRef = useRef(null);
    const scanlinesRef = useRef(null);
    const frameIdRef = useRef(null);
    const threeInstanceRef = useRef(null);

    useEffect(() => {
        // Set up noise canvas
        const noiseCanvas = noiseRef.current;
        const noiseCtx = noiseCanvas.getContext('2d');

        // Set up Three.js scanlines
        const scanlineCanvas = scanlinesRef.current;
        const renderer = new THREE.WebGLRenderer({
            canvas: scanlineCanvas,
            alpha: true
        });

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        // Create scanline shader
        const scanlinesMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                opacity: { value: 0.08 },
                lines: { value: 800.0 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform float time;
                uniform float opacity;
                uniform float lines;
                varying vec2 vUv;
                
                void main() {
                    float scan = sin(vUv.y * lines + time) * 0.5 + 0.5;
                    gl_FragColor = vec4(vec3(scan), opacity);
                }
            `,
            transparent: true
        });

        const plane = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            scanlinesMaterial
        );
        scene.add(plane);

        const resize = () => {
            // Resize noise canvas
            noiseCanvas.width = window.innerWidth;
            noiseCanvas.height = window.innerHeight;

            // Resize Three.js renderer
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        resize();

        const createNoise = () => {
            const imageData = noiseCtx.createImageData(noiseCanvas.width, noiseCanvas.height);
            const data = imageData.data;
            const pixelSize = 2;

            for (let y = 0; y < noiseCanvas.height; y += pixelSize) {
                for (let x = 0; x < noiseCanvas.width; x += pixelSize) {
                    const noise = Math.random() * 255;

                    for (let py = 0; py < pixelSize && y + py < noiseCanvas.height; py++) {
                        for (let px = 0; px < pixelSize && x + px < noiseCanvas.width; px++) {
                            const i = ((y + py) * noiseCanvas.width + (x + px)) * 4;
                            data[i] = noise;
                            data[i + 1] = noise;
                            data[i + 2] = noise;
                            data[i + 3] = 15;
                        }
                    }
                }
            }
            return imageData;
        };

        let lastNoiseUpdate = 0;
        const noiseInterval = 200;
        let time = 0;

        const animate = () => {
            const currentTime = Date.now();

            // Update noise
            if (currentTime - lastNoiseUpdate > noiseInterval) {
                noiseCtx.putImageData(createNoise(), 0, 0);
                lastNoiseUpdate = currentTime;
            }

            // Update scanlines (speed)
            time += 0.05;
            scanlinesMaterial.uniforms.time.value = time;
            renderer.render(scene, camera);

            frameIdRef.current = requestAnimationFrame(animate);
        };
        animate();

        const handleScroll = () => {
            const transitionDistance = window.innerHeight * 0.65;
            const scrollPosition = window.scrollY;
            const progress = Math.min(scrollPosition / transitionDistance, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', resize);

        handleScroll();

        threeInstanceRef.current = {
            renderer,
            scene,
            camera
        };

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(frameIdRef.current);

            // Clean up Three.js
            renderer.dispose();
            scene.remove(plane);
            plane.geometry.dispose();
            plane.material.dispose();
        };
    }, []);

    const gradientStyle = {
        backgroundImage: 'linear-gradient(80deg, #054f7d, #00c8cf, #cabf40, #861a54, #410257)',
        backgroundSize: '600%',
        backgroundPosition: '0 0',
        animation: 'gradients 40s infinite'
    };

    const wrapperStyle = {
        minHeight: '100vh',
        position: 'relative',
        zIndex: 0
    };

    const layerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease'
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1
    };

    return (
        <div style={wrapperStyle}>
            <div
                style={{
                    ...layerStyle,
                    ...gradientStyle,
                    opacity: 1 - scrollProgress,
                    zIndex: -2
                }}
            />
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
                    opacity: 0.7
                }}
            />
            <canvas
                ref={scanlinesRef}
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
            <div
                style={{
                    ...layerStyle,
                    backgroundColor: '#1b1b1b',
                    opacity: scrollProgress,
                    zIndex: -1
                }}
            />
            <div style={contentStyle}>
                {children}
            </div>
            <style>
                {`
                    @keyframes gradients {
                        0% { background-position: 0 0; }
                        25% { background-position: 50% 0; }
                        50% { background-position: 90% 0; }
                        75% { background-position: 50%; }
                        100% { background-position: 0 0; }
                    }
                `}
            </style>
        </div>
    );
};

export default GradientBackground;