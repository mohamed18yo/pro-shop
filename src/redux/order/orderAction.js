import axios from "axios";

import {
  PLACE_ORDER_START,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAILED,
  GET_ORDERS_START,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILED,
} from "./orderTypeConstent";
import { URL_API } from "../../api";

export const PlaceOrder = (history) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: PLACE_ORDER_START,
      });
      const state = getState();
      const requestDate = {
        orderItems: state.cart.cart,
        shippingAddress: state.cart.shippingAddress,
        paymentMethod: "PayPal",
        totalPrice: state.cart.cart
          .reduce((acc, item) => acc + item.price * item.qty, 0)
          .toFixed(2),
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.userDetailes.user.token}`,
        },
      };

      const res = await axios.post(`${URL_API}/orders`, requestDate, config);

      dispatch({
        type: PLACE_ORDER_SUCCESS,
        payload: res.data,
      });
      localStorage.removeItem("cart");
      
      history.push("/order/" + res.data._id);
    } catch (e) {
      dispatch({
        type: PLACE_ORDER_FAILED,
        payload: e?.res?.data?.message,
      });
    }
  };
};

export const GetOrders = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_ORDERS_START,
      });

      const state = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.userDetailes.user.token}`,
        },
      };
      const res = await axios.get(`${URL_API}/orders/myorders`, config);
      dispatch({
        type: GET_ORDERS_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_ORDERS_FAILED,
        payload: e?.res?.data?.message,
      });
    }
  };
};
