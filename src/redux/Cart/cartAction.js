


import {INCREASE_COUNT,ADD_ITEM,ADD_SHIPPING_ADDRESS,DELETE_CART_ITEM}from './cartTypeConstent';

export const AddCartItem=(product,quantity)=>{
    return (dispatch, getState)=>{
        const state= getState();
        console.log(product)
        const isProductExist= state.cart.cart.find((item)=>item._id === product._id)
        if(isProductExist){
            isProductExist.quantity+=quantity;
            const index= state.cart.cart.findIndex((item)=> item._id=== isProductExist._id)
            state.cart.cart[index]= isProductExist;

            dispatch({
                type:INCREASE_COUNT,
                payload:state.cart.cart
            })

        }else{
            product.quantity= quantity;
            dispatch({
                type:ADD_ITEM,
                payload:product
            })
        }

        localStorage.setItem("cart", JSON.stringify(getState().cart.cart));
    }

    
}

export const DeleteCartItem=(id)=>{
    return (dispatch, getState)=>{
        dispatch({
            type: DELETE_CART_ITEM,
            payload: id
        })
        localStorage.setItem("cart", JSON.stringify(getState().cart.cart)); 
    }
}
export const addShippingAddress = (values) => {
    localStorage.setItem("shipping", JSON.stringify(values));
  
    return {
      type: ADD_SHIPPING_ADDRESS,
      payload: values,
    };
  };