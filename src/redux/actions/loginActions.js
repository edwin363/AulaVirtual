import { Axios } from "axios";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Actions
export const loginRequest = () => {
    return{
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (user, license) => {
    return{
        type: LOGIN_SUCCESS,
        payload: {
            user,
            license
        }
    }
}

export const loginFailure = (error) => {
    return{
        type: LOGIN_FAILURE,
        payload: error
    }
}

const virtualLogin = (user) => {
    return (dispatch) => {
        dispatch(loginRequest());
        Axios.post(``, {
            name: user.name,
            license: user.license
        }).then(response => {
            dispatch(loginRequest([response.data]));
        })
        .catch(error => {
            dispatch(loginFailure('Usuario y/o contraseña incorrectos'))
        })
    }
}

export default virtualLogin;