import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink to={''}>MOVIES</NavLink>
            <NavLink to={'/genres'}>GENRES</NavLink>
            <NavLink to={'/search_bar'}>SEARCH MOVIE</NavLink>
        </div>
    );
};

export {Header};