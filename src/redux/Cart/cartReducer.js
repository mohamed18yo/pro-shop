import {
  INCREASE_COUNT,
  ADD_ITEM,
  DECREASE_COUNT,
  DELETE_CART_ITEM,
  ADD_SHIPPING_ADDRESS
} from "./cartTypeConstent";

export const cartReducer = (
  initialState = {
    cart: [],
    shippingAddress:{}
  },
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...initialState,
        cart: [...initialState.cart, action.payload],
      };

    case INCREASE_COUNT:
      return {
        ...initialState,
        cart: action.payload,
      };
    case DECREASE_COUNT:
      return {
        ...initialState,
        cart: action.payload,
      };
    case DELETE_CART_ITEM:
      return {
        ...initialState,
        cart: initialState.cart.filter((item) => item._id !== action.payload),
      };

    case ADD_SHIPPING_ADDRESS:
    return {
      ...initialState,
      shippingAddress: action.payload,
    };

    default:
      return {
        ...initialState,
      };
  }
};
