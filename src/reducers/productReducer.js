import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, } from '../actions/types';

const  INITIAL_STATE = {product: [], failed: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_PRODUCT_SUCCESS :
            return { ...state, product: action.payload};

        case GET_PRODUCT_FAIL :
            return { ...state, failed:action.payload};

        default :
            return state;
    }
}