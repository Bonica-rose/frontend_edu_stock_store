import {FaEdit,FaTrash,} from "react-icons/fa";
import ToggleCell from "../../ui/ToggleCell";
import { Link } from "react-router-dom";

export const usersColumns = (toggleStatus, handleDelete) => [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role_name",
        header: "Role",
    },
    {
        accessorKey: "branch_name",
        header: "Branch",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const { id, status } = row.original;
            return (
                <ToggleCell
                value={status}
                onChange={() => toggleStatus(id, status)}
                />
            );
        },
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const user = row.original;

            return (
                <div className="flex items-center gap-2">
                    <Link to={`/edu/user/${user.id}`}
                        // onClick={() => console.log("Edit", user)}
                        className="p-2 rounded bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                        <FaEdit />
                    </Link>

                    <button
                        onClick={() => handleDelete(user.id)}
                        className="p-2 rounded bg-red-100 text-red-600 hover:bg-red-200"
                    >
                        <FaTrash />
                    </button>
                </div>
            );
        },
    },
];