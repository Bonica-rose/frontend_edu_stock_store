import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <h1 className="text-6xl font-black mb-6">
                Edu Stock&Store
                </h1>

                <p className="text-xl text-slate-300 max-w-3xl mb-10">
                Inventory & Asset Management System
                for Educational Organizations.
                </p>

                <div className="flex gap-4">
                    <Link to="/auth/login" className="bg-blue-600 px-6 py-3 rounded-xl">
                        Get Started
                    </Link>

                    <button className="border border-slate-700 px-6 py-3 rounded-xl">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;