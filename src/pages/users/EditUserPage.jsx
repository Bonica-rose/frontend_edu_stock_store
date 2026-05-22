import { useEffect } from "react";
import { useDispatch, useSelector, } from "react-redux";
import { useNavigate, useParams, Link} from "react-router-dom";
import UserForm from "../../components/forms/UserForm";
import { IoArrowBack } from "react-icons/io5";
import {
    fetchUserById,
    updateUser,
} from "../../features/users/userThunks";

const EditUserPage = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, loading } = useSelector((state) => state.users);
    
    // const branches = useSelector((state) => state.branches.branches);
    // const roles = useSelector((state) => state.roles.roles);

    // Get data from local storage
    const dbRoles = (JSON.parse(localStorage.getItem("roles")) || []).map(
        (role) => ({
            value: role.id,
            label: role.label,
            name: role.name,
        })
    );
    const dbBranches = (JSON.parse(localStorage.getItem("branches")) || []).map(
        (branch) => ({
            value: branch.id,
            label: branch.branch_name,
            name: branch.branch_name,
        })
    );

    useEffect(() => {
        dispatch(fetchUserById(id));
    }, [dispatch, id]);

    const handleUpdateUser = async (data) => {
        const result = await dispatch(
            updateUser({ id, data })
        );

        if (result.meta.requestStatus === "fulfilled") {
            navigate("/edu/users");
        }
    };

    return (
        <div className="max-w-5xl me-auto bg-white rounded-lg p-5 shadow-sm">
            <Link
                to="/edu/users"
                className="inline-flex items-center gap-2 text-gray-500 mb-4"
            >
                <IoArrowBack />
                Back to Users
            </Link>
            <h1 className="text-2xl font-bold mb-6">
                Edit User
            </h1>

            <UserForm
                onSubmit={handleUpdateUser}
                defaultValues={user}
                branches={dbBranches}
                roles={dbRoles}
                loading={loading}
            />
        </div>
    );
}

export default EditUserPage;