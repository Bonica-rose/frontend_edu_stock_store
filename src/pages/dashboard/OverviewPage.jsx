import { useSelector } from "react-redux";

// import MaintenanceStaffDashboard from "./MaintenanceStaffDashboard";
import InventoryStaffDashboard from "./InventoryStaffDashboard";
import SuperAdminDashboard from "./SuperAdminDashboard";
import BranchHeadDashboard from "./BranchHeadDashboard";
// import AuditorDashboard from "./AuditorDashboard";

const OverviewPage = () => {    

    const { user } = useSelector((state) => state.auth);

    if (user.role === "super_admin") {
        return <SuperAdminDashboard />;
    }

    if (user.role === "branch_head") {
        return <BranchHeadDashboard />;
    }

    // if (user.role === "auditor") {
    //     return <AuditorDashboard />;
    // }

    // if (user.role === "maintenance_staff") {
    //     return <MaintenanceStaffDashboard />;
    // }

    return <InventoryStaffDashboard />;
}

export default OverviewPage;