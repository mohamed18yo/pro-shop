import {LOGIN_SUCCESS} from './userTypeConstats';


export const userReducer=(
    initialState={
        user:{
            _id:'',
            name:'',
            email:'',
            token:''
        }
    },action)=>{
/**
     * action={
            type:String,
            payload:
     * }
     * */
switch(action.type){
    case LOGIN_SUCCESS: return {
        user: action.payload,
    }
    default: return initialState;
}
}