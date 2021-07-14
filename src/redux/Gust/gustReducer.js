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
  ADD_REVIEW_START,
  ADD_REVIEW_SUCCESS ,
  ADD_REVIEW_FIALD,
  ADD_REVIEW_RESET,
  UPDATE_REVIEW_SUCCESS
} from "./gustTypeConstent";
  
  export const gustReducer = (
    initialState = {
      sliderImages: [],
      products: [],
      isLoading: false,
      product: {
        product: {},
        isLoading: false,
      },
      addingReview: {
        success: false,
        isLoading: false,
        error: "",
      },
      searchResult:[]
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

        
      /** Search Cases*/
      case SEARCH_START:
        return {
          ...initialState,
          isLoading: true,
        };
      case SEARCH_SUCCESS:
        return {
          ...initialState,
          isLoading: false,
          searchResult: action.payload,
        };
      case SEARCH_FAILED:
        return {
          ...initialState,
          isLoading: false,
          error: action.payload,
        };
      
      /** Add review  */
    case ADD_REVIEW_START:
      return {
        ...initialState,
        addingReview: {
          isLoading: true,
        },
      };
    case ADD_REVIEW_SUCCESS:
      return{
        ...initialState,
        addingReview: {
          isLoading: false,
          success: action.payload,
        },
      };

    case UPDATE_REVIEW_SUCCESS:
      return{
        ...initialState,
        product:{
          product:{
            ...initialState.product.product,
            reviews: [action.payload, ...initialState.product.product.reviews],
            isLoadin:false
          }
        }
      }
    case ADD_REVIEW_FIALD:
      return{
        ...initialState,
        addingReview: {
          error: action.payload,
          isLoading: false,
        },
      }
      case ADD_REVIEW_RESET:
        return {
          ...initialState,
          addingReview: {
            error: "",
            isLoading: false,
            success:false
          },
        };

      default:
        return initialState;
      }
    };
