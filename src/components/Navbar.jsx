import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        <a href="/">Mesakine</a>
                    </div>

                    <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                        <Link to="/services" onClick={() => setIsOpen(false)}>Hizmetlerimiz</Link>
                        <Link to="/passive-house" onClick={() => setIsOpen(false)}>Pasif Ev Nedir?</Link>
                        <a href="/#projects" onClick={() => setIsOpen(false)}>Projelerimiz</a>
                        <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                        <a href="/#about" onClick={() => setIsOpen(false)}>Hakkımızda</a>
                        <a href="#contact" className={styles.ctaButton} onClick={() => setIsOpen(false)}>İletişim</a>
                    </div>

                    <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
