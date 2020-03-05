import React from 'react';
import './header.css';
import logo from '../Images/logo.jpg';
import brokerLogo from '../Images/brokerLogo.jpg';


const Header = () => {
    return (
        <header className="header">
            <img alt="logo" className="logo" src={logo}/>
            <a target="_blank" rel="noopener noreferrer" href="https://brokercheck.finra.org/individual/summary/3167711">
                <img alt="broker-check" className="broker-img" src={brokerLogo}/>
            </a>
            <h2 className="contact">Contact Us: (717)840-0749</h2>
        </header>
    );
};

export default Header;