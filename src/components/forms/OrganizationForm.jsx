import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orgainizationSchema } from "../../validation/organizationSchema";

import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGlobe,
    FaSave,
} from "react-icons/fa";

const OrganizationForm = ({
    onSubmit,
    loading,
    defaultValues = {},
}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(orgainizationSchema),

        defaultValues: {
            organization_name: "",
            email: "",
            phone: "",
            address: "",
            website: "",
            established_year: "",
            currency: "INR",
            timezone: "Asia/Kolkata",
        },
    });

    // Edit mode prefill
    useEffect(() => {
        if (defaultValues?.id) {
            reset({
                organization_name: defaultValues.organization_name || "",
                email: defaultValues.email || "",
                phone: defaultValues.phone?.replace("+91 ", "") || "",
                address: defaultValues.address || "",
                website: defaultValues.website || "",
                established_year: defaultValues.established_year || "",
                currency: defaultValues.currency || "INR",
                timezone: defaultValues.timezone || "Asia/Kolkata",
            });
        }
    }, [defaultValues, reset]);

    const handleFormSubmit = (data) => {
        const finalData = {
            ...data,
            phone: `+91 ${data.phone}`,
        };
        onSubmit(finalData);
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-5"
        >
            {/* Organization Name */}
            <div>
                <label className="block font-medium text-gray-700">
                    Organization Name<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    {...register("organization_name")}
                    className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                    placeholder="Enter organization name"
                />
                {errors.organization_name && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.organization_name?.message}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label className="block font-medium text-gray-700">
                    Email<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                    <input
                        type="email"
                        {...register("email")}
                        className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Enter email"
                    />
                </div>
                {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.email?.message}
                    </p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label className="block font-medium text-gray-700">
                    Phone<span className="text-red-500">*</span>
                </label>

                <div className="flex">
                    {/* Prefix */}
                    <div
                        className="
                            flex items-center gap-2
                            px-3 border border-r-0 border-gray-400
                            rounded-l-lg bg-gray-100 text-gray-700
                        "
                    >
                        <FaPhone className="text-gray-400" />
                        <span>+91</span>
                    </div>

                    {/* Input */}
                    <input
                        type="text"
                        maxLength={10}
                        {...register("phone")}
                        className="
                            w-full border border-gray-400
                            rounded-r-lg px-4 py-2
                            outline-none focus:ring-2
                            focus:ring-indigo-200
                        "
                        placeholder="9876543210"
                    />
                </div>

                {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.phone?.message}
                    </p>
                )}
            </div>

            {/* Address */}
            <div>
                <label className="block font-medium text-gray-700">
                    Address
                </label>
                <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />
                    <textarea
                        rows="3"
                        {...register("address")}
                        className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Enter address"
                    ></textarea>
                </div>
                {errors.address && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.address?.message}
                    </p>
                )}
            </div>

            {/* Website */}
            <div>
                <label className="block font-medium text-gray-700">
                    Website
                </label>
                <div className="relative">
                    <FaGlobe className="absolute left-3 top-4 text-gray-400" />
                    <input
                        type="text"
                        {...register("website")}
                        className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="https://example.com"
                    />
                    {errors.website && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.website?.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Grid Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-1">
                <div>
                    <label className="block font-medium text-gray-700">
                        Established Year
                    </label>
                    <input
                        type="text"
                        {...register("established_year")}
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="2005"
                    />
                    {errors.established_year && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.established_year?.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block font-medium text-gray-700">
                        Currency
                    </label>
                    <select
                        {...register("currency")}
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                    >
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    {errors.currency && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.currency?.message}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block font-medium text-gray-700">
                        Timezone
                    </label>
                    <select
                        {...register("timezone")}
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                    >
                        <option value="Asia/Kolkata">
                            Asia/Kolkata
                        </option>
                        <option value="UTC">UTC</option>
                    </select>
                    {errors.timezone && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.timezone?.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Organization Name */}
            {/* <div>
                <label className="block font-medium text-gray-700">
                    Organization Name
                </label>

                <input
                    type="text"
                    {...register("organizationName")}
                    className="w-full border border-gray-400 rounded-lg px-4 py-2"
                    placeholder="Enter organization name"
                />

                {errors.organizationName && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.organizationName.message}
                    </p>
                )}
            </div> */}

            {/* Email */}
            {/* <div>
                <label className="block font-medium text-gray-700">
                    Email
                </label>

                <div className="relative">
                    <FaEnvelope className="absolute left-3 top-4 text-gray-400" />

                    <input
                        type="email"
                        {...register("email")}
                        className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2"
                        placeholder="Enter email"
                    />
                </div>

                {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.email.message}
                    </p>
                )}
            </div> */}

            {/* Phone */}
            {/* <div>
                <label className="block font-medium text-gray-700">
                    Phone
                </label>

                <div className="flex">

                    <div className="flex items-center gap-2 px-3 border border-r-0 border-gray-400 rounded-l-lg bg-gray-100">
                        <FaPhone className="text-gray-400" />
                        +91
                    </div>

                    <input
                        type="text"
                        maxLength={10}
                        {...register("phone")}
                        className="w-full border border-gray-400 rounded-r-lg px-4 py-2"
                        placeholder="9876543210"
                    />
                </div>

                {errors.phone && (
                    <p className="text-red-600 text-sm mt-1">
                        {errors.phone.message}
                    </p>
                )}
            </div> */}

            {/* Address */}
            {/* <div>
                <label className="block font-medium text-gray-700">
                    Address
                </label>

                <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />

                    <textarea
                        rows="3"
                        {...register("address")}
                        className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2"
                    />
                </div>
            </div> */}

            {/* Website */}
            {/* <div>
                <label className="block font-medium text-gray-700">
                    Website
                </label>

                <div className="relative">
                    <FaGlobe className="absolute left-3 top-4 text-gray-400" />

                    <input
                        type="text"
                        {...register("website")}
                        className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2"
                    />
                </div>
            </div> */}

            {/* Submit */}
            <button
                type="submit"
                disabled={loading}
                className="
                    bg-blue-900 hover:bg-blue-800
                    text-white px-4 py-2 mt-3
                    rounded-lg flex items-center gap-2
                "
            >
                <FaSave />

                {loading
                    ? "Saving..."
                    : defaultValues?.id
                    ? "Update Settings"
                    : "Save Settings"}
            </button>
        </form>
    );
};

export default OrganizationForm;