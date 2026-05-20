import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function RoleRoute({ allowedRoles }) {

    const { user } = useSelector((state) => state.auth);

    // Example: user.role = "inventory_staff"

    if (!allowedRoles.includes(user?.role)) {
        return (
            <Navigate to="/edu/403" replace />
        );
    }

    return <Outlet />;
}