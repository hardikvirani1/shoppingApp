import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL} from './types';
import {AsyncStorage} from 'react-native';
import Constant from '../services/apiConstant'
import {CallApi} from '../services/apiCall'

export const getAllProduct = () => {
    return (dispatch, getState) => {
        return CallApi(Constant.baseUrl+Constant.img,'put',{},{})
            .then((response)=>{
                debugger;
                dispatch({
                    type: GET_PRODUCT_SUCCESS,
                    payload: response.data,
                });

                return Promise.resolve('Products Get SuccessFully')
            })

            .catch((error)=>{
                if (error.response){
                    dispatch({
                        type: GET_PRODUCT_FAIL,
                        payload: 'Products Get Failed'
                    });
                    return Promise.reject(error.response.data.error)
                }else {
                    return Promise.reject("Network Error")
                }
            })
    };
};
