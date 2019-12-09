import toastr from 'toastr';
import { userConstants } from '../constants/constants';
import { userService } from '../../services/userService';
import { history } from '../../helpers/history';

export const userActions = {
    login,
    register,
    logout
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/search');
                },
                error => {
                    toastr.error(error)
                }
            )
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
        .then(
            user => {
                dispatch(success(user));
                history.push('/login');
            }
            ).catch(error => console.log(error))
        };
        
        function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
        function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
}
    
function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}
