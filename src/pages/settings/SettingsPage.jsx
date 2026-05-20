import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addOrganization } from "../../features/settings/settingsThunk";

import {
    FaBuilding,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGlobe,
    FaSave,
    FaRegSave,
    FaCog,
} from "react-icons/fa";

const schema = yup.object({
    organizationName: yup.string().required("Organization name is required"),
    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
    phone: yup.string().required("Phone is required"),
    address: yup.string().required("Address is required"),
    website: yup.string(),
    establishedYear: yup.string(),
    currency: yup.string().required(),
    timezone: yup.string().required(),
});

const SettingsPage = () => {
    const dispatch = useDispatch();
    const { organizations } = useSelector((state) => state.settings);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            organizationName: "",
            email: "",
            phone: "",
            address: "",
            website: "",
            establishedYear: "",
            currency: "INR",
            timezone: "Asia/Kolkata",
        },
    });

    const onSubmit = (data) => {
        dispatch(addOrganization(data));
        reset();
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex items-center gap-3 mb-6">
                <FaCog className="text-2xl text-indigo-700" />
                <h1 className="text-3xl font-bold text-gray-800">
                    Organization Settings
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Form Section */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <FaBuilding className="text-indigo-700" />
                        <h2 className="text-xl font-semibold">
                            Organization Profile
                        </h2>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
                        {/* Organization Name */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Organization Name
                            </label>
                            <input
                                type="text"
                                {...register("organizationName")}
                                className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter organization name"
                            />
                            <p className="text-red-500 text-sm mt-1">
                                {errors.organizationName?.message}
                            </p>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Email
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
                                <input
                                    type="email"
                                    {...register("email")}
                                    className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter email"
                                />
                            </div>
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email?.message}
                            </p>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Phone
                            </label>
                            <div className="relative">
                                <FaPhone className="absolute left-3 top-4 text-gray-400" />
                                <input
                                    type="text"
                                    {...register("phone")}
                                    className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter phone number"
                                />
                            </div>
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone?.message}
                            </p>
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Address
                            </label>
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-3 top-4 text-gray-400" />
                                <textarea
                                    rows="3"
                                    {...register("address")}
                                    className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter address"
                                ></textarea>
                            </div>
                            <p className="text-red-500 text-sm mt-1">
                                {errors.address?.message}
                            </p>
                        </div>

                        {/* Website */}
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">
                                Website
                            </label>
                            <div className="relative">
                                <FaGlobe className="absolute left-3 top-4 text-gray-400" />
                                <input
                                    type="text"
                                    {...register("website")}
                                    className="w-full border border-gray-400 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="https://example.com"
                                />
                            </div>
                        </div>

                        {/* Grid Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Established Year
                                </label>
                                <input
                                    type="text"
                                    {...register("establishedYear")}
                                    className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="2005"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Currency
                                </label>
                                <select
                                    {...register("currency")}
                                    className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Timezone
                                </label>
                                <select
                                    {...register("timezone")}
                                    className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="Asia/Kolkata">
                                        Asia/Kolkata
                                    </option>
                                    <option value="UTC">UTC</option>
                                </select>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="bg-indigo-700 hover:bg-blue-900 transition-all text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium"
                        >
                            <FaSave />
                            Save Settings
                        </button>
                    </form>
                </div>

                {/* Preview Section */}
                <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

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
                                    className="border border-gray-400 rounded-xl p-4"
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
            </div>
        </div>
    );
};

export default SettingsPage;