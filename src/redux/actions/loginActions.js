import axios from "axios";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Actions
export const loginRequest = () => {
    return{
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (user) => {
    return{
        type: LOGIN_SUCCESS,
        payload: user
    }
}

export const loginFailure = (error) => {
    return{
        type: LOGIN_FAILURE,
        payload: error
    }
}

const virtualLogin = (user, pass) => {
    return (dispatch) => {
        const objUser = {
            usuario: user,
            contra: pass
        }
        console.log(objUser)
        dispatch(loginRequest());
        axios.post(`http://192.168.1.17:8000/api/login`, objUser)
        .then(response => {
            dispatch(loginRequest([response.data]));
        })
        .catch(error => {
            dispatch(loginFailure('Usuario y/o contraseña incorrectos'))
        })
    }
}

export default virtualLogin;