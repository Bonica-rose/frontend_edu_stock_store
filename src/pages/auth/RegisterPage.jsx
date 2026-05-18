import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation/authSchema";
import { registerUser } from "../../features/auth/authThunks";
import {
    FaEye,
    FaEyeSlash,
    FaEnvelope,
    FaLock,
    FaUser,
    FaUserTag,
    FaCheckCircle,
    FaTimesCircle,
} from "react-icons/fa";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        reset,
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const password = watch("password", "");

        // Password Strength Checks
    const passwordChecks = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[@$!%*?&]/.test(password),
    };

    const passedChecks = Object.values(passwordChecks).filter(Boolean).length;

    // Strength Label
    const getStrength = () => {

        if (passedChecks <= 2)
            return {
                text: "Weak",
                color: "bg-red-500",
            };

        if (passedChecks === 3 || passedChecks === 4)
            return {
                text: "Medium",
                color: "bg-yellow-500",
            };

        return {
            text: "Strong",
            color: "bg-green-500",
        };

    };

    const strength = getStrength();

    const onSubmit = (formData) => {
        dispatch(registerUser(formData));
    };

    useEffect(() => {
        if (isAuthenticated) {
            toast.success("Registration successful");
            navigate("/auth/login");
        }

        if (error) {
            toast.error(error);
        }
    }, [isAuthenticated, error]);

    const PolicyItem = ({ valid, text }) => (
        <div className="flex items-center gap-2 text-sm">

            {valid ? (
                <FaCheckCircle className="text-green-400" />
            ) : (
                <FaTimesCircle className="text-red-400" />
            )}

            <span
                className={
                    valid
                        ? "text-green-300"
                        : "text-slate-400"
                }
            >
                {text}
            </span>

        </div>
    );

    return (
        <div className="w-full max-w-lg bg-blue-950 border border-slate-800 rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-5">
                <h1 className="text-2xl font-bold text-white">Create Account</h1>
                <p className="text-slate-400 text-sm">Secure registration form</p>
            </div>

            {/* Form */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >

                {/* Full Name */}
                <div>
                    <label className="block text-base font-medium text-slate-300 mb-2">Full Name</label>
                    <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" />
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            {...register("fullName")}
                            className={`w-full bg-slate-100 border ${
                                errors.fullName
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-blue-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-xl py-2 pl-11 pr-12 outline-none transition`}
                        />
                    </div>

                    {errors.fullName && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.fullName.message}
                        </p>
                    )}

                </div>

                {/* Username */}
                <div>
                    <label className="block text-base font-medium text-slate-300 mb-2">Username</label>
                    <div className="relative">
                        <FaUserTag className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" />
                        <input
                            type="text"
                            placeholder="Enter username"
                            {...register("username")}
                            className={`w-full bg-slate-100 border ${
                                errors.username
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-blue-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-xl py-2 pl-11 pr-12 outline-none transition`}
                        />
                    </div>

                    {errors.username && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.username.message}
                        </p>
                    )}

                </div>

                {/* Email */}
                <div>
                    <label className="block text-base font-medium text-slate-300 mb-2">Email</label>
                    <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" />
                        <input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email")}
                            className={`w-full bg-slate-100 border ${
                                errors.email
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-blue-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-xl py-2 pl-11 pr-12 outline-none transition`}
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
                            placeholder="Create strong password"
                            {...register("password")}
                            className={`w-full bg-slate-100 border ${
                                errors.password
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-blue-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-xl py-2 pl-11 pr-12 outline-none transition`}
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

                    {/* Password Strength */}
                    {password && (
                        <div className="mt-4 space-y-3">

                            {/* Strength Bar */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-slate-300">Password Strength</span>
                                    <span
                                        className={`text-sm font-semibold ${
                                            strength.text ===
                                            "Weak"
                                                ? "text-red-400"
                                                : strength.text ===
                                                "Medium"
                                                ? "text-yellow-400"
                                                : "text-green-400"
                                        }`}
                                    >
                                        {strength.text}
                                    </span>
                                </div>
                                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${strength.color} transition-all duration-300`}
                                        style={{
                                            width: `${
                                                (passedChecks /
                                                    5) *
                                                100
                                            }%`,
                                        }}
                                    />
                                </div>
                            </div>
                            
                            {/* Password Policy */}
                            <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-2">

                                <PolicyItem
                                    valid={
                                        passwordChecks.length
                                    }
                                    text="Minimum 8 characters"
                                />

                                <PolicyItem
                                    valid={
                                        passwordChecks.uppercase
                                    }
                                    text="At least one uppercase letter"
                                />

                                <PolicyItem
                                    valid={
                                        passwordChecks.lowercase
                                    }
                                    text="At least one lowercase letter"
                                />

                                <PolicyItem
                                    valid={
                                        passwordChecks.number
                                    }
                                    text="At least one number"
                                />

                                <PolicyItem
                                    valid={
                                        passwordChecks.special
                                    }
                                    text="At least one special character(@$!%*?&)"
                                />

                            </div>

                        </div>
                    )}

                    {errors.password && (
                        <p className="text-red-400 text-sm mt-2">
                            {errors.password.message}
                        </p>
                    )}

                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-base font-medium text-slate-300 mb-2">Confirm Password</label>
                    <div className="relative">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-900" />
                        <input
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            placeholder="Confirm password"
                            {...register(
                                "confirmPassword"
                            )}
                            className={`w-full bg-slate-100 border ${
                                errors.confirmPassword
                                    ? "border-red-300 focus:ring-2 focus:ring-opacity-50 focus:ring-red-400"
                                    : "border-blue-400 focus:ring-2 focus:ring-opacity-50 focus:ring-blue-400"
                            } text-slate-950 rounded-xl py-2 pl-11 pr-12 outline-none transition`}
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

                    {errors.confirmPassword && (
                        <p className="text-red-400 text-sm mt-2">
                            {
                                errors
                                    .confirmPassword
                                    .message
                            }
                        </p>
                    )}

                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-200 disabled:bg-slate-400 text-blue-950 
                    font-semibold py-2 rounded-xl transition duration-300"
                >
                    {loading
                        ? "Creating Account..."
                        : "Register"}
                </button>

            </form>

            {/* Login Link */}
            <p className="text-center text-slate-400 text-sm mt-6">
                Already have an account?{" "}
                <Link to="/auth/login" className="text-red-400 hover:text-blue-300 cursor-pointer">
                    Login
                </Link>
            </p>
        </div>
    )
}

export default RegisterPage;
