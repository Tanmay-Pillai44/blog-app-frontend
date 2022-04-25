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
                <NavLink to="/cat/Bollywood" className={setActiveLink}>Bollywood</NavLink>
                <NavLink to="/cat/Technology" className={setActiveLink}>Technology</NavLink>
                <NavLink to="/cat/Hollywood" className={setActiveLink}>Hollywood</NavLink>
                <NavLink to="/cat/Travel" className={setActiveLink}>Travel</NavLink>
                <NavLink to="/cat/Food" className={setActiveLink}>Food</NavLink>
            </div>

            <div  className='header-hr'></div>
        </div>
    )
}

export default Header;