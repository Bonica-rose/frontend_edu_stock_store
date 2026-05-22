import { useSelector } from "react-redux";
import {
    Navigate,
    Outlet,
} from "react-router-dom";
import Loader from "../components/ui/Loader";

const PublicRoute = () => {
    const { isAuthenticated, loading } =
        useSelector((state) => state.auth);
    
    if (loading) {
        return <Loader />
    }

    return isAuthenticated
        ? <Navigate to="/edu/dashboard" replace />
        : <Outlet />;
};

export default PublicRoute;