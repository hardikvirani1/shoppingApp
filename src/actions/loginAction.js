import { USERNAME_CHANGE, PASSWORD_CHANGE, LOGIN_USER, LOGIN_SUCCESS} from './types';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import Constant from '../services/apiConstant'
import {CallApi} from '../services/apiCall'

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
    return (dispatch, getState) => {
        return CallApi(Constant.baseUrl+Constant.login,'post',{ name: email, password: password},{})
            .then((response)=>{

                let user = {
                    email:email,
                    password:password,
                };
                AsyncStorage.setItem('user',JSON.stringify(user),(res)=>{
                });

                dispatch({
                    type: LOGIN_USER,
                    payload: response.data,
                });
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: response.data.message
                });
                return Promise.resolve('Login SuccessFully')
            })

            .catch((error)=>{
                if (error.response){
                    AsyncStorage.clear();
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: 1
                    });
                    return Promise.reject(error.response.data.error)
                }else {
                    return Promise.reject("Network Error")
                }
            })
    };
};
