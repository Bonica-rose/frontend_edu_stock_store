import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../validation/authSchema";
import { loginUser } from "../../features/auth/authThunks";
import { USERS } from "../../constants/default";
import {
    FaEye,
    FaEyeSlash,
    FaEnvelope,
    FaLock,
} from "react-icons/fa";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    useEffect(() => {        
        // Only initialize once
        if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(USERS));
        }
        if (USERS.length === 1) {
            const user = USERS[0];
            // Pre-fill the form with user data
            reset({
                email: user.email
            });
        }
        // console.log(new Date(new Date()).toLocaleString('en-IN'));
    }, [USERS, reset]);

    const onSubmit = async(formData) => {
        try {
            const result = await dispatch(loginUser(formData)).unwrap();
            console.log("Login Success:", result);
            toast.success("Login successful");
            if (result.user.must_change_password) {
                navigate("/edu/change-password");
            } else {
                navigate("/edu/dashboard");
            }            
        } catch (error) {
            console.log("Login Error:", error);
            toast.error(error);
        }
    };

    

    return (
        <div className="w-full max-w-md bg-blue-950 border border-slate-800 rounded-2xl shadow-2xl p-8">
            {/* Heading */}
            <div className="text-center mb-5">
                <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                <p className="text-slate-400 text-sm">Login to your account</p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                {/* Email */}
                <div>
                    <label className="block text-base font-medium text-slate-300 mb-2">Email</label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email")}
                            className={`w-full bg-slate-100 border placeholder:text-[15px]
                                ${errors.email
                                ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                : "border-blue-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } 
                            text-slate-950 rounded-xl py-2 pl-11 pr-4 outline-none transition`}
                        />
                    </div>

                    {errors.email && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.email.message}
                        </p>
                    )}

                </div>

                {/* Password */}
                <div>
                    <label className="block text-base font-medium text-slate-300 mb-2">Password</label>
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" />
                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Enter your password"
                            {...register("password")}
                            className={`w-full bg-slate-100 border placeholder:text-[15px] ${
                                errors.password
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-blue-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-xl py-2 pl-11 pr-12 outline-none focus:ring-2 focus:ring-blue-400 transition`}
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-950 hover:text-blue-900 transition"
                        >
                            {showPassword ? (
                                <FaEyeSlash />
                            ) : (
                                <FaEye />
                            )}
                        </button>

                    </div>

                    {errors.password && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.password.message}
                        </p>
                    )}

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-200 disabled:bg-slate-400 text-blue-950 
                    font-semibold text-base py-2 rounded-xl transition duration-300"
                >
                    {loading
                        ? (
                            <>
                                <svg className="animate-spin motion-reduce:hidden" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                </svg>
                                "Logging in..."
                            </>
                        )
                        : "Login"}
                </button>
                
            </form>

            {/* Register Link */}
            <p className="text-center text-slate-400 text-sm mt-6">
                Don&apos;t have an account?{" "}
                <Link to="/auth/register" className="text-red-400 hover:text-blue-300 cursor-pointer">
                    Register
                </Link>
            </p>

        </div>
    )
}

export default LoginPage;