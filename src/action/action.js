import axios from 'axios';
import * as types from './actionType';
import * as API from '../container/api/api'
import axiosInscance from '../container/utils/axios-utils';

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

const getSingleUserProfile = (user) => ({
  type: types.GET_USER_PROFILE,
  payload: user,
})

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

//Register User
export const registerUser = (user) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:8000/users/register`, user)
      .then((res) => {
        console.log("res :", res)
        dispatch(userAdded());
        dispatch(loadUsers())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

//Login User
export const userLoggedIn = (loginCredential) => {
  return async function (dispatch) {
    console.log("Loggin credential : "+loginCredential)
    axios
      .post("http://localhost:8000/users/login", loginCredential)
      .then((res) => {
        console.log("res : ", res)
        if (res)
          window.localStorage.setItem('token', res.data.token)
      })
      .catch(error => {
        console.log("Loggin error ", error.response.data.error)
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
    axiosInscance({
      url: `users/my-profile/${id}`,
      method: 'get',
    })
    .then((res) => {
      dispatch(getUser(res.data))
      dispatch(loadUsers())
    })
    .catch((error) => {
      console.log("View profile Error : "+ error)
    })
    // axios
    //   .get(`http://localhost:8000/users/my-profile/${id}`)
    //   .then((res) => {
    //     console.log("res of single user : ", res)
    //     dispatch(getUser(res.data));
    //     dispatch(loadUsers())
    //   })
    //   .catch((error) => {
    //     console.log("VIew Profile Error : "+error)
    //   })
  }
}

//Edit Profile
export const editProfile = (user, id) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:8000/users/${id}`, user)
      .then((res) => {
        console.log("res :", res)
        dispatch(userUpdated());
        dispatch(loadUsers())
      })
      .catch((error) => {
        console.log("User Profile Error : "+error)
      })
  }
}

//load all product
export const loadProducts = (category) => {

  if (category === undefined) {
    return function (dispatch) {
      axios
        .get(`http://localhost:8000/product`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(getProducts(resp.data));
        })
        .catch((error) => console.log(error));
    };
  } else {
    return function (dispatch) {
      axios
        .get(`http://localhost:8000/product?category=${category}`)
        .then((res) => {
          dispatch(getProducts(res.data))
        })
        .catch((error) => console.log(error))
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
    console.log("ACTION PARAM : ", id)
    axios
      .get(`http://localhost:8000/product/${id}`)
      .then((resp) => {
        console.log("resp", resp.data);
        dispatch(getProduct(resp.data));
        dispatch(loadProducts());
      })
      .catch((error) => console.log(error));
  };
};

//Add Product
export const addProduct = (product) => {
  return function (dispatch) {
    axios
      .post(`http://localhost:8000/product/`, product)
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
    axios
      .put(`http://localhost:8000/product/${id}`, product)
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
    axios
      .delete(`http://localhost:8000/product/${id}`)
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
    axios
      .get(`http://localhost:8000/product/view/?productType=new_product`)
      .then((res) => {
        dispatch(getNewProducts(res.data))
      })
      .catch((error) => console.log(error))
  }
}

export const loadPopularProducts = () => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8000/product/view/?productType=popular_product`)
      .then((res) => {
        dispatch(getPopularProducts(res.data))
      })
      .catch((error) => console.log(error))
  }
}

//Add Product to Cart
export const addProductsToCart = (product, userId) => {
  return function (dispatch) {
    console.log("IN ACTION Product ID : "+ product._id+ "IN ACTION User Id : "+ userId)
    axios
      .post(`http://localhost:8000/cart/${product._id}/${userId}`)
      .then((res) => {
        dispatch(addProductToCart())
      })
      .catch(error => console.log(error))
  }
}

//View My Cart
export const viewUserCart = (id) => {
  return function (dispatch) {
    axios
      .get(`http://localhost:8000/cart/${id}`)
      .then((res) => {
        console.log("res : ", res)
        dispatch(getUserCart(res.data))
      })
      .catch(error => console.log(error))
  }
}

//remove from cart
export const removeFromCart = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:8000/cart/${id}`)
      .then((res) => {
        console.log("res :", res)
        dispatch(removeProductFromCart());
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
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

//Cart feature

const addProductToCart = () => ({
  type: types.ADD_TO_CART
})

const removeProductFromCart = () => ({
  type: types.REMOVE_FROM_CART,
})

