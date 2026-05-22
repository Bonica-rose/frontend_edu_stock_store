import { useSelector } from "react-redux";

import {
    FaBuilding,
    FaUserTie,
    FaIdBadge,
} from "react-icons/fa";

const ProfessionalInfo = () => {

    const { user } = useSelector((state) => state.auth);

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Professional Info
            </h2>

            <div className="space-y-5">

                {/* Role */}
                <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-2xl">
                        <FaUserTie className="text-indigo-600" />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Role
                        </p>

                        <h3 className="font-semibold text-gray-800">
                            {user.role.name}
                        </h3>
                    </div>
                </div>

                {/* Department */}
                <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-2xl">
                        <FaBuilding className="text-indigo-600" />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Department
                        </p>

                        <h3 className="font-semibold text-gray-800">
                            {user.department}
                        </h3>
                    </div>
                </div>

                {/* Employee ID */}
                <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-2xl">
                        <FaIdBadge className="text-indigo-600" />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Employee ID
                        </p>

                        <h3 className="font-semibold text-gray-800">
                            {user.employeeId}
                        </h3>
                    </div>
                </div>

                {/* Branch */}
                <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 p-3 rounded-2xl">
                        <FaBuilding className="text-indigo-600" />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">
                            Branch
                        </p>

                        <h3 className="font-semibold text-gray-800">
                            {user.branch.branch_name}
                        </h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfessionalInfo;