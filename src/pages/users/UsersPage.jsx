import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
    fetchUsers,
    deleteUser,
} from "../../features/users/userThunks";

import {
    FaEdit,
    FaTrash,
    FaPlus,
} from "react-icons/fa";

const UsersPage = () => {
    const dispatch = useDispatch();
    const {
        users,
        loading,
    } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Delete this user?");

        if (confirmDelete) {
            dispatch(deleteUser(id));
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    Users
                </h1>

                <Link
                    to="/edu/users/create"
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2"
                >
                    <FaPlus />
                    Add User
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-4 text-left">
                                Username
                            </th>
                            <th className="p-4 text-left">
                                Email
                            </th>
                            <th className="p-4 text-left">
                                Branch
                            </th>
                            <th className="p-4 text-left">
                                Status
                            </th>
                            <th className="p-4 text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user) => (
                            <tr key={user._id} className="border-t">
                                <td className="p-4">
                                    {user.username}
                                </td>

                                <td className="p-4">
                                    {user.email}
                                </td>
                                <td className="p-4">
                                    {user.branch?.name}
                                </td>

                                <td className="p-4">
                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                        Active
                                    </span>
                                </td>

                                <td className="p-4 flex gap-3">
                                    <Link
                                        to={`/users/edit/${user._id}`}
                                        className="text-blue-600"
                                    >
                                        <FaEdit />
                                    </Link>

                                    <button
                                        onClick={() =>
                                            handleDelete(user._id)
                                        }
                                        className="text-red-600"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {loading && (
                <div className="p-5 text-center">
                    Loading...
                </div>
            )}
        </div>
    );
};

export default UsersPage;