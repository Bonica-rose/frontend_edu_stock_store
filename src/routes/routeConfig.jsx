import PublicLayout from "../layouts/PublicLayout";
import EduLayout from "../layouts/EduLayout";
import AuthLayout from "../layouts/AuthLayout";

import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import OverviewPage from "../pages/dashboard/OverviewPage";

const routeConfig = [
    {
        path: "/",
        element: <PublicLayout />,
        children: [
        {
            index: true,
            element: <HomePage />,
        },
        ],
    },

    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
        {
            path: "login",
            element: <LoginPage />,
        },
        ],
    },

    {
        path: "/edu",
        element: <EduLayout />,
        children: [
        {
            path: "dashboard",
            element: <OverviewPage />,
        },
        ],
    },
];

export default routeConfig;