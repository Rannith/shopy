import axios from 'axios';
import * as types from './actionType';

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

export const loadUsers = () => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}`)
            .then((res) => {
                console.log("res :",res)
                dispatch(getUsers(res.data));
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const loadProducts = () => {
    return function (dispatch) {
      axios
        .get("http://localhost:5000/products")
        .then((resp) => {
          console.log("resp", resp);
          dispatch(getProducts(resp.data));
        })
        .catch((error) => console.log(error));
    };
  };

export const deleteUser = (id) => {
    return function (dispatch) {
        axios
            .delete(`${process.env.REACT_APP_API}/${id}`)
            .then((res) => {
                console.log("res :",res)
                dispatch(userDeleted());
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log(error)
            })
    }
} 

export const deleteProduct = (id) => {
    return function (dispatch) {
      axios
        .delete(`http://localhost:5000/products/${id}`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(productDeleted());
          dispatch(loadProducts());
        })
        .catch((error) => console.log(error));
    };
  };

export const addUser = (user) => {
    return function (dispatch) {
        axios
            .post(`${process.env.REACT_APP_API}`, user)
            .then((res) => {
                console.log("res :",res)
                dispatch(userAdded());
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const addProduct = (product) => {
    return function (dispatch) {
      axios
        .post("http://localhost:5000/products", product)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(productAdded());
          dispatch(loadProducts());
        })
        .catch((error) => console.log(error));
    };
  };

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}/${id}`)
            .then((res) => {
                console.log("res :",res)
                dispatch(getUser(res.data));
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const getSingleProduct = (id) => {
    return function (dispatch) {
      axios
        .get(`http://localhost:5000/products/${id}`)
        .then((resp) => {
          console.log("resp", resp.data);
          dispatch(getProduct(resp.data));
          dispatch(loadProducts());
        })
        .catch((error) => console.log(error));
    };
  };

export const updateUser = (user, id) => {
    return function (dispatch) {
        axios
            .put(`${process.env.REACT_APP_API}/${id}`, user)
            .then((res) => {
                console.log("res :",res)
                dispatch(userUpdated());
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const updateProduct = (product, id) => {
    return function (dispatch) {
      axios
        .put(`http://localhost:5000/products/${id}`, product)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(productUpdated());
          dispatch(loadProducts());
        })
        .catch((error) => console.log(error));
    };
  };

export const getUserProfile = (email, password) => {
    return function (dispatch) {
        axios
            .get(`${process.env.REACT_APP_API}?email=${email}&password=${password}`)
            .then((res) => {
                console.log("res :",res)
                dispatch(getSingleUserProfile(res.data));
                dispatch(loadUsers())
            })
            .catch((error) => {
                console.log(error)
            })
    }
}