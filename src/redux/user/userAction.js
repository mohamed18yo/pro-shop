import { LOGIN_SUCCESS } from "./userTypeConstats";
import { LOGOUT_SUCCESS } from "./userTypeConstats";
import { LOGIN_START } from "./userTypeConstats";
import { LOGIN_FIALD } from "./userTypeConstats";
import { REGISTER_START } from "./userTypeConstats";
import { REGISTER_FIALD } from "./userTypeConstats";
import { REGISTER_SUCCESS } from "./userTypeConstats";

import { GET_USER_START } from "./userTypeConstats";
import { GET_USER_FIALD } from "./userTypeConstats";
import { GET_USER_SUCCESS } from "./userTypeConstats";
import { UPDATE_START } from "./userTypeConstats";
import { UPDATE_FIALD } from "./userTypeConstats";
import { UPDATE_SUCCESS } from "./userTypeConstats";

import axios from "axios";
import { URL_API } from "../../api";

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
      const res = await axios.post(`${URL_API}/users/login`, value);
      dispatch({
        payload: res.data,
        type: LOGIN_SUCCESS,
      });
      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(res.data));

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
  return async (dispatch) => {
    dispatch({
      type: REGISTER_START,
    });
    try {
      const res = await axios.post(`${URL_API}/users`, values);
      // Set user to localStorage
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      history.push("/");
    } catch (e) {
      dispatch({
        type: REGISTER_FIALD,
        payload: e.res.data.message,
      });
    }
  };
};

// Get Data user for update profile

export const GetUserDataForUpdateProfile = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_USER_START,
    });
    const state = getState();

    const {
      userDetailes: {
        user: { token },
      },
    } = state;
    try {
      const res = await axios.get(`${URL_API}/users/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_USER_FIALD,
        payload: e?.response?.message,
      });
    }
  };
};

/** Update profile Action */
export const UpdateProfileAction = (values,history) => {
  return async (dispatch,getState) => {
    dispatch({
      type: UPDATE_START,
    });
    const state = getState();
    const {
      userDetailes: {
        user: { token },
      },
    } = state;
    try {
      const res =await axios.put(`${URL_API}/users/profile`, values,{
      headers:{
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }});
       // Set user to localStorage
       
      localStorage.setItem("user", JSON.stringify(res.data));

      dispatch({
        type: UPDATE_SUCCESS,
        payload: res.data,
      });
      history.push("/profile");
      

      
    } catch (e) {
      dispatch({
        type: UPDATE_FIALD,
        payload: e?.res?.message,   
      });
    }
  };
};

// export default loginAction;
