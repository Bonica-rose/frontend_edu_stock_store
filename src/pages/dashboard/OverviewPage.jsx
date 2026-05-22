import { useSelector } from "react-redux";

import StaffDashboard from "./StaffDashboard";
import SuperAdminDashboard from "./SuperAdminDashboard";
import BranchHeadDashboard from "./BranchHeadDashboard";
import InventoryManagerDashboard from './InventoryManagerDashboard';
import PurchaseManagerDashboard from './PurchaseManagerDashboard'
import AssetManagerDashboard from './AssetManagerDashboard'

const OverviewPage = () => {    

    const { user } = useSelector((state) => state.auth);

    if (user.role.name === "super_admin") {
        return <SuperAdminDashboard />;
    }

    if (user.role.name === "branch_head") {
        return <BranchHeadDashboard />;
    }

    if (user.role.name === "inventory_manager") {
        return <InventoryManagerDashboard />;
    }

    if (user.role.name === "asset_manager") {
        return <AssetManagerDashboard />;
    }

    if (user.role.name === "purchase_manager") {
        return <PurchaseManagerDashboard />;
    }

    return <StaffDashboard />;
}

export default OverviewPage;