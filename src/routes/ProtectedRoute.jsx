import { useSelector } from "react-redux";
import {
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom";

const ProtectedRoute = () => {
    const location = useLocation();

    const { isAuthenticated, loading, user } = useSelector((state) => state.auth);

    // Optional Loading Screen
    if (loading) {
        return <div>Loading...</div>;
    }

    // Not Logged In
    if (!isAuthenticated) {
        return <Navigate
            to="/auth/login"
            state={{ from: location }}
            replace
        />;
    }

    return <Outlet />;
};

export default ProtectedRoute;