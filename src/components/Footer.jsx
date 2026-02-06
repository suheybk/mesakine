import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', backgroundColor: 'var(--color-primary)', color: 'white', marginTop: 'auto' }}>
            <div className="container text-center">
                <p>&copy; {new Date().getFullYear()} Mesakine. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
