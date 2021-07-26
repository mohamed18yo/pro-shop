import {
  GET_FEATURED_PRODUCTS_START,
  GET_FEATURED_PRODUCTS_SUCCESS,
  GET_FEATURED_PRODUCTS_FAILED,
  GET_PRODUCT_START,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILED,
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILED,
  GET_SLIDER_IMAGES_START,
  GET_SLIDER_IMAGES_SUCCESS,
  GET_SLIDER_IMAGES_FAILED,
  SEARCH_START,
  SEARCH_SUCCESS,
  SEARCH_FAILED,
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS ,
  ADD_REVIEW_FIALD,
  UPDATE_REVIEW_SUCCESS,
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


/**Add review  */

export const AddReviewAction = (values, id) => {

  return async (dispatch,getState) => {

    dispatch({
      type: ADD_REVIEW_START,
    });
    const state = getState();

    const {
      userDetailes: {
        user: { token },
      },
    } = state;
    const {
      userDetailes: {
        user: { name },
      },
    } = state;
    const pyl ={
        comment: values.comment,
        rating: values.rating,
        createdAt: new Date().toString(),
        name: name
      }
    try {
      const res = await axios.post(`${URL_API}/products/${id}/reviews`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('res',res.data.message)
      dispatch({
        type:ADD_REVIEW_SUCCESS,
        payload:res.data.message
      })
      dispatch({
        type: UPDATE_REVIEW_SUCCESS,
        payload:pyl
      })
     
    } catch (e) {
      console.log('err res',e?.response?.data?.message)
      dispatch({
        type:ADD_REVIEW_FIALD,
        payload:e?.response?.data?.message
      })
    }
  };
};


export const GetCategories=()=>{
  return async(dispatch)=>{
    dispatch({
      type: GET_CATEGORIES_START
    })
    try {
    const res= await axios.get('https://maba-shop.herokuapp.com/api/categorise')
    console.log(res);
    dispatch({
      type:GET_CATEGORIES_SUCCESS,
      payload: res.data
    })
  } catch (error) {
    dispatch({
      type:GET_CATEGORIES_FAILED,
      payload: error?.response?.data?.message
    })
  }
  }
  
}
