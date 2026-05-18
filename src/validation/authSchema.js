import * as yup from "yup";

export const registerSchema = yup.object({

    fullName: yup
        .string()
        .trim()
        .required("Full name is required")
        .min(3, "Full name must be at least 3 characters"),

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

    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character"),

    confirmPassword: yup
        .string()
        .oneOf(
            [yup.ref("password")],
            "Passwords must match"
        )
        .required("Confirm password is required"),

});

export const loginSchema = yup.object({
    email: yup
        .string()
        .trim()
        .email("Please enter a valid email")
        .required("Email is required"),

    password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});