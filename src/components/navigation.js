import { useState, useEffect } from 'react';
import './navigation.css';
import '../components/flexgrid.css';
import menuIcon from '../media/icons/Artboard 1.svg';

const Navigation = ({ section }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSolid, setIsSolid] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
        document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    };

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                const aboutTop = aboutSection.getBoundingClientRect().top;
                setIsSolid(aboutTop <= 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`overlay ${isExpanded ? 'visible' : ''}`} onClick={toggleMenu}/>

            <nav className={`nav-sidebar ${isExpanded ? 'expanded' : ''} ${isSolid ? 'solid' : ''}`}>
                {/* Top section - Menu Icon */}
                <div className="nav-top">
                    <button className="menu-button" onClick={toggleMenu}>
                        <img src={menuIcon} alt="Menu" className="menu-icon" />
                    </button>
                </div>

                {/* Middle section - Carousel Text */}
                <div className={`text-carousel-container ${isExpanded ? 'hidden' : ''}`}>
                    <div className="text-carousel-scroll">
                        <div className="carousel-content">
                            <h3>{section}</h3>
                            <h3>AARONDOESDESIGN</h3>
                            <h3>{section}</h3>
                            <h3>AARONDOESDESIGN</h3>
                            <h3>{section}</h3>
                            <h3>AARONDOESDESIGN</h3>
                        </div>
                        {/* Duplicate content for seamless loop */}
                        <div className="carousel-content">
                            <h3>{section}</h3>
                            <h3>AARONDOESDESIGN</h3>
                            <h3>{section}</h3>
                            <h3>AARONDOESDESIGN</h3>
                            <h3>{section}</h3>
                            <h3>AARONDOESDESIGN</h3>
                        </div>
                    </div>
                </div>

                {/* Expanded Menu Items */}
                <div className={`menu-items ${isExpanded ? 'visible' : ''}`}>
                    <h2>home</h2>
                    <h2>work</h2>
                    <h2>music</h2>
                    <h2>resume</h2>
                </div>

                {/* Bottom section - Language Toggle */}
                <div className="nav-bottom">
                    DE
                </div>
            </nav>
        </>
    );
};

export default Navigation;