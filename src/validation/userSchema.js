import * as yup from "yup";

export const userSchema = yup.object({
    username: yup.string().required(),

    email: yup
        .string()
        .email()
        .required(),

    password: yup
        .string()
        .min(6)
        .required(),

    branch_id: yup.string().required(),

    role_id: yup.string().required(),
});