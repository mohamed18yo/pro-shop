import {
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  PAY_ORDER_START,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAILED,
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
    orderById: {
      success: false,
      isLoading: false,
      error: "",
      order: {},
    },
    payOrder: {
      isLoading: false,
      result: {},
      error: "",
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
    // get Order By id
    case GET_ORDER_START:
      return {
        ...initialState,
        orderById: {
          isLoading: true,
        },
      };
    case GET_ORDER_SUCCESS:
      return {
        ...initialState,
        orderById: {
          isLoading: false,
          order: action.payload,
        },
      };
    case GET_ORDER_FAILED:
      return {
        ...initialState,
        orderById: {
          isLoading: false,
          error: action.payload,
        },
      };

    //** Pay order case */
    case PAY_ORDER_START:
      return {
        ...initialState,
        payOrder: {
          isLoading: true,
        },
      };
    case PAY_ORDER_SUCCESS:
      return {
        ...initialState,
        payOrder: {
          isLoading: false,
          result: action.payload,
        },
      };
    case PAY_ORDER_FAILED:
      return {
        ...initialState,
        payOrder: {
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
