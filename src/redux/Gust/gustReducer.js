import {
    GET_FEATURED_PRODUCTS_FAILED,
    GET_FEATURED_PRODUCTS_START,
    GET_FEATURED_PRODUCTS_SUCCESS,
    GET_SLIDER_IMAGES_FAILED,
    GET_SLIDER_IMAGES_START,
    GET_SLIDER_IMAGES_SUCCESS,
    GET_PRODUCT_FAILED,
    GET_PRODUCT_START,
    GET_PRODUCT_SUCCESS,
  } from "./gustTypeConstent";
  
  export const gustReducer = (
    initialState = {
      sliderImages: [],
      products: [],
      isLoading: false,
      product: {
        product: {},
        isLoading: false,
      }
    },
    action
  ) => {
    
    switch (action.type) {
      /** Slider Cases*/
      case GET_SLIDER_IMAGES_START:
        return {
          ...initialState,
          isLoading: true,
        };
      case GET_SLIDER_IMAGES_SUCCESS:
        return {
          ...initialState,
          isLoading: false,
          sliderImages: action.payload,
        };
      case GET_SLIDER_IMAGES_FAILED:
        return {
          ...initialState,
          isLoading: false,
          error: action.payload,
        };
  
/** Products Cases*/
      case GET_FEATURED_PRODUCTS_START:
        return {
          ...initialState,
          isLoading: true,
        };
      case GET_FEATURED_PRODUCTS_SUCCESS:
        return {
          ...initialState,
          isLoading: false,
          products: action.payload,
        };
      case GET_FEATURED_PRODUCTS_FAILED:
        return {
          ...initialState,
          isLoading: false,
          error: action.payload,
        };
/** Product by Id Cases*/
      case GET_PRODUCT_START:
        return {
          ...initialState,
          product: {
            isLoading: true,
          } 
        };
      case GET_PRODUCT_SUCCESS:
        return {
          ...initialState,
          product: {
            product: action.payload,
            isLoading: false,
          }
        };
      case GET_PRODUCT_FAILED:
        return {
          ...initialState,
          product: {
            isLoading: false,
          },
          error: action.payload,
        };

      default:
        return initialState;
      }
    };
