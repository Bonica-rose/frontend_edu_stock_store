import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ForcePasswordChangeRoute = () => {
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);

    const isChangePasswordPage =
        location.pathname === "/edu/change-password";

    if (user?.must_change_password && !isChangePasswordPage) {
        return <Navigate
            to="/edu/change-password"
            replace
        />;
    }

    // console.log("'From ForcePasswordChange Route - redux user: '", user);

    return <Outlet />;
};

export default ForcePasswordChangeRoute;