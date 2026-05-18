import { Outlet } from "react-router-dom";

const EduLayout = () => {
    return (
        <div className="flex">
        <aside className="w-64 bg-black text-white min-h-screen p-4">
            Sidebar
        </aside>

        <main className="flex-1 p-6">
            <Outlet />
        </main>
        </div>
    );
}

export default EduLayout;