import { LOGIN_SUCCESS } from "./userTypeConstats";
import { LOGOUT_SUCCESS } from "./userTypeConstats";
import { LOGIN_START } from "./userTypeConstats";
import { LOGIN_FIALD } from "./userTypeConstats";
import axios from "axios";


// export const loginAction = (userData) => {
//   return {
//     payload: userData,
//     type: LOGIN_SUCCESS,
//   };
// };
export const logoutAction = () => {
  return {
    payload: null,
    type: LOGOUT_SUCCESS,
  };
};

//use redux-thunk
export const LoginAction = (value, history) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_START,
    });

    try {
      const res = await axios.post("/users/login", value);
      dispatch({
        payload: res.data,
        type: LOGIN_SUCCESS,
      });
      history.push("/");
    } catch (e) {
      dispatch({
        payload: e.response.data.message,
        type: LOGIN_FIALD,
      });
    }
  };
};

// export const RegisterAction = (values, history) => {};

// export default loginAction;
