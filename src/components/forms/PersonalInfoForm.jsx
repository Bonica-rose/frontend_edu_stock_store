import  { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { personalSchema } from "../../validation/profileSchema";

const PersonalInfoForm = ({
    defaultValues,
    onSubmit,
    loading
}) => {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(personalSchema),

        defaultValues: {
            full_name: "",
            gender: "",
            dob: "",
            joining_date: "",
        },
    });

    useEffect(() => {
        if (defaultValues?.id) {
            reset({
                full_name: defaultValues.full_name || "",
                gender: defaultValues.gender || "",
                dob: defaultValues.dob || "",
                joining_date: defaultValues.joining_date || "",
            });
        }
    }, [defaultValues, reset]);

    const dob = watch("dob");

    const today = new Date()
        .toISOString()
        .split("T")[0];    

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">

            <h2 className="text-2xl font-bold mb-5">
                Personal Information
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium text-gray-700">
                            Full Name<span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            {...register("full_name")}
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all"
                        />
                        {errors.full_name && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.full_name?.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700">
                            Gender
                        </label>
                        <select
                            {...register("gender")}
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        {errors.gender && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.gender?.message}
                            </p>
                        )}
                    </div>
                </div>                

                <div className="grid grid-cols-2 gap-4">

                    <div>
                        <label className="block font-medium text-gray-700">
                            Date of Birth<span className="text-red-500">*</span>
                        </label>

                        <input
                            type="date"
                            max={today}
                            {...register("dob")}
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all"
                        />
                        {errors.dob && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.dob?.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700">
                            Joining date<span className="text-red-500">*</span>
                        </label>

                        <input
                            type="date"
                            min={dob}
                            max={today}
                            {...register("joining_date")}
                            className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all"
                        />
                        {errors.joining_date && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.joining_date?.message}
                            </p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="
                        bg-blue-900 text-white
                        px-4 py-2 rounded-lg disabled:opacity-50
                    "
                >
                    {loading ? "Saving..." : "Save Personal Info"}
                </button>
            </form>
        </div>
    );
};

export default PersonalInfoForm;