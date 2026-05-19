import { useState } from "react";
import { FaBell, FaCog, FaBars, FaChevronDown } from "react-icons/fa";
import {
    MdMenu,
    MdNotifications,
    MdSettings,
    MdPerson,
    MdLogout,
} from "react-icons/md";
import { LuGitBranch } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const { user } = useSelector((state) => state.auth);
    return (
        <header
            // className="fixed right-0 top-0 z-40 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm lg:w-[calc(100%-16rem)]"

            className={`
                fixed top-0 right-0 z-40
                flex h-16 items-center justify-between
                border-b border-slate-200 bg-white
                px-4 shadow-sm transition-all duration-300

                ${
                    collapsed
                        ? "lg:left-20"
                        : "lg:left-64"
                }

                left-0
            `}
        >
            
            {/* Left */}
            <div className="flex items-center gap-3">
                
                {/* Mobile Menu Button */}
                <button
                    onClick={() => {
                        // Mobile
                        if (window.innerWidth < 1024) {
                            setMobileOpen(!mobileOpen);
                        }

                        // Desktop
                        else {
                            setCollapsed(!collapsed);
                        }
                    }}
                    className="text-xl text-slate-700 cursor-pointer"
                >
                    <FaBars />
                </button>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Branch Dropdown */}
                {/* <select className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-700">
                    <option>Main Campus</option>
                    <option>Library</option>
                    <option>Science Lab</option>
                    <option>Computer Lab</option>
                </select> */}
                

                <div className="relative hidden sm:block">

                    {/* Icon */}
                    <LuGitBranch
                        className="
                            absolute left-3 top-1/2
                            -translate-y-1/2
                            text-slate-500
                        "
                        size={18}
                    />

                    {/* Select */}
                    <select
                        className="
                            appearance-none rounded-xl
                            border border-slate-200
                            bg-white py-2 pl-10 pr-10
                            text-sm font-medium text-slate-700
                            shadow-sm outline-none
                            transition-all duration-200

                            hover:border-blue-400
                            focus:border-blue-600
                            focus:ring-2 focus:ring-blue-100
                        "
                    >
                        <option>Main Campus</option>
                        <option>Library</option>
                        <option>Science Lab</option>
                        <option>Computer Lab</option>
                    </select>

                    {/* Dropdown Arrow */}
                    <div
                        className="
                            pointer-events-none absolute
                            right-3 top-1/2
                            -translate-y-1/2
                            text-slate-500
                        "
                    >
                        <FaChevronDown size={16} className="text-xs text-slate-500" />
                    </div>
                </div>
                

                {/* Notification */}
                <button className="relative rounded-full bg-slate-100 p-2 text-blue-900 hover:bg-slate-200">
                    <FaBell />
                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                {/* Settings */}
                <Link to="/edu/settings" className="relative rounded-full bg-slate-100 p-2 text-blue-900 hover:bg-slate-200 hidden sm:block">
                    <FaCog />
                </Link>

                {/* User Dropdown */}
                <div className="relative">                
                    <button
                        onClick={() => setOpenDropdown(!openDropdown)}
                        className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded-lg"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                            {user?.username ? user.username.charAt(0).toUpperCase() : "U"}
                        </div>

                        <div className="text-left hidden sm:block">
                            <p className="text-sm font-semibold">
                                {user?.username || "User Name"}
                            </p>

                            <p className="text-xs text-slate-500">
                                {user?.role || "N/A"}
                            </p>
                        </div>

                        <FaChevronDown size={16} className="text-xs text-slate-500" />
                    </button>

                    {/* Dropdown */}
                    {openDropdown && (
                        <div className="absolute right-0 mt-2 w-52 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden">

                            <button
                                className="w-full px-4 py-3 hover:bg-slate-50 flex items-center gap-3 text-[15.4px]">
                                <MdPerson size={20} />
                                Profile
                            </button>

                            <button className="w-full px-4 py-3 hover:bg-slate-50 flex items-center gap-3 text-[15.4px]">
                                <MdSettings size={20} />
                                Settings
                            </button>

                            <div className="border-t"></div>

                            <Link to="/edu/logout" className="w-full px-4 py-3 hover:bg-red-50 text-red-600 flex items-center gap-3 text-[15.4px] font-semibold">
                                <MdLogout size={20} />
                                Logout
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;