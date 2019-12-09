/* eslint react/prop-types: 0 */
import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import LandingPageNav from './LandingPageNav';
import { userActions } from '../../redux/actions/userActions';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password)
        }
    }

    render(){
        const { loggingIn } = this.props;
        const { username, password } = this.state;
        return (
            <div>
                <LandingPageNav />
                <header id="showcase">
                    <div className="auth">
                        <form onSubmit={this.handleSubmit}>
                            <h2>Sign In</h2>
                            <input 
                             className="transparent" 
                             type="text" name="username"
                             onChange={this.handleChange}
                             value={username}
                             placeholder="Username" 
                            />
                            <input 
                             className="transparent" 
                             type="password" 
                             name="password"
                             onChange={this.handleChange} 
                             value={password}
                             placeholder="Password"
                            />
                            <button className="button transparent" type="submit" name="submit"> Log In</button>
                            {loggingIn &&
                                <img alt="loader" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                            <br/><br/><br/><br/>
                            Dont have account?<Link to="/register" className="links"> Sign Up</Link>
                        </form>
                    </div>
                </header>
            </div>
       )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication
    return { loggingIn };
}

const mapDispatchToProps = {
    login: userActions.login
};

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
export { connectedLoginPage as Login };
