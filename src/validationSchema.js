import * as yup from "yup";


export const LoginSchema=()=>{
    return yup.object({
        email: yup.string().email('please enter a valid email').required('please enter password is required'),
        password: yup.string().min(1).required('please enter password is required') 
    })
}