import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className='nav'>
                <div className='nav-menu'>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/cat/Bollywood" >Bollywood</NavLink>
                    <NavLink to="/cat/Technology" >Technology</NavLink>
                    <NavLink to="/cat/Hollywood" >Hollywood</NavLink>
                    <NavLink to="/cat/Travel" >Travel</NavLink>
                    <NavLink to="/cat/Food" >Food</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
