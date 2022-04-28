import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {

    const clickHandler = () => {
        toggle();
        window.scrollTo(0, 0);
    }

    const toggleClass = isOpen ? 'show' : 'hide';

    return (
        <div className='Sidebar'>
            <div className={'sidebar-container ' + toggleClass}>
                <div className='sidebar-wrapper'>
                    <ul className='sidebar-menu'>
                        <NavLink to="/home" onClick={clickHandler} >Home</NavLink>
                        <NavLink to="/cat/Bollywood" onClick={clickHandler} >Bollywood</NavLink>
                        <NavLink to="/cat/Technology" onClick={clickHandler} >Technology</NavLink>
                        <NavLink to="/cat/Hollywood" onClick={clickHandler} >Hollywood</NavLink>
                        <NavLink to="/cat/Travel" onClick={clickHandler} >Travel</NavLink>
                        <NavLink to="/cat/Food" onClick={clickHandler} >Food</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;