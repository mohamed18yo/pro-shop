

import {
    GET_FEATURED_PRODUCTS_FAILED,
    GET_FEATURED_PRODUCTS_START,
    GET_FEATURED_PRODUCTS_SUCCESS,
    GET_SLIDER_IMAGES_FAILED,
    GET_SLIDER_IMAGES_START,
    GET_SLIDER_IMAGES_SUCCESS,
  } from "./gustTypeConstent";
import axios from 'axios'

export const GetSliderProducts=()=>{
    return async (dispatch)=>{
        dispatch({
            type: GET_SLIDER_IMAGES_START
        })
        try{
           const res= await axios.get('/products/top')
            dispatch({
                payload: res.data,
                type: GET_SLIDER_IMAGES_SUCCESS
        })  
        }catch(e){
            dispatch({
                payload: e.response.data.message,
                type: GET_SLIDER_IMAGES_FAILED
            })
        }
       

    }
}

export const getFeaturedProducts = () => async (dispatch) => {
    dispatch({
      type: GET_FEATURED_PRODUCTS_START,
    });
  
    try {
      const response = await axios.get("/products");
  
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
  