import * as yup from "yup";

const currentYear = new Date().getFullYear();

export const orgainizationSchema = yup.object({
    organization_name: yup
        .string()
        .trim()
        .min(3, "Organization name must be at least 3 characters")
        .max(100, "Organization name cannot exceed 100 characters")
        .matches(
            /^[a-zA-Z0-9\s&.,'-]+$/,
            "Organization name contains invalid characters"
        )
        .required("Organization name is required"),

    email: yup
        .string()
        .trim()
        .lowercase()
        .email("Invalid email format")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address")
        .max(100, "Email is too long")
        .required("Email is required"),

    phone: yup
        .string()
        .trim()
        .matches(
            /^[4-9]\d{9}$/,
            "Enter valid Indian mobile number"
        )
        .required("Phone is required"),

    address: yup
        .string()
        .trim()
        .min(5, "Address is too short")
        .max(255, "Address cannot exceed 255 characters")
        .nullable(),

    website: yup
        .string()
        .trim()
        .url("Enter a valid website URL")
        .nullable()
        .transform((value) => (value === "" ? null : value)),

    established_year: yup
        .number()
        .typeError("Established year must be a number")
        .integer("Year must be an integer")
        .min(1900, "Year is too old")
        .max(currentYear, `Year cannot exceed ${currentYear}`)
        .nullable()
        .transform((value, originalValue) =>
            originalValue === "" ? null : value
        ),

    currency: yup
        .string()
        .oneOf(
            ["INR", "USD", "EUR"],
            "Invalid currency selected"
        )
        .required("Currency is required"),

    timezone: yup
        .string()
        .required("Timezone is required"),
});