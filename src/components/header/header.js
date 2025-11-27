import './header.css'
import logo from '../../media/icons/logo/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [headerOpacity, setHeaderOpacity] = useState(1);
    const [headerTransform, setHeaderTransform] = useState(0);
    const [virtualScroll, setVirtualScroll] = useState(0);

    const isShowcasePage = location.pathname.startsWith('/showcases/');

    useEffect(() => {
        const maxScroll = 400;

        const handleWheel = (e) => {
            if (isShowcasePage && window.scrollY === 0) {
                const newVirtualScroll = Math.max(0, Math.min(virtualScroll + e.deltaY, maxScroll));
                setVirtualScroll(newVirtualScroll);
                const progress = newVirtualScroll / maxScroll;

                setHeaderOpacity(1 - progress);
                setHeaderTransform(-100 * progress);
            }
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);

            // Reset header when on non-showcase pages or scrolled away from top
            if (!isShowcasePage) {
                setHeaderOpacity(1);
                setHeaderTransform(0);
                setVirtualScroll(0);
            }
            // Reset virtual scroll when scrolled back to top after scrolling away
            else if (window.scrollY === 0 && virtualScroll === maxScroll) {
                setVirtualScroll(maxScroll);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Run once on mount

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isShowcasePage, virtualScroll]);

    const navItems = [
        { name: 'Work', path: '/work' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Resume', path: '/resume' }
    ];

    return (
        <header
            className={`flexContainer spaceBetween container header ${isScrolled ? 'scrolled' : ''}`}
            style={isShowcasePage ? {
                opacity: headerOpacity,
                transform: `translateY(${headerTransform}%)`,
                pointerEvents: headerOpacity === 0 ? 'none' : 'auto'
            } : {}}
        >
            <Link to="/" className="flexContainer g15" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img src={logo} alt="Aaron Spalding Logo" className="logo" />
                <h1>aarondoesdesign</h1>
            </Link>
            <nav className="flexContainer g20">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                        {location.pathname === item.path && <span className="nav-dot"></span>}
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;