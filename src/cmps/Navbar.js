import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="nav-bar">
            <NavLink exact to="/redux-cats/">
                <h3 className="capitalize pointer"><i className="fas fa-cat"></i></h3>
            </NavLink>
            <div>
                <NavLink to="/redux-cats/cat">
                    Cat Gallery
                </NavLink>
                <NavLink to={'/redux-cats/cat/edit/new'}>
                    Add Cat
                </NavLink>
            </div>
        </header>

    )
}



export default Navbar