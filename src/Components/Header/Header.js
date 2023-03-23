import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
       <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
        </div>
       </nav>
    );
};

export default Header;