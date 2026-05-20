import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../validation/userSchema";

const UserForm = ({
    onSubmit,
    defaultValues,
    branches,
    roles,
    loading,
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues,
    });

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
        >

            <div>
                <label className="block mb-2 font-medium text-gray-700">
                    Username<span className="text-red-500">*</span>
                </label>
                <input
                    {...register("username")}
                    className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter username"
                />

                <p className="text-red-500 text-sm mt-1">
                    {errors.username?.message}
                </p>
            </div>            

            <div>
                <label className="block mb-2 font-medium">
                    Email<span className="text-red-500">*</span>
                </label>
                <input
                    {...register("email")}
                    className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter email"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
                {/* Branch Selection */}
                <div>
                    <label className="block mb-2 font-medium">Branch</label>
                    <select
                        {...register("branch_id")}
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">
                            Select Branch
                        </option>

                        {branches?.map((branch) => (
                            <option
                                key={branch._id}
                                value={branch._id}
                            >
                                {branch.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Role Selection */}
                <div>
                    <label className="block mb-2 font-medium">
                        Role
                    </label>

                    <select
                        {...register("role_id")}
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">
                            Select Role
                        </option>

                        {roles?.map((role) => (
                            <option
                                key={role._id}
                                value={role._id}
                            >
                                {role.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <button
                disabled={loading}
                className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg"
            >
                {loading ? "Saving..." : "Save User"}
            </button>
        </form>
    );
};

export default UserForm;