import { useState, useEffect } from 'react';
import './navigation.css';
import './navigationbreakpoints.css';
import '../libraries/flexgrid.css';
import menuIcon from '../../media/icons/Artboard 1.svg';
import {Link} from "react-router-dom";
import Resume from "../../media/resume/ResumeAaronSpalding.pdf";

const Navigation = ({ section }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSolid, setIsSolid] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
        document.body.style.overflow = isExpanded ? 'auto' : 'hidden';

        // When menu is expanded, remove solid background
        if (!isExpanded) {
            setIsSolid(false);
        } else {
            // When menu is closed, check if we need to set solid based on scroll position
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                const aboutTop = aboutSection.getBoundingClientRect().top;
                setIsSolid(aboutTop <= 0);
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Only update solid state when menu is not expanded
            if (!isExpanded) {
                const aboutSection = document.querySelector('.about-section');
                if (aboutSection) {
                    const aboutTop = aboutSection.getBoundingClientRect().top;
                    setIsSolid(aboutTop <= 0);
                }
            }
        };

        // Reset body overflow when component mounts
        document.body.style.overflow = 'auto';

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Reset body overflow when component unmounts
            document.body.style.overflow = 'auto';
        };
    }, [isExpanded]); // Add isExpanded as a dependency

    // Reset body overflow and menu state when section prop changes (page navigation)
    useEffect(() => {
        setIsExpanded(false);
        document.body.style.overflow = 'auto';
    }, [section]);

    return (
        <>
            <div className={`overlay ${isExpanded ? 'visible' : ''}`} onClick={toggleMenu}/>
            <nav className={`nav-sidebar ${isExpanded ? 'expanded' : ''} ${isSolid && !isExpanded ? 'solid' : ''}`}>
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
                    <Link to="/"><h2>home</h2></Link>
                    <Link to="/cases"><h2>cases</h2></Link>
                    <Link to="/music"><h2>music</h2></Link>
                    <a href={Resume} target="_blank" rel="noopener noreferrer"><h2>resume (pdf)</h2></a>
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