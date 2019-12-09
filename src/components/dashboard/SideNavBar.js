/* eslint react/prop-types: 0 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../redux/actions/userActions';


class SideNavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    logout(event) {
        event.preventDefault();
        this.props.logout();
    }
    render() {
        const { username } = this.props
        const activeStyle = { color: "#F15B2A" }

        return (
            <nav>
            <div className="logo">
                <NavLink to="/search" activeStyle={activeStyle} className="links" exact>
                    <h3>Welcome, {username}</h3>
                </NavLink>
            </div>
            <ul>
                <li><NavLink to="/search" activeStyle={activeStyle} className="links"><i className="fas fa-home"></i>Home</NavLink></li>{ " | "}
                <li onClick={this.logout.bind(this)}>
                    <NavLink to="/" activeStyle={activeStyle} className="links"><i className="fas fa-sign-out-alt"></i>Sign Out</NavLink></li>
            </ul>
        </nav>
        )
    }
}

function mapStateToProps(state) {
    const { username } = state.authentication.user
    return { username }
}

const mapDispatchToProps = {
    logout: userActions.logout
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(SideNavBar);
export { connectedComponent as SideNavBar };
