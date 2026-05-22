import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserPassword } from "../../features/auth/authThunks";
import PasswordStrength from "../../components/ui/PasswordStrength";
import { logout } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
import { changePasswordSchema } from "../../validation/changePasswordSchema";
import {
    FaEye,
    FaEyeSlash,
    FaLock,
} from "react-icons/fa";

const ChangePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const isForcedPasswordChange = user?.must_change_password;
    console.log(isForcedPasswordChange)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(changePasswordSchema),
    });

    const password = watch("new_password", "");
    

    const onSubmit = async (data) => {
        try {
            // API call here            
            // console.log("Password data:", data);

            const payload = {
                user_id: user.id,
                user_email: user.email,
                current_password: data.current_password,
                new_password: data.new_password,
                password_confirmation: data.confirm_password
            };
            
            const res = await dispatch(changeUserPassword(payload)).unwrap();  
            console.log(res)

            // logout & redirect for first time forced password change
            if (res.flag === 1 && isForcedPasswordChange) {
                dispatch(logout());
                navigate("/auth/login", {
                    replace: true
                });
            }
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* Current Password */}
                <div>
                    <label className="block text-base mb-2">
                        Current Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700" />
                        <input
                            type={
                                showCurrentPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Current password"
                            {...register("current_password")}
                            className={`w-full border placeholder:text-[15px] ${
                                errors.current_password
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-gray-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-lg py-2 pl-11 pr-12 outline-none transition`}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowCurrentPassword(
                                    !showCurrentPassword
                                )
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-950 hover:text-blue-900 transition"
                        >
                            {showCurrentPassword ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )}
                        </button>
                    </div>

                    {errors.current_password && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.current_password.message}
                        </p>
                    )}

                </div>

                {/* New Password */}
                <div>
                    <label className="block text-base mb-2">
                        New Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700" />
                        <input
                            type={
                                showNewPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="New password"
                            {...register("new_password")}
                            className={`w-full border placeholder:text-[15px] ${
                                errors.current_password
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-gray-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-lg py-2 pl-11 pr-12 outline-none transition`}
                        />
                        <button
                            type="button"
                            onClick={() =>
                                setShowNewPassword(
                                    !showNewPassword
                                )
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-950 hover:text-blue-900 transition"
                        >
                            {showNewPassword ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )}
                        </button>
                    </div>

                    <p className="text-red-500 text-sm">
                        {errors.new_password?.message}
                    </p>

                    {/* Password Strength */}
                    <PasswordStrength password={password} outside={false} />
                    
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-base mb-2">
                        Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-700" />
                        <input
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Confirm password"
                            {...register("confirm_password")}
                            className={`w-full border placeholder:text-[15px] ${
                                errors.confirm_password
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-gray-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-lg py-2 pl-11 pr-12 outline-none transition`}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-950 hover:text-blue-900 transition"
                        >
                            {showConfirmPassword ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )}
                        </button>
                    </div>

                    {errors.confirm_password && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.confirm_password.message}
                        </p>
                    )}

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg"
                >
                    {isSubmitting ? "Updating..." : "Update Password"}
                </button>

            </form>
        </div>
    );
};

export default ChangePassword;