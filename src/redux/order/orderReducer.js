import {
  PLACE_ORDER_START,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_SUCCESS,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
} from "./orderTypeConstent";

export const orderReducer = (
  initialState = {
    placeOrder: {
      success: "",
      isLoading: false,
      error: "",
    },
    userOrders: {
      success: false,
      isLoading: false,
      error: "",
      orders: [],
    },
  },
  action
) => {
  switch (action.type) {
    // post order to backend
    case PLACE_ORDER_START:
      return {
        ...initialState,
        placeOrder: {  
          isLoading: true,
        },
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...initialState,
        placeOrder: {
          isLoading: false,
          success: action.payload,
        },
      };

    case PLACE_ORDER_FAILED:
      return {
        placeOrder: {
          isLoading: false,
          error: action.payload,
        },
      };
    // get Orders
    case GET_ORDERS_START:
      return {
        ...initialState,
        userOrders: {
          isLoading: true,
        },
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...initialState,
        userOrders: {
          isLoading: false,
          orders: action.payload,
        },
      };
    case GET_ORDERS_FAILED:
      return {
        ...initialState,
        userOrders: {
          isLoading: false,
          error: action.payload,
        },
      };

    default:
      return {
        initialState,
      };
  }
};
