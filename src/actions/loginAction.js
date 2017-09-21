import { USERNAME_CHANGE, PASSWORD_CHANGE, LOGIN_USER} from './types';

export const usernameChanged = (value) => {
    return {
        type: USERNAME_CHANGE ,
        payload: value,
    }
};

export const passwordChanged = (value) => {
    return {
        type: PASSWORD_CHANGE ,
        payload: value,
    }
};

export const loginSet = (email, password) => {
    return {
        type: LOGIN_USER,
        payload: 'Successfully'
    }
};
