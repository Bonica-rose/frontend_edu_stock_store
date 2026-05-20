import { useSelector } from "react-redux";
import {
    Navigate,
    Outlet,
} from "react-router-dom";

const PublicRoute = () => {
    const { isAuthenticated, loading } =
        useSelector((state) => state.auth);
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated
        ? <Navigate to="/edu/dashboard" replace />
        : <Outlet />;
};

export default PublicRoute;