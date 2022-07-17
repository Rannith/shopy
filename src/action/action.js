import axios from 'axios';
import * as types from './actionType';
import axiosInstance from '../container/api/axios';

const getUsers = users => ({
    type: types.GET_USERS,
    payload: users,
});

const getProducts = (products) => ({
    type: types.GET_PRODUCTS,
    payload: products,
});

const userDeleted = () => ({
    type: types.DELETE_USER
})

const productDeleted = () => ({
    type: types.DELETE_PRODUCT,
});

const userAdded = () => ({
    type: types.ADD_USER
})

const productAdded = () => ({
    type: types.ADD_PRODUCT,
});

const userUpdated = () => ({
    type: types.UPDATE_USER
})

const productUpdated = () => ({
    type: types.UPDATE_PRODUCT,
});

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
})

const getProduct = (product) => ({
    type: types.GET_SINGLE_PRODUCT,
    payload: product,
});

const getNewProducts = (products) => ({
    type: types.GET_NEWPRODUCTS,
    payload: products
})

const getPopularProducts = (products) => ({
    type: types.GET_POPULARPRODUCTS,
    payload: products
})

const getUserCart = (cart) => ({
    type: types.USER_CART,
    payload: cart
})

const getSuccessMessage = (message) => ({
    type: types.GET_SUCCESS_MESSAGE,
    payload: message
})

const getErrorMessage = (message) => ({
    type: types.GET_ERROR_MESSAGE,
    payload: message
})

const getCategory = (productsCategory) => ({
    type: types.GET_PRODUCTS_CATEGORY,
    payload: productsCategory
})

//Cart feature

const addProductToCart = () => ({
    type: types.ADD_TO_CART
})

const updateQuantity = () => ({
    type: types.UPDATE_QTY
})

const removeProductFromCart = () => ({
    type: types.REMOVE_FROM_CART,
})


//Register User
export const registerUser = (user) => {
    return function (dispatch) {
        axiosInstance.post(`/users/register`, user)
            .then((res) => {
                dispatch(userAdded())
                dispatch(loadUsers())
                dispatch(getSuccessMessage(res.data.message))
            })
            .catch((error) => {
                dispatch(getErrorMessage(error.response.data.error))
            })
    }
}

//Login User
export const userLoggedIn = (loginCredential) => {
    return async function (dispatch) {
        axiosInstance.post(`/users/login`, loginCredential)
            .then((res) => {
                if (res) {
                    window.localStorage.setItem('token', res.data.token)
                    dispatch(getSuccessMessage(res.data.message))
                }
            })
            .catch((error) => {
                dispatch(getErrorMessage(error.response.data.error))
            })
    }
}

//Set User logging
export const setLoggedIn = () => ({
    type: types.SET_LOGIN
})

export const setLoggedOut = () => ({
    type: types.SET_LOGOUT
})

//View Profile
export const viewProfile = (id) => {
    return function (dispatch) {
        axiosInstance.get(`users/my-profile/${id}`)
            .then((res) => {
                dispatch(getUser(res.data))
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log("View profile Error : " + error)
            })
    }
}

//Edit Profile
export const editProfile = (user, id) => {
    return function (dispatch) {
        axiosInstance.put(`users/${id}`, user)
            .then(() => {
                dispatch(userUpdated());
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log("User Update Error : ", error)
            })
    }
}

//load all product
export const loadProducts = (category) => {

    console.log("LOAD PRODUCT : ", category)

    if (category === undefined) {
        return function (dispatch) {
            axiosInstance.get(`/product`)
                .then((res) => {
                    console.log("resp", res.data);
                    dispatch(getProducts(res.data));
                })
                .catch((error) => {
                    console.log("Product error : ", error)
                })
        };
    } else {
        return function (dispatch) {
            axiosInstance.get(`/product?category=${category}`)
                .then((res) => {
                    dispatch(getProducts(res.data))
                })
                .catch((error) => {
                    console.log("PRoduct Error : ", error)
                })
        }
    }
};

export const loadUsers = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((res) => {
                console.log("res :", res)
                dispatch(getUsers(res.data));
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

//View Single product
export const getSingleProduct = (id) => {
    return function (dispatch) {
        axiosInstance.get(`product/${id}`)
            .then((res) => {
                dispatch(getProduct(res.data));
                dispatch(loadProducts());
            })
            .catch((error) => {
                console.log("View Product Error : ", error)
            })
    };
};

//Add Product
export const addProduct = (product) => {
    return function (dispatch) {
        axiosInstance
            .post(`/product/`, product)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(productAdded());
                dispatch(loadProducts());
            })
            .catch((error) => console.log(error));
    };
};

//Update Product
export const updateProduct = (product, id) => {
    return function (dispatch) {
        axiosInstance
            .put(`/product/${id}`, product)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(productUpdated());
                dispatch(loadProducts());
            })
            .catch((error) => console.log(error));
    };
};

//Delete Product

export const deleteProduct = (id) => {
    return function (dispatch) {
        axiosInstance
            .delete(`/product/${id}`)
            .then((resp) => {
                console.log("resp", resp);
                dispatch(productDeleted());
                dispatch(loadProducts());
            })
            .catch((error) => console.log(error));
    };
};

//New Products

export const loadNewProducts = () => {
    return function (dispatch) {
        axiosInstance
            .get(`/product/view/?productType=new_product`)
            .then((res) => {
                dispatch(getNewProducts(res.data))
            })
            .catch((error) => console.log(error))
    }
}

export const loadPopularProducts = () => {
    return function (dispatch) {
        axiosInstance
            .get(`/product/view/?productType=popular_product`)
            .then((res) => {
                dispatch(getPopularProducts(res.data))
            })
            .catch((error) => console.log(error))
    }
}

//Add Product to Cart
export const addProductsToCart = (product, userId) => {
    return function (dispatch) {
        axiosInstance
            .post(`/cart/${product._id}/${userId}`)
            .then((res) => {
                dispatch(addProductToCart())
                dispatch(getSuccessMessage(res.data.message))
            })
            .catch(error => console.log(error))
    }
}

//View My Cart
export const viewUserCart = (id) => {
    return function (dispatch) {
        axiosInstance
            .get(`/cart/${id}`)
            .then((res) => {
                console.log("res : ", res)
                dispatch(getUserCart(res.data))
            })
            .catch(error => console.log(error))
    }
}

//Update quantity
export const subProductQuantity = (productId, userId) => {
    return function (dispatch) {
        axiosInstance
            .put(`/cart/${productId._id}/${userId}`)
            .then((res) => {
                dispatch(updateQuantity())
            })
            .catch((error) => {
                console.log("Update Quantity Error : ", error)
            })
    }
}

//remove from cart
export const removeFromCart = (id) => {
    return function (dispatch) {
        axiosInstance
            .delete(`/cart/${id}`)
            .then((res) => {
                console.log("res :", res)
                dispatch(removeProductFromCart());
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const getProductCategory = () => {
    return function (dispatch) {
        axiosInstance
            .get(`/product/product-category`)
            .then((res) => {
                dispatch(getCategory(res.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const deleteUser = (id) => {
    return function (dispatch) {
        axiosInstance
            .delete(`/users/${id}`)
            .then((res) => {
                console.log("res :", res)
                dispatch(userDeleted());
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
