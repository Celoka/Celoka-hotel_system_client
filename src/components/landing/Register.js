/* eslint react/prop-types: 0 */
import React from "react";// import toastr from 'toastr';
import { connect } from 'react-redux';
import LandingPageNav from './LandingPageNav';
import { userActions } from '../../redux/actions/userActions';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username:"",
                firstName:"",
                lastName:"",
                email:"",
                password:""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { user } = this.state;
        const { register } = this.props
        if (user.username && user.firstName && user.lastName && user.email&& user.password) {
            register(user);
        }
    }
    render(){
        const { registering } = this.props;
        const { username, firstName, lastName, email, password } = this.state.user;
        return(
           <div>
               <LandingPageNav />
               <header id="showcase">
                   <div className="auth">
                       <form onSubmit={this.handleSubmit}>
                           <h2>Sign Up</h2>
                           <input
                             className="transparent" 
                             type="text" 
                             name="username" 
                             onChange={this.handleChange}
                             value={username} 
                             placeholder="Username"
                             required
                            />
                           <input 
                             className="transparent" 
                             type="text" 
                             name="firstName"
                             onChange={this.handleChange}
                             value={firstName} 
                             placeholder="First Name"
                             required
                            />
                           <input 
                             className="transparent" 
                             type="text" 
                             name="lastName"
                             onChange={this.handleChange}
                             value={lastName} 
                             placeholder="Last Name"
                             required
                            />
                           <input 
                             className="transparent" 
                             type="email" 
                             name="email"
                             onChange={this.handleChange}
                             value={email} 
                             placeholder="Email"
                             required 
                            />
                           <input 
                             className="transparent" 
                             type="password" 
                             name="password" 
                             onChange={this.handleChange}
                             value={password} 
                             placeholder="Password"
                             required 
                            />
                           <button className="button transparent" type="submit" name="submit"> Register </button>
                            {registering &&
                                <img  alt="loader" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                       </form>
                   </div>
               </header>
           </div>
       ) 
    }
}


function mapStateToProps(state) {
    const { registering } = state.registration
    return { registering };
}

const mapDispatchToProps = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(Register);
export { connectedRegisterPage as Register };
