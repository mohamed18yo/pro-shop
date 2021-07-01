import * as yup from "yup";


export const LoginSchema=()=>{
    return yup.object({
        email: yup.string().email('please enter a valid email').required('please enter password is required'),
        password: yup.string().min(1).required('please enter password is required') 
    })
}
export const SignupSchema=()=>{
    return yup.object({
        name: yup.string().required("Please enter a name"),
        email: yup
          .string()
          .email("Please enter a valid email")
          .required("Please enter an email"),
        password: yup.string().min(6).required("Please enter a password"),
        confirmPassword: yup
          .string()
          .min(6)
          .required("Please enter password confirmation")
          .oneOf([yup.ref("password"), null], "Passwords must match"),
      });
}
export const UpdateProfileSchema=()=>{
    return yup.object({
        name: yup.string().required("Please enter a name"),
        email: yup
          .string()
          .email("Please enter a valid email")
          .required("Please enter an email"),
        password: yup.string().min(6),
        confirmPassword: yup
          .string()
          .min(6)
          .oneOf([yup.ref("password"), null], "Passwords must match"),
      });
}

export const ShippingSchema = () => {
  return yup.object({
    country: yup.string().required("Please enter country name"),
    city: yup.string().required("Please enter city name"),
    address: yup.string().required("Please enter your address"),
    zipCode: yup.number().required("Please enter your zip code"),
  });
};