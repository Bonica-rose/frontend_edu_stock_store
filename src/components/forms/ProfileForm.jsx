import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../validation/profileSchema";

const ProfileForm = ({ defaultValues, onSubmit }) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(profileSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            gender: "",
            dob: "",
            joining_date: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 

                <div>
                    <label className="block font-medium text-gray-700">
                        Username<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("username")}
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Enter username"
                    />
                
                    {errors.username && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.username?.message}
                        </p>
                    )}
                </div>  

            </div>

            <input {...register("first_name")} placeholder="First Name" />
            <p>{errors.first_name?.message}</p>

            <input {...register("last_name")} placeholder="Last Name" />

            <select {...register("gender")}>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <input type="date" {...register("dob")} />
            <input type="date" {...register("joining_date")} />

            <button type="submit">
                Save Profile
            </button>
        </form>
    );
};

export default ProfileForm;