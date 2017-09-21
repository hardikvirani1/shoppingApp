import { USERNAME_CHANGE, PASSWORD_CHANGE, LOGIN_USER } from '../actions/types';

const  INITIAL_STATE = {email: '', password: '', user: '', };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USERNAME_CHANGE :
            return { ...state, email: action.payload};

        case PASSWORD_CHANGE :
            return { ...state, password:action.payload};

        case LOGIN_USER :
            return { ...state, user:action.payload};

        default :
                return state;
    }
}