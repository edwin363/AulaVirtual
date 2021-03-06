import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/loginActions";

const initialState = {
    loading: false,
    user: [],
    error: ''
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true   
            }
        case LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            }
        default: return state;
    }
}

export default login;