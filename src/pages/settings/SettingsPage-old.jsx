import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { addOrganization } from "../../features/settings/settingsThunk";
import { Link, useParams } from "react-router-dom";
import { orgainizationSchema } from '../../validation/organizationSchema';

import {
    FaBuilding,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGlobe,
    FaSave,
    FaRegSave,
    FaCog,
    FaEdit,
} from "react-icons/fa";

const SettingsPage = () => {
    const dispatch = useDispatch();
    const { organizations } = useSelector((state) => state.settings);

    const { id } = useParams();
    const isEditing = Boolean(id);

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

    const onSubmit = (data) => {
        dispatch(addOrganization(data));
        dispatch(updateOrganization({id: organization.id,data,}));
        reset();
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex items-center gap-3 mb-6">
                <FaCog className="text-2xl text-indigo-700" />
                <h1 className="text-[26px] font-bold text-gray-800">
                    Organization Settings
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Preview Section */}
                <div className="bg-white rounded-xl shadow-md p-6 h-fit">

                    <div className="flex items-center gap-3 mb-6">
                        <FaRegSave className="text-2xl text-indigo-400" />
                        <h1 className="text-xl font-semibold">
                            Organization Profile
                        </h1>
                    </div>

                    <div className="space-y-4">
                        {organizations.length === 0 ? (
                            <p className="text-gray-500 text-sm">
                                No organization added yet.
                            </p>
                        ) : (
                            organizations.map((org) => (
                                <div
                                    key={org.id}
                                    className="border border-gray-300 rounded-lg p-4"
                                >
                                    <h3 className="font-bold text-lg text-gray-800">
                                        {org.organizationName}
                                    </h3>

                                    <p className="text-sm text-gray-600 mt-1">
                                        {org.email}
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        {org.phone}
                                    </p>

                                    <p className="text-sm text-gray-600">
                                        {org.address}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Form Section */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-4">
                    <div className="flex items-center justify-between gap-2 mb-6 w-full">
                        <div className="flex items-center gap-2">
                            <FaBuilding className="text-indigo-700 text-lg" />
                            <h2 className="text-xl font-semibold text-slate-800">
                                Organization Profile
                            </h2>
                        </div>
                        <Link
                            to="/edu/settings"
                            className="bg-amber-700 hover:bg-amber-600 text-white px-3 py-2 text-[15px] font-medium rounded-lg flex items-center gap-2 transition duration-200"
                        >
                            <FaEdit className="text-sm" />
                            Edit
                        </Link>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5 space-x-6"
                    >
                        {/* Organization Name */}
                        <div>
                            <label className="block font-medium text-gray-700">
                                Organization Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                {...register("organizationName")}
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

                        {/* Submit */}
                        {(!organizations && isEditing) && (
                            <button
                                type="submit"
                                className="bg-blue-900 hover:bg-blue-800 text-white px-3 py-2 text-[15px] font-medium rounded-lg flex items-center gap-2 transition duration-200"
                            >
                                <FaSave />
                                Save Settings
                            </button>
                        )}
                        
                    </form>
                </div>                
            </div>
        </div>
    );
};

export default SettingsPage;