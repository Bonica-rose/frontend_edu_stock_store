import { NavLink } from "react-router-dom";
import logoImage from '../assets/logo.png';
import { SIDEBAR_LINKS } from "../constants/sidebarConfig.jsx";
import { hasPermission } from "../helpers/hasPermission.js";
import { useSelector } from "react-redux";

const Sidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {

    const { user } = useSelector((state) => state.auth);

    // const filteredLinks = SIDEBAR_LINKS.filter((link) =>
    //     link.roles.includes(user?.role)
    // );

    const filteredLinks = SIDEBAR_LINKS.filter(
        (link) =>
            hasPermission(
                user?.role.name,
                link.permission.module,
                link.permission.action
            )
    );

    return (
        <>
            {/* Overlay */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="
                        fixed inset-0 z-40 bg-black/40
                        lg:hidden
                    "
                />
            )}
            
            <aside
                className={`fixed left-0 top-0 z-50 h-screen overflow-hidden bg-blue-950 text-white transition-all duration-300
                    ${collapsed ? "lg:w-20" : "lg:w-64"}
                    ${mobileOpen ? "translate-x-0" : "-translate-x-full"}                    
                    w-64 lg:translate-x-0
                `}
            >
                
                {/* Logo */}
                <div className="flex h-16 items-center border-b border-slate-700 px-4">
                    {collapsed ? (
                        <img
                            src={logoImage}
                            alt="Logo"
                            className="h-8 w-8 object-contain"
                        />
                    ) : (

                        <div className="flex items-center gap-3">
                            <img
                                src={logoImage}
                                alt="Logo"
                                className="h-8 w-8 object-contain"
                            />

                            <h1
                                className={`origin-left whitespace-nowrap text-lg font-bold tracking-wide transition-all duration-300 ${collapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
                                `}
                            >
                            Edu Stock&Store
                            </h1>
                        </div>
                    )}
                </div>

                {/* Nav Links */}
                <nav className="space-y-2 p-4">
                    {filteredLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200
                                ${
                                    isActive
                                        ? "bg-blue-800 text-white"
                                        : "text-slate-300 hover:bg-slate-600 hover:text-white"
                                }`
                            }
                        >
                            <span className="text-lg">
                                {link.icon}
                            </span>
                            {!collapsed && (
                                <span className="text-[15px] font-medium">
                                    {link.label}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;