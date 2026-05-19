import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const token = localStorage.getItem("token");

    return token
        ? <Navigate to="/edu/dashboard" replace />
        : <Outlet />;
};

export default PublicRoute;