import {
  GET_FEATURED_PRODUCTS_START,
  GET_FEATURED_PRODUCTS_SUCCESS,
  GET_FEATURED_PRODUCTS_FAILED,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_SLIDER_IMAGES_START,
  GET_SLIDER_IMAGES_SUCCESS,
  GET_SLIDER_IMAGES_FAILED,
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
} from "./gustTypeConstent";
import axios from "axios";
import { URL_API } from "../../api";

export const GetSliderProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_SLIDER_IMAGES_START,
    });
    try {
      const res = await axios.get(`${URL_API}/products/top`);
      dispatch({
        payload: res.data,
        type: GET_SLIDER_IMAGES_SUCCESS,
      });
    } catch (e) {
      dispatch({
        payload: e?.res?.data?.message,
        type: GET_SLIDER_IMAGES_FAILED,
      });
    }
  };
};

export const getFeaturedProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_FEATURED_PRODUCTS_START,
    });

    try {
      const response = await axios.get(`${URL_API}/products`);

      dispatch({
        type: GET_FEATURED_PRODUCTS_SUCCESS,
        payload: response.data.products,
      });
    } catch (e) {
      dispatch({
        type: GET_FEATURED_PRODUCTS_FAILED,
        payload: e?.response?.message,
      });
    }
  };
};

export const GetProductById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: GET_PRODUCT_START,
      isLoading: true,
    });
    try {
      const res = await axios(`${URL_API}/products/${id}`);
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: GET_PRODUCT_FAILED,
        payload: e?.response?.message,
      });
    }
  };
};

export function SearchAction(word, history) {
  return async (dispatch) => {
    dispatch({
      type: SEARCH_START,
    });
    try {
      const res = await axios.get(
        `${URL_API}/products?pageNum=${1}&keyword=${word}`
      );
      console.log("eow", word);
      dispatch({
        type: SEARCH_SUCCESS,
        payload: res.data,
      });
      history.push("/search-result");
    } catch (e) {
      dispatch({
        type: SEARCH_FAILED,
        payload: e?.res?.data?.message,
      });
    }
  };
}
