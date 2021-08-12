import {LOGIN_START ,LOGIN_SUCCESS, LOGIN_FIALD,
  UPDATE_SUCCESS,UPDATE_FIALD,
  REGISTER_START ,REGISTER_SUCCESS,REGISTER_FIALD, 
  GET_USER_START, GET_USER_SUCCESS,GET_USER_FIALD,
  LOGOUT_SUCCESS,UPDATE_START
} from "./userTypeConstats";

export const userReducer = (
    initialState = {
        user: {
          _id: "",
          name: "",
          email: "",
          token: "",
        },
        addingReview: {
          success: false,
          isLoading: false,
          error: "",
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
