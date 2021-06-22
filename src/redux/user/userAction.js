

import {LOGIN_SUCCESS} from './userTypeConstats';

export const loginAction= (userData)=>{
    return {
        payload: userData,
        type:LOGIN_SUCCESS
    }
}

export default loginAction