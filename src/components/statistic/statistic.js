import React, { useState, useEffect, useRef } from 'react';

function Statistic({prefix, number, text, suffix}) {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    // This will start counting when the element is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the element is in view, start the count up
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing after visibility
                }
            },
            {
                threshold: 0.1, // Trigger when at least 10% of the element is visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current); // Cleanup observer
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            // Start the count-up process over a fixed duration
            const duration = 1000; // Time in milliseconds (2 seconds)
            const startTime = Date.now();
            const endNumber = number;

            const animateNumber = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
                const number = Math.floor(progress * endNumber);

                setCurrentNumber(number);

                // Continue updating the number until the duration is reached
                if (progress < 1) {
                    requestAnimationFrame(animateNumber);
                }
            };

            animateNumber();
        }
    }, [isVisible, number]); // Only start when the element becomes visible

    return (
        <section className="" ref={elementRef}>
            <h1 className="mono">{prefix}{currentNumber}{suffix}</h1>
            <p className="p20">{text}</p>
        </section>
    );
}

export default Statistic;
