import { createStore, combineReducers } from "redux";
import { userReducer } from "./user/userReducer";

const reducers = combineReducers({
  userDetailes: userReducer,
});

const Store = createStore(reducers);

export default Store;
