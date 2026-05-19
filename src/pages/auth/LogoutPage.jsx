import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";

const LogoutPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        // Clear Redux State
        dispatch(logout());

        // Clear Local Storage
        localStorage.removeItem("token");

        // Redirect
        navigate("/auth/login", {
            replace: true,
        });

    }, [dispatch, navigate]);

    return (
        <div className="flex h-screen items-center justify-center">

            <p className="text-slate-600">
                Logging out...
            </p>
        </div>
    );
};

export default LogoutPage;