import { LOGIN_FIALD, LOGIN_START, LOGIN_SUCCESS } from "./userTypeConstats";

import { LOGOUT_SUCCESS } from "./userTypeConstats";

import { REGISTER_START } from "./userTypeConstats";
import { REGISTER_FIALD } from "./userTypeConstats";
import { REGISTER_SUCCESS } from "./userTypeConstats";

import { GET_USER_START } from "./userTypeConstats";
import { GET_USER_FIALD } from "./userTypeConstats";
import { GET_USER_SUCCESS } from "./userTypeConstats";
import { UPDATE_START } from "./userTypeConstats";
import { UPDATE_FIALD } from "./userTypeConstats";
import { UPDATE_SUCCESS } from "./userTypeConstats";


export const userReducer = (
    initialState = {
        user: {
          _id: "",
          name: "",
          email: "",
          token: "",
        },
        success: false,
        isLoading: false,
        error: "",
        userProfile:{
          user:{}
        }
      },
      action
  
) => {
  /**
     * action={
            type:String,
            payload:
     * }
     * */
  switch (action.type) {

/** LOGIN cases */
    case LOGIN_START:
        return {
            ...initialState,
            isLoading: true,
          };
    case LOGIN_FIALD:
        return {
            ...initialState,
            error: action.payload,
            isLoading: false,
          };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoading: false,
        success: true,
    };
/** REGISTER cases */
    case REGISTER_START:
      return {
          ...initialState,
          isLoading: true,
        };
    case REGISTER_FIALD:
      return {
          ...initialState,
          error: action.payload,
          isLoading: false,
        };
    case REGISTER_SUCCESS:
    return {
      user: action.payload,
      isLoading: false,
      success: true,
    };

/** Get User Data  */
    case GET_USER_START:
      return {
        ...initialState,
        isLoading: true
      };
    case GET_USER_SUCCESS:
      return{
        ...initialState,
        userProfile:{
          user:action.payload, 
        }
        ,
        isLoading: false
      };
    case GET_USER_FIALD:
      return{
        isLoading:false,
        ...initialState
      }  

/** Update User Data  */
    case UPDATE_START:
      return {
        ...initialState,
        isLoading: true
      };
    case UPDATE_SUCCESS:
      return{
          user:action.payload,
          isLoading: false,
        
      };
    case UPDATE_FIALD:
      return{
        isLoading:false,
        ...initialState,
        error: action.payload,
      }  

/** LOGOUT cases */
    case LOGOUT_SUCCESS:
      return {
        user: {
          _id: "",
          name: "",
          email: "",
          token: "",
        },
    };

    default:
      return initialState;
    }
};
