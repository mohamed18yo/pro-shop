import * as yup from "yup";


export const LoginSchema=()=>{
    return yup.object({
        email: yup.string().email('please enter a valid email').required('please enter emial is required'),
        password: yup.string().min(6).required('please enter password is required') 
    })
}