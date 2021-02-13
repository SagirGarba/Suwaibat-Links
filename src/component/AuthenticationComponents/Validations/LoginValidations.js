import * as yup from "yup";


export const loginSchema = yup.object().shape({
    email: yup.string().required("this field is required"),
    password: yup.string().min(6).max(15).required(),
});