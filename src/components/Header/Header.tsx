import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss'

const Header = () => {
    return (
        <header className="header-container">
            <nav className="nav-menu">
                <NavLink to="/home_page" className="nav-link">HOME</NavLink>
                <NavLink to="/genres" className="nav-link">GENRES</NavLink>
                <NavLink to="/search_bar" className="nav-link">SEARCH MOVIE</NavLink>
            </nav>
        </header>
    );
};

export { Header };
