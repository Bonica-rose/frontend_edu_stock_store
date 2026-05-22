import  { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../validation/userSchema";
import CustomSelect from "../../components/ui/CustomSelect";

const UserForm = ({
    onSubmit,
    branches,
    roles,
    loading,
    defaultValues,
}) => {     
    const [selectedRoleOption, setSelectedRoleOption] = useState(null);
    const [selectedBranchOption, setSelectedBranchOption] = useState(null);

    useEffect(() => {
        if (roles.length > 0) {
            const defaultRole = roles.find((r) => r.name === "staff") || null;
            setSelectedRoleOption(defaultRole);

            if (defaultRole) {
                setValue("role_id", defaultRole.value);
            }
        }
    }, [roles]);

    useEffect(() => {
        if (branches.length > 0) {
            const defaultBranch =
                branches.find((b) => b.name === "Main Campus") || null;

            setSelectedBranchOption(defaultBranch);

            if (defaultBranch) {
                setValue("branch_id", defaultBranch.value);
            }
        }
    }, [branches]);    

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        reset,
    } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: {
            username: "",
            email: "",
            branch_id: "",
            role_id: "",
        },
    });

    // Set form values for edit mode
    useEffect(() => {        
        if (defaultValues?.id) {
            reset({
                username: defaultValues.username || "",
                email: defaultValues.email || "",
                branch_id: defaultValues.branch_id || "",
                role_id: defaultValues.role_id || "",
            });

            // Set selected branch
            const branch = branches.find(
                (b) => b.value === defaultValues.branch_id
            );

            setSelectedBranchOption(branch || null);

            // Set selected role
            const role = roles.find(
                (r) => r.value === defaultValues.role_id
            );

            setSelectedRoleOption(role || null);
        }
    }, [defaultValues, branches, roles, reset]);

    // Create mode default role
    useEffect(() => {
        if (!defaultValues?.id && roles.length > 0) {
            const defaultRole =
                roles.find((r) => r.name === "staff") || null;

            setSelectedRoleOption(defaultRole);

            if (defaultRole) {
                setValue("role_id", defaultRole.value);
            }
        }
    }, [roles, defaultValues, setValue]);

    // Create mode default branch
    useEffect(() => {
        if (!defaultValues?.id && branches.length > 0) {
            const defaultBranch =
                branches.find(
                    (b) => b.name === "Main Campus"
                ) || null;

            setSelectedBranchOption(defaultBranch);

            if (defaultBranch) {
                setValue("branch_id", defaultBranch.value);
            }
        }
    }, [branches, defaultValues, setValue]);

    const handleFormSubmit = async (formData) => {
        try {
            console.log("user Success:", formData);
            onSubmit(formData); // call parent function
        } catch (error) {
            console.log("user Error:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="space-y-5"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
                <div>
                    <label className="block font-medium text-gray-700">
                        Username<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("username")}
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-200"
                        placeholder="Enter username"
                    />
                
                    {errors.username && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.username?.message}
                        </p>
                    )}
                </div>            

                <div>
                    <label className="block font-medium text-gray-700">
                        Email<span className="text-red-500">*</span>
                    </label>
                    <input
                        {...register("email")}
                        className="w-full border border-gray-400 rounded-lg px-4 py-2 
                        outline-none  focus:ring-2 ring-indigo-200"
                        placeholder="Enter email"
                    />
                    {errors.email && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.email?.message}
                        </p>
                    )}
                </div>
            </div>    

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
                {/* Branch Selection */}
                <div>
                    <label className="block font-medium text-gray-700">
                        Branch<span className="text-red-500">*</span>
                    </label>
                    <CustomSelect
                        options={branches}
                        value={selectedBranchOption}
                        onChange={(option) => {
                            setSelectedBranchOption(option);
                            setValue("branch_id", option?.value, {
                                shouldValidate: true,
                            });
                        }}
                        placeholder="Select Branch"
                    />
                    {errors.branch_id && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.branch_id?.message}
                        </p>
                    )}
                </div>

                {/* Role Selection */}
                <div>
                    <label className="block font-medium text-gray-700">
                        Role<span className="text-red-500">*</span>
                    </label> 
                    <CustomSelect
                        options={roles}
                        value={selectedRoleOption}
                        onChange={(option) => {
                            setSelectedRoleOption(option);
                            setValue("role_id", option?.value, {
                                shouldValidate: true,
                            });
                        }}
                        placeholder="Select Role"
                    />
                    {errors.role_id && (
                        <p className="text-red-600 text-sm mt-1">
                            {errors.role_id?.message}
                        </p>
                    )}
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