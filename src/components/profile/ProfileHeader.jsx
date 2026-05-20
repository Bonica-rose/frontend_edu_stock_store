import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProfileHeader = () => {

    const { user } = useSelector((state) => state.auth);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        if (user?.id) {
            const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
            const foundUser = registeredUsers.find(u => u.id === user.id);
            setUserDetails(foundUser || user);
        }
    }, [user?.id]);

    console.log("userDetails in ProfileHeader:", userDetails);
    

    const displayUser = userDetails || user;
    const firstLetter = displayUser?.fullName?.charAt(0) || '?';


    return (
        <div className="bg-linear-to-r from-blue-800 to-amber-300 rounded-xl p-8 shadow-lg text-white">

            <div className="flex flex-col md:flex-row md:items-center gap-6">

                {/* Avatar */}
                <div className="relative">

                    <div className="h-28 w-28 rounded-full bg-white text-blue-900 flex items-center justify-center text-5xl font-bold shadow-md">
                        {firstLetter}
                    </div>

                    <button className="absolute bottom-1 right-1 bg-amber-600 hover:bg-amber-700 h-9 w-9 rounded-full flex items-center justify-center">
                        <FaCamera />
                    </button>

                </div>

                {/* Details */}
                <div>
                    <h1 className="text-3xl font-bold">
                        {displayUser.fullName}
                    </h1>

                    <p className="text-indigo-100 mt-2">
                        {displayUser.role}
                    </p>

                    <p className="text-indigo-100">
                        {displayUser.branch}
                    </p>

                    <p className="text-indigo-200 text-sm mt-1">
                        {displayUser.employeeId}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;