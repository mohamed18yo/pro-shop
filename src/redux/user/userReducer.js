import { LOGIN_FIALD, LOGIN_START, LOGIN_SUCCESS } from "./userTypeConstats";

import { LOGOUT_SUCCESS } from "./userTypeConstats";

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
