


import {INCREASE_COUNT,ADD_ITEM}from './cartTypeConstent';

export const AddCartItem=(product,quantity)=>{
    return (dispatch, getState)=>{
        const state= getState();

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

        localStorage.setItem("cart", JSON.stringify(state.cart.cart));
    }

    
}