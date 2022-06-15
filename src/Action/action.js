import axios from 'axios';
import * as types from './actionType';
import * as API from '../Api/api'

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

const getTshits = (products) => ({
  type: types.GET_TSHIRTS,
  payload: products,
})

const getSuits = (products) => ({
  type: types.GET_SUITS,
  payload: products,
})

const getWatches = (products) => ({
  type: types.GET_WATCHES,
  payload: products,
})

const getShoes = (products) => ({
  type: types.GET_SHOES,
  payload: products,
})

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

export const loadProducts = (category) => {

  if(category === undefined) {
    return function (dispatch) {
      axios
        .get(API.API_PRODUCTS)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(getProducts(resp.data));
        })
        .catch((error) => console.log(error));
    };
  } else {
    return function (dispatch) {
      axios
        .get(`${API.API_PRODUCTS}?category=${category}`)
        .then((res) => {
          dispatch(getProducts(res.data))
        })
        .catch((error) => console.log(error))
    }
  } 
};

export const loadNewProducts = () => {
  return function (dispatch) {
    axios
      .get(`${API.API_PRODUCTS}?producttype=newproduct`)
      .then((res) => {
        dispatch(getNewProducts(res.data))
      })
      .catch((error) => console.log(error))
  }
}

export const loadPopularProducts = () => {
  return function (dispatch) {
    axios
      .get(`${API.API_PRODUCTS}?producttype=popularproduct`)
      .then((res) => {
        dispatch(getPopularProducts(res.data))
      })
      .catch((error) => console.log(error))
  }
}

// export const loadTshirts = () => {
//   return function (dispatch) {
//     axios
//       .get(`${API.API_PRODUCTS}?category=tshirt`)
//       .then((res) => {
//         dispatch(getTshits(res.data))
//       })
//       .catch((error) => console.log(error))
//   }
// }

// export const loadSuits = () => {
//   return function (dispatch) {
//     axios
//       .get(`${API.API_PRODUCTS}?category=suit`)
//       .then((res) => {
//         dispatch(getSuits(res.data))
//       })
//       .catch((error) => console.log(error))
//   }
// }

// export const loadWatches = () => {
//   return function (dispatch) {
//     axios
//       .get(`${API.API_PRODUCTS}?category=watch`)
//       .then((res) => {
//         dispatch(getWatches(res.data))
//       })
//       .catch((error) => console.log(error))
//   }
// }

// export const loadShoes = () => {
//   return function (dispatch) {
//     axios
//       .get(`${API.API_PRODUCTS}?category=shoe`)
//       .then((res) => {
//         dispatch(getShoes(res.data))
//       })
//       .catch((error) => console.log(error))
//   }
// }

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

export const deleteProduct = (id) => {
  return function (dispatch) {
    axios
      .delete(`${API.API_PRODUCTS}/${id}`)
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
        console.log("res :", res)
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
      .post(API.API_PRODUCTS, product)
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
        console.log("res :", res)
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
      .get(`${API.API_PRODUCTS}/${id}`)
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
        console.log("res :", res)
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
      .put(`${API.API_PRODUCTS}/${id}`, product)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(productUpdated());
        dispatch(loadProducts());
      })
      .catch((error) => console.log(error));
  };
};

//Cart feature

export const addProductToCart = (value) => ({
  type: types.ADD_TO_CART,
  payload: value
})

export const removeProductFromCart = (id) => ({
  type: types.REMOVE_FROM_CART,
  payload: id
})

export const addQuantity = (id, existingItem) => ({
  type: types.UPDATE_QTY,
  payload: {
    id,
    quantity: parseInt(existingItem.quantity) + 1
  }
})

export const subQuantity = (id, existingItem) => ({
  type: types.UPDATE_QTY,
  payload: {
    id,
    quantity: parseInt(existingItem.quantity) - 1
  }
})

export const getUserProfile = (email, password) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}?email=${email}&password=${password}`)
      .then((res) => {
        console.log("res :", res)
        dispatch(getSingleUserProfile(res.data));
        dispatch(loadUsers())
      })
      .catch((error) => {
        console.log(error)
      })
  }
}