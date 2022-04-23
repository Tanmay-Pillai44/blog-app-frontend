import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const setActiveLink = ({isActive}) => (isActive ? "link-active" : "link");


    return (
        <div className='Header'>

            <div className='title'>
                <div className='the'>The</div>
                <div className='siren'>Siren</div>
            </div>

            <div className='navbar'>
                <NavLink to="/home" className={setActiveLink}>Home</NavLink>
                <NavLink to="/bollywood" className={setActiveLink}>Bollywood</NavLink>
                <NavLink to="/technology" className={setActiveLink}>Technology</NavLink>
                <NavLink to="/hollywood" className={setActiveLink}>Hollywood</NavLink>
                <NavLink to="/travel" className={setActiveLink}>Travel</NavLink>
                <NavLink to="/food" className={setActiveLink}>Food</NavLink>
            </div>

            <div  className='header-hr'></div>
        </div>
    )
}

export default Header;