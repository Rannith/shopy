import * as types from '../Action/actionType'

const initialState = {
    users: [],
    user: {},
    products: [],
    popularproducts: [],
    newproducts: [],
    product: {},
    loading: true,
    value: [],
    quantity: 0
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
        case types.ADD_TO_CART:
            const val = [...state.value,action.payload]
            return {
                ...state,
                value: val
            }
        case types.REMOVE_FROM_CART:
            const newBasket = [...state.value];
            const index = state.value.findIndex((item) => item.id === action.payload)
            newBasket.splice(index,1)
            return {
                ...state,
                value: newBasket
            }
        case types.UPDATE_QTY:
            return {
                ...state,
                value: state.value.map(element => {
                    if(element.id === action.payload.id) {
                        return {
                            ...element,
                            quantity: action.payload.quantity
                        }
                    }
                    return element
                })
            }
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