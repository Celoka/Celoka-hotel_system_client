import React from 'react';
import { NavLink } from 'react-router-dom'

const LandingPageNav = () => {
    const activeStyle = { color: "#F15B2A" }
    return(
        <nav>
            <div className="logo">
                <NavLink to="/" activeStyle={activeStyle} className="links" exact>
                    <h4>Hotel Phoenix</h4>
                </NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to="/" activeStyle={activeStyle} className="links">
                        Home
                    </NavLink>
                </li>
                { " | "}
                <li>
                    <NavLink to="/register" activeStyle={activeStyle}  className="links">
                        Sign Up
                    </NavLink>
                </li>
                {" | "}
                <li>
                    <NavLink to="/login" activeStyle={activeStyle} className="links">
                        Sign In
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default LandingPageNav;
