import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaSave,
    FaUser,
} from "react-icons/fa";

import { updateProfile } from "../../features/profile/profileSlice";

const PersonalInfoForm = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: user,
    });

    const onSubmit = (data) => {
        dispatch(updateProfile(data));
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">

            <div className="flex items-center gap-3 mb-6">
                <FaUser className="text-indigo-600 text-xl" />

                <h2 className="text-2xl font-bold text-gray-800">
                    Personal Information
                </h2>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >

                {/* Full Name */}
                <div>
                    <label className="block mb-2 font-medium text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        {...register("fullName")}
                        className="w-full border border-gray-300 bg-gray-100 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    />
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
                            className="w-full border border-gray-300 bg-gray-100 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                        />
                    </div>
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
                            className="w-full border border-gray-300 bg-gray-100 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                        />
                    </div>
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
                            className="w-full border border-gray-300 bg-gray-100 rounded-lg pl-10 pr-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                        />
                    </div>
                </div>

                {/* Save */}
                <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-blue-900 transition-all text-white px-6 py-2 rounded-lg flex items-center gap-2 font-medium"
                >
                    <FaSave />

                    Save Changes
                </button>

            </form>
        </div>
    );
};

export default PersonalInfoForm;