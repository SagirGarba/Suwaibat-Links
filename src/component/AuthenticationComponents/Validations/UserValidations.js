import * as yup from "yup";


export const userSchema = yup.object().shape({
    name: yup.string().max(30).required(),
    email: yup.string().email("Invalid Email VFalidation").required(),
    phoneNumber: yup.string().required(),
    password: yup.string().min(6).max(15).required(),
});