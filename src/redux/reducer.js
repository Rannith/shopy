import * as types from './actionType'

const initialState = {
    users: [],
    user: {},
    products: [],
    product: {},
    loading: true,
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case types.GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case types.DELETE_USER:
        case types.DELETE_PRODUCT:
        case types.ADD_USER:
        case types.ADD_PRODUCT:    
        case types.UPDATE_USER:
        case types.UPDATE_PRODUCT:
            return {
                ...state,
                loading:false
            }
        case types.GET_SINGLE_USER:
            return {
                ...state,
                user: action.payload,
                loading: false 
            }
        case types.GET_SINGLE_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false,
            };
        case types.GET_USER_PROFILE:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        default:
            return state;
    }
};

export default userReducers;