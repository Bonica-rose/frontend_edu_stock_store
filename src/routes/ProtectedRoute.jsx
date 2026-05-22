import { useSelector } from "react-redux";
import {
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom";
import Loader from '../components/ui/Loader'

const ProtectedRoute = () => {
    const location = useLocation();

    const { isAuthenticated, loading, user } = useSelector((state) => state.auth);

    // console.log('From Protected Route - redux user: ',user);

    // Optional Loading Screen
    if (loading) {
        return <Loader />;
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