import PublicRoute from "../routes/PublicRoute";
import ProtectedRoute from "../routes/ProtectedRoute";
import RoleRoute from "../routes/RoleRoute";
// Layouts
import PublicLayout from "../layouts/PublicLayout";
import AuthLayout from "../layouts/AuthLayout";
import EduLayout from "../layouts/EduLayout";
//Error Pages
import UnauthorizedPage from "../pages/errors/UnauthorizedPage";
import ForbiddenPage from "../pages/errors/ForbiddenPage";
import ServerErrorPage from "../pages/errors/ServerErrorPage";
import NotFoundPage from "../pages/errors/NotFoundPage";
// Public Pages
import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
// Dashboard Pages
import OverviewPage from "../pages/dashboard/OverviewPage";
import Logout from "../pages/auth/LogoutPage";

const routeConfig = [
    // Public Routes
    {
        element: <PublicRoute />,
        children: [
            // LANDING PAGE
            {
                path: "/",
                element: <PublicLayout />,
                children: [
                    {
                        index: true,
                        element: <LandingPage />,
                    },
                ],
            },
            // AUTH PAGES
            {
                path: "/auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                    {
                        path: "register",
                        element: <RegisterPage />,
                    },
                ],
            },
        ],
    },

    // Protected Routes
    {
        element: <ProtectedRoute />,
        children: [
            {
                path: "/edu",
                element: <EduLayout />,
                children: [
                    {
                        path: "dashboard",
                        element: <OverviewPage />,
                    },
                    {
                        path: "logout",
                        element: <Logout />,
                    },
                    {
                        path: "401",
                        element: <UnauthorizedPage />,
                    },
                    {
                        path: "403",
                        element: <ForbiddenPage />,
                    },
                ],
            },
        ],
    },

    {
        path: "/500",
        element: <ServerErrorPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
];

export default routeConfig;