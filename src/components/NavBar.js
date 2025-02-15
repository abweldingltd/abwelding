import React, { useState } from 'react';
import './NavBar.css';
import logo from './LogoNew.jpg';
import { Link } from 'react-router-dom';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="NavBarTop">
            <div className='NavBar'>
                <div className="NavBar_Menu">
                    <div className="left">
                        <Link to='/'>
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="right">
                        <div className="desktop_menu">
                            <button className='menu_item' onClick={() => scrollToSection('services')}>
                                Services
                            </button>
                            <button className='menu_item' onClick={() => scrollToSection('about_us')}>
                                About Us
                            </button>
                            <button className='menu_item' onClick={() => scrollToSection('our_work')}>
                                Our Work
                            </button>
                            <button className='menu_item' onClick={() => scrollToSection('contact_us')}>
                                Contact Us
                            </button>
                        </div>

                        <button className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} aria-label="Mobile Menu">
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                            <div className="hamburger-line"></div>
                        </button>
                    </div>
                </div>

                <div className={`mobile_menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile_menu_items">
                        <Link to="/" onClick={toggleMobileMenu}>Home</Link>
                        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                            Services
                        </a>
                        <a href="#about_us" onClick={(e) => { e.preventDefault(); scrollToSection('about_us'); }}>
                            About Us
                        </a>
                        <a href="#our_work" onClick={(e) => { e.preventDefault(); scrollToSection('our_work'); }}>
                            Our Work
                        </a>
                        <a href="#contact_us" onClick={(e) => { e.preventDefault(); scrollToSection('contact_us'); }}>
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;