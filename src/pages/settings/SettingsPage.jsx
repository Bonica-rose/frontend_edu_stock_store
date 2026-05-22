import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
    FaBuilding,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGlobe,
    FaEdit,
    FaPlus,
    FaCog,
} from "react-icons/fa";

const SettingsPage = () => {

    const { organizations } = useSelector(
        (state) => state.settings
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-3">
                    <FaCog className="text-2xl text-indigo-700" />

                    <h1 className="text-3xl font-bold text-gray-800">
                        Organization Settings
                    </h1>
                </div>

                {/* Create Button */}
                {organizations.length === 0 && (
                    <Link
                        to="/edu/settings/create"
                        className="
                            bg-blue-900 hover:bg-blue-800
                            text-white px-4 py-2
                            rounded-lg flex items-center gap-2
                            transition
                        "
                    >
                        <FaPlus />
                        Add Organization
                    </Link>
                )}
            </div>

            {/* Empty State */}
            {organizations.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm p-10 text-center">

                    <FaBuilding className="text-5xl text-gray-300 mx-auto mb-4" />

                    <h2 className="text-xl font-semibold text-gray-700 mb-2">
                        No Organization Found
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Add your organization settings to continue.
                    </p>

                    <Link
                        to="/edu/settings/create"
                        className="
                            inline-flex items-center gap-2
                            bg-indigo-700 hover:bg-indigo-800
                            text-white px-5 py-3 rounded-lg
                        "
                    >
                        <FaPlus />
                        Create Organization
                    </Link>
                </div>
            ) : (

                /* Organization Cards */
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {organizations.map((org) => (
                        <div
                            key={org.id}
                            className="
                                bg-white rounded-xl shadow-sm
                                border border-gray-200
                                p-6
                            "
                        >

                            {/* Card Header */}
                            <div className="flex items-start justify-between mb-5">

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">
                                        {org.organization_name}
                                    </h2>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Organization Profile
                                    </p>
                                </div>

                                <Link
                                    to={`/edu/settings/edit/${org.id}`}
                                    className="
                                        bg-amber-600 hover:bg-amber-500
                                        text-white px-3 py-2 rounded-lg
                                        flex items-center gap-2 text-sm
                                    "
                                >
                                    <FaEdit />
                                    Edit
                                </Link>
                            </div>

                            {/* Organization Details */}
                            <div className="space-y-4 text-sm">

                                <div className="flex items-center gap-3">
                                    <FaEnvelope className="text-gray-400" />

                                    <span className="text-gray-700">
                                        {org.email || "-"}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaPhone className="text-gray-400" />

                                    <span className="text-gray-700">
                                        {org.phone || "-"}
                                    </span>
                                </div>

                                <div className="flex items-start gap-3">
                                    <FaMapMarkerAlt className="text-gray-400 mt-1" />

                                    <span className="text-gray-700">
                                        {org.address || "-"}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FaGlobe className="text-gray-400" />

                                    <span className="text-gray-700">
                                        {org.website || "-"}
                                    </span>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="border-t mt-5 pt-4">

                                <div className="grid grid-cols-2 gap-4 text-sm">

                                    <div>
                                        <p className="text-gray-500">
                                            Currency
                                        </p>

                                        <p className="font-medium text-gray-800">
                                            {org.currency || "INR"}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-gray-500">
                                            Timezone
                                        </p>

                                        <p className="font-medium text-gray-800">
                                            {org.timezone || "Asia/Kolkata"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SettingsPage;