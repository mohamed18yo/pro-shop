import { createStore, combineReducers,applyMiddleware  } from "redux";

import { userReducer } from "./user/userReducer";
import { gustReducer } from "./Gust/gustReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
  userDetailes: userReducer,
  gustState: gustReducer
});

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {};
const initialState = {
  userDetails: {
    user: userFromLocalStorage,
  },
};

const middlewares = [thunk];
const Store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middlewares));

export default Store;
