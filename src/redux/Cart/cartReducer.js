import {
  INCREASE_COUNT,
  ADD_ITEM,
  DECREASE_COUNT,
  DELETE_ITEM,
} from "./cartTypeConstent";

export const cartReducer = (
  initialState = {
    cart: [],
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
    case DELETE_ITEM:
      return {
        ...initialState,
        cart: initialState.cart.filter((item) => item._id !== action.payload),
      };
    default:
      return {
        ...initialState,
      };
  }
};
