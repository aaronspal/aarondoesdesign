import React, { useState, useEffect } from 'react';

const SectionNav = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.about-section');
            const experienceSection = document.querySelector('.experience-section');
            const projectsSection = document.querySelector('.projects-section');
            const hideSection = document.querySelector('.hide-nav-section');

            if (aboutSection && experienceSection && projectsSection && hideSection) {
                const aboutTop = aboutSection.getBoundingClientRect().top;
                const experienceTop = experienceSection.getBoundingClientRect().top;
                const projectsTop = projectsSection.getBoundingClientRect().top;
                const hideTop = hideSection.getBoundingClientRect().top;

                // First check if we should hide the nav completely
                if (hideTop <= 0) {
                    setIsNavVisible(false);
                    return;
                }

                // Otherwise handle normal nav visibility and section switching
                setIsNavVisible(aboutTop <= 0);

                // Determine which section is active based on scroll position
                if (projectsTop <= 0) {
                    setActiveSection('projects');
                } else if (experienceTop <= 0) {
                    setActiveSection('experience');
                } else {
                    setActiveSection('about');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`section-nav ${isNavVisible ? 'visible' : ''}`}>
            <div className="content">
                <h2 className="glitch">
                    <span aria-hidden="true">{activeSection}</span>
                    {activeSection}
                    <span aria-hidden="true">{activeSection}</span>
                </h2>
            </div>
        </div>
    );
};

export default SectionNav;