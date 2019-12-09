import { authHeader } from '../helpers/auth-header';
import toastr from 'toastr';

const baseUrl = process.env.REACT_APP_API_BASE_URL

export const userService = {
    register,
    login,
    logout,
    update
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }
    return fetch(`${baseUrl}auth/register/`, requestOptions)
          .then(handleResponse)
          .then(user => {
              toastr.success('Registration Successful. Please sign in.')
              return user
    })
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }
    return fetch(`${baseUrl}auth/login/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            toastr.success(`Welcome, ${user.username}`)
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
        .catch(error => {
            return error
        })
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }
    return fetch(`${baseUrl}/users/${user.id}`, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }
            const error = (data && data.message) || response.statusText;
            toastr.error(error)
            return Promise.reject(error)
        }

        return data;
    })
}
