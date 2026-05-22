import PublicRoute from "../routes/PublicRoute";
import ForcePasswordChangeRoute from "../routes/ForcePasswordChangeRoute";
import ProtectedRoute from "../routes/ProtectedRoute";
import PermissionRoute from "../routes/PermissionRoute";
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
import UserProfilePage from "../pages/profile/UserProfilePage";
import SettingsPage from "../pages/settings/SettingsPage";
import CreateOrganizationPage from "../pages/settings/CreateOrganizationPage";
import EditOrganizationPage from "../pages/settings/EditOrganizationPage";
import Logout from "../pages/auth/LogoutPage";
import UsersPage from "../pages/users/UsersPage";
import CreateUserPage from "../pages/users/CreateUserPage";
import EditUserPage from "../pages/users/EditUserPage";
import ChangePassword from "../pages/profile/ChangePassword";

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
                element: <ForcePasswordChangeRoute />,
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
                                path: "change-password",
                                element: <ChangePassword />,
                            },
                            {
                                path: "user/profile",
                                element: <UserProfilePage />,
                            },

                            {
                                element: (
                                    <PermissionRoute
                                        module="users"
                                        action="view"
                                    />
                                ),
                                children: [
                                    {
                                        path: "settings",
                                        element: <SettingsPage />,
                                    },
                                    {
                                        path: "settings/create",
                                        element: <CreateOrganizationPage />,
                                    },
                                    {
                                        path: "settings/edit/:id",
                                        element: <EditOrganizationPage />,
                                    },
                                    {
                                        path: "users",
                                        element: <UsersPage />,
                                    },
                                    {
                                        path: "users/create",
                                        element: <CreateUserPage />,
                                    },
                                    {
                                        path: "user/:id",
                                        element: <EditUserPage />,
                                    },
                                ],
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