import {
    FaTachometerAlt,
    FaBoxes,
    FaLaptop,
    FaTruck,
    FaShoppingCart,
    FaExchangeAlt,
    FaChartBar,
    FaUsers,
} from "react-icons/fa";

import { LuGitBranch } from "react-icons/lu";

import { ROLES } from "./default";

export const SIDEBAR_LINKS = [
    {
        path: "/edu/dashboard",
        label: "Dashboard",
        icon: <FaTachometerAlt />,

        permission: {
            module: "dashboard",
            action: "view",
        },
    },

    {
        path: "/edu/users",
        label: "Users",
        icon: <FaUsers />,

        permission: {
            module: "users",
            action: "view",
        },
    },

    {
        path: "/edu/products",
        label: "Products",
        icon: <FaBoxes />,

        permission: {
            module: "products",
            action: "view",
        },
    },

    {
        path: "/edu/assets",
        label: "Assets",
        icon: <FaLaptop />,

        permission: {
            module: "assets",
            action: "view",
        },
    },

    {
        path: "/edu/vendors",
        label: "Vendors",
        icon: <FaTruck />,

        permission: {
            module: "vendors",
            action: "view",
        },
    },

    {
        path: "/edu/purchases",
        label: "Purchases",
        icon: <FaShoppingCart />,

        permission: {
            module: "purchases",
            action: "view",
        },
    },

    {
        path: "/edu/reports",
        label: "Reports",
        icon: <FaChartBar />,

        permission: {
            module: "reports",
            action: "view",
        },
    },
];

// export const SIDEBAR_LINKS = [
//     {
//         path: "/edu/dashboard",
//         label: "Dashboard",
//         icon: <FaTachometerAlt />,
//         roles: Object.values(ROLES),
//         permission: {
//             module: "dashboard",
//             action: "view",
//         },
//     },

//     {
//         path: "/edu/products",
//         label: "Products",
//         icon: <FaBoxes />,
//         roles: [
//             ROLES.SUPER_ADMIN,
//             ROLES.ADMIN,
//             ROLES.INVENTORY_MANAGER,
//         ],
//     },

//     {
//         path: "/edu/assets",
//         label: "Assets",
//         icon: <FaLaptop />,
//         roles: [
//             ROLES.SUPER_ADMIN,
//             ROLES.ADMIN,
//             ROLES.ASSET_MANAGER,
//         ],
//     },

//     {
//         path: "/edu/vendors",
//         label: "Vendors",
//         icon: <FaTruck />,
//         roles: [
//             ROLES.SUPER_ADMIN,
//             ROLES.PURCHASE_MANAGER,
//         ],
//     },

//     {
//         path: "/edu/purchases",
//         label: "Purchases",
//         icon: <FaShoppingCart />,
//         roles: [
//             ROLES.SUPER_ADMIN,
//             ROLES.PURCHASE_MANAGER,
//         ],
//     },

//     {
//         path: "/edu/stocks",
//         label: "Stock Movement",
//         icon: <FaExchangeAlt />,
//         roles: [
//             ROLES.SUPER_ADMIN,
//             ROLES.INVENTORY_MANAGER,
//             ROLES.AUDITOR,
//         ],
//     },

//     {
//         path: "/edu/reports",
//         label: "Reports",
//         icon: <FaChartBar />,
//         roles: [
//             ROLES.SUPER_ADMIN,
//             ROLES.ADMIN,
//             ROLES.AUDITOR,
//         ],
//     },

//     {
//         path: "/edu/branches",
//         label: "Branches",
//         icon: <LuGitBranch />,
//         roles: [
//             ROLES.SUPER_ADMIN,
//         ],
//     },

//     {
//         path: "/edu/users",
//         label: "Users",
//         icon: <FaUsers />,
//         roles: [
//             ROLES.SUPER_ADMIN,
//             ROLES.ADMIN,
//         ],
//     },
// ];