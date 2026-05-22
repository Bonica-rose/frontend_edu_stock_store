import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
    fetchUsers,
    deleteUser,
    updateUserStatus
} from "../../features/users/userThunks";

import {FaPlus,} from "react-icons/fa";
import DataTable from "../../components/table/DataTable";
import TableSearch from "../../components/table/TableSearch";
import TablePagination from "../../components/table/TablePagination";
import { usersColumns } from "../../components/table/columns/usersColumns.jsx";

const UsersPage = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const { users, loading, } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // Search Filter
    const filteredData = users.filter((u) => {
        const keyword = search.toLowerCase();
        return (
            u.username?.toLowerCase().includes(keyword) ||
            u.email?.toLowerCase().includes(keyword) ||
            u.branch_name?.toLowerCase().includes(keyword) ||
            u.role_name?.toLowerCase().includes(keyword) ||
            u.status?.toLowerCase() === keyword
        );
    });
    // console.log(filteredData);
    

    // Pagination
    const itemsPerPage = 5;
    const totalPages = Math.ceil(
        filteredData.length / itemsPerPage
    );
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const toggleStatus = (id, currentStatus) => {
        const newStatus = currentStatus === "active" ? "inactive" : "active";
        dispatch(updateUserStatus({ id, status: newStatus }));
    };

    const handleDelete = (id) => {
        try {
            const confirmDelete = window.confirm("Delete this user?");
            if (confirmDelete) {
                dispatch(deleteUser(id));
            }
        } catch (error) {
            console.log(error);
            
        }        
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    Users
                </h1>

                <Link
                    to="/edu/users/create"
                    className="bg-blue-900 text-white px-3 py-2 text-[15px] rounded-lg flex items-center gap-2"
                >
                    <FaPlus />
                    Add User
                </Link>
            </div>

            <div className="bg-white rounded-lg p-4">

                <div className="flex justify-between items-center mb-3">  
                    <TableSearch
                        search={search}
                        setSearch={setSearch}
                    />
                </div>

                <DataTable
                    columns={usersColumns(toggleStatus, handleDelete)}
                    data={paginatedData}
                />

                <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
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