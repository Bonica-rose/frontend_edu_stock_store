import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProfileHeader = () => {

    const { user } = useSelector((state) => state.auth);
    const { user_details } = useSelector((state) => state.profile);
    
    // fallback
    const displayUser = user_details || user;    

    const firstLetter =
        (displayUser?.full_name?.charAt(0) ||
        displayUser?.username?.charAt(0) ||
        "?").toUpperCase();

    // console.log("userDetails in ProfileHeader:", user_details); 
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
                        {user_details?.full_name || "Name of the user"}
                    </h1>

                    <p className="text-indigo-100">
                        {user?.branch?.branch_name}
                    </p>

                    {/* <p className="text-indigo-200 text-sm mt-1">
                        {displayUser.employeeId}
                    </p> */}
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;