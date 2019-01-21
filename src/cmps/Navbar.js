import React from 'react';
// import { connect } from 'react-redux';
// import CatPreview from './catPreview';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="nav-bar">
            <NavLink exact to="/">
                <h3 className="capitalize pointer">Cats</h3>
            </NavLink>
            <div>
                <NavLink to={'/cat/edit/new'}>
                    Add Cat
                </NavLink>
                <NavLink to="/cat">
                    <i className="fas fa-cat"></i>
                </NavLink>
            </div>
        </header>

    )
}


// function mapStateToProps(state) {
//     return {
//         cats: state.cats
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return {

//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(CatList)
export default Navbar