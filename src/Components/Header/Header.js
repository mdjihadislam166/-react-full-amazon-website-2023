import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
       <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <Link  to="/">Shop</Link>
            <Link  to="/order">Orders</Link>
            <Link  to="/sama">Inventory</Link>
            <Link  to="/about">About</Link>
            <Link  to="/login">Login</Link>
            <Link  to="/signUp">Sign Up</Link>
        </div>
       </nav>
    );
};

export default Header;