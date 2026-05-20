import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import UserForm from "../../components/forms/UserForm";

import { createUser } from "../../features/users/userThunks";

const CreateUserPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector(
        (state) => state.users
    );

    // const branches = useSelector(
    //     (state) => state.branches.branches
    // );

    // const roles = useSelector(
    //     (state) => state.roles.roles
    // );

    const handleCreateUser = async (data) => {
        const result = await dispatch(
            createUser(data)
        );

        if (result.meta.requestStatus === "fulfilled") {
            navigate("/users");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-6">Create User</h1>

            <UserForm
                onSubmit={handleCreateUser}
                // branches={branches}
                // roles={roles}
                loading={loading}
            />
        </div>
    );
};

export default CreateUserPage;