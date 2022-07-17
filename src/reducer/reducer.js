import * as types from '../action/actionType'

const initialState = {
    users: [],
    user: {},
    products: [],
    popularproducts: [],
    newproducts: [],
    product: {},
    loading: true,
    cart: [],
    successmessage: "",
    errormessage: "",
    productsCategory: [],
    isLogin: false
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
        case types.GET_POPULARPRODUCTS:
            return {
                ...state,
                popularproducts: action.payload,
                loading: false
            }
        case types.GET_NEWPRODUCTS:
            return {
                ...state,
                newproducts: action.payload,
                loading: false
            }
        case types.GET_PRODUCTS_CATEGORY:
            return {
                ...state,
                productsCategory: action.payload,
                loading: false
            }
        case types.SET_LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case types.SET_LOGOUT:
            return {
                ...state,
                isLogin: false
            }
        case types.GET_SUCCESS_MESSAGE:
            return {
                ...state,
                successmessage: action.payload,
                loading: true
            }
        case types.GET_ERROR_MESSAGE:
            return {
                ...state,
                errormessage: action.payload,
                loading: false
            }
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
        case types.USER_CART:
            return {
                ...state,
                cart: action.payload,
                loading: false,
            }
        default:
            return state;
    }
};

export default userReducers;