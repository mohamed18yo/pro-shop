import axios from 'axios';

import {PLACE_ORDER_START} from './orderTypeConstent'

export const PlaceOrder=()=>{
    return async (dispatch,gerState)=>{
        try {
            dispatch({
                type: PLACE_ORDER_START
            })
            const {data}= axios.post('')
        } catch (e) {
            
        }
    }
}