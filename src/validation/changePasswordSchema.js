import * as yup from "yup";

export const changePasswordSchema = yup.object({
    current_password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Current password is required"),
    new_password: yup
        .string()
        .required("New password is required")
        .notOneOf([yup.ref('current_password')], 'New password cannot be the same as the old password')
        .min(8, "Password must be at least 8 characters")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[@$!%*?&]/, "Password must contain at least one special character"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("new_password")], "Passwords must match")
        .required("Confirm password is required"),
});