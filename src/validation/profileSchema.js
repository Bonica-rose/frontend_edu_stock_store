import * as yup from "yup";

export const personalSchema = yup.object({
    full_name: yup
        .string()
        .trim()
        .required("Full name is required")
        .min(3, "Full name must be at least 3 characters")
        .max(50, "Full name cannot exceed 50 characters")
        .matches(
            /^[A-Za-z\s.]+$/,
            "Only letters, spaces and dots are allowed"
        ),
    gender: yup
        .string()
        .required('Gender is required'),
    dob: yup
        .date()
        .typeError("Date of birth is required")
        .max(new Date(), "DOB cannot be future date")
        .required("DOB is required"),
    joining_date: yup
        .date()
        .required("Joining date is required")
        .test(
            "minimum-age",
            "Employee must be at least 18 years old",
            function (value) {
                const { dob } = this.parent;

                if (!dob || !value) return true;

                const dobDate = new Date(dob);
                const joinDate = new Date(value);

                const age =
                    joinDate.getFullYear() -
                    dobDate.getFullYear();

                return age >= 18;
            }
        )

});

export const contactSchema = yup.object({

    contacts: yup.array().of(

        yup.object({

            usage_type: yup
                .string()
                .oneOf(["personal", "official"])
                .required(),

            contact_type: yup
                .string()
                .oneOf(["email", "mobile"])
                .required(),

            value: yup
                .string()
                .required("Value is required")
                .test(
                    "contact-validation",
                    "Invalid contact value",
                    function (value) {

                        const { contact_type } = this.parent;

                        if (contact_type === "email") {
                            return yup
                                .string()
                                .email()
                                .isValidSync(value);
                        }

                        if (contact_type === "mobile") {
                            return /^[6-9]\d{9}$/.test(value);
                        }

                        return true;
                    }
                ),

            is_primary: yup.boolean(),
        })
    ),
});