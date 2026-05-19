import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const EduLayout = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] =  useState(false);

    return (
        <div className="min-h-screen bg-slate-100">

            {/* Sidebar */}
            <Sidebar
                collapsed={collapsed}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
            />

            {/* Main Content */}
            <div className="min-h-screen">

                {/* Navbar */}
                <Navbar
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                />

                {/* Page */}
                <main
                    className={`
                        mt-16 p-4 sm:p-6
                        transition-all duration-300

                        ${
                            collapsed
                                ? "lg:ml-20"
                                : "lg:ml-64"
                        }
                    `}
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default EduLayout;