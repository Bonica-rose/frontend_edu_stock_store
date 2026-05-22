import {
    FaTachometerAlt,
    FaUsers,
    FaUserCircle,
    FaCog,
    FaSignOutAlt,
    FaKey,

    FaBoxes,
    FaLaptop,
    FaTruck,
    FaShoppingCart,
    FaChartBar,
    FaClipboardList,
    FaTools,
    FaWarehouse,
} from "react-icons/fa";

import { LuGitBranch } from "react-icons/lu";

export const SIDEBAR_LINKS = [
    // DASHBOARD
    {
        path: "/edu/dashboard",
        label: "Dashboard",
        icon: <FaTachometerAlt />,
        permission: {
            module: "dashboard",
            action: "view",
        },
    },

    // PROFILE
    // {
    //     path: "/edu/user/profile",
    //     label: "Profile",
    //     icon: <FaUserCircle />,
    //     permission: {
    //         module: "profile",
    //         action: "view",
    //     },
    // },

    // CHANGE PASSWORD
    // {
    //     path: "/edu/change-password",
    //     label: "Change Password",
    //     icon: <FaKey />,
    //     permission: {
    //         module: "profile",
    //         action: "change_password",
    //     },
    // },

    // USERS
    {
        path: "/edu/users",
        label: "Users",
        icon: <FaUsers />,
        permission: {
            module: "users",
            action: "view",
        },
    },

    // BRANCHES
    {
        path: "/edu/branches",
        label: "Branches",
        icon: <LuGitBranch />,
        permission: {
            module: "branches",
            action: "view",
        },
    },

    // PRODUCTS
    {
        path: "/edu/products",
        label: "Products",
        icon: <FaBoxes />,
        permission: {
            module: "products",
            action: "view",
        },
    },

    // INVENTORY
    {
        path: "/edu/inventory",
        label: "Inventory",
        icon: <FaWarehouse />,
        permission: {
            module: "inventory",
            action: "view",
        },
    },

    // ASSETS
    {
        path: "/edu/assets",
        label: "Assets",
        icon: <FaLaptop />,
        permission: {
            module: "assets",
            action: "view",
        },
    },

    // VENDORS
    {
        path: "/edu/vendors",
        label: "Vendors",
        icon: <FaTruck />,
        permission: {
            module: "vendors",
            action: "view",
        },
    },

    // PURCHASES
    {
        path: "/edu/purchases",
        label: "Purchases",
        icon: <FaShoppingCart />,
        permission: {
            module: "purchases",
            action: "view",
        },
    },

    // REQUESTS
    {
        path: "/edu/requests",
        label: "Requests",
        icon: <FaClipboardList />,
        permission: {
            module: "requests",
            action: "view",
        },
    },

    // MAINTENANCE
    {
        path: "/edu/maintenance",
        label: "Maintenance",
        icon: <FaTools />,

        permission: {
            module: "maintenance",
            action: "view",
        },
    },

    // REPORTS
    {
        path: "/edu/reports",
        label: "Reports",
        icon: <FaChartBar />,
        permission: {
            module: "reports",
            action: "view",
        },
    },

    // SETTINGS
    {
        path: "/edu/settings",
        label: "Settings",
        icon: <FaCog />,
        permission: {
            module: "settings",
            action: "view",
        },
    },

    // LOGOUT
    {
        path: "/edu/logout",
        label: "Logout",
        icon: <FaSignOutAlt />,
        permission: {
            module: "auth",
            action: "logout",
        },
    },
];