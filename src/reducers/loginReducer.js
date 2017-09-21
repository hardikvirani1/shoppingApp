import { USERNAME_CHANGE, PASSWORD_CHANGE, LOGIN_USER, LOGIN_SUCCESS, } from '../actions/types';

const  INITIAL_STATE = {email: 'user@user.com', password: 'user', user: '', loginSuccess: 0};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USERNAME_CHANGE :
            return { ...state, email: action.payload};

        case PASSWORD_CHANGE :
            return { ...state, password:action.payload};

        case LOGIN_USER :
            return { ...state, user:action.payload};

        case LOGIN_SUCCESS: {
            return { ...state, loginSuccess: action.payload}
        }

        default :
                return state;
    }
}