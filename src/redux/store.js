import { createStore, combineReducers,applyMiddleware  } from "redux";

import { userReducer } from "./user/userReducer";
import { gustReducer } from "./Gust/gustReducer";
import thunk from "redux-thunk";

import { cartReducer } from "./Cart/cartReducer";


const reducers = combineReducers({
  userDetailes: userReducer,
  gustState: gustReducer,
  cart: cartReducer
});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  userDetailes: {
    user: userFromLocalStorage,
  },
  cart:{
    cart:cartFromLocalStorage
  } 
};

const middlewares = [thunk];
const Store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares));

export default Store;
