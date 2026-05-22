import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import UserForm from "../../components/forms/UserForm";
import { createUser } from "../../features/users/userThunks";
import toast from "react-hot-toast";
import { IoArrowBack } from "react-icons/io5";

const CreateUserPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector((state) => state.users);

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

    const handleCreateUser = async (data) => {
        try {
            const result = await dispatch(createUser(data)).unwrap();

            console.log("User Success:", result);
            toast.success("User creation successful");

            navigate("/edu/users");
        } catch (error) {
            console.log("User creation failed:", error);
            toast.error(error?.message || "User creation failed");
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
            <h1 className="text-2xl font-bold mb-6">Create User</h1>

            <UserForm
                onSubmit={handleCreateUser}
                branches={dbBranches}
                roles={dbRoles}
                loading={loading}
            />
        </div>
    );
};

export default CreateUserPage;