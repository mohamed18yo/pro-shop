import { LOGIN_SUCCESS } from "./userTypeConstats";
import { LOGOUT_SUCCESS } from "./userTypeConstats";
import { LOGIN_START } from "./userTypeConstats";
import { LOGIN_FIALD } from "./userTypeConstats";
import { REGISTER_START } from "./userTypeConstats";
import { REGISTER_FIALD } from "./userTypeConstats";
import { REGISTER_SUCCESS } from "./userTypeConstats";
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

export const RegisterAction = (values, history) => {
  return async (dispatch)=>{
    dispatch({
          type:REGISTER_START
    })
    try{
      const res = await axios.post('/users', values)
      console.log(res)
      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch({
        type:REGISTER_SUCCESS,
        payload: res.data
      })
      history.push("/");
    }catch(e){
      dispatch({
        type:REGISTER_FIALD,
        payload: e.res.data.message
      })
    }
  }

};

// export default loginAction;
