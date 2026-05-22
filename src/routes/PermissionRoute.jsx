import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { hasPermission } from "../helpers/hasPermission";

const PermissionRoute = ({
    module,
    action,
}) => {
    const { user } = useSelector(
        (state) => state.auth
    );

    const role =
        typeof user?.role === "object"
            ? user?.role?.name
            : user?.role;

    const allowed = hasPermission(
        role,
        module,
        action
    );

    if (!allowed) {
        return <Navigate to="/edu/403" replace />;
    }

    return <Outlet />;
};

export default PermissionRoute;