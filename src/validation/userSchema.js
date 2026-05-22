import * as yup from "yup";

export const userSchema = yup.object({
    username: yup
            .string()
            .trim()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters")
            .matches(
                /^[a-zA-Z0-9_]+$/,
                "Username can only contain letters, numbers and underscores"
            ),

    email: yup
        .string()
        .trim()
        .lowercase()
        .email("Invalid email format")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address")
        .required("Email is required"),

    branch_id: yup.number().required('Branch is required'),

    role_id: yup.number().required('Role is required'),
});